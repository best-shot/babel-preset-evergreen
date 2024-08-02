import { fileURLToPath } from 'node:url';

import babel from '@babel/core';

import { readFileSync } from 'node:fs';

const src = readFileSync(
  new URL('../fixture/input.js', import.meta.url),
  'utf8',
);

const entry = fileURLToPath(new URL('../../index.cjs', import.meta.url));

function action(options, targets) {
  return babel.transformSync(src, {
    presets: [[entry, options]],
    targets,
    configFile: false,
    babelrc: false,
    filename: 'a.js',
  }).code;
}

const browsers = ['ie > 9', 'chrome > 30', 'chrome > 67', 'chrome > 120'];

export function marco(t, options) {
  for (const browser of browsers) {
    t.snapshot(action(options, browser), browser);
  }
}
