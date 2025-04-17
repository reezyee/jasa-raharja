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
              Tata Kelola
            </h1>
            <nav class="text-sm sm:text-base">
              <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
              <span class="mx-2">&gt;</span>
              <span>Tata Kelola</span>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-6 text-center">
            Good Corporate Governance
          </h2>
          <p class="text-gray-700 mb-6 text-center">
            PT Jasa Raharja (Persero) berkomitmen untuk menerapkan tata kelola
            perusahaan yang baik (Good Corporate Governance) dalam setiap aspek
            operasional. Penerapan GCG merupakan fondasi utama untuk memastikan
            keberlanjutan bisnis, meningkatkan kepercayaan stakeholder, dan
            berkontribusi positif bagi masyarakat Indonesia.
          </p>
          <p class="text-gray-700 mb-6 text-center">
            Implementasi GCG di Jasa Raharja berlandaskan pada lima prinsip
            utama: Transparansi, Akuntabilitas, Responsibilitas, Independensi,
            dan Kewajaran.
          </p>
        </div>
      </div>
    </section>

    <!-- GCG Principles Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-8 text-center">
            Prinsip-Prinsip GCG
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-900 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-blue-900">Transparansi</h3>
              </div>
              <p class="text-gray-700">
                Keterbukaan dalam proses pengambilan keputusan dan pengungkapan
                informasi material yang relevan mengenai perusahaan kepada
                stakeholders secara tepat waktu, memadai, jelas, dan dapat
                diakses oleh pihak yang berkepentingan.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-900 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-blue-900">Akuntabilitas</h3>
              </div>
              <p class="text-gray-700">
                Kejelasan fungsi, struktur, sistem, serta pertanggungjawaban
                organ perusahaan sehingga pengelolaan perusahaan terlaksana
                secara efektif. Perusahaan memastikan semua keputusan dan
                tindakan dapat dipertanggungjawabkan kepada stakeholders.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-900 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-blue-900">Responsibilitas</h3>
              </div>
              <p class="text-gray-700">
                Kesesuaian pengelolaan perusahaan dengan peraturan
                perundang-undangan yang berlaku dan prinsip-prinsip korporasi
                yang sehat. Perusahaan berkomitmen sebagai warga korporasi yang
                baik dengan mematuhi hukum dan berkontribusi positif terhadap
                masyarakat.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-900 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-blue-900">Independensi</h3>
              </div>
              <p class="text-gray-700">
                Pengelolaan perusahaan secara profesional tanpa benturan
                kepentingan dan pengaruh/tekanan dari pihak manapun yang tidak
                sesuai dengan peraturan perundang-undangan dan prinsip-prinsip
                korporasi yang sehat.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-900 hover:shadow-lg transition-all duration-300 md:col-span-2 mx-auto max-w-md"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-blue-900">Kewajaran</h3>
              </div>
              <p class="text-gray-700">
                Keadilan dan kesetaraan dalam memenuhi hak-hak stakeholders yang
                timbul berdasarkan perjanjian dan peraturan perundang-undangan.
                Perusahaan memastikan perlakuan yang adil dan setara kepada
                seluruh stakeholders tanpa diskriminasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Struktur GCG Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-8 text-center">
            Struktur GCG
          </h2>

          <div class="mb-12">
            <!-- <img
              src="/api/placeholder/800/400"
              alt="Struktur GCG Jasa Raharja"
              class="w-full rounded-lg shadow-md mx-auto mb-6"
            /> -->
            <p class="text-gray-700 text-center italic">
              Struktur Tata Kelola Perusahaan PT Jasa Raharja (Persero)
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 class="text-xl font-bold text-blue-900 mb-4">
                Rapat Umum Pemegang Saham (RUPS)
              </h3>
              <p class="text-gray-700 mb-4">
                RUPS merupakan organ perusahaan tertinggi yang memegang seluruh
                wewenang yang tidak didelegasikan kepada Dewan Komisaris atau
                Direksi dalam batas yang ditentukan dalam Anggaran Dasar dan
                peraturan perundang-undangan yang berlaku.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-blue-900 mb-4">
                Dewan Komisaris
              </h3>
              <p class="text-gray-700 mb-4">
                Dewan Komisaris adalah organ perusahaan yang bertugas melakukan
                pengawasan secara umum dan/atau khusus sesuai dengan Anggaran
                Dasar serta memberikan nasihat kepada Direksi dalam menjalankan
                pengurusan perusahaan.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-blue-900 mb-4">Direksi</h3>
              <p class="text-gray-700 mb-4">
                Direksi adalah organ perusahaan yang berwenang dan bertanggung
                jawab penuh atas pengurusan perusahaan untuk kepentingan
                perusahaan, sesuai dengan maksud dan tujuan perusahaan serta
                mewakili perusahaan baik di dalam maupun di luar pengadilan.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-blue-900 mb-4">
                Komite-Komite
              </h3>
              <p class="text-gray-700 mb-4">
                Untuk mendukung efektivitas pelaksanaan tugas dan tanggung
                jawabnya, Dewan Komisaris dibantu oleh komite-komite seperti
                Komite Audit, Komite Pemantau Risiko, dan Komite Nominasi &
                Remunerasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Implementasi GCG Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-8 text-center">
            Implementasi GCG
          </h2>

          <div class="space-y-6">
            <div
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 class="text-xl font-bold text-blue-900 mb-4">Pedoman GCG</h3>
              <p class="text-gray-700">
                Jasa Raharja telah menyusun dan menerapkan Pedoman Tata Kelola
                Perusahaan yang mengacu pada praktik terbaik dan regulasi
                terkini. Pedoman ini menjadi rujukan dalam menjalankan seluruh
                aktivitas bisnis perusahaan.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 class="text-xl font-bold text-blue-900 mb-4">Kode Etik</h3>
              <p class="text-gray-700">
                Kode Etik Jasa Raharja merupakan pedoman perilaku yang berlaku
                bagi seluruh jajaran perusahaan, dari karyawan hingga jajaran
                manajemen tertinggi. Kode etik menjadi landasan dalam
                berinteraksi dengan sesama karyawan, pelanggan, mitra bisnis,
                regulator, dan masyarakat.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 class="text-xl font-bold text-blue-900 mb-4">
                Manajemen Risiko
              </h3>
              <p class="text-gray-700">
                Perusahaan menerapkan manajemen risiko secara terstruktur dan
                sistematis untuk mengidentifikasi, mengukur, memitigasi, dan
                memantau berbagai risiko yang dihadapi dalam menjalankan
                aktivitas bisnis.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 class="text-xl font-bold text-blue-900 mb-4">
                Whistleblowing System
              </h3>
              <p class="text-gray-700">
                Jasa Raharja memiliki Sistem Pelaporan Pelanggaran
                (Whistleblowing System) yang memungkinkan karyawan dan pihak
                eksternal untuk melaporkan dugaan pelanggaran dengan jaminan
                kerahasiaan dan perlindungan. Sistem ini menjadi bagian penting
                dalam memastikan integritas di seluruh lini perusahaan.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 class="text-xl font-bold text-blue-900 mb-4">Asesmen GCG</h3>
              <p class="text-gray-700">
                Secara berkala, Jasa Raharja melakukan penilaian implementasi
                GCG baik melalui self-assessment maupun penilaian oleh pihak
                independen. Hasil asesmen menjadi dasar untuk perbaikan
                berkelanjutan praktik tata kelola perusahaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Downloads Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-8 text-center">
            Dokumen GCG
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-blue-900 mb-1">
                  Pedoman Tata Kelola Perusahaan
                </h3>
                <a
                  href="#"
                  class="text-blue-600 hover:underline text-sm flex items-center"
                >
                  <span>Download PDF</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div
              class="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-blue-900 mb-1">
                  Kode Etik Perusahaan
                </h3>
                <a
                  href="#"
                  class="text-blue-600 hover:underline text-sm flex items-center"
                >
                  <span>Download PDF</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div
              class="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-blue-900 mb-1">
                  Laporan GCG Tahunan
                </h3>
                <a
                  href="#"
                  class="text-blue-600 hover:underline text-sm flex items-center"
                >
                  <span>Download PDF</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div
              class="bg-blue-50 p-6 rounded-lg border border-blue-100 flex items-center"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mr-4"
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
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-blue-900 mb-1">
                  Pedoman Whistleblowing System
                </h3>
                <a
                  href="#"
                  class="text-blue-600 hover:underline text-sm flex items-center"
                >
                  <span>Download PDF</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Assessment Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-6 text-center">
            Pencapaian GCG
          </h2>
          <p class="text-center text-gray-700 mb-12">
            PT Jasa Raharja (Persero) berkomitmen untuk terus meningkatkan
            kualitas implementasi tata kelola perusahaan melalui asesmen berkala
            dan program perbaikan yang berkelanjutan.
          </p>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-blue-900 mb-6 text-center">
              Skor Asesmen GCG
            </h3>

            <div class="overflow-x-auto">
              <table class="min-w-full bg-white">
                <thead>
                  <tr>
                    <th
                      class="py-3 px-4 bg-blue-900 text-white text-left rounded-tl-lg"
                    >
                      Tahun
                    </th>
                    <th class="py-3 px-4 bg-blue-900 text-white text-left">
                      Skor
                    </th>
                    <th class="py-3 px-4 bg-blue-900 text-white text-left">
                      Kategori
                    </th>
                    <th
                      class="py-3 px-4 bg-blue-900 text-white text-left rounded-tr-lg"
                    >
                      Penilai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-gray-700">2024</td>
                    <td class="py-3 px-4 text-gray-700 font-semibold">93.72</td>
                    <td class="py-3 px-4 text-green-600 font-semibold">
                      Sangat Baik
                    </td>
                    <td class="py-3 px-4 text-gray-700">BPKP</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-gray-700">2023</td>
                    <td class="py-3 px-4 text-gray-700 font-semibold">92.45</td>
                    <td class="py-3 px-4 text-green-600 font-semibold">
                      Sangat Baik
                    </td>
                    <td class="py-3 px-4 text-gray-700">BPKP</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 px-4 text-gray-700">2022</td>
                    <td class="py-3 px-4 text-gray-700 font-semibold">91.16</td>
                    <td class="py-3 px-4 text-green-600 font-semibold">
                      Sangat Baik
                    </td>
                    <td class="py-3 px-4 text-gray-700">BPKP</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4 text-gray-700">2021</td>
                    <td class="py-3 px-4 text-gray-700 font-semibold">90.23</td>
                    <td class="py-3 px-4 text-green-600 font-semibold">
                      Sangat Baik
                    </td>
                    <td class="py-3 px-4 text-gray-700">BPKP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p class="text-sm text-gray-600 mt-4 italic text-center">
              *BPKP: Badan Pengawasan Keuangan dan Pembangunan
            </p>
          </div>
        </div>
      </div>
    </section>
     <!-- Organizational Structure Section -->
     <section id="struktur-organisasi" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4 animate-fade-in"
        >
          Struktur Organisasi
        </h2>
        <p
          class="text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Struktur organisasi Jasa Raharja dirancang untuk mendukung operasional
          yang efisien di seluruh Indonesia, dipimpin oleh Direksi dan didukung
          oleh unit kerja di setiap provinsi.
        </p>
        <div class="flex justify-center">
          <img
            src="@/assets/img/struktur-organisasi.jpg"
            alt="Struktur Organisasi Jasa Raharja"
            class="w-full max-w-3xl h-auto rounded-lg shadow-md animate-fade-in"
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

.bg-blue-100 {
  background-color: #e6edf8; /* Light blue for icons background */
}

.bg-blue-50 {
  background-color: #f0f7ff; /* Very light blue for document backgrounds */
}

.border-blue-100 {
  border-color: #ccddf2;
}
</style>
