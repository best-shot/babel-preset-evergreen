'use strict';

const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api, options = {}) => {
  api.assertVersion(7);

  const { polyfill = false } = options;

  const pkg = require('./package.json');

  const presets = [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: { pure: false, global: 'usage' }[polyfill] || false,
        ...(polyfill === 'global'
          ? { corejs: pkg.dependencies['core-js'] }
          : undefined),
        shippedProposals: true,
        spec: true,
        bugfixes: true,
      },
    ],
  ];

  return {
    presets,
    plugins: [
      polyfill === 'pure'
        ? [
            '@babel/transform-runtime',
            {
              corejs: { version: 3, proposals: true },
              version: pkg.dependencies['@babel/runtime-corejs3'],
            },
          ]
        : undefined,
    ].filter(Boolean),
  };
});
