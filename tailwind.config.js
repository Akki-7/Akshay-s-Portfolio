/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Inter','sans-serif']
      },
      colors: {
        brand: {
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0,0,0,0.45)'
      }
    },
  },
  plugins: [],
}
