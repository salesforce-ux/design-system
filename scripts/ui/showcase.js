// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Either = require('data.either');
const { Left, Right } = Either;
const I = require('immutable-ext');
const paths = require('../helpers/paths');
const path = require('path');

const VALID_MARKUP_EXPORTS = new Set([
  'preview',
  'default',
  'states',
  'examples'
]);

const toShowcaseItem = (id, element, Context) =>
  Array.isArray(element) // states vs default
    ? I.List(element)
        .map(I.Map)
        .map(i => i.update('Context', c => c || Context))
    : I.List.of(I.Map({ id, element, Context }));

const normalizeExports = exports =>
  I.List(Object.keys(exports))
    .filter(title => VALID_MARKUP_EXPORTS.has(title))
    .map(title =>
      I.Map({
        title,
        items: toShowcaseItem(title, exports[title], exports.Context)
      })
    );

const removeExamples = sections =>
  sections.map(section =>
    section.update('items', items =>
      items.map(item => item.delete('element').delete('Context'))
    )
  );

module.exports = (showcasePath, keepExamples = false) =>
  Either.fromNullable(showcasePath)
    .map(filepath => path.resolve(paths.root, filepath))
    .map(require)
    .map(normalizeExports)
    .map(sections => (keepExamples ? sections : removeExamples(sections)))
    .getOrElse(I.List());
