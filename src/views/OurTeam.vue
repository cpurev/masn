<template>
  <div class="our-team">
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
      <h1>{{ heroData?.title || 'Манай баг' }}</h1>
      <p class="page-intro">
        {{ heroData?.description || 'Meet the dedicated professionals who drive our success. Our diverse team brings together years of experience, innovative thinking, and a shared commitment to excellence.' }}
      </p>

      <!-- Team Members -->
      <div class="leadership-section">
        <div class="team-grid">
          <div 
            v-for="(member, index) in teamMembers" 
            :key="member.title"
            class="team-member"
          >
            <div class="member-photo">
              <img 
                v-if="member.img" 
                :src="member.img" 
                :alt="member.title"
                class="member-image"
                @error="handleImageError"
              />
              <div 
                v-else 
                class="placeholder-photo"
              >
                {{ getTeamIcon(index) }}
              </div>
            </div>
            <div class="member-info">
              <h3>{{ member.title }}</h3>
              <p class="member-title">{{ member.subtitle || '' }}</p>
              <p class="member-description">
                {{ member.description || '' }}
              </p>
              <div v-if="member.expertiseList && member.expertiseList.length > 0" class="member-expertise">
                <span 
                  v-for="expertise in member.expertiseList" 
                  :key="expertise"
                  class="expertise-tag"
                >
                  {{ expertise }}
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

// Load OurTeam page data
const { data, loading, error } = useSheetData('OurTeam')

// Debug logging
watch(data, (newData) => {
  console.log('📊 OurTeam page data:', newData)
}, { immediate: true })

// Hero section data (main title and description)
const heroData = computed(() => {
  return data.value.find(item => item.section === 'hero') || {
    title: 'Манай баг',
    description: 'Meet the dedicated professionals who drive our success. Our diverse team brings together years of experience, innovative thinking, and a shared commitment to excellence.'
  }
})

// Team members data
const teamMembers = computed(() => {
  return data.value
    .filter(item => item.section === 'card')
    .sort((a, b) => parseInt(a.order || '0') - parseInt(b.order || '0'))
    .map(member => ({
      ...member,
      expertiseList: member.expertise ? member.expertise.split(',').map((item: string) => item.trim()) : []
    }))
})

// Fallback icons for team members when no image is available
const teamIcons = ['👨‍💼', '👩‍💼', '👨‍🔬', '👩‍🔬', '👨‍💻', '👩‍💻', '👨‍🎓', '👩‍🎓', '🧑‍💼', '🧑‍🔬']

const getTeamIcon = (index: number) => {
  return teamIcons[index % teamIcons.length]
}

// Handle image loading errors
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  // Hide the broken image and show placeholder
  target.style.display = 'none'
  const placeholder = target.parentElement?.querySelector('.placeholder-photo')
  if (placeholder) {
    (placeholder as HTMLElement).style.display = 'flex'
  }
}
</script>

<style scoped>
.our-team {
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

.leadership-section {
  margin-bottom: 4rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  overflow: hidden;
  border: 3px solid #667eea;
  position: relative;
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.placeholder-photo {
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
  border-radius: 50%;
}

.member-info h3 {
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1.3rem;
}

.member-title {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.member-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 0.95rem;
}

.member-expertise {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.expertise-tag {
  background: #f0f2ff;
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 968px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .team-member {
    padding: 1.5rem;
  }
}
</style> 