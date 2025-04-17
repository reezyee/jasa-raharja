<template>
  <div class="min-h-screen flex flex-col pt-14">
    <!-- Hero Section -->
    <section class="w-full relative">
      <div class="relative w-full px-4 sm:px-10 h-[300px]">
        <img
          src="@/assets/img/banner.jpeg"
          alt="Profil Jasa Raharja Banner"
          class="w-full h-full object-cover rounded-xl"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r mx-4 sm:mx-10 rounded-xl from-blue-900/80 to-transparent flex items-center justify-center"
        >
          <div class="text-center text-white">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Tentang Kami
            </h1>
            <nav class="text-sm sm:text-base">
              <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
              <span class="mx-2">&gt;</span>
              <span>Tentang Kami</span>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="tentang-kami" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4 max-w-xl">
            <p class="text-xl font-semibold text-balance">
              Jasa Raharja Berupaya Menjadi Perusahaan Tepercaya dalam
              Memberikan Perlindungan Dasar Terhadap Risiko Kecelakaan dengan
              Pelayanan yang Terbaik.
            </p>
            <p
              class="text-gray-600 leading-relaxed text-balance text-sm sm:text-base"
            >
              PT Jasa Raharja adalah Badan Usaha Milik Negara (BUMN) yang
              didirikan pada tahun 1960 berdasarkan UU No. 33 dan UU No. 34
              Tahun 1964. Kami bertugas memberikan perlindungan dasar kepada
              masyarakat Indonesia melalui program asuransi sosial, khususnya
              untuk korban kecelakaan lalu lintas.
            </p>
            <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
              Dengan jaringan yang luas di seluruh Indonesia, Jasa Raharja
              berkomitmen untuk memberikan santunan yang cepat dan tepat kepada
              korban kecelakaan, serta mendukung program pemerintah dalam
              meningkatkan keselamatan berlalu lintas.
            </p>
          </div>
          <div class="flex justify-center">
            <iframe
              class="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/m3AvIBAH6sY?si=GWmBtsoeMfQ3lPK1"
              title="Tentang Jasa Raharja"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision and Mission Section -->
    <section id="visi-misi" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 animate-fade-in"
        >
          Visi dan Misi
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 class="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
              Visi
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
              Menjadi perusahaan asuransi sosial terdepan dalam memberikan
              perlindungan dasar kepada masyarakat Indonesia dengan pelayanan
              yang prima dan berkelanjutan.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 class="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
              Misi
            </h3>
            <ul
              class="text-gray-600 list-disc list-inside space-y-2 text-sm sm:text-base"
            >
              <li>
                Menyelenggarakan program asuransi sosial yang berkualitas untuk
                korban kecelakaan lalu lintas.
              </li>
              <li>
                Memberikan pelayanan yang cepat, mudah, dan terjangkau kepada
                masyarakat.
              </li>
              <li>
                Mendukung pemerintah dalam meningkatkan keselamatan berlalu
                lintas melalui edukasi dan kampanye.
              </li>
              <li>
                Mengoptimalkan teknologi untuk efisiensi dan transparansi
                layanan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Budaya Perusahaan Section -->
    <section id="akhlak" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 animate-fade-in"
        >
          Budaya Perusahaan
        </h2>
        <div class="flex justify-center">
          <img
            src="@/assets/img/akhlak.png"
            alt="Budaya Perusahaan Jasa Raharja"
            class="w-full max-w-2xl sm:max-w-3xl h-auto rounded-lg shadow-md animate-fade-in"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional script logic needed for this static page
</script>

<style scoped>
/* Custom Colors to Match Jasa Raharja */
.bg-blue-900 {
  background-color: #003087; /* Jasa Raharja's primary blue */
}

.text-blue-900 {
  color: #003087;
}

.bg-gray-50 {
  background-color: #f5f5f5; /* Jasa Raharja's light gray */
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
