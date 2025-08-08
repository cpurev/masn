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
        {{ heroData.title || 'Сургалт' }}
      </h1>
      <p class="text-center max-w-4xl mx-auto mb-16 text-lg lg:text-xl text-gray-600">
        {{ heroData.description || 'Мэргэжлийн чадварыг нэмэгдүүлж, шинэ технологийг эзэмшихэд тусламж үзүүлэх цогц сургалтын хөтөлбөрүүдээр таныг хангана. Манай сургалтууд нь практик туршлага болон онолын мэдлэгийг хослуулсан байдаг.' }}
      </p>

      <!-- Training Cards -->
      <div class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="(course, index) in trainingCards" 
            :key="course.title"
            class="card p-8 group"
          >
            <div v-if="course.img && course.img.trim()" class="mb-6">
              <img 
                :src="course.img" 
                :alt="course.title" 
                class="w-full h-48 object-cover rounded-md" 
                @error="($event.target as HTMLImageElement).style.display='none'"
              />
            </div>
            <div v-else class="text-5xl mb-6">{{ getTrainingIcon(index) }}</div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary-500 transition-colors duration-300">
              {{ course.title }}
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ course.subtitle || '' }}
            </p>
            <ul class="space-y-2">
              <li 
                v-for="item in course.descriptionList" 
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
import { processStandardPageData } from '@/utils/standardPageData'

// Load Training page data
const { data, loading, error } = useSheetData('Training')

// Debug logging
watch(data, (newData) => {
  console.log('📊 Training page data:', newData)
}, { immediate: true })

const processed = computed(() => processStandardPageData(data.value))

// Hero section data (main title and description)
const heroData = computed(() => {
  return processed.value.hero || {
    title: 'Сургалт',
    description: 'Мэргэжлийн чадварыг нэмэгдүүлж, шинэ технологийг эзэмшихэд тусламж үзүүлэх цогц сургалтын хөтөлбөрүүдээр таныг хангана. Манай сургалтууд нь практик туршлага болон онолын мэдлэгийг хослуулсан байдаг.'
  }
})

// Training cards data
const trainingCards = computed(() => processed.value.cards)

// Fallback icons for training cards
const trainingIcons = ['🔬', '⚡', '💻', '🔧', '🏭', '📐', '⚡', '🎓']

const getTrainingIcon = (index: number) => {
  return trainingIcons[index] || '📚'
}

</script>

<style scoped>
.training {
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

.training-categories {
  margin-bottom: 4rem;
}

.category {
  margin-bottom: 3rem;
}

.category h2 {
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.8rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.course-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-3px);
}

.course-card h3 {
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1.3rem;
}

.course-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.duration, .level {
  background: #f0f2ff;
  color: #667eea;
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.course-card p {
  margin-bottom: 1rem;
  color: #666;
  line-height: 1.5;
}

.course-card ul {
  list-style: none;
  padding: 0;
}

.course-card li {
  padding: 0.2rem 0;
  color: #555;
  position: relative;
  padding-left: 1rem;
  font-size: 0.9rem;
}

.course-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.training-benefits {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 3rem;
}

.training-benefits h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit {
  text-align: center;
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.benefit h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.benefit p {
  color: #666;
  line-height: 1.5;
}

.enrollment-cta {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 8px;
}

.enrollment-cta h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.enrollment-cta p {
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

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
  
  .course-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style> 