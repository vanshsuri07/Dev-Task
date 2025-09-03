/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#8A2BE2',
          700: '#6A1B9A',
        },
      },
    },
  },
  plugins: [],
}
