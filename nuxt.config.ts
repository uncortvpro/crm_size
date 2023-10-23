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
  modules: [
    '@nuxt/ui',
    "nuxt-svgo",
    '@pinia/nuxt',
  ],
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
    baseURL: '/crm_size/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
    head: {
      title: 'Size SRM',
    }
  },
})
