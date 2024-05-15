import { fileURLToPath } from 'node:url';

import babel from '@babel/core';
import test from 'ava';

const src = `
import foo from "./foo.json" with { type: "json" };
import bar from "./bar.json" assert { type: "json" };

import("./foo.json", { with: { type: "json" } });
import("./bar.json", { assert: { type: "json" } });

const array = [];
const string = '';

array.findLastIndex();
array.at(-1);
array.toReversed();
array.toSorted();
array.groupBy();

string.at(-2);

const ui = new Set()

ui.intersection()

Object.groupBy(array);
Map.groupBy(array);

const d = Promise.withResolvers();

URL.canParse();

const usp = new URLSearchParams();

usp.size
`;

const entry = fileURLToPath(new URL('../index.cjs', import.meta.url));

function action(polyfill, targets) {
  return babel.transformSync(src, {
    presets: [[entry, { polyfill }]],
    targets,
    configFile: false,
    babelrc: false,
    filename: 'a.js',
  }).code;
}

test('global', (t) => {
  t.snapshot(action('global', 'chrome > 67'));
  t.snapshot(action('global', 'chrome > 120'));
});

test('pure', (t) => {
  t.snapshot(action('pure', 'chrome > 67'));
  t.snapshot(action('pure', 'chrome > 120'));
});
