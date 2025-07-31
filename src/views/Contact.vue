<template>
  <div class="py-16 min-h-screen">
    <div class="container-custom">
      <h1 class="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">Холбоо барих</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div class="space-y-8">          
          <div class="space-y-6">
            <!-- <div class="space-y-2">
              <h3 class="text-lg font-semibold text-blue-600">Address</h3>
              <p class="text-gray-600">123 Business Street<br>City, State 12345</p>
            </div> -->
            <div class="space-y-2">
              <h3 class="text-lg font-semibold text-blue-600">Утас</h3>
              <p class="text-gray-600">+976 91110666</p>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-semibold text-blue-600">Емайл</h3>
              <p class="text-gray-600">masnmongolia@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="card p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
              >
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
              >
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="5" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200 resize-none"
              ></textarea>
            </div>
            <button type="submit" class="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission here
  alert('Message sent! We will get back to you soon.')
  // Reset form
  Object.assign(form, {
    name: '',
    email: '',
    subject: '',
    message: ''
  })
}
</script>

<style scoped>
.contact {
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
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #333;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2,
.contact-form h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.contact-details {
  margin-top: 2rem;
}

.contact-item {
  margin-bottom: 2rem;
}

.contact-item h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  background: #667eea;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #5a6fd8;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style> 