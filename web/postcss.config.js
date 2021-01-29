const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nested = require('postcss-nested');
const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [tailwindcss, nested, autoprefixer, ...(production ? [cssnano] : [])],
};
