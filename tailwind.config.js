/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbg: "#131313",
        autoC: "#A2A3A4",
      }
    },
  },
  plugins: [],
}

