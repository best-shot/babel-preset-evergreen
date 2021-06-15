'use strict';

const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api, options = {}) => {
  api.assertVersion(7);

  const { polyfill = false } = options;

  const presets = [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: { pure: false, global: 'usage' }[polyfill] || false,
        ...(polyfill === 'global' ? { corejs: '3.14' } : undefined),
        shippedProposals: true,
        spec: true,
        bugfixes: true,
      },
    ],
  ];

  return {
    presets,
    plugins:
      polyfill === 'pure'
        ? [['@babel/transform-runtime', { corejs: 3 }]]
        : undefined,
  };
});
