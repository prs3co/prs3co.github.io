/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  safelist: ["dark"],
  theme: {
    extend: {
      colors: {
        darkblue: {
          400: '#233044',
          500: '#0a192f',
          600: '#09172a',
        },
        whitesoft : {
          500: '#F8F1F1'
        },
        mountgreen : {
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
