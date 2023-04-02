/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-color": "#F2BE5C",
        "neutral-color": "rgba(166, 166, 166, 1)"
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
