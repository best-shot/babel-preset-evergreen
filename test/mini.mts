import test from 'ava';
import { excludeIfMini } from '../mini.cjs';

import { marco } from './helper/lib.mts';

test('mini-presets', (t) => {
  t.snapshot(excludeIfMini);
});

test('mini', marco, {
  polyfill: {
    usage: 'pure',
    mini: true,
  },
});
