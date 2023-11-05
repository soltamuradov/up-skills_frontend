/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-1': '#302C42',
        'black-2': 'rgba(58, 52, 86, 0.95)',
      }
    },
  },
  plugins: [],
}

