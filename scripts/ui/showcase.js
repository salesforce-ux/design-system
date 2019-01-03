// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Either = require('data.either');
const { Left, Right } = Either;
const I = require('immutable-ext');
const paths = require('../helpers/paths');
const path = require('path');

/**
 * valid exports we accept from example.jsx files
 */
const VALID_MARKUP_EXPORTS = new Set([
  'preview',
  'default',
  'states',
  'examples'
]);

/**
 * laymens terms: Takes either the default export object or the states and examples exports arrays, and adds the "Context"
 * wrapper component to the default export object, or if it's an array, to each item in the states or examples exports
 * @param {string} id - name of the export from example.jsx
 * @param {Array|Object} element - the exports object {default | examples | states}
 * @param {Object} Context - element wrapper component specified in example.jsx
 * @returns {Object} immutable list of immutable maps with the Context key added to each Map item
 */
const toShowcaseItem = (id, element, Context) => {
  // if array then it's (examples || states) else it's default export
  if (Array.isArray(element)) {
    // create an immutable list from the export object
    return (
      I.List(element)
        // for each item in the array, create an immutable map in its place
        .map(I.Map)
        // for each item in the map, add 'Context' to the item if it exists?
        .map(i => i.update('Context', c => c || Context))
    );
  } else {
    // just create an immutable list of one immutable map, with 'Context' added to the single map item
    return I.List.of(I.Map({ id, element, Context }));
  }
};

/**
 * Grab the names of the exports based on valid ones we accept, and create a new object
 * @param {Object} exports - the exports from the example.jsx file (default, examples, states)
 * @returns {Object}
 * {
    "title": "${named-export}",
    "items": [
      {
        "id": "${id}",
        "label": "${label}"
        "element": "${transpiledJSX}"
        "description": "${description}"
        "script": "${some javascript}"
      },
    ]
  }
 */
const normalizeExports = exports => {
  // return an Immutable list of the export names from the keys of the exports object
  return (
    I.List(Object.keys(exports))
      // filtered by only the exports we accept
      .filter(exportName => VALID_MARKUP_EXPORTS.has(exportName))
      // for each export return an Immutable map of {title: string, items: []}
      .map(exportName =>
        I.Map({
          title: exportName,
          items: toShowcaseItem(
            exportName,
            exports[exportName],
            exports.Context
          )
        })
      )
  );
};

/**
 * remove the example "element" and "Context" from each of the exports
 * @param {Object} sections
 * @returns {Object} sections with the element and context key removed from the items
 */
const removeExamples = sections =>
  sections.map(section =>
    section.update('items', items =>
      items.map(item => item.delete('element').delete('Context'))
    )
  );

/**
 *
 * @param {string} showcasePath - path to the example.jsx
 * @param {boolean} keepExamples - set to true if you want to keep the transpiled jsx on the object
 * @returns {Object} showcase - Immutable list of example.jsx exports for a give showcase file path.
 */
module.exports = (showcasePath, keepExamples = false) => {
  // if the there is a path param and it's not a module path
  if (showcasePath !== null && showcasePath.indexOf('modules') > 0) {
    return I.List();
  } else {
    return (
      Either.fromNullable(showcasePath)
        // grab the resolved path
        .map(filepath => path.resolve(paths.root, filepath))
        // use node to require the file
        .map(require)
        // create an object that represents the exports from that file
        .map(normalizeExports)
        // if keepExamples return the object, otherwise remove the "element" key from each item in the object and return
        .map(sections => (keepExamples ? sections : removeExamples(sections)))
        // make it an immutable list and return it???
        .getOrElse(I.List())
    );
  }
};
