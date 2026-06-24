import modules from 'core-js-compat/modules.json' with { type: 'json' };
import miniprogramCompat from 'miniprogram-compat/data/polyfill.json' with { type: 'json' };

const mini = [
  ...new Set(
    miniprogramCompat['3.6.1'].coreJsModules.flatMap((item) => [
      item,
      item.replace('esnext.', 'es.'),
      item.replace('es.', 'esnext.'),
    ]),
  ),
].toSorted();

export const excludeIfMini = mini.filter((item) => modules.includes(item));
