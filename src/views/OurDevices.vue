<template>
  <div class="our-devices">
    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center items-center min-h-screen">
      <div class="text-gray-600">Loading...</div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="flex justify-center items-center min-h-screen">
      <div class="text-red-600">{{ error }}</div>
    </div>

    <!-- Main content -->
    <div v-else class="container">
      <!-- Hero Section -->
      <h1>{{ heroData.title }}</h1>
      <div class="mongolian-subheader">
        <p>{{ heroData.subtitle }}</p>
      </div>

      <!-- Device Cards (no categories) -->
      <div class="devices-grid">
        <div 
          v-for="(device, index) in deviceCards" 
          :key="device.title"
          class="device-card"
        >
          <div class="device-image">
            <img 
              v-if="device.img" 
              :src="device.img" 
              :alt="device.title"
              class="device-photo"
              @error="handleImageError"
            />
            <div 
              v-else 
              class="placeholder-image"
            >
              {{ getDeviceIcon(index) }}
            </div>
          </div>
          <div class="device-content">
            <h3>{{ device.title }}</h3>
            <p class="device-model">{{ device.subtitle || '' }}</p>
            <p class="device-description">
              {{ device.description || '' }}
            </p>
            <div v-if="device.featuresList && device.featuresList.length > 0" class="device-specs">
              <h4>Key Features:</h4>
              <ul>
                <li 
                  v-for="feature in device.featuresList" 
                  :key="feature"
                >
                  {{ feature }}
                </li>
              </ul>
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

// Load OurDevices page data
const { data, loading, error } = useSheetData('OurDevices')

// Debug logging
watch(data, (newData) => {
  console.log('📊 OurDevices page data:', newData)
}, { immediate: true })

// Hero section data (main title and description)
const heroData = computed(() => {
  return data.value.find(item => item.section === 'hero') || {
    title: 'БАГАЖУУД',
    subtitle: 'Гүйдэл, хүчдэл, эргэлдүүлэх цахилгаан соронзон момент, U, цахилгаан чанар, доргио чичиргээ'
  }
})

// All device cards
const deviceCards = computed(() => {
  return data.value
    .filter(item => item.section === 'card')
    .sort((a, b) => parseInt(a.order || '0') - parseInt(b.order || '0'))
    .map(device => ({
      ...device,
      featuresList: device.description ? device.description.split(',').map((item: string) => item.trim()) : []
    }))
})

// Fallback icons for devices when no image is available
const deviceIcons = [
  '⚡', '🌡️', '🔌', '🔍', '⚙️', '📊', '🔧', '📈', '💻', '🔬',
  '📋', '🛠️', '⚖️', '🔋', '📡', '💡', '🎛️', '📱', '🖥️', '⌚'
]

const getDeviceIcon = (index: number) => {
  return deviceIcons[index % deviceIcons.length]
}

// Handle image loading errors
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  // Hide the broken image and show placeholder
  target.style.display = 'none'
  const placeholder = target.parentElement?.querySelector('.placeholder-image')
  if (placeholder) {
    (placeholder as HTMLElement).style.display = 'flex'
  }
}
</script>

<style scoped>
.our-devices {
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

.mongolian-subheader {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

.devices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.device-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.device-card:hover {
  transform: translateY(-5px);
}

.device-image {
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.device-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-image {
  font-size: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.device-content {
  padding: 1.2rem;
}

.device-content h3 {
  margin-bottom: 0.4rem;
  color: #333;
  font-size: 1.1rem;
  line-height: 1.3;
}

.device-model {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 0.8rem;
  font-size: 0.85rem;
}

.device-description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.device-specs h4 {
  color: #333;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
}

.device-specs ul {
  list-style: none;
  padding: 0;
}

.device-specs li {
  padding: 0.15rem 0;
  color: #555;
  position: relative;
  padding-left: 1rem;
  font-size: 0.8rem;
  line-height: 1.4;
}

.device-specs li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

@media (max-width: 968px) {
  .devices-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .devices-grid {
    grid-template-columns: 1fr;
  }
  
  .device-content {
    padding: 1rem;
  }
}
</style> 