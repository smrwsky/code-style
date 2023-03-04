const eslint = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginPrettier = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.mdx'],
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
      },
    },
    plugins: {
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'block-scoped-var': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'import/no-default-export': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          'alphabetize': { order: 'asc' },
        },
      ],
      'guard-for-in': 'error',
      'new-cap': 'error',
      'no-array-constructor': 'error',
      'no-caller': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-invalid-this': 'error',
      'no-multi-str': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'one-var': [
        'error',
        {
          var: 'never',
          let: 'never',
          const: 'never',
        },
      ],
      'prefer-arrow-callback': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prettier/prettier': 'error',
      'quotes': ['error', 'single'],
      'require-jsdoc': [
        'error',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
          },
        },
      ],
      'valid-jsdoc': [
        'error',
        {
          requireParamDescription: false,
          requireReturnDescription: false,
          requireReturn: false,
          prefer: { returns: 'return' },
        },
      ],
    },
  },
];
