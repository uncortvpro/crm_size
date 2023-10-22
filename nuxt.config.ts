// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    "nuxt-svgo",
  ],
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
