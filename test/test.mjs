import { fileURLToPath } from 'node:url';

import babel from '@babel/core';
import test from 'ava';

const src = `
import foo from "./foo.json" with { type: "json" };
import bar from "./bar.json" assert { type: "json" };

import("./foo.json", { with: { type: "json" } });
import("./bar.json", { assert: { type: "json" } });

globalThis.a();

io.flatMap();
io.at(-1);
io.replaceAll(' ');
io.matchAll();
`;

const entry = fileURLToPath(new URL('../index.cjs', import.meta.url));

function action(options) {
  return babel.transformSync(src, {
    presets: [[entry, options]],
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
