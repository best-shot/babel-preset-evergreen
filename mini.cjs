'use strict';

const modules = require('core-js-compat/modules.json');
const miniprogramCompat = require('miniprogram-compat/data/polyfill.json');

const mini = [
  ...new Set(
    miniprogramCompat['3.6.1'].coreJsModules.flatMap((item) => [
      item,
      item.replace('esnext.', 'es.'),
      item.replace('es.', 'esnext.'),
    ]),
  ),
].sort();

exports.excludeIfMini = mini.filter((item) => modules.includes(item));
