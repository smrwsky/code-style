module.exports = {
  plugins: ['jsx-a11y', 'react', 'react-hooks', 'react-perf'],
  extends: [
    'plugin:import/react',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-perf/all',
  ],
  rules: {
    'import/no-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': ['error', { callbacksLast: true }],
    'react/no-array-index-key': 'off',
    'react-perf/jsx-no-new-object-as-prop': [
      'error',
      {
        nativeAllowList: ['style'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
