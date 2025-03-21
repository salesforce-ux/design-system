// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* This module provides utilities for injecting and managing styling hooks from the sds-styling-hooks package
 * into CSS content. It includes the following functions and constants:
 *
 * Constants:
 * - stylingHooksClass: CSS class used as a catch-all for styling hooks
 * - lightningPrimitiveComponents: List of Lightning Base Components derived from SDS Primitives
 * - sdsStylingHooksSourceFiles: List of CSS files containing the styling hooks to be injected
 * - sdsStylingHooksBasePath: Path to the sds-styling-hooks package directory
 *
 * Functions:
 * - readStylingHooksContent: Reads and concatenates content from styling hook files
 * - modifyCssScope: Modifies CSS scope to include styling hooks and Lightning components
 * - minifyCssCustom: Minifies CSS content (Custom solutions to solve issues with old dependency)
 * - injectStylingHooks: Injects styling hooks into CSS content
 *
 * This module exports all these functions and constants for use in other modules.
 */

const fs = require("fs");
const path = require("path");

// CSS class used as a catch-all for styling hooks
const stylingHooksClass = ".slds-styling-hooks";

// Wrapper element for the side panel
// Note: Adding this to be extra safe, but we may need to remove if issues with Cosmos uplift
const sidePanelWrapper = 'runtime_thp_learning-side-panel';

// Copilot elements
const copilotElements = [
  'runtime_copilot-multi-agent-selector',
  'runtime_copilot_base-copilot-disclaimer',
  'runtime_thp_learning-side-panel-einstein-assistant',
];

/* List of Lightning Base Components derived from SDS Primitives
 * These are used to modify the CSS scope
 *
 * These names are derived from the PRIMITIVES array in the generate-sds-primitives.mjs file (LBC repo),
 * taking into account the COLLISIONS and INPUT_COLLISIONS objects which determine the naming conventions.
 *
 * Note that "button" and "icon" are listed in the COLLISIONS array, which is why they have
 * the "base" in their names (lightning-primitive-base-button and lightning-primitive-base-icon).
 *
 * The INPUT_COLLISIONS object handles special cases for "inputCheckbox" and "inputRadio",
 * which is why they are listed as lightning-primitive-checkbox and lightning-primitive-radio
 * respectively, without the "input" in their names.
 *
 * This array contains 27 Lightning primitive components.
 */
const lightningPrimitiveComponents = [
  "lightning-primitive-base-button",
  "lightning-primitive-combobox-manager",
  "lightning-primitive-common-resets",
  "lightning-primitive-container",
  "lightning-primitive-dropdown-manager",
  "lightning-primitive-expandable-section-manager",
  "lightning-primitive-base-icon",
  "lightning-primitive-image",
  "lightning-primitive-checkbox",
  "lightning-primitive-radio",
  "lightning-primitive-input-counter",
  "lightning-primitive-input-date",
  "lightning-primitive-input-range",
  "lightning-primitive-input-text",
  "lightning-primitive-input-time",
  "lightning-primitive-layout",
  "lightning-primitive-link",
  "lightning-primitive-listbox-manager",
  "lightning-primitive-listbox-option",
  "lightning-primitive-menu-manager",
  "lightning-primitive-popover-manager",
  "lightning-primitive-progress",
  "lightning-primitive-rich-text",
  "lightning-primitive-select",
  "lightning-primitive-textarea",
  "lightning-primitive-tooltip-manager",
  "lightning-primitive-utils"
];

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
 * Modifies the CSS scope to include styling hooks catch-all class and Lightning primitive components
 * @param {string} content - Original CSS content
 * @param {string} stylingHooksClass - CSS catch-all class for styling hooks
 * @param {string} sidePanelWrapper - Wrapper element for the Copilot side panel
 * @param {string[]} copilotElements - Array of Copilot elements
 * @param {string[]} lightningPrimitiveComponents - Array of Lightning primitive component names
 * @returns {string} - Modified CSS content
 */
function modifyCssScope(
  content,
  stylingHooksClass,
  lightningPrimitiveComponents
) {
  const selector = ":where\\(html\\)";
  const newSelector = `:where(${stylingHooksClass}, ${sidePanelWrapper}, ${copilotElements}, ${lightningPrimitiveComponents.join(
    ", "
  )})`;
  return content.replace(new RegExp(selector, "g"), newSelector);
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
    .replace(/\s*([\{\}\:\;\,])\s*/g, "$1") // Remove spaces around braces, colons, semicolons, and commas
    .replace(/;\}/g, "}") // Remove semicolons before closing braces
    .trim(); // Remove leading and trailing whitespace
}

/**
 * Injects styling hooks into CSS content
 * @param {string} css - Original CSS content
 * @param {string} hooksDir - Directory containing hook files
 * @param {string[]} hookFiles - Array of hook file names
 * @param {boolean} shouldMinify - Whether to minify the injected hooks
 * @returns {string} - CSS content with injected hooks
 */
function injectStylingHooks(css, hooksDir = sdsStylingHooksBasePath, hookFiles = sdsStylingHooksSourceFiles, shouldMinify = false) {
  let hooks = readStylingHooksContent(hooksDir, hookFiles);

  const modifiedHooks = modifyCssScope(
    hooks,
    stylingHooksClass,
    lightningPrimitiveComponents
  );

  const hooksToInject = shouldMinify ? minifyCssCustom(modifiedHooks) : modifiedHooks;

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
  stylingHooksClass,
  lightningPrimitiveComponents,
  sdsStylingHooksSourceFiles,
  sdsStylingHooksBasePath,
  readStylingHooksContent,
  modifyCssScope,
  minifyCssCustom,
  injectStylingHooks
};
