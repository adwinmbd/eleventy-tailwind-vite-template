const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const nanofied = process.env.NODE_ENV === 'production' ? {} : false

const plugins = [
  postcssPresetEnv({
    /* use stage 3 features + css nesting rules */
    // stage: 3,
    features: {
      'nesting-rules': true,
    },
  }),
  tailwindcss(),
  nanofied
];

module.exports = {
  plugins
};
