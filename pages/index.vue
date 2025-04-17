<template>
  <div class="min-h-screen flex flex-col">
    <!-- Carousel Section -->
    <section class="w-full relative">
      <div class="relative w-full h-[500px]">
        <!-- Carousel Images -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="absolute inset-0 transition-opacity duration-1000"
          :class="{
            'opacity-100': currentSlide === index,
            'opacity-0': currentSlide !== index,
          }"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent flex items-center justify-center"
          >
            <div class="text-center text-white">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">
                {{ slide.title }}
              </h1>
              <p class="text-lg md:text-xl mb-6">{{ slide.description }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation Dots -->
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="currentSlide = index"
            class="w-3 h-3 rounded-full"
            :class="currentSlide === index ? 'bg-white' : 'bg-gray-400'"
          ></button>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="
            currentSlide = (currentSlide - 1 + slides.length) % slides.length
          "
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-900/50 text-white p-3 rounded-full hover:bg-blue-800 transition-all duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-900/50 text-white p-3 rounded-full hover:bg-blue-800 transition-all duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </section>

    <!-- Layanan Jasa Raharja Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4"
        >
          Layanan Jasa Raharja
        </h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Layanan unggulan kami untuk masyarakat Indonesia.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink
            to="/layanan"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <svg
              class="w-12 h-12 text-blue-900 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.067 0-6 1.066-6 3v2h12v-2c0-1.934-3.933-3-6-3z"
              ></path>
            </svg>
            <h3 class="text-lg font-semibold text-blue-900 mb-2">
              Perlindungan Penumpang
            </h3>
            <p class="text-gray-600 text-sm">
              Memberikan jaminan bagi penumpang angkutan umum.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/layanan"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <svg
              class="w-12 h-12 text-blue-900 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            <h3 class="text-lg font-semibold text-blue-900 mb-2">
              Perlindungan Pihak Ketiga
            </h3>
            <p class="text-gray-600 text-sm">
              Memberikan jaminan kepada pihak ketiga akibat kecelakaan.
            </p>
          </NuxtLink>
          <a
            href="https://www.jrku.id"
            target="_blank"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <svg
              class="w-12 h-12 text-blue-900 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm4 14h6m-3-3v6"
              ></path>
            </svg>
            <h3 class="text-lg font-semibold text-blue-900 mb-2">JRku</h3>
            <p class="text-gray-600 text-sm">
              Aplikasi untuk informasi dan layanan kecelakaan lalu lintas.
            </p>
          </a>
        </div>
        <div class="text-center mt-8">
          <NuxtLink
            to="/layanan"
            class="text-blue-900 hover:underline font-medium"
            >Lihat Detail Layanan</NuxtLink
          >
        </div>
      </div>
    </section>

    <!-- Mudik Gratis Banner Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Mudik Gratis Jasa Raharja 2025
        </h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Pendaftaran mudik gratis telah dibuka! Segera daftar untuk mendapatkan
          tiket mudik aman dan nyaman bersama Jasa Raharja.
        </p>
        <a
          href="https://mudik.jasaraharja.co.id"
          target="_blank"
          class="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-300 text-lg font-medium"
        >
          Daftar Sekarang
        </a>
      </div>
    </section>

    <!-- Jasa Raharja Overview Section (Updated) -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- Funding Source and Services -->
        <div
          class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12 bg-blue-900 text-white p-6 rounded-lg shadow-md"
        >
          <div
            class="backdrop-blur-md text-white p-6 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <h3 class="text-2xl font-bold mb-2">Sumber Dana</h3>
            <p class="text-sm">UU No.33 Tahun 1964 dan UU No.34 Tahun 1964</p>
          </div>
          <div
            class="bg-blue-100/50 backdrop-blur-md border border-white/20 p-6 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m4 0v2m0 0v2m0-2h-2m2 0h2m-4 4h4"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-blue-900 mb-2">SWDKLLJ</h3>
            <p class="text-gray-100 text-sm">
              Sumbangan Wajib Dana Kecelakaan Lalu Lintas Jalan
            </p>
          </div>
          <div
            class="bg-blue-100/50 backdrop-blur-md border border-white/20 p-6 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h-2v6h2v2h2v-2h-2V6z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-blue-900 mb-2">IWKBU</h3>
            <p class="text-gray-100 text-sm">
              Iuran Wajib Kendaraan Bermotor Umum
            </p>
          </div>
          <div
            class="bg-blue-100/50 backdrop-blur-md border border-white/20 p-6 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <div
              class="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-blue-900 mb-2">IWPU</h3>
            <p class="text-gray-100 text-sm">Iuran Wajib Pesawat Udara Umum</p>
          </div>
        </div>

        <!-- Statistics and Map Banner -->
        <div
          class="relative grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12 bg-white text-white p-6 rounded-lg shadow-md h-fit"
        >
          <img
            src="@/assets/img/indonesia-map.webp"
            alt="Peta Indonesia"
            class="absolute -top-16 left-0 object-cover opacity-100 rounded-lg"
          />
          <div class="text-center flex items-center z-10 justify-center">
            <div class="w-1 h-10 bg-blue-400 mr-3"></div>
            <div>
              <h3 class="text-4xl md:text-5xl font-bold text-blue-900 mb-1">
                29
              </h3>
              <p class="text-gray-600 text-sm md:text-base">Kantor Wilayah</p>
            </div>
          </div>
          <div class="text-center flex items-center z-10 justify-center">
            <div class="w-1 h-10 bg-blue-400 mr-3"></div>
            <div>
              <h3 class="text-4xl md:text-5xl font-bold text-blue-900 mb-1">
                64
              </h3>
              <p class="text-gray-600 text-sm md:text-base">Kantor Cabang</p>
            </div>
          </div>
          <div class="text-center flex items-center z-10 justify-center">
            <div class="w-1 h-10 bg-blue-400 mr-3"></div>
            <div>
              <h3 class="text-4xl md:text-5xl font-bold text-blue-900 mb-1">
                32
              </h3>
              <p class="text-gray-600 text-sm md:text-base">Kantor Pelayanan</p>
            </div>
          </div>
          <div
            class="relative p-6 flex flex-col items-center justify-center text-center"
          >
            <h3
              class="text-xl md:text-2xl font-bold text-blue-900 mb-3 leading-tight"
            >
              Melayani Hingga Pelosok Negeri
            </h3>
            <NuxtLink
              to="/pengaduan"
              class="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span class="text-sm md:text-base">Hubungi Kami</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- Quick Access Section -->
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4"
        >
          Akses Cepat
        </h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Layanan penting yang dapat diakses dengan cepat.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/layanan"
            target="_blank"
            class="bg-blue-900 text-white p-6 rounded-lg flex items-center justify-center space-x-4 hover:bg-blue-800 transition-all duration-300"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.067 0-6 1.066-6 3v2h12v-2c0-1.934-3.933-3-6-3z"
              ></path>
            </svg>
            <span class="text-lg font-medium">Asuransi Kecelakaan</span>
          </a>
          <a
            href="tel:1500020"
            target="_blank"
            class="bg-blue-900 text-white p-6 rounded-lg flex items-center justify-center space-x-4 hover:bg-blue-800 transition-all duration-300"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span class="text-lg font-medium">Call Center</span>
          </a>
          <a
            href="/pengaduan"
            target="_blank"
            class="bg-blue-900 text-white p-6 rounded-lg flex items-center justify-center space-x-4 hover:bg-blue-800 transition-all duration-300"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 14 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
            <span class="text-lg font-medium">Pengaduan</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import carousel1 from "@/assets/img/carousel1.webp";
import carousel2 from "@/assets/img/carousel2.webp";
import carousel3 from "@/assets/img/carousel3.webp";

// Carousel Data
const slides = ref([
  {
    image: carousel1,
    title: "Selamat Datang di Jasa Raharja",
    description: "Memberi Perlindungan Perjalanan Anda",
  },
  {
    image: carousel2,
    title: "Mudik Gratis Jasa Raharja 2025",
    description:
      "Pendaftaran telah dibuka! Daftar sekarang untuk mudik aman dan nyaman.",
      },
  {
    image: carousel3,
    title: "Asuransi Kecelakaan Lalu Lintas",
    description: "Santunan yang terjamin untuk korban kecelakaan",
  },
]);

// Carousel Interactivity
const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
</script>

<style scoped>
/* Custom Colors to Match Jasa Raharja */
.bg-blue-900 {
  background-color: #003087; /* Jasa Raharja's primary blue */
}

.bg-blue-800 {
  background-color: #0055a4; /* Slightly lighter blue for Sumber Dana card */
}

.bg-blue-100 {
  background-color: #e6f0fa; /* Light blue for cards */
}

.bg-blue-400 {
  background-color: #60a5fa; /* Light blue for vertical lines */
}

.text-blue-900 {
  color: #003087;
}

.bg-gray-50 {
  background-color: #f5f5f5; /* Jasa Raharja's light gray */
}

/* Glassmorphism Effect */
.backdrop-blur-md {
  backdrop-filter: blur(8px);
}
</style>
