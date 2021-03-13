const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      purple: colors.purple,
      green: colors.emerald,
      yellow: colors.amber,
      pink: colors.pink,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
        fontFamily: { 
          'manrope': ["manrope", "sans-serif"],
        },
        height: {
          xl: '600px',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
