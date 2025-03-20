/**
 * This module provides a function to inject styling hooks from the sds-styling-hooks package into the SLDS CSS.
 * It uses the injectStylingHooks utility from the styling-hooks helper to add the hooks,
 * and then minifies the resulting CSS to match the main CSS file.
 */

const {
  injectStylingHooks,
  sdsStylingHooksBasePath,
  sdsStylingHooksSourceFiles,
  minifyCssCustom
} = require("../scripts/helpers/styling-hooks.js");

function injectSldsStylingHooks(css) {
  // Inject the SDS styling hooks into the Storybook CSS
  // Using the default SDS styling hooks base path and source files
  const injectedCss = injectStylingHooks(
    css,
    sdsStylingHooksBasePath,
    sdsStylingHooksSourceFiles
  );

  // Minify the CSS after injecting the styling hooks
  return minifyCssCustom(injectedCss);
}

module.exports = injectSldsStylingHooks;
