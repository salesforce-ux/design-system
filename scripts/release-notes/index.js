const fs = require('fs');

const {
  getReleaseDate,
  logStatus,
  COMMENT_BEST_PRACTICES,
  NEW_LINE,
  NEW_LINE_DOUBLE,
  RELEASE_NOTES_FILENAME
} = require('./helpers.js');
const model = require('./model.js');
const { notes: notesLegacy } = require('./legacy.js');
const { TYPE_GENERAL } = require('./general.js');
const { TYPE_TOKENS } = require('./tokens.js');

/**
 * compileReleaseNotes
 * @returns {string} - content for the complete compiled release notes
 */
function compileReleaseNotes() {
  const versions = model.getVersions();

  const getNotesPerVersion = version => {
    // write a new type subhead into the stream when changing types
    const writeTypeSubHead = block => {
      if (
        (block.name || block.type === TYPE_TOKENS) &&
        block.type !== writeTypeSubHead.curType
      ) {
        writeTypeSubHead.curType = block.type;
        return `## ${writeTypeSubHead.curType}`;
      } else {
        return '';
      }
    };

    const perComponentNotes = model
      .getBlocks()
      .filter(block => block.version === version)
      .map(block => {
        return [
          writeTypeSubHead(block),
          block.component
            ? `### [${block.name}](https://www.lightningdesignsystem.com${block.urlPath}${block.component})`
            : '',
          block.versionNotes.join(NEW_LINE)
        ].join(NEW_LINE);
      });

    return perComponentNotes;
  };

  const getReleaseHead = version => {
    const generalNotes = model
      .getBlocks()
      .find(block => block.version === version && block.type === TYPE_GENERAL);

    const releaseDate =
      (generalNotes && generalNotes.versionDate) || getReleaseDate();
    return `## Release ${version} - ${releaseDate}`;
  };

  const perVersionNotes = versions.map(version =>
    [getReleaseHead(version), ...getNotesPerVersion(version)].join(
      NEW_LINE_DOUBLE
    )
  );

  return [COMMENT_BEST_PRACTICES, ...perVersionNotes, notesLegacy]
    .join(NEW_LINE_DOUBLE) // compile all the release notes parts
    .replace(/\n{3,}/g, NEW_LINE_DOUBLE); // clean up extra line breaks in compiled release notes
}

/**
 * output - writes the releasenotes file
 */
function output() {
  // write to release notes file
  fs.writeFile(RELEASE_NOTES_FILENAME, compileReleaseNotes(), err => {
    if (err) throw err;
    logStatus(`${RELEASE_NOTES_FILENAME} saved!`);
  });
}

output();
