module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        openSans: "'Open Sans', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
