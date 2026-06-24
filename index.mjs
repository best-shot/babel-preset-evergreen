import { declare } from '@babel/helper-plugin-utils';
import { excludeIfMini } from './mini.mjs';
import pkg from './package.json' with { type: 'json' };

export default declare((api, options = {}) => {
  api.assertVersion(8);
  const { polyfill = false } = options;

  const presets = [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: false,
        shippedProposals: true,
        corejs: pkg.dependencies['core-js'],
      },
    ],
  ];
  if (!polyfill) {
    return {
      presets,
    };
  }
  const {
    usage = 'global',
    include = [],
    exclude = [],
    mini = false,
  } = polyfill;
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
      mini
        ? [
            '@babel/plugin-transform-unicode-property-regex',
            {
              useUnicodeFlag: false,
            },
          ]
        : undefined,
    ].filter(Boolean),
  };
});
