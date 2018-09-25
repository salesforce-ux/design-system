const _ = require('lodash');
const MagicString = require('magic-string');
const createQueryWrapper = require('query-ast');
const { stringify, parse } = require('scss-parser');

const TOKENIZEABLE_FUNCTIONS = [
  'attr',
  'blur',
  'brightness',
  'calc',
  'circle',
  'contrast',
  'counter',
  'counters',
  'cubic-bezier',
  'drop-shadow',
  'ellipse',
  'grayscale',
  'hsl',
  'hsla',
  'hue-rotate',
  'hwb',
  'image',
  'inset',
  'invert',
  'linear-gradient',
  'matrix',
  'matrix3d',
  'opacity',
  'perspective',
  'polygon',
  'radial-gradient',
  'repeating-linear-gradient',
  'repeating-radial-gradient',
  'rgb',
  'rgba',
  'rotate',
  'rotate3d',
  'rotateX',
  'rotateY',
  'rotateZ',
  'saturate',
  'sepia',
  'scale',
  'scale3d',
  'scaleX',
  'scaleY',
  'scaleZ',
  'skew',
  'skewX',
  'skewY',
  'symbols',
  'translate',
  'translate3d',
  'translateX',
  'translateY',
  'translateZ',
  'url'
];

module.exports = (tokens, options = {}) => $ => {
  const wrapToken = n => {
    const fnName = n.node.value[0].value;
    // Only tokenize CSS functions
    if (!TOKENIZEABLE_FUNCTIONS.includes(fnName)) return n;
    const variables = $(n)
      .children('arguments')
      .find('variable')
      .get();
    // Skip functions with no tokens
    if (!variables.length) return n;
    // Make sure any variables used in the function can be tokenized
    for (let v of variables) {
      if (!_.includes(tokens, v.value)) return n;
    }
    // calc()
    // Sass requires interpolation inside calc() to avoid evaluating expressions
    // We want to remove the interpolation to wrap it with token()
    if (fnName === 'calc') {
      $(n)
        .children('arguments')
        .children('interpolation')
        .replace(n => {
          if (n.node.value[0].type === 'variable') {
            return n.node.value[0];
          }
          return n;
        });
    }
    const valueString = stringify(n.toJSON());
    const valueStringMagic = new MagicString(valueString);
    const $$ = createQueryWrapper(parse(valueString));
    $$('function')
      .children('arguments')
      .children('variable')
      .get()
      .map(v => {
        const start = v.start.cursor;
        const end = v.next.cursor;
        const name = _.camelCase(valueString.slice(start + 1, end));
        return { start, end, name };
      })
      .forEach(v => {
        valueStringMagic.overwrite(v.start, v.end, `"+#{${v.name}}+"`);
      });
    return parse(options.transform(`"${valueStringMagic.toString()}"`))
      .value[0];
  };
  $()
    .find('function')
    .replace(wrapToken);
};
