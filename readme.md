# babel-preset-evergreen

A [babel] preset for popular javascript syntaxes.

[![npm][npm-badge]][npm-url]
[![license][license-badge]][github-url]
![node][node-badge]

This preset can transform:

- ECMAScript 2020 syntax
- Class static properties
- Decorators

## Installation

```bash
npm install babel-preset-evergreen --save-dev
```

## Usage

```json
// example: babel.config.json
{
  "presets": [
    [
      "evergreen",
      {
        "polyfill": "usage",
        "targets": { "browsers": ... }
      }
    ]
  ]
}
```

## Options

### polyfill

- type: [ false, 'global', 'pure' ]
- default: false

How `babel` handles polyfills. `pure` is an experimental option.

References: <https://github.com/babel/babel/issues/10008>

Install `core-js@3` as a top-level dependency when specifying 'global' or 'pure'.

```bash
npm install core-js@3 --save
```

[babel]: https://github.com/babel/babel
[npm-url]: https://www.npmjs.com/package/@best-shot/preset-babel
[npm-badge]: https://img.shields.io/npm/v/@best-shot/preset-babel.svg?style=flat-square&logo=npm
[github-url]: https://github.com/Airkro/best-shot/tree/master/packages/preset-babel
[node-badge]: https://img.shields.io/node/v/@best-shot/preset-babel.svg?style=flat-square&colorB=green&logo=node.js
[license-badge]: https://img.shields.io/npm/l/@best-shot/preset-babel.svg?style=flat-square&colorB=blue&logo=github
