/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  safelist: [
    "dark",
    'bg-rose-900',
    'bg-blue-900',
    'bg-teal-900',
    'bg-amber-900',
  ],
  theme: {
    extend: {
      colors: {
        darkblue: {
          300: '#8892b0',
          400: '#233044',
          500: '#0a192f',
          600: '#09172a',
        },
        whitesoft : {
          200: '#F1F5F9',
          300: '#dfd9d9',
          400: '#ccd6f6',
          500: '#F8F1F1',
          600: '#ccd6f6',
        },
        mountgreen : {
          400: '#8be3cd',
          500: '#16C79A',
        },
        mateblue : {
          500: '#11698E',
          600: '#19456B',
        },
      },
    },
  },
  plugins: [],
}
