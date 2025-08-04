<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
      <div class="w-full px-4 flex items-center justify-between h-24">
        <!-- Logo Section -->
        <div class="flex items-center flex-shrink-0 w-1/2 lg:w-auto lg:min-w-96">
          <router-link to="/" class="flex items-center gap-4 text-decoration-none">
            <img src="/img/logo.jpg" alt="MASN Logo" class="w-32 h-16 rounded-lg object-contain max-[480px]:w-12 max-[480px]:h-12" />
            <!-- Full name for very large screens only -->
            <span class="hidden 2xl:block text-lg font-bold text-gray-800 tracking-wide whitespace-nowrap">Machine Advanced Solutions Network</span>
            <!-- Abbreviated name for medium to large screens -->
            <span class="hidden lg:block 2xl:hidden text-xl font-bold text-gray-800 tracking-wide whitespace-nowrap max-[480px]:text-xl">MASN</span>
            <!-- Hidden on small screens to save space -->
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex">
          <ul class="flex items-center gap-4 max-[480px]:gap-3">
            <li>
              <router-link 
                to="/" 
                class="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md transition-all duration-300 relative nav-link-with-indicator"
                :class="{ 'text-blue-600': $route.path === '/' }"
              >
                Нүүр
              </router-link>
            </li>
            <li>
              <router-link 
                to="/service" 
                class="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md transition-all duration-300 relative nav-link-with-indicator"
                :class="{ 'text-blue-600': $route.path === '/service' }"
              >
                Үйлчилгээ
              </router-link>
            </li>
            <li>
              <router-link 
                to="/training" 
                class="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md transition-all duration-300 relative nav-link-with-indicator"
                :class="{ 'text-blue-600': $route.path === '/training' }"
              >
                Сургалт
              </router-link>
            </li>
            <li>
              <router-link 
                to="/consultancy" 
                class="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md transition-all duration-300 relative nav-link-with-indicator"
                :class="{ 'text-blue-600': $route.path === '/consultancy' }"
              >
                Зөвлөх үйлчилгээ
              </router-link>
            </li>
            <!-- Desktop Dropdown Component -->
            <NavDropdown 
              button-text="Бидний тухай"
              :dropdown-items="aboutUsItems"
            />
            <li class="ml-4">
              <router-link to="/contact" class="btn-primary whitespace-nowrap">Холбоо барих</router-link>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="lg:hidden flex flex-col w-8 h-6 relative cursor-pointer"
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
        >
          <span class="w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 absolute top-0"></span>
          <span class="w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 absolute top-1/2 transform -translate-y-1/2"></span>
          <span class="w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 absolute bottom-0"></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav 
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300"
        :class="isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'"
      >
        <ul class="py-4">
          <li class="border-b border-gray-100 last:border-b-0">
            <router-link 
              to="/" 
              class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 transition-all duration-300"
              :class="{ 'text-blue-600 bg-blue-50': $route.path === '/' }"
              @click="closeMobileMenu"
            >
              Нүүр
            </router-link>
          </li>
          <li class="border-b border-gray-100 last:border-b-0">
            <router-link 
              to="/service" 
              class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 transition-all duration-300"
              :class="{ 'text-blue-600 bg-blue-50': $route.path === '/service' }"
              @click="closeMobileMenu"
            >
              Үйлчилгээ
            </router-link>
          </li>
          <li class="border-b border-gray-100 last:border-b-0">
            <router-link 
              to="/training" 
              class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 transition-all duration-300"
              :class="{ 'text-blue-600 bg-blue-50': $route.path === '/training' }"
              @click="closeMobileMenu"
            >
              Сургалт
            </router-link>
          </li>
          <li class="border-b border-gray-100 last:border-b-0">
            <router-link 
              to="/consultancy" 
              class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 transition-all duration-300"
              :class="{ 'text-blue-600 bg-blue-50': $route.path === '/consultancy' }"
              @click="closeMobileMenu"
            >
              Зөвлөх үйлчилгээ
            </router-link>
          </li>
          <!-- Mobile Dropdown Component -->
          <MobileNavDropdown 
            ref="mobileDropdownRef"
            button-text="Бидний тухай"
            :dropdown-items="aboutUsItems"
            @close-menu="closeMobileMenu"
          />
          <li class="border-b border-gray-100 last:border-b-0">
            <router-link 
              to="/contact" 
              class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 transition-all duration-300"
              :class="{ 'text-blue-600 bg-blue-50': $route.path === '/contact' }"
              @click="closeMobileMenu"
            >
              Холбоо барих
            </router-link>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavDropdown from './NavDropdown.vue'
import MobileNavDropdown from './MobileNavDropdown.vue'

const isMobileMenuOpen = ref(false)
const mobileDropdownRef = ref()

// Dropdown items data
const aboutUsItems = [
  { path: '/our-work', text: 'Бидний ажлууд' },
  { path: '/our-devices', text: 'Бидний төхөөрөмж' },
  { path: '/our-team', text: 'Манай баг' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Close mobile dropdown when mobile menu is toggled
  if (!isMobileMenuOpen.value && mobileDropdownRef.value) {
    mobileDropdownRef.value.closeDropdown()
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  // Close mobile dropdown when menu is closed
  if (mobileDropdownRef.value) {
    mobileDropdownRef.value.closeDropdown()
  }
}
</script>

<style scoped lang="postcss">
/* Active indicator for desktop nav links */
.nav-link-with-indicator.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background-color: #2563eb;
  border-radius: 9999px;
}

/* Mobile menu button animation */
button.active span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

button.active span:nth-child(2) {
  opacity: 0;
}

button.active span:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}
</style> 