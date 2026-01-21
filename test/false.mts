import test from 'ava';

import { marco } from './helper/lib.mts';

test('false', marco, { polyfill: false });
