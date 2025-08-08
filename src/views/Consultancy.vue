<template>
  <div class="py-16 min-h-screen">
    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center items-center min-h-screen">
      <div class="text-gray-600">Loading...</div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="flex justify-center items-center min-h-screen">
      <div class="text-red-600">{{ error }}</div>
    </div>

    <!-- Main content -->
    <div v-else class="container-custom">
      <!-- Hero Section -->
      <h1 class="text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-800">
        {{ heroData.title || 'Зөвлөх үйлчилгээ' }}
      </h1>
      <p class="text-center max-w-4xl mx-auto mb-16 text-lg lg:text-xl text-gray-600">
        {{ heroData.description || 'Манай техникийн зөвлөх үйлчилгээ нь таны компанийн хэрэгцээнд тохирсон цахилгаан болон автоматжуулалтын шийдлүүдийг санал болгож, техникийн асуудлуудад мэргэжлийн дэмжлэг үзүүлнэ.' }}
      </p>

      <!-- Services Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
          {{ servicesHeading.title || 'Манай мэргэжлийн чиглэлүүд' }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(service, index) in consultancyCards" 
            :key="service.title"
            class="card p-0 overflow-hidden group"
          >
            <!-- Image header with overlay design -->
            <div class="relative h-56 bg-gray-100">
              <div
                v-if="service.img && service.img.trim()"
                class="absolute inset-0"
                :style="{ backgroundImage: `url(${service.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
              />
              <div v-else class="absolute inset-0 flex items-center justify-center text-6xl">
                {{ getConsultancyIcon(index) }}
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
              <div class="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 class="text-lg font-semibold">{{ service.title }}</h3>
              </div>
            </div>

            <!-- Content body (dropdown) -->
            <div class="p-4">
              <p v-if="service.subtitle && service.subtitle.trim()" class="text-gray-600 mb-3 text-sm lg:text-base">
                {{ service.subtitle }}
              </p>
              <details class="group/details">
                <summary class="list-none flex items-center justify-between gap-2 cursor-pointer select-none py-2 px-3 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium">
                  <span>Дэлгэрэнгүй</span>
                  <span class="transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <ul class="mt-3 space-y-2 pl-1">
                  <li 
                    v-for="item in service.descriptionList" 
                    :key="item"
                    class="flex items-start gap-3 text-gray-700 text-sm leading-relaxed"
                  >
                    <span class="text-primary-600 mt-1">▸</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useSheetData } from '@/composables/useSheetData'
import { processStandardPageData } from '@/utils/standardPageData'

// Load Consultancy page data
const { data, loading, error } = useSheetData('Consultancy')

// Debug logging
watch(data, (newData) => {
  console.log('📊 Consultancy page data:', newData)
}, { immediate: true })

const processed = computed(() => processStandardPageData(data.value))

// Hero section data (main title and description)
const heroData = computed(() => {
  return processed.value.hero || {
    title: 'Зөвлөх үйлчилгээ',
    description: 'Манай техникийн зөвлөх үйлчилгээ нь таны компанийн хэрэгцээнд тохирсон цахилгаан болон автоматжуулалтын шийдлүүдийг санал болгож, техникийн асуудлуудад мэргэжлийн дэмжлэг үзүүлнэ.'
  }
})

// Services heading
const servicesHeading = computed(() => {
  return data.value.find(item => item.section === 'services' && item.type === 'heading') || {
    title: 'Манай мэргэжлийн чиглэлүүд'
  }
})

// Consultancy cards data
const consultancyCards = computed(() => processed.value.cards)

// Fallback icons for consultancy cards
const consultancyIcons = ['🔌', '☀️', '⚡', '🛡️', '💡', '🔧', '📊', '⚙️']

const getConsultancyIcon = (index: number) => {
  return consultancyIcons[index] || '💼'
}
</script>

<style scoped>
/* Keep existing styles */
</style> 