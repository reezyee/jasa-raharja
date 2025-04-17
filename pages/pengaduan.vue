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
              Pengaduan
            </h1>
            <nav class="text-sm sm:text-base">
              <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
              <span class="mx-2">&gt;</span>
              <span>Pengaduan</span>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Informasi Pengaduan Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-6">
            Layanan Pengaduan Jasa Raharja
          </h2>
          <p class="text-gray-700 mb-6">
            Jasa Raharja berkomitmen untuk memberikan pelayanan terbaik kepada
            masyarakat. Kami menyediakan layanan pengaduan untuk menerima
            kritik, saran, atau keluhan terkait pelayanan Jasa Raharja melalui
            berbagai saluran yang mudah diakses.
          </p>
          <p class="text-gray-700 mb-8">
            Sampaikan pengaduan Anda melalui saluran yang tersedia, dan kami
            akan segera menindaklanjuti sesuai prosedur yang berlaku.
          </p>

          <div class="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h3 class="text-xl font-bold text-blue-900 mb-4">
              Syarat dan Ketentuan
            </h3>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>Pengaduan disampaikan secara jelas dan objektif</li>
              <li>Sertakan identitas diri yang lengkap dan valid</li>
              <li>Lampirkan bukti pendukung jika ada</li>
              <li>
                Berikan informasi kontak yang dapat dihubungi untuk tindak
                lanjut
              </li>
              <li>Pengaduan akan ditangani dalam waktu 5 hari kerja</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Submit Your Complaint Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-6 text-center">
            Sampaikan Pengaduan Anda
          </h2>
          <p class="text-center text-gray-600 mb-8">
            Pilih saluran yang paling nyaman untuk Anda. Ikuti panduan untuk
            memastikan pengaduan Anda dapat diproses dengan cepat.
          </p>

          <!-- Interactive Contact Options -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div
              class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
              @click="openWhatsApp"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12c0 2.134.555 4.232 1.607 6.083L0 24l5.916-1.607A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.697 18.697c-.304.85-.867 1.543-1.753 1.826-.77.247-1.787.303-2.873-.194-1.217-.557-2.375-1.455-3.455-2.535-1.08-1.08-1.978-2.238-2.535-3.455-.497-1.086-.441-2.103-.194-2.873.283-.886.976-1.449 1.826-1.753.304-.108.627-.022.886.108.304.152.608.434.867.738.5.587.998 1.195 1.369 1.847.108.195.195.412.195.629 0 .217-.087.434-.195.629-.304.434-.672.781-1.13 1.043-.456.26-.978.477-1.5.672-.087.022-.173.043-.26.065-.412.108-.803.26-1.13.477-.326.217-.608.477-.803.803-.195.326-.304.717-.304 1.108 0 .391.109.781.304 1.108.195.326.477.608.803.803.326.195.717.304 1.108.304.391 0 .781-.109 1.108-.304.326-.195.608-.477.803-.803.217-.326.369-.717.477-1.13.022-.087.043-.173.065-.26.195-.521.412-1.043.672-1.5.26-.458.608-.826 1.043-1.13.195-.108.412-.195.629-.195.217 0 .434.087.629.195.652.369 1.26.867 1.847 1.369.304.26.586.564.738.867.13.26.216.582.108.886z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-blue-900 mb-2">WhatsApp</h3>
              <p class="text-gray-600 mb-4">
                Kirim pesan langsung melalui WhatsApp
              </p>
              <button
                class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all duration-300"
              >
                Chat Sekarang
              </button>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
              @click="openEmail"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-blue-900 mb-2">Email</h3>
              <p class="text-gray-600 mb-4">
                Kirim pengaduan ke email resmi kami
              </p>
              <button
                class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all duration-300"
              >
                Tulis Email
              </button>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
              @click="openCall"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4"
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
              </div>
              <h3 class="text-lg font-semibold text-blue-900 mb-2">
                Call Center
              </h3>
              <p class="text-gray-600 mb-4">Hubungi kami melalui telepon</p>
              <button
                class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all duration-300"
              >
                Telepon Sekarang
              </button>
            </div>
          </div>

          <!-- Guided Complaint Process -->
          <div class="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 class="text-xl font-bold text-blue-900 mb-4">
              Panduan Menyampaikan Pengaduan
            </h3>
            <p class="text-gray-600 mb-4">
              Pastikan pengaduan Anda mencakup informasi berikut agar dapat
              diproses dengan cepat:
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Nama lengkap dan NIK</li>
              <li>Detail pengaduan (subjek dan kronologi)</li>
              <li>
                Kategori pengaduan (Santunan, Pelayanan, Informasi, atau
                Lainnya)
              </li>
              <li>Kontak yang dapat dihubungi</li>
              <li>Lampiran bukti pendukung (jika ada)</li>
            </ul>
            <p class="text-gray-600 mb-4">
              Gunakan template berikut untuk menyusun pesan Anda:
            </p>
            <div class="bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
              <p>
                <strong>Subjek:</strong> [Kategori Pengaduan] - [Judul Singkat]
              </p>
              <p><strong>Nama:</strong> [Nama Lengkap]</p>
              <p><strong>NIK:</strong> [Nomor NIK]</p>
              <p><strong>Detail Pengaduan:</strong> [Jelaskan secara rinci]</p>
              <p><strong>Kontak:</strong> [No. HP/Email]</p>
              <p><strong>Lampiran:</strong> [Jika ada, sebutkan]</p>
            </div>
          </div>

          <!-- Location-Based Assistance -->
          <div class="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h3 class="text-xl font-bold text-blue-900 mb-4 text-center">
              Kunjungi Kantor Terdekat di Tasikmalaya
            </h3>
            <p class="text-center text-gray-600 mb-6">
              Pilih wilayah Anda untuk menemukan kantor Jasa Raharja terdekat di Tasikmalaya:
            </p>
            <!-- <div class="mb-6">
                <select v-model="selectedRegion" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900">
                  <option value="">-- Pilih Wilayah --</option>
                  <option v-for="region in regions" :key="region.name" :value="region.name">
                    {{ region.name }}
                  </option>
                </select>
              </div>
              <div v-if="selectedRegion" class="bg-gray-100 p-4 rounded-lg text-gray-700">
                <p><strong>Alamat:</strong> {{ selectedRegionDetails.address }}</p>
                <p><strong>Telepon:</strong> {{ selectedRegionDetails.phone }}</p>
                <a :href="selectedRegionDetails.route" target="_blank" class="text-blue-900 underline hover:text-blue-800">Lihat Rute</a>
              </div> -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.312089417189!2d108.2266215461642!3d-7.318796642689278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f50acec488d41%3A0xd72d3225cd6f0cbe!2sJasa%20Raharja.%20PT!5e0!3m2!1sid!2sid!4v1744911058135!5m2!1sid!2sid"
              width="800"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Alur Pengaduan Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-6 text-center">
            Alur Proses Pengaduan
          </h2>
          <p class="text-center text-gray-600 mb-12">
            Berikut adalah tahapan penanganan pengaduan yang kami lakukan
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4"
              >
                1
              </div>
              <h3 class="text-lg font-bold text-blue-900 mb-2 text-center">
                Penerimaan
              </h3>
              <p class="text-gray-600 text-center">
                Pengaduan diterima dan direkam dalam sistem kami
              </p>
            </div>

            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4"
              >
                2
              </div>
              <h3 class="text-lg font-bold text-blue-900 mb-2 text-center">
                Verifikasi
              </h3>
              <p class="text-gray-600 text-center">
                Tim kami akan memverifikasi dan mengevaluasi pengaduan
              </p>
            </div>

            <div class="flex flex-col items-center">
              <div
                class="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4"
              >
                3
              </div>
              <h3 class="text-lg font-bold text-blue-900 mb-2 text-center">
                Penyelesaian
              </h3>
              <p class="text-gray-600 text-center">
                Pengaduan ditindaklanjuti dan diberikan tanggapan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Methods Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-900 mb-6 text-center">
            Saluran Pengaduan Lain
          </h2>
          <p class="text-center text-gray-600 mb-12">
            Anda juga dapat menghubungi kami melalui saluran berikut:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4"
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
              </div>
              <h3 class="text-lg font-semibold text-blue-900 mb-2">
                Call Center
              </h3>
              <p class="text-gray-600">1500020</p>
              <p class="text-gray-600">24 jam setiap hari</p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-blue-900 mb-2">Email</h3>
              <p class="text-gray-600">pengaduan@jasaraharja.co.id</p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div
                class="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4"
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-blue-900 mb-2">WhatsApp</h3>
              <p class="text-gray-600">081 2100 500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Region selector for location-based assistance
const selectedRegion = ref("");
const regions = ref([
  {
    name: "Jakarta",
    address: "Jl. Raya Jatinegara Timur No.123, Jatinegara Jakarta Timur 13310",
    phone: "(021) 2101 2904",
    route: "#",
  },
  {
    name: "Bandung",
    address: "Jalan Soekarno Hatta 689A Jatisari Buah Batu Kota Bandung",
    phone: "(022) 7312476",
    route: "#",
  },
  {
    name: "Semarang",
    address: "Jl. Sultan Agung No.100, Wonotingal Candisari Semarang",
    phone: "(024) 3546140",
    route: "#",
  },
  {
    name: "Surabaya",
    address: "Jl. P. Diponegoro No. 96-98, Surabaya",
    phone: "(031) 5675102",
    route: "#",
  },
  {
    name: "Medan",
    address:
      "Jl. Jend. Gatot Subroto Nomor 142 KM 5,1 Kel. Sei Sikambing C II Kec. Medan Helvetia Kota Medan",
    phone: "(061) 8451746",
    route: "#",
  },
]);

const selectedRegionDetails = computed(() => {
  return (
    regions.value.find((region) => region.name === selectedRegion.value) || {}
  );
});

// Methods to open contact channels
const openWhatsApp = () => {
  const message = encodeURIComponent(
    "Subjek: [Kategori Pengaduan] - [Judul Singkat]\n" +
      "Nama: [Nama Lengkap]\n" +
      "NIK: [Nomor NIK]\n" +
      "Detail Pengaduan: [Jelaskan secara rinci]\n" +
      "Kontak: [No. HP/Email]\n" +
      "Lampiran: [Jika ada, sebutkan]"
  );
  window.open(`https://wa.me/62812100500?text=${message}`, "_blank");
};

const openEmail = () => {
  const subject = encodeURIComponent("Pengaduan Jasa Raharja");
  const body = encodeURIComponent(
    "Subjek: [Kategori Pengaduan] - [Judul Singkat]\n\n" +
      "Nama: [Nama Lengkap]\n" +
      "NIK: [Nomor NIK]\n" +
      "Detail Pengaduan: [Jelaskan secara rinci]\n" +
      "Kontak: [No. HP/Email]\n" +
      "Lampiran: [Jika ada, sebutkan]"
  );
  window.location.href = `mailto:pengaduan@jasaraharja.co.id?subject=${subject}&body=${body}`;
};

const openCall = () => {
  window.location.href = "tel:1500020";
};
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

.bg-gray-50 {
  background-color: #f5f5f5; /* Jasa Raharja's light gray */
}

.bg-gray-100 {
  background-color: #f0f0f0;
}

/* Focus and hover states */
.focus\:ring-blue-900:focus {
  --tw-ring-color: #003087;
}

.hover\:bg-blue-800:hover {
  background-color: #002370;
}

.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
