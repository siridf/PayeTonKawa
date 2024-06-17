// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  css: ['~/assets/css/tailwind.css'],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: [
    '@pinia/nuxt',
  ], 
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
