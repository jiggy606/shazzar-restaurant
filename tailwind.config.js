/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "650px",
        "md": "1150px",
        "lg": "2000px",
        "2xl": "3000px",
      },
    },
  },
  plugins: [],
}
