const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y');
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginReactPerf = require('eslint-plugin-react-perf');
module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', ' **/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'jsx-a11y': eslintPluginJsxA11y,
      'react': eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'react-perf': eslintPluginReactPerf,
    },
    rules: {
      ...eslintPluginJsxA11y.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginReactPerf.configs.all.rules,
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
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    settings: {
      'import/extensions': ['.js', '.mdx'],
    },
  },
];
