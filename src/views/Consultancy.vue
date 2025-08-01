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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="(service, index) in consultancyCards" 
            :key="service.title"
            class="card p-8 group"
          >
            <div class="text-5xl mb-6">{{ getConsultancyIcon(index) }}</div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary-500 transition-colors duration-300">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ service.subtitle || '' }}
            </p>
            <ul class="space-y-2">
              <li 
                v-for="item in service.descriptionList" 
                :key="item"
                class="flex items-start gap-3"
              >
                <span class="text-primary-500 font-bold">▸</span>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useSheetData } from '@/composables/useSheetData'

// Load Consultancy page data
const { data, loading, error } = useSheetData('Consultancy')

// Debug logging
watch(data, (newData) => {
  console.log('📊 Consultancy page data:', newData)
}, { immediate: true })

// Hero section data (main title and description)
const heroData = computed(() => {
  return data.value.find(item => item.section === 'hero') || {
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
const consultancyCards = computed(() => {
  const cards = data.value
    .filter(item => item.section === 'card')
    .sort((a, b) => parseInt(a.order || '0') - parseInt(b.order || '0'))
  
  // Process description field - split comma-separated values into arrays
  return cards.map(card => ({
    ...card,
    descriptionList: card.description ? card.description.split(',').map((item: string) => item.trim()) : []
  }))
})

// Fallback icons for consultancy cards
const consultancyIcons = ['🔌', '☀️', '⚡', '🛡️', '💡', '🔧', '📊', '⚙️']

const getConsultancyIcon = (index: number) => {
  return consultancyIcons[index] || '💼'
}
</script>

<style scoped>
/* Keep existing styles */
</style> 