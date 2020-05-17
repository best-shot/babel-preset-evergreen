const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api, options) => {
  api.assertVersion(7);

  const { polyfill = false, targets = { browsers: 'defaults' } } = options;

  const presets = [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: { pure: false, global: 'usage' }[polyfill] || false,
        ...(polyfill === 'global' ? { corejs: 3 } : undefined),
        shippedProposals: true,
        spec: true,
        bugfixes: true,
        targets,
      },
    ],
  ];

  const plugins = [
    ['@babel/transform-runtime', { corejs: 3, useESModules: true }],
  ];

  if (polyfill === 'pure') {
    return {
      presets,
      plugins,
    };
  }

  return { presets };
});
