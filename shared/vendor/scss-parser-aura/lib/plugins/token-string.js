const _ = require('lodash');

module.exports = () => $ => {
  // Remove comments
  $()
    .find('string_double')
    .filter(n => {
      return (
        $(n)
          .parents('function')
          .first()
          .children()
          .filter('identifier')
          .first()
          .value() === 'token'
      );
    })
    .replace(n => {
      let node = _.cloneDeep(n.node);
      node.type = 'string_single';
      return node;
    });
};
