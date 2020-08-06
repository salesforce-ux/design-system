const fs = require('fs-extra');
const glob = require('fast-glob');
const css = require('css');
const { readFileSync } = require('fs-extra');

const { compileModularCSS } = require('./compile/modular-css');

/**
 * Parses through generated modular CSS files and extracts vars
 */
const extractVarsFromSLDS = () => {
  const cssFolderExists = fs.existsSync('./.generated/css');

  // if there's no css folder yet, generate it!
  if (!cssFolderExists) {
    compileModularCSS();
  }

  console.log('=> Clearing out Metadata');
  fs.emptyDirSync('.generated/metadata');

  const cssFiles = glob.sync(
    './.generated/css/(components|utilities)/**/index.css'
  );

  cssFiles.map(filename => {
    const cssContent = readFileSync(filename).toString();
    const varsData = extractVarsFromCSS(cssContent);

    if (Object.keys(varsData).length > 0) {
      const outFile = filename
        .replace('/css/', '/metadata/')
        .replace('index.css', 'styling-hooks.json');

      fs.ensureFile(outFile, () => {
        fs.writeFile(
          outFile,
          JSON.stringify(varsData),
          'utf8',
          varsWriteErr => {
            if (varsWriteErr) {
              console.error(varsWriteErr);
            }
          }
        );
      });
    }
  });
};

/**
 * Extracts CSS vars and their fallback values from a CSS string and
 * returns it as an object
 * @param {string} cssData
 * @returns {object}
 */
const extractVarsFromCSS = cssContent => {
  const ast = css.parse(cssContent);
  const rules = ast.stylesheet.rules.filter(rule => rule.type === 'rule');
  let list = {};

  rules.map(rule => {
    const filtered = rule.declarations.filter(dec => {
      if (!dec.value) return false;

      // match on var values that are not custom props
      if (dec.value.match(/var\(/) && !dec.property.match(/^--/)) {
        return true;
      }

      return false;
    });

    if (filtered.length > 0) {
      const vars = rule.declarations
        .filter(dec => (dec.value ? dec.value.match(/var\(/) : false))
        .map(dec => {
          const cssVar = dec.value.match(/(--.*?),/)[1];
          const fallback = dec.value.match(/,\s(.*)\)/)[1];

          return {
            [cssVar]: fallback
          };
        });

      vars.forEach(cssVar => {
        const varName = Object.keys(cssVar)[0];
        list[varName] = cssVar[varName];
      });
    }
  });

  return list;
};

extractVarsFromSLDS();

module.exports = {
  extractVarsFromCSS
};
