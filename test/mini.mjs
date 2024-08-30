import test from 'ava';
import { excludeIfMini } from '../mini.cjs';

test('mini', (t) => {
  t.snapshot(excludeIfMini);
});
