module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        extraFileExtensions: ['.json'],
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
          modules: true,
        },
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false },
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as' },
        ],
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'no-underscore-dangle': 'error',
        'quotes': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'require-jsdoc': 'off',
      },
    },
    {
      files: ['**/*.d.ts', '**/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
