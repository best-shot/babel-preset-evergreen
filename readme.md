# babel-preset-evergreen

A [babel] preset for popular javascript syntaxes.

[![npm][npm-badge]][npm-url]
[![license][license-badge]][github-url]
![node][node-badge]
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbest-shot%2Fbabel-preset-evergreen.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbest-shot%2Fbabel-preset-evergreen?ref=badge_shield)

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
        "targets": {}
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
[npm-url]: https://www.npmjs.com/package/babel-preset-evergreen
[npm-badge]: https://img.shields.io/npm/v/babel-preset-evergreen.svg?style=flat-square&logo=npm
[github-url]: https://github.com/best-shot/babel-preset-evergreen
[node-badge]: https://img.shields.io/node/v/babel-preset-evergreen.svg?style=flat-square&colorB=green&logo=node.js
[license-badge]: https://img.shields.io/npm/l/babel-preset-evergreen.svg?style=flat-square&colorB=blue&logo=github


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbest-shot%2Fbabel-preset-evergreen.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbest-shot%2Fbabel-preset-evergreen?ref=badge_large)