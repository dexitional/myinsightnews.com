/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ["Open Sans", ...defaultTheme.fontFamily.sans],
      'opensans': ["Open Sans", "sans-serif"],
      "josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      "alegreya": ["Alegreya", ...defaultTheme.fontFamily.sans],
      "caveat": ["Caveat", ...defaultTheme.fontFamily.sans],
      "kaushan": ["'Kaushan Script'", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
