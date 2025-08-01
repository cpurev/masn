<template>
  <div class="min-h-screen">
    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center items-center min-h-screen">
      <div class="text-gray-600">Loading...</div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="flex justify-center items-center min-h-screen">
      <div class="text-red-600">{{ error }}</div>
    </div>

    <!-- Main content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="hero-section py-24 relative overflow-hidden">
        <div class="container-custom relative z-10">
          <div class="max-w-5xl mx-auto">
            <!-- Main title area -->
            <div class="text-center mb-16">
              <h1 class="text-6xl lg:text-7xl font-light text-gray-900 mb-4 tracking-tight">
                {{ heroData.title }}
              </h1>
              <p class="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                {{ heroData.subtitle }}
              </p>
            </div>
            
            <!-- Services grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
              <div 
                v-for="service in heroServices" 
                :key="service.title"
                class="text-center"
              >
                <div class="text-blue-600 font-semibold text-sm mb-2">{{ service.title }}</div>
                <div class="text-gray-600 text-sm leading-relaxed">{{ service.subtitle }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Introduction Section -->
      <section class="py-20 bg-gray-50">
        <div class="container-custom">
          <template v-for="item in introData" :key="item.title || item.description">
            <h2 
              v-if="item.type === 'heading'" 
              class="text-3xl lg:text-4xl font-light text-center mb-12 text-gray-800"
            >
              {{ item.title }}
            </h2>
            <div 
              v-else-if="item.type === 'content'" 
              class="max-w-4xl mx-auto"
            >
              <p class="text-lg text-gray-600 leading-relaxed text-center">
                {{ item.description }}
              </p>
            </div>
          </template>
        </div>
      </section>

      <!-- Quick Services Overview -->
      <section class="py-20">
        <div class="container-custom">
          <h2 class="text-3xl lg:text-4xl font-light text-center mb-16 text-gray-800">
            {{ servicesHeading.title || 'What We Offer' }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              v-for="service in servicesData" 
              :key="service.title"
              class="card p-8 text-center group"
            >
              <h3 class="text-lg font-medium mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useSheetData } from '@/composables/useSheetData'

// Load only Home page data when this component mounts
const { data, loading, error } = useSheetData('Home')
console.log('data', data)
watch(data, (newData) => {
  console.log('📊 Google Sheets Raw Data:', newData)
}, { immediate: true })

// Process the data (you can customize this based on your sheet structure)
const heroData = computed(() => {
  return data.value.find(item => item.section === 'hero' && item.type === 'main') || {
    title: 'MASN',
    subtitle: 'Mongolian Advanced Solutions Network'
  }
})

const heroServices = computed(() => {
  return data.value
    .filter(item => item.section === 'hero' && item.type === 'service')
    .sort((a, b) => parseInt(a.order) - parseInt(b.order))
})

const introData = computed(() => {
  return data.value.filter(item => item.section === 'intro')
    .sort((a, b) => parseInt(a.order) - parseInt(b.order))
})

const servicesData = computed(() => {
  return data.value
    .filter(item => item.section === 'services' && item.type === 'card')
    .sort((a, b) => parseInt(a.order) - parseInt(b.order))
})

// Add this missing computed property:
const servicesHeading = computed(() => {
  return data.value.find(item => item.section === 'services' && item.type === 'heading') || {
    title: 'What We Offer'
  }
})
</script>

<style scoped>
.hero-section {
  background-color: #fefce8;
}

.home {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.introduction {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.services-overview {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.intro-content p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card h3 {
  margin-bottom: 1rem;
  color: #333;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #333;
}
</style> 