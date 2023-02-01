import { fileURLToPath } from 'node:url';

import babel from '@babel/core';
import test from 'ava';

const src = `
io.flatMap();
`;

function action(options) {
  return babel.transformSync(src, {
    presets: [
      [fileURLToPath(new URL('../index.cjs', import.meta.url)), options],
    ],
    targets: 'chrome > 67',
    configFile: false,
    babelrc: false,
    filename: 'a.js',
  });
}

test('global', (t) => {
  const { code } = action({ polyfill: 'global' });

  t.snapshot(code);
});

test('pure', (t) => {
  const { code } = action({ polyfill: 'pure' });

  t.snapshot(code);
});
