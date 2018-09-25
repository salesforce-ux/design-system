const _ = require('lodash');
const { parse } = require('scss-parser');

let whitelist = ['Light', 'BoldItalic', 'Regular', 'Italic', 'Bold'];

module.exports = (options = {}) => $ => {
  const transform = name =>
    options.transform(
      `'url('+${name}Woff2+') format(\\'woff2\\'), url('+${name}Woff+') format(\\'woff\\')'`
    );

  $()
    .find('atrule')
    // Find all @font-face
    .filter(n => {
      return (
        $(n)
          .children()
          .filter('atkeyword')
          .first()
          .value() === 'font-face'
      );
    })
    .map(rule => {
      $(rule)
        .find('block')
        .find('declaration')
        // Get "src" declarations
        .filter(n => {
          return (
            $(n)
              .children()
              .filter('property')
              .first()
              .value() === 'src'
          );
        })
        // Get the value NodeWrapper
        .map(n => {
          return $(n)
            .children()
            .filter('value')
            .first();
        })
        .forEach($value => {
          let match = /(SalesforceSans-(.*?))\.woff/.exec($value.value());
          // If the value contains SalesforceSans and is whitelisted
          if (match && _.includes(whitelist, match[2])) {
            let name = _.camelCase(match[1]);
            // Replace the value with a token for webfonts
            $value.replace(n => {
              return parse(transform(name)).value[0];
            });
          } else {
            // Otherwise, remove the rule
            $(rule).remove();
          }
        });
    });
};
