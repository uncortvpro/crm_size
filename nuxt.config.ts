// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      url: process.env.NUXT_URL,
    }
  },
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', "nuxt-svgo", '@pinia/nuxt', "@nuxt/image"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  svgo: {
    autoImportPath: "./assets/img/svg/",
  },
  alias: {
    "@img": "./assets/img",
  },
  app: {
    head: {
      title: 'Size SRM',
    }
  },
})