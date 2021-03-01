module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colourPop: '#e51a94',
        colourTextGrey: '#3e4a56',
        colourTextDark: '#1f306d',
        colourBackLilac: '#e0e8fa',
        colourBackGrey: '#f5f7fd',
        colourBackWhite: '#ffffff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
