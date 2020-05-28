const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api, options) => {
  api.assertVersion(7);

  const { polyfill = false, targets = { browsers: 'defaults' } } = options;

  const plugins = [
    ['@babel/proposal-decorators', { decoratorsBeforeExport: true }],
  ];

  if (polyfill === 'pure') {
    plugins.push([
      '@babel/transform-runtime',
      { corejs: 3, useESModules: true },
    ]);
  }

  return {
    presets: [
      [
        '@babel/env',
        {
          modules: false,
          useBuiltIns: polyfill === 'pure' ? false : polyfill,
          ...(polyfill === 'usage' ? { corejs: 3 } : undefined),
          shippedProposals: true,
          spec: true,
          bugfixes: true,
          targets,
        },
      ],
    ],
    plugins,
  };
});
