<template>
  <div class="our-work">
    <div class="container">
      <h1>Our Work</h1>
      <p class="page-intro">
        Explore our portfolio of successful projects and case studies that demonstrate our expertise 
        and the value we deliver to our clients across various industries.
      </p>

      <div class="project-categories">
        <h2>Featured Projects</h2>
        
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <div class="placeholder-image">📊</div>
            </div>
            <div class="project-content">
              <h3>Digital Transformation Initiative</h3>
              <p class="project-client">Fortune 500 Manufacturing Company</p>
              <p class="project-description">
                Led a comprehensive digital transformation that resulted in 40% improvement in operational efficiency 
                and $2M annual cost savings through process automation and data analytics implementation.
              </p>
              <div class="project-tags">
                <span class="tag">Digital Transformation</span>
                <span class="tag">Process Optimization</span>
                <span class="tag">Data Analytics</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <div class="placeholder-image">🎯</div>
            </div>
            <div class="project-content">
              <h3>Strategic Market Expansion</h3>
              <p class="project-client">Technology Startup</p>
              <p class="project-description">
                Developed and executed market entry strategy for European expansion, resulting in successful 
                launch in 5 countries and 300% revenue growth within 18 months.
              </p>
              <div class="project-tags">
                <span class="tag">Market Strategy</span>
                <span class="tag">Business Development</span>
                <span class="tag">International Expansion</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <div class="placeholder-image">👥</div>
            </div>
            <div class="project-content">
              <h3>Leadership Development Program</h3>
              <p class="project-client">Healthcare Organization</p>
              <p class="project-description">
                Designed and delivered a comprehensive leadership development program for 200+ managers, 
                improving employee engagement by 35% and reducing turnover by 25%.
              </p>
              <div class="project-tags">
                <span class="tag">Leadership Training</span>
                <span class="tag">Organizational Development</span>
                <span class="tag">Change Management</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <div class="placeholder-image">⚙️</div>
            </div>
            <div class="project-content">
              <h3>Supply Chain Optimization</h3>
              <p class="project-client">Global Retail Chain</p>
              <p class="project-description">
                Redesigned supply chain operations resulting in 30% reduction in inventory costs, 
                improved delivery times by 50%, and enhanced customer satisfaction scores.
              </p>
              <div class="project-tags">
                <span class="tag">Supply Chain</span>
                <span class="tag">Operations</span>
                <span class="tag">Cost Optimization</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <div class="placeholder-image">💡</div>
            </div>
            <div class="project-content">
              <h3>Innovation Workshop Series</h3>
              <p class="project-client">Financial Services Firm</p>
              <p class="project-description">
                Facilitated innovation workshops that generated 50+ new product ideas, leading to the 
                development of 3 breakthrough services that captured new market segments.
              </p>
              <div class="project-tags">
                <span class="tag">Innovation</span>
                <span class="tag">Product Development</span>
                <span class="tag">Workshop Facilitation</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <div class="placeholder-image">📈</div>
            </div>
            <div class="project-content">
              <h3>Performance Management System</h3>
              <p class="project-client">Educational Institution</p>
              <p class="project-description">
                Implemented a comprehensive performance management system that improved academic outcomes 
                by 20% and enhanced faculty satisfaction through better goal alignment and feedback mechanisms.
              </p>
              <div class="project-tags">
                <span class="tag">Performance Management</span>
                <span class="tag">Education</span>
                <span class="tag">System Implementation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="case-study-highlight">
        <h2>Case Study Spotlight</h2>
        <div class="case-study">
          <div class="case-study-content">
            <h3>Manufacturing Excellence Initiative</h3>
            <p><strong>Challenge:</strong> A mid-size manufacturing company was facing declining productivity, 
            increasing costs, and quality issues that threatened their market position.</p>
            
            <p><strong>Solution:</strong> Our team conducted a comprehensive analysis and implemented a 
            multi-phase improvement program including lean manufacturing principles, technology upgrades, 
            and workforce training.</p>
            
            <p><strong>Results:</strong></p>
            <ul>
              <li>45% increase in production efficiency</li>
              <li>60% reduction in defect rates</li>
              <li>$3.2M annual cost savings</li>
              <li>25% improvement in employee satisfaction</li>
              <li>New quality certification achieved</li>
            </ul>
            
            <div class="case-study-quote">
              <blockquote>
                "MASN's expertise and methodical approach transformed our operations. The results exceeded 
                our expectations and positioned us for sustainable growth."
              </blockquote>
              <cite>- Manufacturing Director</cite>
            </div>
          </div>
        </div>
      </div>

      <div class="industries-served">
        <h2>Industries We Serve</h2>
        <div class="industries-grid">
          <div class="industry">Manufacturing</div>
          <div class="industry">Healthcare</div>
          <div class="industry">Technology</div>
          <div class="industry">Financial Services</div>
          <div class="industry">Education</div>
          <div class="industry">Retail</div>
          <div class="industry">Energy</div>
          <div class="industry">Government</div>
        </div>
      </div>

      <div class="work-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how we can help you achieve similar results for your organization.</p>
        <router-link to="/contact" class="cta-button">Start Your Project</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Our Work page component
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