/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.vitepress/theme/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
