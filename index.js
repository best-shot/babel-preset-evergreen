const { declare } = require('@babel/helper-plugin-utils');
const { loadConfig } = require('browserslist');

function getList() {
  const config = loadConfig({
    path: process.cwd(),
  });
  return config && config.length > 0 ? config : 'defaults';
}

module.exports = declare((api, options) => {
  api.assertVersion(7);

  const { polyfill = false, targets = getList() } = options;

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

  if (polyfill === 'pure') {
    return {
      presets,
      plugins: [
        ['@babel/transform-runtime', { corejs: 3, useESModules: true }],
      ],
    };
  }

  return { presets };
});
