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
        {{ heroData.title || 'Үйлчилгээ' }}
      </h1>
      <p class="text-center max-w-4xl mx-auto mb-12 text-lg lg:text-xl text-gray-600">
        {{ heroData.description || 'Бүх төрлийн оношлогоо, техникийн байдлыг үнэлгээ болон автоматжуулалтын шийдэлүүд' }}
      </p>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(service, index) in serviceCards" 
          :key="service.title"
          class="service-card group"
        >
          <!-- Image Background with Title Overlay -->
          <div 
            class="service-hero"
            :style="service.img && service.img.trim() ? { backgroundImage: `url(${service.img})` } : {}"
            :class="{ 'has-image': service.img && service.img.trim() }"
          >
            <div v-if="!service.img || !service.img.trim()" class="service-icon">
              {{ getServiceIcon(index) }}
            </div>
            <div class="service-overlay">
              <h3 class="service-title">{{ service.title }}</h3>
            </div>
          </div>
          
          <!-- Content Below Image -->
          <div class="service-content">
            <p class="text-gray-600 mb-6 leading-relaxed">{{ service.subtitle || '' }}</p>
            <ul class="space-y-2">
              <li 
                v-for="item in service.descriptionList" 
                :key="item"
                class="flex items-start gap-3"
              >
                <span class="text-primary-500 font-bold">✓</span>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="gradient-bg text-white rounded-xl p-12 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">Холбоо барих</h2>
        <p class="text-xl mb-8 opacity-90"></p>
        <router-link to="/contact" class="btn-secondary">Холбоо барих</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useSheetData } from '@/composables/useSheetData'
import { processStandardPageData } from '@/utils/standardPageData'

// Load Service page data
const { data, loading, error } = useSheetData('Service')

// Debug logging
watch(data, (newData) => {
  console.log('📊 Service page data:', newData)
}, { immediate: true })

// Standardized processing
const processed = computed(() => processStandardPageData(data.value))

// Hero section data (main title and subtitle)
const heroData = computed(() => {
  return processed.value.hero || {
    title: 'Үйлчилгээ',
    description: 'Бүх төрлийн оношлогоо, техникийн байдлыг үнэлгээ болон автоматжуулалтын шийдэлүүд'
  }
})

// Service cards data
const serviceCards = computed(() => processed.value.cards)

// Fallback icons for service cards
const serviceIcons = ['💡', '📊', '🔧', '⚙️', '🔬', '🛠️']

const getServiceIcon = (index: number) => {
  return serviceIcons[index] || '🔧'
}
</script>

<style scoped>
.service {
  padding: 60px 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #333;
}

.page-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-item {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-item h3 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.4rem;
}

.service-item p {
  margin-bottom: 1.5rem;
  color: #666;
  line-height: 1.6;
}

.service-item ul {
  list-style: none;
  padding: 0;
}

.service-item li {
  padding: 0.3rem 0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
}

.service-item li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 8px;
}

.cta-section h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.cta-section p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.service-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-hero {
  height: 200px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-hero.has-image {
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: overlay;
}

.service-hero:not(.has-image) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.service-icon {
  font-size: 4rem;
  color: white;
  z-index: 2;
}

.service-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 2rem 1.5rem 1.5rem;
  z-index: 2;
}

.service-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.service-content {
  padding: 2rem;
}
</style> 