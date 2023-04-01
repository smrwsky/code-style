# @justoss/eslint-config

Shareable configurations for JavaScript and TypeScript projects based on Google style guides.

## Getting Started

### ESLint configuration

For JS projects

```js
// .eslintrc.js

module.exports = {
  extends: [
    './node_modules/@justoss/code-style/eslint-config',
    './node_modules/@justoss/code-style/eslint-config-react',
  ],
  // Your settings...
};
```

For TS projects

```js
// .eslintrc.js

module.exports = {
  extends: [
    './node_modules/@justoss/code-style/eslint-config',
    './node_modules/@justoss/code-style/eslint-config-typescript',
    './node_modules/@justoss/code-style/eslint-config-react',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        tsconfigRootDir: '.',
        project: ['./tsconfig.json'],
      },
    },
  ],
  // Your settings...
};
```

### Prettier configuration

```js
// .prettier-config.js

module.exports = require('@justoss/code-style/prettier-config');
```

