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
      "3xl": "1600px",
      "4xl": "1760px",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans"],
    },
    extend: {
      gridTemplateColumns: {
        'profile-section': '260px auto',
        'profile-section-4xl': '293px auto',
        'table-9': 'repeat(9, minmax(0, auto))',
        'auto-3': 'repeat(3, minmax(0, auto))',
        'order-details-modal-md': '60px auto auto',
        'order-details-modal-xs': '40px auto auto'
      },
      transitionDuration: {
        'hover': '200ms',
      },
      opacity: {
        'hover': '60%',
      },
      backgroundImage: {
        'auth-bg': "linear-gradient(to bottom, #EDEDE4 40%, #ffffff 40%)",
      },
      boxShadow: {
        'auth-shadow': '0px 0px 15px #DCDCDC',
      },
      colors: {
        danger: '#E33629',
        white: "#FFFFFF",
        black: "#111111",
        gray: {
          50: "#F5F5F3",
          100: "#DCDCDC",
        },
        'gray-1': "#DCDCDC",

        "dark-transparent": "#0000001f",
       'beige-light': '#FAFAF7',
        beige: "#EDEDE4",
        'beige-1': "#C8C8BE",  
        'beige-2': '#7D7D79'
      },
      screens: {
        "is-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}