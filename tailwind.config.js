module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#F2644C',
      secondary: '#F1D580',
      nuetral: '#232022'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
