<template>
  <div class="min-h-screen flex flex-col pt-14">
    <!-- Hero Section with Search Bar -->
    <section class="w-full relative">
      <div class="relative w-full px-4 sm:px-10 h-[300px] md:h-[400px]">
        <img
          src="@/assets/img/banner.jpeg"
          alt="Profil Jasa Raharja Banner"
          class="w-full h-full object-cover rounded-xl"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r mx-4 sm:mx-10 rounded-xl from-blue-900/80 to-transparent flex items-center justify-center"
        >
          <div class="text-center text-white px-4">
            <h1
              class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-text-reveal"
            >
              Layanan Kami
            </h1>
            <nav class="text-sm sm:text-base mb-6" aria-label="Breadcrumb">
              <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
              <span class="mx-2">></span>
              <span>Layanan Kami</span>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Services Section with Enhanced Carousel -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 animate-text-reveal"
        >
          Layanan Kami
        </h2>
        <p
          class="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          Kehadiran PT Jasa Raharja memberikan perlindungan dasar kepada
          masyarakat melalui 2 (dua) program pertanggungan, yaitu Asuransi
          Kecelakaan Penumpang Alat Angkutan Umum yang dilaksanakan berdasarkan
          Undang-Undang No. 33 Tahun 1964 tentang Dana Pertanggungan Wajib
          Kecelakaan Penumpang serta Asuransi Tanggung Jawab Menurut Hukum
          Terhadap Pihak Ketiga yang dilaksanakan berdasarkan Undang-Undang No.
          34 Tahun 1964 tentang Dana Kecelakaan Lalu Lintas Jalan.
        </p>

        <!-- Carousel for Services -->
        <div class="relative px-4 sm:px-10 md:px-16 mx-auto max-w-6xl">
          <div
            class="overflow-hidden touch-pan-x"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <transition-group
              tag="div"
              class="flex transition-transform duration-500 ease-in-out"
              :style="{
                transform: `translateX(-${
                  currentServiceIndex * (100 / visibleSlides)
                }%)`,
              }"
              name="carousel"
            >
              <div
                v-for="(service, index) in services"
                :key="index"
                class="flex-none px-2 sm:px-3 md:px-4"
                :style="{ width: `${100 / visibleSlides}%` }"
              >
                <div
                  class="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col"
                  tabindex="0"
                  @keydown.enter="openServiceDetails(index)"
                  role="button"
                  :aria-label="`Learn more about ${service.title}`"
                >
                  <div
                    class="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full flex items-center justify-center gradient-icon"
                  >
                    <svg
                      class="w-8 h-8 md:w-10 md:h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        :d="service.iconPath"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold text-blue-900 mb-2 text-center"
                  >
                    {{ service.title }}
                  </h3>
                  <p class="text-gray-600 text-sm flex-grow text-center">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </transition-group>
          </div>

          <!-- Carousel Navigation Buttons -->
          <button
            @click="prevService"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900/70 text-white p-2 sm:p-3 rounded-full hover:bg-blue-800 transition-all duration-300 z-10"
            :disabled="isStart"
            :class="{ 'opacity-50 cursor-not-allowed': isStart }"
            aria-label="Previous service"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
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
            @click="nextService"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900/70 text-white p-2 sm:p-3 rounded-full hover:bg-blue-800 transition-all duration-300 z-10"
            :disabled="isEnd"
            :class="{ 'opacity-50 cursor-not-allowed': isEnd }"
            aria-label="Next service"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
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

        <!-- Carousel Indicators -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(_, index) in Array(
              Math.ceil(services.length / visibleSlides)
            )"
            :key="index"
            @click="goToPage(index)"
            class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            :class="
              currentPage === index
                ? 'bg-blue-900 scale-125'
                : 'bg-gray-300 hover:bg-blue-300'
            "
            :aria-label="`Go to carousel page ${index + 1}`"
          ></button>
        </div>
      </div>
    </section>

    <!-- JRku App Promotion Section -->
    <section
      class="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="flex justify-center">
            <div class="relative">
              <img
                src="@/assets/img/jrku-app.png"
                alt="JRku App"
                class="w-56 sm:w-64 md:w-72 h-auto rounded-lg shadow-lg animate-float"
              />
              <div
                class="absolute inset-0 border-8 border-white/20 rounded-lg -z-10 transform rotate-3"
              ></div>
            </div>
          </div>
          <div class="text-center md:text-left">
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-text-reveal"
            >
              JRku - Aplikasi Layanan Jasa Raharja
            </h2>
            <p class="text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0">
              Aplikasi JRku memudahkan Anda mengakses informasi dan layanan
              terkait kecelakaan lalu lintas kapan saja, di mana saja.
            </p>
            <a
              href="https://www.jrku.id"
              target="_blank"
              class="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg"
              aria-label="Download JRku App"
            >
              Download Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white relative overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div
      class="absolute inset-0 opacity-5 bg-repeat"
      style="background-image: url('data:image/svg+xml,%3Csvg width=%2230%22 height=%2230%22 viewBox=%220 0 30 30%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%2215%22 cy=%2215%22 r=%223%22 fill=%22%23003087%22 /%3E%3C/svg%3E');"
    ></div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12 animate-text-reveal"
      >
        Apa Kata Mereka?
      </h2>
      <div class="relative flex justify-center items-center h-[350px] sm:h-[400px]">
        <transition-group tag="div" name="testimonial" class="relative w-full max-w-3xl">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.author"
            class="absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out"
            :class="{
              'z-30 scale-100 opacity-100 rotate-0': index === currentTestimonialIndex,
              'z-20 scale-90 opacity-40 translate-x-[60%] rotate-3': index === (currentTestimonialIndex + 1) % testimonials.length,
              'z-20 scale-90 opacity-40 -translate-x-[60%] -rotate-3': index === (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length,
              'z-10 scale-85 opacity-0 translate-x-[120%] rotate-6': index === (currentTestimonialIndex + 2) % testimonials.length,
              'z-10 scale-85 opacity-0 -translate-x-[120%] -rotate-6': index === (currentTestimonialIndex - 2 + testimonials.length) % testimonials.length,
              'opacity-0 scale-80': index > (currentTestimonialIndex + 2) % testimonials.length || index < (currentTestimonialIndex - 2 + testimonials.length) % testimonials.length,
            }"
          >
            <div
              class="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg w-[280px] sm:w-[360px] md:w-[400px] text-center border border-gray-100 transition-all duration-300"
              role="region"
              :aria-label="`Testimonial by ${testimonial.author}`"
              :aria-hidden="index !== currentTestimonialIndex"
            >
              <p class="text-gray-700 text-sm sm:text-base font-medium mb-4 italic">
                "{{ testimonial.text }}"
              </p>
              <p class="text-blue-900 font-semibold text-base sm:text-lg">
                {{ testimonial.author }}
              </p>
            </div>
          </div>
        </transition-group>
      </div>
      <!-- Testimonial Navigation -->
      <div class="flex justify-center items-center mt-8 space-x-4">
        <button
          @click="prevTestimonial"
          class="bg-blue-900/70 text-white p-3 rounded-full hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Previous testimonial"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6"
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
        <!-- Indicators -->
        <div class="flex space-x-2">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="goToTestimonial(index)"
            class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            :class="currentTestimonialIndex === index ? 'bg-blue-900 scale-125' : 'bg-gray-300 hover:bg-blue-300'"
            :aria-label="`Go to testimonial by ${testimonials[index].author}`"
          ></button>
        </div>
        <button
          @click="nextTestimonial"
          class="bg-blue-900/70 text-white p-3 rounded-full hover:bg-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Next testimonial"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6"
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
      <!-- Auto-Play Toggle -->
      <div class="flex justify-center mt-4">
        <button
          @click="toggleAutoPlay"
          class="text-blue-900 hover:text-blue-700 text-sm sm:text-base font-medium flex items-center space-x-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          :aria-label="isAutoPlaying ? 'Pause testimonial auto-play' : 'Start testimonial auto-play'"
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
              :d="isAutoPlaying ? 'M6 6h4v12H6zm8 0h4v12h-4z' : 'M5 5l14 7-14 7z'"
            ></path>
          </svg>
          <span>{{ isAutoPlaying ? 'Pause' : 'Play' }}</span>
        </button>
      </div>
    </div>
  </section>

    <!-- Quick Contact Bar -->
    <div
      class="sticky bottom-0 left-0 right-0 bg-blue-900 text-white py-4 shadow-lg z-50"
    >
      <div
        class="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
      >
        <p class="text-center sm:text-left text-base">
          Butuh Bantuan? Hubungi Kami Sekarang!
        </p>
        <div class="flex space-x-4">
          <a
            href="https://wa.me/0812100500"
            target="_blank"
            class="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition-all duration-300"
            aria-label="Contact via WhatsApp"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                clip-rule="evenodd"
              />
              <path
                fill="currentColor"
                d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
              />
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            href="tel:1500020"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition-all duration-300"
            aria-label="Contact via Phone"
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span>Telepon</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

// Services Data
const services = ref([
  {
    title: "Asuransi Kecelakaan Penumpang Angkutan Umum",
    description:
      "Memberikan jaminan bagi penumpang angkutan umum yang mengalami kecelakaan.",
    iconPath:
      "M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.067 0-6 1.066-6 3v2h12v-2c0-1.934-3.933-3-6-3z",
  },
  {
    title: "Asuransi Kecelakaan Pihak Ketiga",
    description:
      "Memberikan jaminan kepada pihak ketiga yang terdampak akibat kecelakaan lalu lintas.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Santunan Kecelakaan Lalu Lintas Jalan",
    description:
      "Memberikan santunan kepada korban kecelakaan lalu lintas jalan.",
    iconPath:
      "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
  },
  {
    title: "Pengelolaan Dana Kecelakaan Lalu Lintas Jalan",
    description:
      "Mengelola dana untuk kebutuhan santunan kecelakaan lalu lintas.",
    iconPath:
      "M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  },
  {
    title: "Pencegahan Kecelakaan",
    description:
      "Program untuk meningkatkan keselamatan dan mencegah kecelakaan.",
    iconPath:
      "M12 4v1m0 14v1m-8-9H3m18 0h-1m-8-8v1m0 14v1M5.64 5.64l.7-.7m12.02 12.02l-.7-.7M5.64 18.36l.7.7m12.02-12.02l-.7.7",
  },
]);

// Responsive Carousel Setup
const currentServiceIndex = ref(0);
const windowWidth = ref(process.client ? window.innerWidth : 1024); // Default to 1024 for SSR
const visibleSlides = computed(() => {
  if (windowWidth.value < 640) return 1; // Mobile
  if (windowWidth.value < 1024) return 2; // Tablet
  return 3; // Desktop
});

const currentPage = computed(() =>
  Math.floor(currentServiceIndex.value / visibleSlides.value)
);
const isStart = computed(() => currentServiceIndex.value === 0);
const isEnd = computed(
  () => currentServiceIndex.value >= services.value.length - visibleSlides.value
);

const nextService = () => {
  if (!isEnd.value) {
    currentServiceIndex.value = Math.min(
      currentServiceIndex.value + visibleSlides.value,
      services.value.length - visibleSlides.value
    );
  }
};

const prevService = () => {
  if (!isStart.value) {
    currentServiceIndex.value = Math.max(
      currentServiceIndex.value - visibleSlides.value,
      0
    );
  }
};

const goToPage = (pageIndex) => {
  currentServiceIndex.value = pageIndex * visibleSlides.value;
};

// Touch/Swipe Support
const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  touchEndX.value = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  const diffX = touchStartX.value - touchEndX.value;
  if (diffX > 50) {
    nextService(); // Swipe left
  } else if (diffX < -50) {
    prevService(); // Swipe right
  }
};

// Handle Window Resize
onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  }
});

watch(visibleSlides, () => {
  if (currentServiceIndex.value > services.value.length - visibleSlides.value) {
    currentServiceIndex.value = Math.max(
      0,
      services.value.length - visibleSlides.value
    );
  }
});

// Search Functionality
const searchQuery = ref("");
const router = useRouter();
const performSearch = () => {
  if (searchQuery.value.trim()) {
    console.log("Searching for:", searchQuery.value);
    // Example: Redirect to a search page with query
    router.push({ path: "/search", query: { q: searchQuery.value } });
    searchQuery.value = "";
  }
};

// Service Details (Placeholder for interactivity)
const openServiceDetails = (index) => {
  console.log("Opening details for:", services.value[index].title);
  // Add logic to open a modal or navigate to a detailed page
};

// Testimonials Data
const testimonials = ref([
  {
    text: 'Jasa Raharja sangat membantu saya saat mengalami kecelakaan. Prosesnya cepat dan mudah!',
    author: 'Budi Santoso',
  },
  {
    text: 'Aplikasi JRku sangat memudahkan saya untuk mengakses informasi santunan. Sangat recommended!',
    author: 'Siti Aminah',
  },
  {
    text: 'Terima kasih Jasa Raharja atas dukungannya dalam program pencegahan kecelakaan di komunitas kami.',
    author: 'Ahmad Yani',
  },
]);

const currentTestimonialIndex = ref(0);
const isAutoPlaying = ref(true);
let autoPlayInterval = null;

// Navigation Functions
const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const goToTestimonial = (index) => {
  currentTestimonialIndex.value = index;
};

// Auto-Play Logic
const startAutoPlay = () => {
  if (isAutoPlaying.value && !autoPlayInterval) {
    autoPlayInterval = setInterval(nextTestimonial, 5000);
  }
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value;
  if (isAutoPlaying.value) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
};

// Lifecycle Hooks
onMounted(() => {
  if (process.client) {
    startAutoPlay();
  }
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style scoped>
/* Custom Colors */
.bg-blue-900 {
  background-color: #003087;
}
.bg-blue-700 {
  background-color: #0055a4;
}
.text-blue-900 {
  color: #003087;
}
.bg-gray-50 {
  background-color: #f5f5f5;
}
.bg-blue-50 {
  background-color: #e6f0fa;
}

.gradient-icon {
  background: linear-gradient(135deg, #003087, #60a5fa);
}
.gradient-border {
  border-image: linear-gradient(135deg, #003087, #60a5fa) 1;
}

/* Carousel Transitions */
.carousel-enter-active,
.carousel-leave-active {
  transition: transform 0.5s ease-in-out;
}
.carousel-enter-from,
.carousel-leave-to {
  transform: translateX(100%);
}

/* Testimonial Transitions */
.testimonial-enter-active,
.testimonial-leave-active {
  transition: all 0.7s ease-in-out;
}
.testimonial-enter-from,
.testimonial-leave-to {
  opacity: 0;
  transform: scale(0.9) rotate(4deg);
}

/* Text Reveal Animation */
.animate-text-reveal {
  animation: textReveal 1.5s ease-out forwards;
}
@keyframes textReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating Animation */
.animate-float {
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Focus States for Accessibility */
button:focus,
a:focus,
div[role="button"]:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}
</style>
