/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'moo-lah-lah': ['Moo Lah Lah', 'cursive'], // Add the custom font here
        'creepster-regular': ['Creepster', 'system-ui'],
      },
    },
  },
  plugins: [],
}