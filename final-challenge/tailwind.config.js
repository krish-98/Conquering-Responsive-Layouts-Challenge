/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#2e323f",
        darkLight: "#3b4050",
        lightGray: "#6f737f",
        gold: "#a59678",
      },
    },
  },
  plugins: [],
}
