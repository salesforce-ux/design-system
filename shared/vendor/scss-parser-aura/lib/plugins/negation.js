const _ = require('lodash');
const { parse } = require('scss-parser');

module.exports = (tokens, options = {}) => $ => {
  const transform = name => options.transform(`'-'#{'+'}#{${name}}`);

  /**
   *
   */
  let createNegation = n => {
    let name = _.camelCase(
      $(n)
        .find('variable')
        .first()
        .value()
    );
    return parse(transform(name)).value[0];
  };

  $()
    .find('parentheses')
    .filter(n => {
      let negation = [
        'variable',
        'space',
        'operator',
        'space',
        'operator',
        'number'
      ];
      let type = _.map(n.node.value, 'type');
      let value = _.map(n.node.value, 'value');
      return (
        true &&
        // The parens matches the negation signature
        _.isEqual(negation, type) &&
        // The variable being used is a valid token
        _.includes(tokens, value[0]) &&
        value[2] === '*' &&
        value[4] === '-' &&
        value[5] === '1'
      );
    })
    .replace(createNegation);
};
