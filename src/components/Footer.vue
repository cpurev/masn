<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container-custom">
      <div class="grid grid-cols-3 items-center">
        <!-- Left grid: Phone number -->
        <div class="text-left">
          <h3 class="text-lg font-semibold"></h3>
          <p class="text-gray-300"></p>
          
          <button 
            class="inline-flex items-center gap-2 text-white rounded-md px-3 py-2 text-sm transition cursor-pointer hover:bg-white/10"
            @click="forceRefresh"
            :disabled="isRefreshing"
          >
            <svg 
              class="w-4 h-4" 
              :class="{ 'animate-spin': isRefreshing }" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              <path d="M21 3v6h-6" />
            </svg>
          </button>
        </div>
        
        
        <!-- Middle grid: Copyright and company name -->
        <div class="text-center">
          <p class="text-sm">MASN ХХК</p>
          <p class="text-sm">© 2025</p>
        </div>
        
        <!-- Right grid: Email + Force Refresh -->
        <div class="text-right flex items-center justify-end gap-3">
          <div class="hidden sm:block text-right">
            <h3 class="text-lg font-semibold">Емайл</h3>
            <p class="text-gray-300">masnmongolia@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isRefreshing = ref(false)

const forceRefresh = async () => {
  try {
    isRefreshing.value = true
    // Clear local cache for all tabs of this spreadsheet
    const keysToRemove: string[] = []
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i)
      if (key && key.startsWith('sheets:')) keysToRemove.push(key)
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k))
    // Hard reload to ensure fresh network fetches and reset memory cache
    window.location.reload()
  } finally {
    // In case reload is blocked, stop spinner after short delay
    setTimeout(() => { isRefreshing.value = false }, 1500)
  }
}
</script>

<style scoped lang="postcss">
</style> 