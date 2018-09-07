const {
  validToken,
  createToken,
  isMediaNodeChild,
  getFirstNode
} = require('../utils');

module.exports = (tokens, options = {}) => $ => {
  /**
   * Replaces declaration body if it contains an operation and a token with just the tokens
   *
   * @param {NodeWrapper} declarationNode
   * @returns {NodeWrapper}
   */
  const replaceOperationsWithToken = declarationNode => {
    const declarationBody = $(declarationNode).find('value');
    const token = getFirstNode(
      declarationBody.find('variable').filter(validToken(tokens))
    );
    const operator = getFirstNode(declarationBody.find('operator'));

    if (token && operator && !isMediaNodeChild($(operator))) {
      declarationBody.replace(() => createToken(options.transform)(token));
    }

    return declarationNode;
  };

  $()
    .find('block')
    .find('declaration')
    .replace(replaceOperationsWithToken);
};
