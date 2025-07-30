<template>
  <li class="border-b border-gray-100 last:border-b-0">
    <button 
      class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 transition-all duration-300 w-full text-left flex items-center justify-between" 
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
    <!-- Mobile Dropdown Items -->
    <div 
      class="bg-gray-50 transition-all duration-200 overflow-hidden"
      :class="isDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'"
    >
      <router-link 
        v-for="item in dropdownItems" 
        :key="item.path"
        :to="item.path" 
        class="block text-gray-600 hover:text-blue-600 hover:bg-blue-100 font-medium py-3 px-12 transition-all duration-300"
        :class="{ 'text-blue-600 bg-blue-100': $route.path === item.path }"
        @click="$emit('closeMenu')"
      >
        {{ item.text }}
      </router-link>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface DropdownItem {
  path: string
  text: string
}

interface Props {
  buttonText: string
  dropdownItems: DropdownItem[]
}

defineProps<Props>()
defineEmits<{
  closeMenu: []
}>()

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Expose method to close dropdown from parent
defineExpose({
  closeDropdown: () => {
    isDropdownOpen.value = false
  }
})
</script>

<style scoped>
/* No styles needed - all converted to Tailwind classes */
</style> 