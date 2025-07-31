<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-section py-24 relative overflow-hidden">
      
      <div class="container-custom relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- Main title area -->
          <div class="text-center mb-16">
            <h1 class="text-6xl lg:text-7xl font-light text-gray-900 mb-4 tracking-tight">MASN</h1>
            <p class="text-xl text-gray-600 font-light max-w-2xl mx-auto">Mongolian Advanced Solutions Network</p>
          </div>
          
          <!-- Services grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            <div class="text-center">
              <div class="text-blue-600 font-semibold text-sm mb-2">CMD</div>
              <div class="text-gray-600 text-sm leading-relaxed">Condition Monitoring & Diagnostics</div>
            </div>
            <div class="text-center">
              <div class="text-blue-600 font-semibold text-sm mb-2">PdM</div>
              <div class="text-gray-600 text-sm leading-relaxed">Predictive Maintenance</div>
            </div>
            <div class="text-center">
              <div class="text-blue-600 font-semibold text-sm mb-2">IA</div>
              <div class="text-gray-600 text-sm leading-relaxed">Industrial Automation</div>
            </div>
            <div class="text-center">
              <div class="text-blue-600 font-semibold text-sm mb-2">HVE</div>
              <div class="text-gray-600 text-sm leading-relaxed">High Voltage Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl lg:text-4xl font-light text-center mb-12 text-gray-800">МАСН ХХК</h2>
        <div class="max-w-4xl mx-auto">
          <p class="text-lg text-gray-600 leading-relaxed text-center">
            Манай компани эргэлдэх цахилгаан тоног төхөөрөмжийн үл задлах аргын оношлогоо, 
            цахилгаан эрчим хүчний чанарын үнэлгээ, сэргээгдэх эрчим хүч, бие даасан дулааны эх үүсгүүр, 
            автоматжуулалтын шийдэл, мэргэжлийн болон зэргийн бус сургалтын чиглэлээр тогтвортой, идэвхтэй 
            үйл ажиллагаа явуулж байна.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Services Overview -->
    <section class="py-20">
      <div class="container-custom">
        <h2 class="text-3xl lg:text-4xl font-light text-center mb-16 text-gray-800">What We Offer</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card p-8 text-center group">
            <h3 class="text-lg font-medium mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Services</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Comprehensive professional services tailored to your needs</p>
          </div>
          <div class="card p-8 text-center group">
            <h3 class="text-lg font-medium mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Training</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Expert-led training programs to enhance skills and knowledge</p>
          </div>
          <div class="card p-8 text-center group">
            <h3 class="text-lg font-medium mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Consultancy</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Strategic consulting to drive your business forward</p>
          </div>
          <div class="card p-8 text-center group">
            <h3 class="text-lg font-medium mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Our Devices</h3>
            <p class="text-gray-600 text-sm leading-relaxed">State-of-the-art equipment and technology solutions</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Home page component
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