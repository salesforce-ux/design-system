import map from 'map-stream';
import gutil from 'gulp-util';
import _ from 'lodash';
import yaml from 'js-yaml';

// Helper function
const isFunction = (f) =>
  Object.prototype.toString.call(f) === '[object Function]';

export const prefixes = [
  'BORDER_RADIUS',
  'BORDER_WIDTH',
  'COLOR',
  'COLOR_BACKGROUND',
  'COLOR_BORDER',
  'COLOR_TEXT',
  'DURATION',
  'ELEVATION',
  'FONT_FAMILY',
  'FONT_WEIGHT',
  'FONT_SIZE',
  'FLEX',
  'LINE_HEIGHT',
  'MAX_WIDTH',
  'MAX_HEIGHT',
  'MQ',
  'OPACITY',
  'HEIGHT',
  'SIZE',
  'SHADOW',
  'SPACING',
  'SQUARE',
  'TIMING',
  'WIDTH',
  'Z_INDEX'
];

/**
 * Define default reporters
 */
const tokenReporter = (lint) =>
  gutil.log(JSON.stringify(lint));

const verboseReporter = (lint, file) =>
  lint.errors.forEach((error) =>
    gutil.log('tokenlint', `${error.error}: ${error.token} in ${file.path}`));

const prefixLint = (tokenName) =>
  prefixes.some(prefix => tokenName.startsWith(prefix));

const TokenLint = function (tokens, pluginOptions = {}) {
  let self = this;

  if (!(self instanceof TokenLint)) {
    return new TokenLint(tokens, pluginOptions);
  }

  self.options = _.defaults(pluginOptions || {}, {
    prefix: true,
    uppercase: true,
    characterRange: true
  });

  self.errors = [];

  _.keys(tokens).forEach((token) => {
    try {
      self.tokenNameLint(token);
    } catch (e) {
      e.forEach((error) =>
        self.errors.push({
          token: token,
          error: error
        })
      );
    }
  });
  return {
    errors: self.errors
  };
};

TokenLint.prototype.tokenNameLint = function (tokenName) {
  let errors = [];

  if (this.options.prefix && !prefixLint(tokenName)) {
    errors.push('Token names should be prefixed appropriately LINK TO PREFIX DOCUMENTATION');
  }
  if (this.options.uppercase && tokenName.toUpperCase() !== tokenName) {
    errors.push('Token names should be uppercase');
  }
  if (this.options.characterRange && /[^A-Z0-9_]/.test(tokenName)) {
    errors.push('Token names should only contain uppercase letters, underscores and numbers');
  }
  if (errors.length) {
    throw errors;
  }
  return;
};

/**
 * Main plugin function
 */
const tokenlintPlugin = (pluginOptions = {}) =>
  map(function (file, cb) {
    const tokens = yaml.safeLoad(file.contents.toString('utf8'));

    const tokenList = tokens.props ? tokens.props : (tokens.aliases ? tokens.aliases : {});
    const result = TokenLint(tokenList, pluginOptions);

    file.tokenlint = {
      errors: result.errors
    };
    // Pass file
    cb(null, file);
  });

tokenlintPlugin.report = (reporter) =>
  map(function (file, cb) {
    let error = null;

    if (file.tokenlint.errors) {
      if (file.tokenlint.errors.length) {
        error = new gutil.PluginError('tokenlint', `Found ${file.tokenlint.errors.length} linting error(s)`);
      }
      if (reporter === 'json') {
        tokenReporter(file.tokenlint);
      } else if (reporter === 'verbose') {
        verboseReporter(file.tokenlint, file);
      } else if (isFunction(reporter)) {
        reporter(file.tokenlint, file);
      }
    }

    // Pass file
    cb(error, file);
  });

export default tokenlintPlugin;
