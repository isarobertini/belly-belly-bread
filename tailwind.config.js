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
      },
      colors: {
        'pink-light': '#FBACE9',
        'pink-bright': '#FF0BA2',
        'yellow-bright': '#FFF443',
        'orange-bright': '#FF7800',
        'brown-dark': '#1a0100',
        'brown-light': '#8D5222',
      },
    },
  },
  plugins: [],
}
