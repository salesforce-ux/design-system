const _ = require('lodash');
const { parse } = require('scss-parser');

module.exports = (tokens, options = {}) => $ => {
  /**
   * Return true if a node is a valid token
   *
   * @param {NodeWrapper} n
   * @returns {boolean}
   */
  let validToken = n => _.includes(tokens, n.node.value);

  /**
   * Return a function that returns true if a NodeWrapper has any parent
   * that match the specified types
   *
   * @param {...string} types
   * @returns {function}
   */
  let hasParents = (...types) => node =>
    _.some(types, type => {
      return (
        $(node)
          .parents(type)
          .length() > 0
      );
    });

  /**
   * Return a token() node
   *
   * @param {NodeWrapper} n
   * @returns {object}
   */
  let createToken = n => {
    let name = _.camelCase(n.node.value);
    return parse(options.transform(name)).value[0];
  };

  /**
   * Return a array of arguments for a @mixin
   *
   * @param {QueryWrapper} $mixin
   * @returns {array}
   */
  let getMixinArgs = $mixinArgs =>
    $mixinArgs
      .children()
      .filter(/variable|declaration/)
      .reduce((args, n, index) => {
        let required = n.node.type === 'variable';
        let name = required
          ? n.node.value
          : $(n)
              .children()
              .filter('property')
              .first()
              .find('variable')
              .first()
              .value();
        return args.concat({
          $node: $(n),
          required,
          index,
          name
        });
      }, []);

  /**
   * Return a array of arguments for a @include
   *
   * @param {QueryWrapper} $includeArgs
   * @returns {array}
   */
  let getIncludeArgs = $includeArgs =>
    $includeArgs
      .children()
      .reduce(
        (args, n) => {
          if (n.node.type === 'punctuation' && n.value === ',') {
            args.push([]);
            return args;
          }
          _.last(args).push(n);
          return args;
        },
        [[]]
      )
      .map($)
      .map(($node, index) => {
        let required = $node.filter('declaration').length() === 0;
        let name = required
          ? undefined
          : $node
              .find('variable')
              .first()
              .value();
        return { $node, required, index, name };
      });

  /**
   * Return a corresponding mixin for an @include along with its args
   *
   * @param {QueryWrapper} $include
   * @param {object} mixins
   * @returns {object}
   */
  let getIncludeMixinArgs = ($include, mixins) => {
    let includeName = $include
      .children()
      .filter('identifier')
      .first()
      .value();
    let includeMixin = mixins[includeName];
    if (!includeMixin) {
      throw new Error(`Undefined mixin "${includeName}"`);
    }
    let $includeArgs = $include
      .children()
      .filter('arguments')
      .first();
    let includeArgs = getIncludeArgs($includeArgs);
    return { includeMixin, includeArgs };
  };

  /**
   * Call the callback with an mixin arg for a given include arg
   *
   * @param {object} includeMixin
   * @param {object} includeArg
   * @param {function} callback
   */
  let getIncludeMixinArg = (includeMixin, includeArg, callback) => {
    let { required, index, name } = includeArg;
    if (required) {
      let includeMixinArg = _.find(includeMixin.args, { index });
      if (includeMixinArg) callback(includeMixinArg);
    } else {
      let includeMixinArg = _.find(includeMixin.args, { name });
      if (includeMixinArg) callback(includeMixinArg);
    }
  };

  // Collect all mixins with arguments
  let $mixins = $()
    .find('atrule')
    .filter(
      n =>
        $(n)
          .find('atkeyword')
          .first()
          .value() === 'mixin'
    );

  // Create a hash of mixins
  let mixins = $mixins.reduce((mixins, n) => {
    let name = $(n)
      .children()
      .filter('identifier')
      .first()
      .value();
    let $args = $(n)
      .children()
      .filter('arguments')
      .first();
    return Object.assign({}, mixins, {
      [name]: { name, $node: $(n), args: getMixinArgs($args) }
    });
  }, {});

  // Flag arguments that cannot be tokenized based on usage in declarations
  for (let mixin of _.values(mixins)) {
    mixin.$node
      .children()
      .filter('block')
      .find('variable')
      .filter(hasParents('arguments', 'parentheses', 'interpolation'))
      .filter(n => {
        return (
          $(n)
            .parents('atrule')
            .first()
            .find('atkeyword')
            .value() !== 'include'
        );
      })
      .map(n => _.find(mixin.args, { name: n.node.value }))
      .filter(mixinArg => mixinArg)
      .forEach(mixinArg => {
        mixinArg.tokenizable = false;
      });
  }

  // Flag arguments that can't be tokenized based on usage in @includes
  for (let mixin of _.values(mixins)) {
    mixin.$node
      .children()
      .filter('block')
      .find('atrule')
      .filter(n => {
        return (
          $(n)
            .children()
            .filter('atkeyword')
            .value() === 'include'
        );
      })
      .map(n => {
        let { includeMixin, includeArgs } = getIncludeMixinArgs($(n), mixins);
        // Flag arguments that can't be tokenized because the argument in the
        // include definition isn't tokenizable
        includeArgs.forEach(includeArg => {
          includeArg.$node
            .find('variable')
            .map(n => n.node.value)
            .map(name => _.find(mixin.args, { name }))
            .filter(mixinArg => mixinArg)
            .forEach(mixinArg => {
              getIncludeMixinArg(includeMixin, includeArg, includeMixinArg => {
                if (includeMixinArg.tokenizable === false) {
                  mixinArg.tokenizable = false;
                }
              });
            });
        });
        // Flag arguments that can't be tokenized because they are wrapped in parens
        includeArgs.forEach(includeArg => {
          includeArg.$node
            .find('variable')
            .filter(n => {
              return (
                false ||
                hasParents('parentheses', 'interpolation')(n) ||
                // Catch variables inside functions inside an @include
                $(n)
                  .parents('arguments')
                  .length() > 1
              );
            })
            .map(n => n.node.value)
            .map(name => _.find(mixin.args, { name }))
            .filter(mixinArg => mixinArg)
            .forEach(mixinArg => {
              getIncludeMixinArg(includeMixin, includeArg, () => {
                mixinArg.tokenizable = false;
              });
            });
        });
      });
  }

  // Tokenize @mixin optional arguments
  for (let mixin of _.values(mixins)) {
    for (let arg of mixin.args) {
      if (arg.required === false && arg.tokenizable !== false) {
        arg.$node
          .children()
          .filter('value')
          .find('variable')
          .filter(validToken)
          .replace(createToken);
      }
    }
  }

  // Tokenize @include arguments
  $()
    .find('atrule')
    .filter(n => {
      return (
        $(n)
          .children()
          .filter('atkeyword')
          .value() === 'include'
      );
    })
    .has('arguments')
    .map(n => {
      let { includeMixin, includeArgs } = getIncludeMixinArgs($(n), mixins);
      includeArgs.forEach(includeArg => {
        getIncludeMixinArg(includeMixin, includeArg, includeMixinArg => {
          if (includeMixinArg.tokenizable === false) return;
          if (includeArg.required) {
            includeArg.$node
              .filter('variable')
              .filter(validToken)
              .replace(createToken);
          } else {
            includeArg.$node
              .find('value')
              .first()
              .children()
              .filter('variable')
              .filter(validToken)
              .replace(createToken);
          }
        });
      });
    });
};
