import foo from './foo.json' with { type: 'json' };
import bar from './bar.json' assert { type: 'json' };

import('./foo.json', { with: { type: 'json' } });
import('./bar.json', { assert: { type: 'json' } });

const array = [];
const string = '';

array.findLastIndex();
array.at(-1);
array.toReversed();
array.toSorted();
array.groupBy();

string.at(-2);

const io = new Set();

io.intersection();
io.difference();
io.union();

Object.groupBy(array);
Map.groupBy(array);

const d = Promise.withResolvers();

URL.canParse();

const usp = new URLSearchParams();

usp.size;

let re = /(?<day>[p])|(?<day>[p])/;

new Error('ada', { cause: re });

new URL();

var EMOJI_REGEX =
  // eslint-disable-next-line redos-detector/no-unsafe-regex, regexp/no-dupe-disjunctions -- false positives
  /^(?:[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}])+$/u;
