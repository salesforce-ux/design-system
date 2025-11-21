// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* This module provides utilities for injecting and managing styling hooks from the sds-styling-hooks package
 * into CSS content. It includes the following functions and constants:
 *
 * Constants:
 * - sdsStylingHooksSourceFiles: List of CSS files containing the styling hooks to be injected
 * - sdsStylingHooksBasePath: Path to the sds-styling-hooks package directory
 *
 * Functions:
 * - readStylingHooksContent: Reads and concatenates content from styling hook files
 * - minifyCssCustom: Minifies CSS content (Custom solutions to solve issues with old dependency)
 * - injectStylingHooks: Injects styling hooks into CSS content with original scope preserved
 *
 * This module exports all these functions and constants for use in other modules.
 */

const fs = require("fs");
const path = require("path");

// List of CSS files containing the styling hooks to be injected
const sdsStylingHooksSourceFiles = [
  "slds.hooks.custom-props.css",
  "slds.shared.hooks.custom-props.css",
  // "slds.component.hooks.custom-props.css", // For later on
];

// Path to the sds-styling-hooks package directory
const sdsStylingHooksBasePath = path.resolve(
  __dirname,
  "../../node_modules/@salesforce-ux/sds-styling-hooks/themes/slds"
);

/**
 * Reads the content of styling hooks files
 * @param {string} hooksDir - Directory containing the hook files
 * @param {string[]} hookFiles - Array of hook file names
 * @returns {string} - Concatenated content of all hook files
 */
function readStylingHooksContent(hooksDir, hookFiles) {
  return hookFiles
    .map((file) => {
      const filePath = path.join(hooksDir, file);
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, "utf8")
          .replace(/\/\*\*[\s\S]*?\*\*\//, '') // Remove the file generation comments
          .trim(); // Trim whitespace to avoid empty lines between existing code blocks
      } else {
        console.warn(`Styling hooks file not found: ${filePath}`);
        return '';
      }
    })
    .filter(Boolean)
    .join('\n');
}

/**
 * Minifies CSS content
 *
 * This acts as a replacement for the existing minifyCss function
 * The old clean-css version doesn't support @layer, and :where()
 * See: https://github.com/clean-css/clean-css/issues/1272
 *
 * @param {string} css - Original CSS content
 * @returns {string} - Minified CSS content
 */
function minifyCssCustom(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "") // Remove comments
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/\s*([{}:;,])\s*/g, "$1") // Remove spaces around braces, colons, semicolons, and commas
    .replace(/;\}/g, "}") // Remove semicolons before closing braces
    .trim(); // Remove leading and trailing whitespace
}

/**
 * Injects styling hooks into CSS content with original scope preserved
 * @param {string} css - Original CSS content
 * @param {string} hooksDir - Directory containing hook files
 * @param {string[]} hookFiles - Array of hook file names
 * @param {boolean} shouldMinify - Whether to minify the injected hooks
 * @returns {string} - CSS content with injected hooks
 */
function injectStylingHooks(css, hooksDir = sdsStylingHooksBasePath, hookFiles = sdsStylingHooksSourceFiles, shouldMinify = false) {
  let hooks = readStylingHooksContent(hooksDir, hookFiles);

  const hooksToInject = shouldMinify ? minifyCssCustom(hooks) : hooks;

  // Find the end of the :root (WCAG) block to inject hooks
  const rootEnd = css.indexOf("}", css.indexOf(":root")) + 1;

  // Trim the existing CSS and the remaining CSS
  const rootCss = css.slice(0, rootEnd).trim();
  const remainingCss = css.slice(rootEnd).trim();

  // Ensure exactly one newline between sections
  const result = `${rootCss}\n${hooksToInject}\n${remainingCss}`;

  return result;
}

// Export all functions and constants for use in other modules
module.exports = {
  sdsStylingHooksSourceFiles,
  sdsStylingHooksBasePath,
  readStylingHooksContent,
  minifyCssCustom,
  injectStylingHooks
};
