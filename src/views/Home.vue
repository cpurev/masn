<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="gradient-bg text-white py-24 text-center">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6">Welcome to MASN</h1>
          <p class="text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto">Your trusted partner in professional services</p>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800">Introduction</h2>
        <div class="max-w-4xl mx-auto space-y-6">
          <p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
            MASN is a leading organization dedicated to providing exceptional services across multiple domains. 
            With our expertise in training, consultancy, and cutting-edge solutions, we help businesses and 
            individuals achieve their goals through innovative approaches and professional excellence.
          </p>
          <p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Our team of experts brings years of experience and a commitment to delivering results that exceed 
            expectations. Whether you're looking for specialized training, expert consultancy, or advanced 
            devices and solutions, MASN is here to support your journey to success.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Services Overview -->
    <section class="py-20">
      <div class="container-custom">
        <h2 class="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">What We Offer</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card p-8 text-center group">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Services</h3>
            <p class="text-gray-600">Comprehensive professional services tailored to your needs</p>
          </div>
          <div class="card p-8 text-center group">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Training</h3>
            <p class="text-gray-600">Expert-led training programs to enhance skills and knowledge</p>
          </div>
          <div class="card p-8 text-center group">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Consultancy</h3>
            <p class="text-gray-600">Strategic consulting to drive your business forward</p>
          </div>
          <div class="card p-8 text-center group">
            <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Our Devices</h3>
            <p class="text-gray-600">State-of-the-art equipment and technology solutions</p>
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