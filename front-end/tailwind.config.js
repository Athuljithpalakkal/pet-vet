/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('../src/assets/pet vector4.jpeg')"
      }
    },
  },
  plugins: [
  ],
}

