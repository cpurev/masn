<template>
  <div class="our-work">
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
      <h1>{{ heroData.title || 'Гүйцэтгэсэн ажлууд, төслүүд' }}</h1>
      <p class="page-intro">
        {{ heroData.description || 'Манай багийн гүйцэтгэсэн техник инженерийн төслүүд, судалгааны ажлууд болон үйлчлүүлэгчдэдээ хүргэсэн үр дүнгүүдтэй танилцаарай.' }}
      </p>

      <!-- Projects Section -->
      <div class="project-categories">
        <h2>{{ projectsHeading.title || 'Гол төслүүд' }}</h2>
        
        <div class="projects-grid">
          <div 
            v-for="(project, index) in projectCards" 
            :key="project.title"
            class="project-card"
          >
            <div class="project-image">
              <img 
                v-if="project.img && project.img.trim()" 
                :src="project.img" 
                :alt="project.title"
                class="project-img"
              />
              <div v-else class="placeholder-image">{{ getProjectIcon(index) }}</div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p class="project-description">
                {{ project.subtitle || '' }}
              </p>
              <div class="project-tags">
                <span 
                  v-for="tag in project.tagsList" 
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
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

// Load OurWork page data
const { data, loading, error } = useSheetData('OurWork')

// Debug logging
watch(data, (newData) => {
  console.log('📊 OurWork page data:', newData)
}, { immediate: true })

// Hero section data (main title and description)
const heroData = computed(() => {
  return data.value.find(item => item.section === 'hero') || {
    title: 'Гүйцэтгэсэн ажлууд, төслүүд',
    description: 'Манай багийн гүйцэтгэсэн техник инженерийн төслүүд, судалгааны ажлууд болон үйлчлүүлэгчдэдээ хүргэсэн үр дүнгүүдтэй танилцаарай.'
  }
})

// Projects heading
const projectsHeading = computed(() => {
  return data.value.find(item => item.section === 'projects' && item.type === 'heading') || {
    title: 'Гол төслүүд'
  }
})

// Project cards data
const projectCards = computed(() => {
  const cards = data.value
    .filter(item => item.section === 'card')
    .sort((a, b) => parseInt(a.order || '0') - parseInt(b.order || '0'))
  
  // Process description field - split comma-separated values into tag arrays
  return cards.map(card => ({
    ...card,
    tagsList: card.description ? card.description.split(',').map((item: string) => item.trim()) : []
  }))
})

// Fallback icons for project cards
const projectIcons = ['⚙️', '⚡', '💧', '🔧', '📊', '📈', '🔍', '🏗️', '💡', '🔬', '📋', '⚙️']

const getProjectIcon = (index: number) => {
  return projectIcons[index] || '📋'
}
</script>

<style scoped>
.our-work {
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

.project-categories h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.placeholder-image {
  font-size: 4rem;
  color: white;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1.3rem;
}

.project-client {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f2ff;
  color: #667eea;
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.case-study-highlight {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 4rem;
}

.case-study-highlight h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.case-study-content h3 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.5rem;
}

.case-study-content p {
  margin-bottom: 1rem;
  color: #666;
  line-height: 1.6;
}

.case-study-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.case-study-content li {
  color: #555;
  margin-bottom: 0.5rem;
}

.case-study-quote {
  background: white;
  padding: 2rem;
  border-left: 4px solid #667eea;
  margin-top: 2rem;
  border-radius: 4px;
}

.case-study-quote blockquote {
  font-style: italic;
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.case-study-quote cite {
  color: #667eea;
  font-weight: 500;
}

.industries-served {
  text-align: center;
  margin-bottom: 4rem;
}

.industries-served h2 {
  margin-bottom: 2rem;
  color: #333;
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.industry {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #333;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.industry:hover {
  transform: translateY(-2px);
}

.work-cta {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 8px;
}

.work-cta h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.work-cta p {
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
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 