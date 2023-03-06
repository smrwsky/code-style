# @justoss/eslint-config

Shareable configurations for JavaScript and TypeScript projects based on Google style guides.

## Usage

```js
// .eslintrc.js

module.exports = {
  extends: [
    '@justoss/code-style', // for JS projects
    // '@justoss/code-style/eslint-config-typescript', // for TS projects
    '@justoss/code-style/eslint-config-react',
  ],
};
```

```js
// .prettier-config.js

module.exports = require('@justoss/code-style/prettier-config');
```
