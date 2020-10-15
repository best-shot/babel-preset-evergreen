# babel-preset-evergreen

A [babel] preset for popular javascript syntaxes.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[babel]: https://github.com/babel/babel
[npm-url]: https://www.npmjs.com/package/babel-preset-evergreen
[npm-badge]: https://img.shields.io/npm/v/babel-preset-evergreen.svg?style=flat-square&logo=npm
[github-url]: https://github.com/best-shot/babel-preset-evergreen
[github-badge]: https://img.shields.io/npm/l/babel-preset-evergreen.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/babel-preset-evergreen.svg?style=flat-square&colorB=green&logo=node.js

This preset can transform:

- ECMAScript 2021 syntax
- Class static properties

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
        "polyfill": "global",
        "targets": "chrome >= 60"
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

### targets

- type: `string` | `string[]` | `object`
- default: `browserslist.loadConfig() || browserslist.defaults`

Describes the environments you support/target for your project.
