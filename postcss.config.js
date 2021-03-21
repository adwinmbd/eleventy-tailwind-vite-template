const cssnano = require('cssnano');
const taildwindcssjit = require('@tailwindcss/jit');
const postcssPresetEnv = require('postcss-preset-env');

const plugins = [
  postcssPresetEnv({
    /* use stage 3 features + css nesting rules */
    // stage: 3,
    features: {
      'nesting-rules': true,
    },
  }),
  cssnano(),
  taildwindcssjit()];

module.exports = {
  plugins
};