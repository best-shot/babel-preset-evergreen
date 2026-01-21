import test from 'ava';

import { marco } from './helper/lib.mts';

test('pure', marco, {
  polyfill: {
    usage: 'pure',
    include: ['web.url', 'web.url-search-params'],
  },
});
