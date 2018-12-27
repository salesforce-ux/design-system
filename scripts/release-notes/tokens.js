const fs = require('fs');
const path = require('path');

const { arrayOfLines } = require('./helpers.js');

const TYPE_TOKENS = 'Tokens';

/**
 * parse
 * @returns {object}
 */
function parse() {
  const generalNotes = fs.readFileSync(
    path.resolve('design-tokens/RELEASENOTES.md'),
    { encoding: 'utf-8' }
  );

  const reVersionLine = /^\##\s*(\d+\.\d+\.\d+)([\n]+)$/;

  const noteBlocks = generalNotes.replace(
    RegExp(reVersionLine, 'gm'), // Find any 2nd-level headings (e.g., ## TEXT)
    '___DELIMITER_A___$1___DELIMITER_VERSION_LINE___'
  );

  const getVersionString = block => {
    return block.replace(/^(.+)___DELIMITER_VERSION_LINE___.+/, '$1');
  };

  const notes = noteBlocks // this splits the release notes into per-version segments
    .split('___DELIMITER_A___') // split by version block
    .splice(1) // ignore version line
    .map(perVerNotes => ({
      // parse notes
      version: getVersionString(
        perVerNotes.split('___DELIMITER_VERSION_LINE___')[0]
      ),
      versionNotes: arrayOfLines(
        perVerNotes.split('___DELIMITER_VERSION_LINE___')[1]
      )
    }));

  return {
    type: TYPE_TOKENS,
    notes
  };
}

module.exports = {
  parse,
  TYPE_TOKENS
};
