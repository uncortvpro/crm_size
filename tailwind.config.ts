import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    './components//*.{js,vue,ts}',
    './layouts//*.vue',
    './pages//*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1760px",
    },
    fontFamily: {
      raleway: ["Raleway", "sans"],
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#111111",
        gray: {
          1: "#DCDCDC",
          2: "#F5F5F3"
        },
      },
      screens: {
        "is-hover": { raw: "(hover: hover)" },
      },
    },
  },
}