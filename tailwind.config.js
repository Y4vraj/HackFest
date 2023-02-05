/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["* ./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'C1':'#2d3142ff',
        'C2':'#e0e2dbff',
        'C3':'#1d7874ff',
        'C4':'#f58f29ff',
        'C5':'#c03221ff'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
