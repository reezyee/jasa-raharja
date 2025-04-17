<template>
  <header class="bg-white text-gray-800 py-4 shadow-md transition-all duration-300">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <NuxtLink to="/" aria-label="Home">
          <img src="@/assets/img/logo.png" alt="Jasa Raharja Logo" class="w-16 mr-3 transition-transform hover:scale-105" />
        </NuxtLink>
      </div>

      <!-- Navigation Links (Desktop) -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/" class="hover:text-blue-600 transition-colors" :class="{ 'text-blue-600 font-semibold': $route.path === '/' }" aria-current="page">Beranda</NuxtLink>
        <NuxtLink to="/profil" class="hover:text-blue-600 transition-colors" :class="{ 'text-blue-600 font-semibold': $route.path === '/profil' }">Profil</NuxtLink>
        <NuxtLink to="/layanan" class="hover:text-blue-600 transition-colors" :class="{ 'text-blue-600 font-semibold': $route.path === '/layanan' }">Layanan</NuxtLink>
        <NuxtLink to="/pengaduan" class="hover:text-blue-600 transition-colors" :class="{ 'text-blue-600 font-semibold': $route.path === '/pengaduan' }">Pengaduan</NuxtLink>
        <NuxtLink to="/tata-kelola" class="hover:text-blue-600 transition-colors" :class="{ 'text-blue-600 font-semibold': $route.path === '/tata-kelola' }">Tata Kelola</NuxtLink>      </nav>

      <!-- Hamburger Menu (Mobile) -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded" aria-label="Toggle Menu">
          <svg class="w-8 h-8 transition-transform" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white py-4 shadow-md">
        <nav class="flex flex-col items-center space-y-4">
          <NuxtLink to="/" @click="toggleMobileMenu" class="hover:text-blue-600 transition-colors text-lg" :class="{ 'text-blue-600 font-semibold': $route.path === '/' }">Beranda</NuxtLink>
          <NuxtLink to="/profil" @click="toggleMobileMenu" class="hover:text-blue-600 transition-colors text-lg" :class="{ 'text-blue-600 font-semibold': $route.path === '/profil' }">Profil</NuxtLink>
          <NuxtLink to="/layanan" @click="toggleMobileMenu" class="hover:text-blue-600 transition-colors text-lg" :class="{ 'text-blue-600 font-semibold': $route.path === '/layanan' }">Layanan</NuxtLink>
          <NuxtLink to="/pengaduan" @click="toggleMobileMenu" class="hover:text-blue-600 transition-colors text-lg" :class="{ 'text-blue-600 font-semibold': $route.path === '/pengaduan' }">Pengaduan</NuxtLink>
          <NuxtLink to="/tata-kelola" @click="toggleMobileMenu" class="hover:text-blue-600 transition-colors text-lg" :class="{ 'text-blue-600 font-semibold': $route.path === '/tata-kelola' }">Tata Kelola</NuxtLink>
        </nav>
      </div>
    </transition>

   </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// Mobile Menu Toggle
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
// Access current route for active link styling
const route = useRoute()
</script>

<style scoped>
/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

/* Fade transition for search modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure header is responsive */
header {
  position: sticky;
  top: 0;
  z-index: 20;
}

/* Improve link and button focus states */
a:focus,
button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Smooth hover effects */
nav a,
button {
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}
</style>