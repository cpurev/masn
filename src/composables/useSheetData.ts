import { ref, onMounted } from 'vue'
import { loadPageData } from '@/utils/sheets'

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

  // Auto-load when component mounts
  onMounted(() => {
    load()
  })

  return {
    data,
    loading,
    error,
    refresh: load // Allow manual refresh
  }
}