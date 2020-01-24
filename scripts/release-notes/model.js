const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const semver = require('semver');

const { logWarning } = require('./helpers.js');

const { arrayOfLines } = require('./helpers.js');
const { parse: parseGeneralNotes } = require('./general.js');
const { parse: parseTokenNotes } = require('./tokens.js');

const blueprintSpaces = [
  {
    type: 'Components',
    directory: 'ui/components',
    urlPath: '/components/'
  },
  {
    type: 'Utilities',
    directory: 'ui/utilities',
    urlPath: '/utilities/'
  }
];

const model = {
  data: [],
  /**
   * getVersions
   * @returns {array} - versions descendingly sorted
   */
  getVersions: () =>
    _.chain(model.data)
      .flatMap(({ notes }) => notes.map(note => note.version))
      .uniq()
      .value()
      .sort((a, b) => (semver.gt(a, b) ? -1 : 1)),

  /**
   * getBlocks
   * @returns {array} - a flattened array of model with every release note chunk by version
   */
  getBlocks: () =>
    // returns
    _.flatMap(model.data, ({ notes, ...componentProps }) =>
      notes.map(note => ({
        ...componentProps,
        ...note
      }))
    )
};

/**
 * splitContentByVersionHeaders
 * @param {string} fileContents
 * @param {object} noteProps
 * @returns {object}
 */
function splitContentByVersionHeaders(fileContents, noteProps) {
  const reVersionNumber = /^\##\s*(\d+\.\d+\.\d+)$/;
  const name = getNotesComponentNameString(fileContents);

  fileContents = fileContents.replace(
    RegExp(reVersionNumber, 'gm'), // Find any 2nd-level headings (e.g., ## TEXT)
    '___DELIMITER___## $1'
  );
  const notes = fileContents
    .split('___DELIMITER___')
    .map(perVerNotes => ({
      version: getNotesVersionString(perVerNotes),
      versionNotes: arrayOfLines(perVerNotes)
        .map(line => line.replace(/^\###\s/, '#### ')) // this chages the h3 to h4 in the action heading
        .splice(1) // splicing here removes the version line from the notes block
    }))
    .filter(note => !!note.version); // filter out first line comment
  // this splits the release notes into per-version segments

  return {
    name,
    notes,
    ...noteProps
  };
}

/**
 * getNotesComponentNameString - parse the component name from its release notes
 * @param {string} notes -
 * @returns {string}
 */
function getNotesComponentNameString(notes) {
  const nameString = RegExp(/^\#\s*(.+)\sRelease/gm).exec(notes);
  if (!nameString)
    throw new Error(
      `Could not determine component name from these component notes: ${notes}`
    );
  return nameString[1];
}

/**
 * getNotesVersionString
 * @param {string} notes
 * @returns {string}
 */
function getNotesVersionString(notes) {
  const versionString = RegExp(/^\##\s*(\d+\.\d+\.\d+)/).exec(notes);
  return !!versionString && versionString[1];
}

model.data.push(parseGeneralNotes());
model.data.push(parseTokenNotes());

// parse components and utilities
blueprintSpaces.forEach(space => {
  const { directory } = space;
  fs.readdirSync(path.resolve(directory)).forEach(component => {
    const componentDirectory = path.resolve(`${directory}/${component}`);

    if (fs.lstatSync(componentDirectory).isDirectory()) {
      const componentReleaseNotesPath = `${componentDirectory}/RELEASENOTES.md`;
      if (fs.existsSync(componentReleaseNotesPath)) {
        // get RELEASENOTES.md content from each component
        const componentReleaseNotes = fs.readFileSync(
          path.resolve(componentReleaseNotesPath),
          { encoding: 'utf-8' }
        );

        // separate component release notes by release version headers and get the last updated notes
        const splitReleaseNotes = splitContentByVersionHeaders(
          componentReleaseNotes,
          {
            component,
            ...space
          }
        );

        model.data.push(splitReleaseNotes);
      } else {
        logWarning(
          `${componentReleaseNotesPath} does not exist, please create a release notes file for this folder`
        );
      }
    }
  });
});

module.exports = model;
