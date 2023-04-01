# @justoss/eslint-config

Shareable configurations for JavaScript and TypeScript projects based on Google style guides.

## Usage

```js
// eslint.config.js

module.exports = {
  extends: [
    './node_modules/@justoss/code-style/eslint-config',
    './node_modules/@justoss/code-style/eslint-config-typescript',
    './node_modules/@justoss/code-style/eslint-config-react'
  ],
  // Your options...
}
```

```js
// .prettier-config.js

module.exports = require('@justoss/code-style/prettier-config');
```