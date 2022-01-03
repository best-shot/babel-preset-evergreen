# babel-preset-evergreen <img src="https://cdn.jsdelivr.net/gh/babel/logo/babel.png" alt="logo" height="80" align="right">

A [babel] preset for modern javascript syntaxes.

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

- ECMAScript 2022 syntax

## Installation

```bash
npm install babel-preset-evergreen --save-dev
```

## Usage

```jsonc
// example: babel.config.json
{
  "targets": "chrome >= 60",
  "presets": [
    [
      "evergreen",
      {
        "polyfill": "global"
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

## Tips

You might need to pin `core-js@3` when your project dependency tree has `core-js@2`:

```sh
npm install core-js@3
```
