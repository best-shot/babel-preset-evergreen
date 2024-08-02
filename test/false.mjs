import test from 'ava';

import { marco } from './helper/lib.mjs';

test('false', marco, { polyfill: false });
