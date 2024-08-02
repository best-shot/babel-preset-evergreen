import test from 'ava';

import { marco } from './helper/lib.mjs';

test('pure', marco, {
  polyfill: {
    usage: 'pure',
    include: ['web.url', 'web.url-search-params'],
  },
});
