/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // activamos modo oscuro basado en clase
  theme: {
    extend: {
      colors: {
        primary: '#00b36b',
        secondary: '#1a1a2e',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}