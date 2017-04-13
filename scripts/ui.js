// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const createParser = require('@salesforce-ux/design-system-parser');
const Immutable = require('immutable');
const { NOT_FOUND_ERROR, getMarkup, getComments } = require('./markup-style');

const createUI = parser =>
  Immutable.Map({ components: parser.component, utilities: parser.utility })
  .map((fn, group) =>
    parser[group]()
    .reduce((ac, c) =>
      ac.set(c.get('id'), fn(c.get('id')).get()), Immutable.Map()));

const requireMarkup = componentId => variant =>
  getMarkup(componentId, variant.get('id'))
    .fold(
      (error) => {
        if (error[NOT_FOUND_ERROR]) {
          return variant.set('markup', Immutable.List());
        }
        throw error;
      },
      markup =>
        variant
          .set('markup', markup.get('sections'))
          .set('markupContext', markup.get('context'))
    );

const requireIfVariant = name => x =>
  x.getIn(['annotations', 'variant'])
  ? requireMarkup(name)(x)
  : x;

const mapTree = (x, f) =>
  f(x).set('restrictees', x.get('restrictees', []).map(r => mapTree(r, f)));

const reduceTree = (f, empty, x) =>
  x.get('restrictees', Immutable.List()).reduce((ac, y) =>
    reduceTree(f, ac, y), f(empty, x));

const foldMap = (f, empty, x) =>
  reduceTree((acc, y) => acc.concat(f(y)), empty, x);

const addMarkup = (group, f) => ui =>
  ui
  .update(group, cs =>
    cs.map((value, name) =>
      mapTree(value, f(name))));

const ui = () =>
  getComments()
  .map(createParser)
  .map(createUI)
  .map(addMarkup('components', requireIfVariant))
  .map(addMarkup('utilities', requireMarkup));

module.exports = { ui, reduceTree, mapTree, foldMap };
