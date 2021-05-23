module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'raindrop': "url('/images/landscape.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
