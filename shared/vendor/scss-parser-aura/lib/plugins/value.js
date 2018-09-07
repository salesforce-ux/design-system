const { validToken, createToken } = require('../utils');

module.exports = (tokens, options = {}) => $ => {
  /**
   * Return a function that returns true if a NodeWrapper does not have any parents
   * that match the specified type
   *
   * @param {string} n
   * @returns {function}
   */
  let notParents = type => n =>
    $(n)
      .parents(type)
      .length() === 0;

  $()
    .find('block')
    .find('value')
    .find('variable')
    .filter(validToken(tokens))
    .filter(notParents('arguments'))
    .filter(notParents('parentheses'))
    .filter(notParents('interpolation'))
    .replace(createToken(options.transform));
};
