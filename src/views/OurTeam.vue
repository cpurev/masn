<template>
  <div class="our-team">
    <div class="container">
      <h1>Манай баг</h1>
      <p class="page-intro">
        Meet the dedicated professionals who drive our success. Our diverse team brings together 
        years of experience, innovative thinking, and a shared commitment to excellence.
      </p>

      <div class="leadership-section">
        <div class="team-grid">
          <div class="team-member">
            <div class="member-photo">
              <img src="/img/ariun.png" alt="Dr.Ариунболор Пүрвээ" class="member-image">
            </div>
            <div class="member-info">
              <h3>Dr.Ариунболор Пүрвээ</h3>
              <p class="member-title"></p>
              <p class="member-description">
                МУ-ын зөвлөх инженер, Техникийн ухааны доктор, 
                Уул уурхйн цахилгаан механик тоног төхөөрөмжийн инженер, үл задлах аргын мэргэжилтэн
              </p>
              <div class="member-expertise">
              </div>
            </div>
          </div>

          <div class="team-member">
            <div class="member-photo">
              <img src="/img/bold.png" alt="Болд Энхболд" class="member-image">
            </div>
            <div class="member-info">
              <h3>Болд Энхболд </h3>
              <p class="member-title"></p>
              <p class="member-description">
                МУ-ын зөвлөх инженер, Техникийн ухааны доктор, 
                Уул уурхйн цахилгаан механик тоног төхөөрөмжийн инженер, үл задлах аргын мэргэжилтэн
              </p>
              <div class="member-expertise">
              </div>
            </div>
          </div>

          <div class="team-member">
            <div class="member-photo">
              <img src="/img/nikita.png" alt="Никита Абрамов" class="member-image">
            </div>
            <div class="member-info">
              <h3>Никита Абрамов</h3>
              <p class="member-title"></p>
              <p class="member-description">
                Техникийн ухааны магистр,
                Өндөр хүчдэлий инженер,
                автоматжуулалтын мэргэжилтэн
              </p>
              <div class="member-expertise">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Our Team page component
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

.leadership-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
}

.member-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: left;
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

.departments-section {
  margin-bottom: 4rem;
}

.departments-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
}

.department {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.department h3 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.5rem;
}

.department-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.department-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.department-member {
  background: white;
  padding: 1rem;
  border-radius: 4px;
}

.department-member h4 {
  margin-bottom: 0.3rem;
  color: #333;
  font-size: 1rem;
}

.department-member p {
  color: #667eea;
  font-size: 0.9rem;
}

.team-values {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 4rem;
}

.team-values h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value h3 {
  margin-bottom: 1rem;
  color: #333;
}

.value p {
  color: #666;
  line-height: 1.5;
}

.join-team-cta {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 8px;
}

.join-team-cta h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.join-team-cta p {
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
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .department-members {
    grid-template-columns: 1fr;
  }
}
</style> 