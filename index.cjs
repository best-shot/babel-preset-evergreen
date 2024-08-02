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
        useBuiltIns: false,
        shippedProposals: true,
        spec: true,
        bugfixes: true,
      },
    ],
  ];

  if (!polyfill) {
    return { presets };
  }

  const { usage = 'global', include, exclude } = polyfill;

  const pkg = require('./package.json');

  return {
    presets,
    plugins: [
      [
        'babel-plugin-polyfill-corejs3',
        {
          version: pkg.dependencies['core-js'],
          proposals: true,
          method: `usage-${usage}`,
          include,
          exclude,
        },
      ],
    ],
  };
});
