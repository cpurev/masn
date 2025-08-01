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
          class="card p-8 group"
        >
          <div class="text-5xl mb-6">{{ getServiceIcon(index) }}</div>
          <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary-500 transition-colors duration-300">
            {{ service.title }}
          </h3>
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

// Load Service page data
const { data, loading, error } = useSheetData('Service')

// Debug logging
watch(data, (newData) => {
  console.log('📊 Service page data:', newData)
}, { immediate: true })

// Hero section data (main title and subtitle)
const heroData = computed(() => {
  return data.value.find(item => item.section === 'hero') || {
    title: 'Үйлчилгээ',
    description: 'Бүх төрлийн оношлогоо, техникийн байдлыг үнэлгээ болон автоматжуулалтын шийдэлүүд'
  }
})

// Service cards data
const serviceCards = computed(() => {
  const cards = data.value
    .filter(item => item.section === 'card')
    .sort((a, b) => parseInt(a.order || '0') - parseInt(b.order || '0'))
  
  // Process description field - split comma-separated values into arrays
  return cards.map(card => ({
    ...card,
    descriptionList: card.description ? card.description.split(',').map((item: string) => item.trim()) : []
  }))
})

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
</style> 