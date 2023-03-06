module.exports = {
  extends: ['./eslint-config'],
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
        '@typescript-eslint/quotes': 'error',
        'no-underscore-dangle': 'error',
        'quotes': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'require-jsdoc': 'off',
      },
      settings: {
        'import/extensions': ['.ts', '.tsx', '.js', '.jsx', '.mdx'],
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.mdx'],
          },
        },
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
