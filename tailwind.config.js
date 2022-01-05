module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        philosopher: "'Philosopher', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
