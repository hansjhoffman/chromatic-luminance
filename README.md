# chromatic-luminance

[![Build Status](https://travis-ci.org/hansjhoffman/chromatic-luminance.svg?branch=master)](https://travis-ci.org/hansjhoffman/chromatic-luminance)
[![Coverage Status](https://coveralls.io/repos/github/hansjhoffman/chromatic-luminance/badge.svg?branch=master)](https://coveralls.io/github/hansjhoffman/chromatic-luminance?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

Lightweight (no dependencies) and fast color brightness detector based on the w3 documentation for color luminance: https://www.w3.org/TR/WCAG20/#relativeluminancedef. Answers question: dark-background -> use light text OR light-background -> use dark text.

## Installation
`yard add chromatic-luminance` or `npm install chromatic-luminance`

## API
```
/*
 * Returns True/False if color is considered 'dark' or not by W3 luminance standards
 * @param {color} can be shorthand hex (e.g. '#000'), normal hex (e.g. '#000000') or HTML named colors (e.g. 'black')
 */
default function isDark(color: string): boolean;
```

## Test
`yarn test` or `npm run test`

## License
MIT
