// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Jasa Raharja Kota Tasikmalaya",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Website statis Jasa Raharja Tasikmalaya Kota",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "logo.ico" }],
    },
  },
  nitro: {
    preset: "vercel", // Use the Vercel preset
  },
})
