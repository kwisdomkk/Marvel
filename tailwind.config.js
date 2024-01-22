/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "special-font":'Cute Font',
        "special2":'Rubik Burned'
      },
      colors: {
        "main-dark":"#202020"
      }
    },
  },
  plugins: [],
}

