<template>
  <footer class="bg-gradient-to-b from-slate-100 to-white text-black py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <!-- Logo and Description -->
        <div>
          <img
            src="@/assets/img/logo.png"
            alt="Jasa Citron Logo"
            class="w-32 mb-4"
          />
          <p class="text-sm leading-relaxed">
            Melaksanakan Asuransi Kecelakaan penumpang alat angkutan umum dan
            asuransi tanggung jawab menurut hukum terhadap pihak ketiga
            sebagaimana ditatur UU No. 33 dan 34 tahun 1964 berikut peraturan
            pelaksanaannya.
          </p>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Kantor Pusat</h3>
          <p class="text-sm mb-2">
            Jalan K.I. Tik Romi Said, Ran G-6 Kuningan, Jakarta 12920, Indonesia
          </p>
          <p class="text-sm mb-2">
            <a href="mailto:pusat@jasa-citron.co.id" class="hover:underline"
              >pusat@jasa-citron.co.id</a
            >
          </p>
          <p class="text-sm mb-2">
            <a href="tel:1500020" class="hover:underline">1500020</a>
          </p>
          <p class="text-sm mb-4">
            <a href="tel:0812100500" class="hover:underline">0812100500</a>
          </p>
          <div class="flex space-x-4">
            <a
              href="https://www.instagram.com/jasacitron"
              target="_blank"
              class="hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.36-2.617-6.78-6.981-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/jasacitron"
              target="_blank"
              class="hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/jasacitron"
              target="_blank"
              class="hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96s9.96-4.46 9.96-9.96c0-5.5-4.46-9.96-9.96-9.96zm0 1.5c4.694 0 8.46 3.766 8.46 8.46 0 4.694-3.766 8.46-8.46 8.46-4.694 0-8.46-3.766-8.46-8.46 0-4.694 3.766-8.46 8.46-8.46zm-1.5 3.54v3.06h-2.25v2.25h2.25v6.15c.44.075.885.135 1.35.135.465 0 .915-.06 1.35-.135v-6.15h2.025l.375-2.25h-2.4v-2.475c0-.615.3-1.215 1.275-1.215h1.125v-1.875c-.405-.06-.81-.09-1.215-.09-1.905 0-3.015 1.16-3.015 3.39z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/jasacitron"
              target="_blank"
              class="hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5v-9h3v9zm-1.5-10.5c-.966 0-1.75-.784-1.75-1.75S5.534 5 6.5 5 8.25 5.784 8.25 6.75 7.466 8.5 6.5 8.5zM19 19h-3v-4.5c0-1.378-.672-2.25-1.875-2.25S12 13.122 12 14.5V19h-3v-9h3v1.125c.422-.672 1.266-1.125 2.25-1.125 1.688 0 3 1.313 3 3V19z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/layanan"
                class="flex items-center space-x-2 hover:underline"
              >
                <span>Layanan Kami</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/pengaduan"
                class="flex items-center space-x-2 hover:underline"
              >
                <span>Hubungi Kami</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/tata-kelola#struktur-organisasi"
                class="flex items-center space-x-2 hover:underline"
              >
                <span>Struktur Organisasi</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/profil"
                class="flex items-center space-x-2 hover:underline"
              >
                <span>Tentang Kami</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        class="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm"
      >
        <p>Copyright © 2025</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional script logic needed for this static component
</script>

<style scoped>
/* Custom Colors to Match Jasa Raharja Branding */
.bg-blue-900 {
  background-color: #003087; /* Jasa Raharja's primary blue */
}

.bg-blue-950 {
  background-color: #001f5b; /* Darker blue for gradient */
}

.border-gray-700 {
  border-color: #4b5e7e;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .grid {
    gap: 2rem;
  }

  .w-32 {
    width: 8rem;
  }

  .text-lg {
    font-size: 1.125rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }
}
</style>
