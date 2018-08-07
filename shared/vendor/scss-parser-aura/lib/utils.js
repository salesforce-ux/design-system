const { parse } = require('scss-parser');
const _ = require('lodash');

/**
   * Return true if a node is a valid token
   *
   * @param {Array<string>} tokens
   * @param {NodeWrapper} n
   * @returns {boolean}
   */
let validToken = tokens => n => _.includes(tokens, n.node.value);

/**
   * Return a token() node
   *
   * @param {function} transform
   * @param {NodeWrapper} n
   * @returns {object}
   */
let createToken = transform => n => {
  let name = _.camelCase(n.node.value);
  return parse(transform(name)).value[0];
};

/**
   * Returns the first node from a query
   *
   * @param {QueryWrapper} query
   * @returns {NodeWrapper|null}
   */
const getFirstNode = query => query.nodes[0];

/**
   * Returns true if the node is a child of a media rule
   *
   * @param {NodeWrapper} $node
   * @returns {NodeWrapper|null}
   */
const isMediaNodeChild = $node => {
  const atnode = getFirstNode($node.parents('atrule').find('atkeyword'));
  return atnode && atnode.node.value === 'media';
};

module.exports = {
  createToken,
  validToken,
  getFirstNode,
  isMediaNodeChild
};
