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

module.exports = function() {};

module.exports.pitch = function(remainingRequest) {
  if (this.cacheable) {
    this.cacheable();
  }
  return [
    '// css-to-string-loader: transforms styles from css-loader to a string output',
    '',
    '// Get the styles',
    'var styles = require(' +
      loaderUtils.stringifyRequest(this, '!!' + remainingRequest) +
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
