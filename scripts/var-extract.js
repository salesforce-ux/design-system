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

  rules.map((rule) => {
    const filtered = rule.declarations.filter((dec) => {
      if (!dec.value) return false;

      // match on var values that are not custom props
      if (dec.value.match(/var\(/) && !dec.property.match(/^--/)) {
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

    /**
     * Recursively drill into a CSS value to find the fallback value
     *
     * @param {string} - CSS property's value
     * @returns {object} - hookName, name of the hook; fallback, value of the fallback
     */
    function findFallbackRecursively(value) {
      // get the fallback value from the CSS variable clause
      let regex = varRegex;
      let matches = value.match(regex);

      if (matches) {
        let fallbackValue = matches[2];

        // if we have another CSS variable clause then keep drilling in
        if (isCssVarClause(fallbackValue)) {
          return findFallbackRecursively(fallbackValue);
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
            // retrieve the category names from the JSON config
            const categories = Object.keys(propTypes);

            // do we have a category match? If so return it
            const matchedCategory = categories.find((option) => {
              if (hookName.includes(option)) {
                return option;
              }
            });

            // add the fallback value to the hook's object in the list of results
            list[hookName] = { fallbackValue: fallback };

            // if a category was found add the metadata to the hook's object in the list of results
            if (matchedCategory) {
              list[hookName].category = propTypes[matchedCategory].type;
              list[hookName].valueType =
                propTypes[matchedCategory].valueTypes.join(', ');
            }
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
