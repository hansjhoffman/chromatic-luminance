# chromatic-luminance

[![Coverage Status](https://coveralls.io/repos/github/hansjhoffman/chromatic-luminance/badge.svg?branch=master)](https://coveralls.io/github/hansjhoffman/chromatic-luminance?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

Lightweight (no dependencies) and fast color brightness detector based on the w3 documentation for color luminance: https://www.w3.org/TR/WCAG20/#relativeluminancedef.

## Installation

## Usage
> es6

```javascript
import isDark from 'chromatic-luminance';

if (isDark('#888')) {
  // do something
}
```

> es5

```javascript
var isDark = require('chromatic-luminance');

if (isDark('#888')) {
  // do something
}
```

## Test
`yarn test` or `npm run test`

## License
MIT
