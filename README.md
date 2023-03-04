# @justoss/eslint-config

Shareable configurations for JavaScript and TypeScript projects based on Google style guides.

## Usage

```js
// eslint.config.js
const eslintBase = require('@justoss/code-style');
const eslintTypescript = require('@justoss/code-style/eslint-config-typescript');
const eslintReact = require('@justoss/code-style/eslint-config-react');

module.exports = [
  eslintBase, // for JS projects
  // eslintTypescript, // for TS projects
  eslintReact,
  {
    // overrides
  },
];
```

```js
// .prettier-config.js

module.exports = require('@justoss/code-style/prettier-config');
```
