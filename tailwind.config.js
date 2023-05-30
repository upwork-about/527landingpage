/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",

  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1400px',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },

    extend: {
      colors: {
        white: '#ffffff',
        'h': '#040C25',
        'page-bg': '#061237',
        line: 'rgba(26, 186, 237, 0.04)'
      },
      boxShadow: {
        'input-box': '0px 8px 40px rgba(26, 186, 237, 0.04)',
      },
      gradientColorStops: {
        'bg': 'rgba(255, 255, 255, 0.05) -8.13%, rgba(255, 255, 255, 0) 94.42%',
      },
    },
  },
  plugins: [],
}

