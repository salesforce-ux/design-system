/**
 * PostCSS plugin: Inject Styling Hooks
 *
 * This plugin injects styling hooks into the CSS processed by PostCSS.
 * It works by:
 * 1. Converting the entire CSS to a string
 * 2. Applying the injectStylingHooks function to this string
 * 3. Replacing the original CSS with the processed version
 *
 */

const postcss = require('postcss');
const injectStylingHooks = require('../../inject-styling-hooks');

module.exports = postcss.plugin('inject-styling-hooks', () => {
  return (root) => {
    const css = root.toString();
    const result = injectStylingHooks(css);
    root.removeAll();
    root.append(postcss.parse(result));
  };
});
