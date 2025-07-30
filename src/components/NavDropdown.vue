<template>
  <li class="relative">
    <button 
      class="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md transition-all duration-300 relative flex items-center gap-1"
      @click="toggleDropdown"
    >
      {{ buttonText }}
      <svg 
        class="w-4 h-4 transition-transform duration-200" 
        :class="{ 'rotate-180': isDropdownOpen }" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <!-- Desktop Dropdown Menu -->
    <div 
      class="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200 z-50"
      :class="isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'"
    >
      <router-link 
        v-for="item in dropdownItems" 
        :key="item.path"
        :to="item.path" 
        class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 transition-all duration-300"
        :class="{ 'text-blue-600 bg-blue-50': $route.path === item.path }"
        @click="closeDropdown"
      >
        {{ item.text }}
      </router-link>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface DropdownItem {
  path: string
  text: string
}

interface Props {
  buttonText: string
  dropdownItems: DropdownItem[]
}

defineProps<Props>()

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const dropdown = target.closest('.relative')
  if (!dropdown || !dropdown.contains(target)) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* No styles needed - all converted to Tailwind classes */
</style> 