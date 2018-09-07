const _ = require('lodash');
const inlineImports = require('scss-inline-imports');
const sass = require('node-sass');

const SCSS = require('scss-parser');
const createQueryWrapper = require('query-ast');

// Run an array of plugins on a QueryWrapper created from the
// provided scss and return the transformed scss
let runPlugins = (scss, plugins) => {
  let ast = SCSS.parse(scss);
  let $ = createQueryWrapper(ast);
  plugins.forEach(plugin => plugin($));
  return SCSS.stringify($().get(0));
};

/**
 * @param {object} params
 * @param {string} params.entry
 * @param {function} params.getTokens
 * @param {info} params.object
 * @param {string} params.scssBefore
 * @param {string} params.scssAfter
 * @param {function} params.transform
 * @returns {object}
 */
module.exports = params => {
  let options = _.defaults({}, params, {
    transform: x => `token(${x})`,
    scssBefore: '',
    scssAfter: ''
  });

  let { entry, getTokens } = options;

  let { scss, importsFlattened } = inlineImports(entry);

  // Collect all valid design-tokens
  let tokens = getTokens(importsFlattened);

  // Plugins that will be run before/after Sass
  let plugins = _.mapValues(params.plugins, group =>
    group.map(f => f(tokens, options))
  );

  scss = `${options.scssBefore}${scss}${options.scssAfter}`;

  // Run the Sass through all the "sass" pluguns
  let scssTokenized = runPlugins(scss, plugins.sass);

  // Convert the Sass to CSS
  let css = sass
    .renderSync({
      data: scssTokenized,
      outputStyle: 'expanded',
      precision: 10
    })
    .css.toString();

  // Run the CSS through all the "css" pluguns
  let cssTokenized = runPlugins(css, plugins.css || []);

  return { scss, scssTokenized, cssTokenized };
};
