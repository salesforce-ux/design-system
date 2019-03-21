// const loaderUtils = require('loader-utils');
// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const webpackSources = require('webpack-sources');

// const options = loaderUtils.getOptions(this);

// function findEntry(mod) {
//   if (mod.reasons.length > 0 && mod.reasons[0].module.resource) {
//       return findEntry(mod.reasons[0].module)
//   }
//   return mod.resource;
// }

// module.exports = function(content) {
//   if(RegExp(/\/ui\/modules\//).test(this.resourcePath)) {
//     const { ConcatSource, SourceMapSource, OriginalSource } = webpackSources;
//     const Extract = new MiniCssExtractPlugin();
//     // const compiledContent = require(loaderUtils.stringifyRequest(this, "!!" + this.request));
//     console.log('content', content);
//     console.log('this', this);
//     console.log(`@@@ resourcePath: ${this.resourcePath}`);
//     console.log('findEntry', findEntry(this._module));
//     // return require("./index.scss");
//     // return `module.exports = require(${loaderUtils.stringifyRequest(this, "!!" + this.remainingRequest)});
//     // }`

//   }
//   return content;
// }

// module.exports = function(content) {
//   // return someSyncOperation(content, this.data.value);
//   content = content.replace(
//     "import card from './base/index.scss'",
//     // `import card from '@epegzz/sass-vars-loader?syntax=scss&files[]=${path.resolve(__dirname, './scss/framework/config.scss')}!sass-loader!css-loader!./base/index.scss'`)
//     `import card from '${path.resolve(__dirname, './my-loader-b.js')}!${path.resolve(__dirname, './my-loader-a.js')}!./base/index.scss'`)
//   console.log('content', content);
//   console.log('this', this);
//   console.log(`@@@ resourcePath: ${this.resourcePath}`);
//   console.log('findEntry', findEntry(this._module));
//   return content;
// };

// module.exports.pitch = function(remainingRequest, precedingRequest, data) {
//   // data.value = 42;
//   if(RegExp(/\/ui\/modules\//).test(this.resourcePath)) {
//     console.log('remainingRequest', remainingRequest)
//     console.log('precedingRequest', precedingRequest)
//     console.log('data', data);
//   }
// };

// module.exports.pitch = function(remainingRequest, precedingRequest, data) {
//   // var query = loaderUtils.parseQuery(this)
//   var entry = findEntry(this._module);
//   console.log('findEntry', entry);
//   // console.log("@@@ query", query);
//   // if (query.local) {
//   //   return `modules.exports = require("!!style!css?modules!${remainingRequest}")`;
//   // } else {
//   //   return `modules.exports = require("!!style!css!${remainingRequest}")`;
//   // }
//   console.log('precedingRequest', precedingRequest)
//   console.log('remainingRequest', remainingRequest)
//   // if(RegExp(/\/modules\//).test(entry)) {
//   //   return `modules.exports = require("!!css-loader!${remainingRequest}")`;
//   // } else {
//     return `modules.exports = require("${remainingRequest}")`
//   // }
// }

// module.exports = function() {};

// module.exports.pitch = function(remainingRequest) {
//   if (this.cacheable) {
//     this.cacheable();
//   }
//   return [
//     '// css-to-string-loader: transforms styles from css-loader to a string output',
//     '',
//     '// Get the styles',
//     'var styles = require(' +
//       loaderUtils.stringifyRequest(this, '!!' + remainingRequest) +
//       ');',
//     '',
//     "if (typeof styles === 'string') {",
//     '  // Return an existing string',
//     '  module.exports = styles;',
//     '} else {',
//     '  // Call the custom toString method from css-loader module',
//     '  module.exports = styles.toString();',
//     '}'
//   ].join('\n');
// };

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var path = require('path');

var loaderUtils = require('loader-utils');
var validateOptions = require('schema-utils');

module.exports = function() {};

module.exports.pitch = function(request) {
  if (this.cacheable) this.cacheable();

  var options = loaderUtils.getOptions(this) || {};

  validateOptions(
    require('../../node_modules/style-loader/options.json'),
    options,
    'Style Loader'
  );

  options.hmr = typeof options.hmr === 'undefined' ? true : options.hmr;

  // The variable is needed, because the function should be inlined.
  // If is just stored it in options, JSON.stringify will quote
  // the function and it would be just a string at runtime
  var insertInto;

  if (typeof options.insertInto === 'function') {
    insertInto = options.insertInto.toString();
  }

  // We need to check if it a string, or variable will be "undefined"
  // and the loader crashes
  if (typeof options.insertInto === 'string') {
    insertInto = '"' + options.insertInto + '"';
  }

  console.log('@@@ insertInto style-loader');

  var hmr = [
    // Hot Module Replacement,
    'if(module.hot) {',
    // When the styles change, update the <style> tags
    '	module.hot.accept(' +
      loaderUtils.stringifyRequest(this, '!!' + request) +
      ', function() {',
    '		var newContent = require(' +
      loaderUtils.stringifyRequest(this, '!!' + request) +
      ');',
    '',
    "		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];",
    '',
    '		var locals = (function(a, b) {',
    '			var key, idx = 0;',
    '',
    '			for(key in a) {',
    '				if(!b || a[key] !== b[key]) return false;',
    '				idx++;',
    '			}',
    '',
    '			for(key in b) idx--;',
    '',
    '			return idx === 0;',
    '		}(content.locals, newContent.locals));',
    '',
    // This error is caught and not shown and causes a full reload
    "		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');",
    '',
    '		update(newContent);',
    '	});',
    '',
    // When the module is disposed, remove the <style> tags
    '	module.hot.dispose(function() { update(); });',
    '}'
  ].join('\n');

  return [
    // Style Loader
    // Adds CSS to the DOM by adding a <style> tag
    '',
    // Load styles
    'var content = require(' +
      loaderUtils.stringifyRequest(this, '!!' + request) +
      ');',
    '',
    "if(typeof content === 'string') content = [[module.id, content, '']];",
    '',
    // Transform styles",
    'var transform;',
    'var insertInto;',
    '',
    options.transform
      ? 'transform = require(' +
        loaderUtils.stringifyRequest(
          this,
          '!' + path.resolve(options.transform)
        ) +
        ');'
      : '',
    '',
    'var options = ' + JSON.stringify(options),
    '',
    'options.transform = transform',
    'options.insertInto = ' + insertInto + ';',
    '',
    // Add styles to the DOM
    'var update = require(' +
      loaderUtils.stringifyRequest(
        this,
        '!' +
          path.join(
            __dirname,
            '../../node_modules/style-loader/lib',
            'addStyles.js'
          )
      ) +
      ')(content, options);',
    '',
    'if(content.locals) module.exports = content.locals;',
    '',
    options.hmr ? hmr : '',
    '// css-to-string-loader: transforms styles from css-loader to a string output',
    '',
    '// Get the styles',
    'var styles = require(' +
      loaderUtils.stringifyRequest(this, '!!' + request) +
      ');',
    '',
    "if (typeof styles === 'string') {",
    '  // Return an existing string',
    '  module.exports = styles;',
    '} else {',
    '  // Call the custom toString method from css-loader module',
    '  module.exports = styles.toString();',
    '}'
  ].join('\n');
};
