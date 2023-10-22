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
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        xl: "20px",
      },
    },
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
      raleway: ["Montserrat", "sans"],
    },
    extend: {
      backgroundImage: {
        'auth-bg': "linear-gradient(to bottom, #EDEDE4 40%, #ffffff 40%)",
      },
      boxShadow: {
        'auth-shadow': '0px 0px 15px #DCDCDC',
      },
      colors: {
        white: "#FFFFFF",
        black: "#111111",
        gray: {
          50: "#F5F5F3",
          100: "#DCDCDC"
        },
        "dark-transparent": "#0000001f",
        beige: "#EDEDE4",
      },
      screens: {
        "is-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}