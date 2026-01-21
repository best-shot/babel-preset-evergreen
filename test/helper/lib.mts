import { fileURLToPath } from 'node:url';

import babel from '@babel/core';

import { readFileSync } from 'node:fs';
import type { ExecutionContext } from 'ava';

const src = readFileSync(
  new URL('../fixture/input.js', import.meta.url),
  'utf8',
);

const entry = fileURLToPath(new URL('../../index.cjs', import.meta.url));

type Options = {
  polyfill?:
    | false
    | {
        usage?: 'global' | 'pure';
        include?: string[];
        exclude?: string[];
        mini?: boolean;
      };
};

function action(options: Options, targets: string[]) {
  return babel.transformSync(src, {
    presets: [[entry, options]],
    targets,
    configFile: false,
    babelrc: false,
    filename: 'a.js',
  })?.code;
}

const browsers: string[] = [
  'ie > 9',
  'chrome > 30',
  'chrome > 67',
  'chrome > 120',
];

export function marco(t: ExecutionContext, options: Options) {
  for (const browser of browsers) {
    t.snapshot(action(options, [browser]), browser);
  }
}
