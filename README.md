# @justoss/eslint-config

Shareable configurations for JavaScript and TypeScript projects based on Google style guides.

## Getting Started

### ESLint configuration

For JS projects

```js
// .eslintrc.js

module.exports = {
  extends: [
    './node_modules/@justoss/code-style',
    './node_modules/@justoss/code-style/eslint-config-react',
  ],
};
```

For TS projects

```js
// .eslintrc.js

module.exports = {
  extends: [
    './node_modules/@justoss/code-style/eslint-config-typescript', // for TS projects
    './node_modules/@justoss/code-style/eslint-config-react',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: '.',
        project: ['./tsconfig.json'],
      },
    },
  ],
};
```

### Prettier configuration

```js
// .prettier-config.js

module.exports = require('@justoss/code-style/prettier-config');
```
