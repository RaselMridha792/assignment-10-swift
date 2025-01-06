import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Bebas': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
}

