const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');
const eslintPluginImport = require('eslint-plugin-import');

const eslintBase = require('./eslint-config.js');

module.exports = [
  ...eslintBase,
  {
    files: ['**/*.ts', '**/*.tsx'],
    parser: typescriptEslintParser,
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      ...typescriptEslintPlugin.configs['eslint-recommended'].rules,
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...typescriptEslintPlugin.configs['recommended-requiring-type-checking']
        .rules,
      ...eslintPluginImport.configs.typescript.rules,
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: false },
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/quotes': 'error',
      'no-underscore-dangle': 'error',
      'quotes': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'require-jsdoc': 'off',
    },
    settings: {
      ...eslintPluginImport.configs.typescript.settings,
      'import/extensions': ['.ts', '.tsx', '.js', '.jsx', '.mdx'],
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.mdx'],
        },
      },
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
