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

  const pkg = require('./package.json');

  return {
    presets,
    plugins: [
      polyfill
        ? [
            'babel-plugin-polyfill-corejs3',
            {
              version: pkg.dependencies['core-js'],
              proposals: true,
              method: `usage-${polyfill}`,
            },
          ]
        : undefined,
    ].filter(Boolean),
  };
});
