import test from 'ava';

import { marco } from './helper/lib.mjs';

test('global', marco, {
  polyfill: {
    usage: 'global',
    include: ['web.url', 'web.url-search-params'],
  },
});
