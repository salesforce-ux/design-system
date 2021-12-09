const fs = require('fs-extra');
const glob = require('fast-glob');
const css = require('css');
const { readFileSync } = require('fs-extra');

const { filterObject } = require('../shared/utils/objects');
const { compileModularCSS } = require('./compile/modular-css');
const { propTypes } = require('./var-metadata');

/**
 * Parses through generated modular CSS files and extracts vars
 */
const extractVarsFromSLDS = (props = {}) => {
  const { callback, suppressOutput } = props;
  const cssFolderExists = fs.existsSync('./.generated/css');
  const varsAllowPattern = /^--slds-c/;

  // if there's no css folder yet, generate it!
  if (!cssFolderExists) {
    compileModularCSS({ suppressOutput });
  }

  // logging
  if (!suppressOutput) {
    console.log('=> Clearing out Metadata');
  }
  fs.emptyDirSync('.generated/metadata');

  // getting list of components and utilities to parse
  const componentList = fs
    .readdirSync('./.generated/css/components')
    .map((name) => `./.generated/css/components/${name}/**/index.css`);
  const utilityList = fs
    .readdirSync('./.generated/css/utilities')
    .map((name) => `./.generated/css/utilities/${name}/**/index.css`);

  // parse through all variants of each component / util
  componentList.concat(utilityList).map((fileGlob) => {
    const cssFiles = glob.sync(fileGlob);
    let varsData = {};

    cssFiles.map((filename) => {
      const cssContent = readFileSync(filename).toString();
      const fileVars = extractVarsFromCSS(cssContent, {
        allowPattern: varsAllowPattern,
      });

      if (Object.keys(fileVars).length > 0) {
        varsData = Object.assign(fileVars, varsData);
      }
    });

    if (Object.keys(varsData).length > 0) {
      const fileParts = fileGlob.match(/generated\/css\/(.*?)\/(.*?)\//);
      const itemType = fileParts[1];
      const itemName = fileParts[2];
      const outFile = `./.generated/metadata/${itemType}/${itemName}/styling-hooks.json`;

      fs.ensureFile(outFile, () => {
        fs.writeFileSync(outFile, JSON.stringify(varsData), 'utf8');
      });
    }
  });

  if (callback) callback();
};

/**
 * Extracts CSS vars and their fallback values from a CSS string and
 * returns it as an object
 * @param {string} cssData
 * @returns {object}
 */
const extractVarsFromCSS = (cssContent, options = {}) => {
  const ast = css.parse(cssContent);
  const rules = ast.stylesheet.rules.filter((rule) => rule.type === 'rule');
  const { allowPattern } = options;
  let list = {};

  // retrieve the category names from the JSON config
  const categories = Object.keys(propTypes);

  rules.map((rule) => {
    // Filter rule declarations to only those that contain at least one `var(...)` function
    const filtered = rule.declarations.filter((dec) => {
      if (!dec.value) return false;

      // match on property values that contain at least one `var(...)` function
      if (dec.value.match(/var\(/)) {
        return true;
      }

      return false;
    });

    ///
    // is this a CSS variable
    function isCssVarClause(value) {
      // if it DOES contain `var(` it is a CSS variable clause
      return !!value.includes('var(');
    }

    // is this a CSS variable reassignment
    function isCssVarReassignment(value) {
      // if it DOES NOT contain a comma it is a reassignment
      return !value.includes(',');
    }

    // regex:
    //    var\(                 -> find something that starts with `var(`
    //    (?=\S*['-]*)          -> positive lookahead, zero or more non-space characters and zero or more ' or - characters
    //    ([a-zA-Z'-]+)         -> match group 1, one or more alpha characters
    //    \s*,\s*               -> zero or more spaces, a comma, zero or more spaces
    //    (.+)                  -> match group 2, one or more of any character
    //    \)                    -> a closing parenthesis
    const varRegex = /var\((?=\S*['-]*)([a-zA-Z'-]+)\s*[,]?\s*(.*)\)/;

    // Sanitize a CSS property value
    // - currently only removes extra content at the end of the value when closing parentheses aren't balanced
    function sanitizeValue(value) {
      let sanitizedValue = value;
      let parens = 0;
      let startParens = 0;
      let endParens = 0;

      // check each character of the value string to count opening & closing parentheses
      for (let pos = 0; pos <= value.length; pos++) {
        let char = value.charAt(pos);
        switch (char) {
          // increment parenthesis counter and startParens counter
          case '(':
            parens++;
            startParens++;
            break;
          // decrement parenthesis counter and increment endParens counter
          case ')':
            parens--;
            endParens++;
            break;
        }

        // if we have unbalanced parentheses then sanitize
        if (parens !== 0) {
          // if we have too many closing parentheses then sanitize things at the end
          if (endParens > startParens) {
            // find the index of the last closing balanced parenthesis
            const closingParens = value.matchAll(/\)/g);

            // convert iterator object to an array
            const closingParensArray = [];
            for (const match of closingParens) {
              closingParensArray.push(match);
            }

            // sort the array by ascending match index/position
            closingParensArray.sort((a, b) => {
              if (a.index < b.index) {
                return -1;
              }
              if (a.index > b.index) {
                return 1;
              }
              return 0;
            });

            // get the index of the balanced closing parenthesis we want to keep
            const indexOfBalancedParen =
              closingParensArray.length - (endParens - startParens) - 1; // -1 to make it a zero based index
            const balancedClosingParenIndex =
              closingParensArray[indexOfBalancedParen].index;

            // remove the extra content at the end that has no opening parentheses to match
            sanitizedValue = value.slice(0, balancedClosingParenIndex + 1); // +1 to avoid losing the parenthesis we want to keep
          }
        }
      }

      return sanitizedValue;
    }

    /**
     * Recursively drill into a CSS value to find the fallback value
     *
     * @param {string} - CSS property's value
     * @returns {object} - hookName, name of the hook; fallback, value of the fallback
     */
    function findFallbackRecursively(value, recursionIndex = 0) {
      // get the fallback value from the CSS variable clause
      let regex = varRegex;

      // do an initial match check
      const initialMatches = value.match(regex);
      let matches;

      // we have a match
      if (initialMatches) {
        // sanitize the returned match value found to ensure we're digging into a properly formatted var(...) value
        const sanitizedValue = sanitizeValue(initialMatches[0]);
        matches = sanitizedValue.match(regex);
      }

      // if we found a match then begin the recursion
      if (matches) {
        let fallbackValue = matches[2];

        // if we're not on the first iteration then add the valid hook to the list
        if (recursionIndex > 0) {
          addHookToList(matches[1], null);
        }

        // if we have another CSS variable clause then keep drilling in
        if (isCssVarClause(fallbackValue)) {
          return findFallbackRecursively(fallbackValue, recursionIndex++);
        } else {
          return matches[2].trim();
        }
      }

      // if we have a reassignment
      if (isCssVarReassignment(value)) {
        return null;
      }

      return value;
    }
    ///

    // Add hook to the list to be shown
    function addHookToList(hookName, fallbackValue) {
      // do we have a category match? If so return it
      const matchedCategory = categories.find((option) => {
        if (hookName.includes(option)) {
          return option;
        }
      });

      // add the fallback value to the hook's object in the list of results
      list[hookName] = { fallbackValue: fallbackValue };

      // if a category was found add the metadata to the hook's object in the list of results
      if (matchedCategory) {
        list[hookName].category = propTypes[matchedCategory].type;
        list[hookName].valueType =
          propTypes[matchedCategory].valueTypes.join(', ');
      }
    }

    if (filtered.length > 0) {
      filtered.forEach((decl) => {
        if (decl.value) {
          // search for a `var(...)` value
          let matches = decl.value.match(varRegex);
          // if we found a match then extract the hook name, if no hook then return null
          let hookName = matches ? matches[1] : null;
          // recursively search for the fallback value
          let fallback = findFallbackRecursively(decl.value);

          // if we have a hook then generate an object to add to the list of results
          if (hookName) {
            addHookToList(hookName, fallback);
          }
        }
      });
    }
  });

  return allowPattern
    ? filterObject(list, (key) => RegExp(allowPattern).test(key))
    : list;
};

module.exports = {
  extractVarsFromCSS,
  extractVarsFromSLDS,
};
