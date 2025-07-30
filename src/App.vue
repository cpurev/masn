<script setup lang="ts">
import HeaderNav from './components/HeaderNav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <HeaderNav />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
