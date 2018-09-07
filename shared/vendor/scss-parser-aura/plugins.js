// Plugins that will be run before/after Sass
let plugins = {
  mixin: require('./lib/plugins/mixin'),
  operations: require('./lib/plugins/operations'),
  value: require('./lib/plugins/value'),
  fn: require('./lib/plugins/function'),
  negation: require('./lib/plugins/negation'),
  font: (tokens, options) => require('./lib/plugins/font')(options),
  comment: (tokens, { info }) => require('./lib/plugins/comment')(info),
  tokenString: require('./lib/plugins/token-string')
};

module.exports = plugins;
