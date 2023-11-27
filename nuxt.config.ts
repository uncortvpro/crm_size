// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      url: process.env.NUXT_URL,
    }
  },
  colorMode: {
    preference: "light",
  },
  ssr: false,
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  modules: ['@nuxt/ui', "nuxt-svgo", '@pinia/nuxt', "@nuxt/image", '@vueuse/nuxt', 'nuxt-swiper'],
  swiper: {
    modules: [
      'navigation',
      'pagination',
      'thumbs',
      'free-mode',
      'controller',
      'autoplay',
      'effect-creative',
      'scrollbar',
      'grid',
    ],
  },
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
    },
    buildAssetsDir: 'assets',
  },
})