<template>
  <div class="our-team">
    <div class="container">
      <h1>Our Team</h1>
      <p class="page-intro">
        Meet the dedicated professionals who drive our success. Our diverse team brings together 
        years of experience, innovative thinking, and a shared commitment to excellence.
      </p>

      <div class="leadership-section">
        <h2>Leadership Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-photo">
              <div class="placeholder-photo">👨‍💼</div>
            </div>
            <div class="member-info">
              <h3>Dr. Michael Johnson</h3>
              <p class="member-title">Chief Executive Officer</p>
              <p class="member-description">
                With over 20 years of experience in strategic consulting and business transformation, 
                Dr. Johnson leads MASN's vision and strategic direction.
              </p>
              <div class="member-expertise">
                <span class="expertise-tag">Strategic Planning</span>
                <span class="expertise-tag">Business Transformation</span>
                <span class="expertise-tag">Leadership Development</span>
              </div>
            </div>
          </div>

          <div class="team-member">
            <div class="member-photo">
              <div class="placeholder-photo">👩‍💼</div>
            </div>
            <div class="member-info">
              <h3>Sarah Chen</h3>
              <p class="member-title">Chief Technology Officer</p>
              <p class="member-description">
                A technology visionary with expertise in digital transformation and innovation, 
                Sarah drives our technological advancement and product development initiatives.
              </p>
              <div class="member-expertise">
                <span class="expertise-tag">Digital Transformation</span>
                <span class="expertise-tag">Innovation Strategy</span>
                <span class="expertise-tag">Technology Leadership</span>
              </div>
            </div>
          </div>

          <div class="team-member">
            <div class="member-photo">
              <div class="placeholder-photo">👨‍🔬</div>
            </div>
            <div class="member-info">
              <h3>Prof. David Rodriguez</h3>
              <p class="member-title">Chief Innovation Officer</p>
              <p class="member-description">
                An industry expert in research and development, Prof. Rodriguez leads our 
                innovation initiatives and ensures we stay at the forefront of technological advancement.
              </p>
              <div class="member-expertise">
                <span class="expertise-tag">Research & Development</span>
                <span class="expertise-tag">Innovation Management</span>
                <span class="expertise-tag">Technical Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="departments-section">
        <h2>Our Departments</h2>
        
        <div class="department">
          <h3>Consulting Team</h3>
          <p class="department-description">
            Our consulting experts work closely with clients to understand their unique challenges 
            and develop tailored solutions that drive measurable results.
          </p>
          <div class="department-members">
            <div class="department-member">
              <h4>Emily Watson</h4>
              <p>Senior Consultant - Operations Excellence</p>
            </div>
            <div class="department-member">
              <h4>James Park</h4>
              <p>Principal Consultant - Digital Strategy</p>
            </div>
            <div class="department-member">
              <h4>Maria Garcia</h4>
              <p>Consultant - Organizational Development</p>
            </div>
          </div>
        </div>

        <div class="department">
          <h3>Training & Development</h3>
          <p class="department-description">
            Our training specialists design and deliver world-class programs that enhance skills, 
            knowledge, and capabilities across all organizational levels.
          </p>
          <div class="department-members">
            <div class="department-member">
              <h4>Dr. Robert Kim</h4>
              <p>Training Director - Leadership Programs</p>
            </div>
            <div class="department-member">
              <h4>Lisa Thompson</h4>
              <p>Senior Trainer - Technical Skills</p>
            </div>
            <div class="department-member">
              <h4>Ahmed Hassan</h4>
              <p>Training Coordinator - Corporate Programs</p>
            </div>
          </div>
        </div>

        <div class="department">
          <h3>Technical Solutions</h3>
          <p class="department-description">
            Our technical team ensures seamless implementation and maintenance of our 
            devices and technology solutions, providing ongoing support and optimization.
          </p>
          <div class="department-members">
            <div class="department-member">
              <h4>Alex Turner</h4>
              <p>Lead Engineer - System Integration</p>
            </div>
            <div class="department-member">
              <h4>Priya Patel</h4>
              <p>Solutions Architect - Data Analytics</p>
            </div>
            <div class="department-member">
              <h4>Marco Silva</h4>
              <p>Technical Support Manager</p>
            </div>
          </div>
        </div>

        <div class="department">
          <h3>Research & Innovation</h3>
          <p class="department-description">
            Our research team continuously explores new technologies and methodologies to 
            keep MASN at the cutting edge of industry developments.
          </p>
          <div class="department-members">
            <div class="department-member">
              <h4>Dr. Jennifer Lee</h4>
              <p>Research Scientist - AI & Machine Learning</p>
            </div>
            <div class="department-member">
              <h4>Thomas Brown</h4>
              <p>Innovation Analyst - Emerging Technologies</p>
            </div>
            <div class="department-member">
              <h4>Nina Kowalski</h4>
              <p>Research Coordinator - Market Trends</p>
            </div>
          </div>
        </div>
      </div>

      <div class="team-values">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div class="value">
            <div class="value-icon">🎯</div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, continuously raising the bar for quality and performance.</p>
          </div>
          <div class="value">
            <div class="value-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and foster a collaborative environment that brings out the best in everyone.</p>
          </div>
          <div class="value">
            <div class="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We embrace innovation and continuously seek new ways to solve problems and create value for our clients.</p>
          </div>
          <div class="value">
            <div class="value-icon">🌱</div>
            <h3>Growth</h3>
            <p>We are committed to continuous learning and growth, both for our team members and our organization.</p>
          </div>
        </div>
      </div>

      <div class="join-team-cta">
        <h2>Join Our Team</h2>
        <p>We're always looking for talented individuals who share our passion for excellence and innovation.</p>
        <router-link to="/contact" class="cta-button">Explore Opportunities</router-link>
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