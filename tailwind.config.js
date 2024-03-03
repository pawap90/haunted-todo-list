const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        'sans': ['"Noto Serif"', ...defaultTheme.fontFamily.sans],
        'display': ['"Amatic SC"']
      }
    },
  },
  plugins: [],
}

