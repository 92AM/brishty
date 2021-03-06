module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landscape': "url('/images/landscape.jpg')",
      }),
      zIndex: theme => ({
        '-10': '-10',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
