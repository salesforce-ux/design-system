const fs = require('fs');
const mime = require('mime');
const path = require('path');

const root = path.resolve(__dirname, '../../../assets/images');

module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-base64',
    Rule(css) {
      css.walkDecls(/background(\-image)?/i, decl => {
        let rePattern = /url\(\s*['|"]?(.*?)['|"]?\s*\)/i;
        let assetPath;
        if (rePattern.test(decl.value)) {
          assetPath = path.join(root, decl.value.match(rePattern)[1]);
          if (fs.existsSync(assetPath)) {
            decl.value = decl.value.replace(
              rePattern,
              'url(data:' +
                mime.getType(assetPath) +
                ';base64,' +
                fs.readFileSync(assetPath, 'base64') +
                ')'
            );
          }
        }
      });
    }
  };
};

module.exports.postcss = true;
