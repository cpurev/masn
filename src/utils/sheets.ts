import Papa from 'papaparse'
import { ref } from 'vue'

// Configuration
const SPREADSHEET_ID = '1kzYpDdjHTtMfIcw1TWEyo8Nqpp1uOdIEJnDG7OQXVtc'

// Map each website page to its corresponding Google Sheet tab GID
const SHEET_GIDS: { [key: string]: string } = {
  'Home': '0',
  'Service': '1912088439',
  'Training': '2055051890',
  'Consultancy': '647289568',
  'Contact': '55590266',
  'OurDevices': '1106353219',
  'OurTeam': '697181711',
  'OurWork': '958730276'
}

// Simple function to load data for a specific page
type Row = Record<string, string>
type FetchPolicy = 'cache-first' | 'network-first' | 'no-cache' | 'cache-only'
interface LoadOptions {
  fetchPolicy?: FetchPolicy
  ttlMs?: number
}

const inFlight: Record<string, Promise<Row[]> | undefined> = {}
const memoryCache: Record<string, { ts: number; data: Row[] }> = {}
const DEFAULT_TTL_MS = 15 * 60 * 1000

function getLocalCache(key: string): { ts: number; data: Row[] } | null {
  try {
    const raw = localStorage.getItem(`sheets:${key}`)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function setLocalCache(key: string, value: { ts: number; data: Row[] }) {
  try {
    localStorage.setItem(`sheets:${key}`, JSON.stringify(value))
  } catch {}
}

function isFresh(entry: { ts: number }, ttlMs: number) {
  return Date.now() - entry.ts < ttlMs
}

async function fetchCsv(csvUrl: string): Promise<Row[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data as Row[])
      },
      error: (error) => {
        reject(error)
      }
    })
  })
}

export async function loadPageData(pageName: string, options: LoadOptions = {}): Promise<Row[]> {
  const gid = SHEET_GIDS[pageName]
  if (!gid) {
    console.error(`❌ No GID found for page: ${pageName}`)
    throw new Error(`No GID found for page: ${pageName}`)
  }

  const fetchPolicy: FetchPolicy = options.fetchPolicy || 'cache-first'
  const ttlMs = options.ttlMs ?? DEFAULT_TTL_MS
  const cacheKey = `${SPREADSHEET_ID}:${gid}`
  const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`

  // 1) Try memory/local cache depending on policy
  const checkCaches = (): Row[] | null => {
    const mem = memoryCache[cacheKey]
    if (mem && isFresh(mem, ttlMs)) return mem.data
    const local = getLocalCache(cacheKey)
    if (local && isFresh(local, ttlMs)) {
      memoryCache[cacheKey] = local
      return local.data
    }
    return null
  }

  if (fetchPolicy === 'cache-only') {
    const cached = checkCaches()
    return cached ?? []
  }

  if (fetchPolicy === 'cache-first') {
    const cached = checkCaches()
    if (cached) return cached
  }

  // 2) Deduplicate in-flight network requests per key
  const existing = inFlight[cacheKey]
  if (existing) return existing

  console.log(`📡 Loading ${pageName} data...`)
  const promise: Promise<Row[]> = fetchCsv(csvUrl)
    .then((data) => {
      const entry = { ts: Date.now(), data }
      memoryCache[cacheKey] = entry
      setLocalCache(cacheKey, entry)
      return data
    })
    .finally(() => {
      delete inFlight[cacheKey]
    })

  inFlight[cacheKey] = promise
  return promise
}

// Simple composable for Vue components
export function useSheetData(pageName: string) {
  const data = ref<Row[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async () => {
    try {
      loading.value = true
      error.value = null
      data.value = await loadPageData(pageName)
    } catch (err) {
      error.value = `Failed to load ${pageName} data`
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    load
  }
}

// Test function for individual pages
export async function testPageData(pageName: string) {
  console.log(`🔍 Testing ${pageName} data...`)
  
  try {
    const data = await loadPageData(pageName)
    console.log(`📊 ${pageName} columns:`, Object.keys(data[0] || {}))
    console.log(`📄 ${pageName} data:`, data)
    return data
  } catch (error) {
    console.error(`❌ Test failed for ${pageName}:`, error)
    return []
  }
} 