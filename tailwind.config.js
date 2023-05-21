/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
      },
      fontWeight: {
        'weight-800': '800'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

