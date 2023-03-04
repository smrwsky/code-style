const eslintBase = require('./eslint-config');

module.exports = [
  ...eslintBase,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
];
