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
export async function loadPageData(pageName: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const gid = SHEET_GIDS[pageName]
    
    if (!gid) {
      console.error(`❌ No GID found for page: ${pageName}`)
      reject(new Error(`No GID found for page: ${pageName}`))
      return
    }

    const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`
    
    console.log(`📡 Loading ${pageName} data...`)
    
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log(`✅ ${pageName} data loaded:`, results.data.length, 'rows')
        resolve(results.data as any[])
      },
      error: (error) => {
        console.error(`❌ Error loading ${pageName}:`, error)
        reject(error)
      }
    })
  })
}

// Simple composable for Vue components
export function useSheetData(pageName: string) {
  const data = ref<any[]>([])
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