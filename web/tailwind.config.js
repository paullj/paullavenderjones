module.exports = {
  purge: ['./src/**/*.html', './src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        'transparent-white': 'rgba(255, 255, 255, 0)',
        'transparent-black': 'rgba(0, 0, 0, 0)',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'hover'],
    },
  },
  plugins: [],
};
