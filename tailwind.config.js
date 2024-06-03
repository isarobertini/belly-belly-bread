/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oxygen-mono': ['Oxygen Mono', 'monospace'],
        'lexend': ['Lexend', 'sans-serif'],

      },
      colors: {
        'pink-light': '#FBACE9',
        'pink-bright': '#F83FA1',
        'yellow-bright': '#FFF443',
        'orange-bright': '#FF5500',
        'brown-dark': '#1a0100',
        'brown-light': '#8D5222',
        'home-dark': '#E0D9CE',
        'performance-act-one': '#C1C1C1',
        'performance-act-two': '#DFE1F0'//this is the old background
      },
    },
  },
  plugins: [],
}
