'use strict';

const { declare } = require('@babel/helper-plugin-utils');
const { excludeIfMini } = require('./mini.cjs');

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

  const {
    usage = 'global',
    include = [],
    exclude = [],
    mini = false,
  } = polyfill;

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
          include: mini ? [...include, 'web.url'] : include,
          exclude: mini ? [...exclude, ...excludeIfMini] : exclude,
        },
      ],
    ],
  };
});
