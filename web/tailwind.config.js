const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      purple: colors.purple,
      green: colors.emerald,
      yellow: colors.yellow,
      pink: colors.pink,
      orange: colors.orange,
      lime: colors.lime,
      teal: colors.teal,
      fuchsia: colors.fuchsia,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
        fontFamily: { 
          'manrope': ["manrope", "sans-serif"],
          'caveat': ["caveat", "serif"]
        },
        height: {
          xl: '600px',
        },
        colors: {
          darkgray: colors.blueGray,
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
