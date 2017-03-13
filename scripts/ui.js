// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const createParser = require('@salesforce-ux/design-system-parser');
const Task = require('data.task');
const {List, Map} = require('immutable');
const {getMarkup, getComments} = require('./markup-style');
require('./helpers/setup');

const createUI = parser =>
  Map({components: parser.component,  utilities: parser.utility})
  .map((fn, group) =>
    parser[group]()
    .reduce((ac, c) =>
      ac.set(c.get('id'), fn(c.get('id')).get()), Map()));

const requireMarkup = name => x =>
  x.set('markup', getMarkup(name, x.get('id')).getOrElse(List()));

const requireIfVariant = name => x =>
  x.getIn(['annotations', 'variant'])
  ? requireMarkup(name)(x)
  : x;

const mapTree = (x, f) =>
  f(x).set('restrictees', x.get('restrictees', []).map(r => mapTree(r, f)));

const reduceTree = (f, empty, x) =>
  f(x.get('restrictees', [])
  .reduce((ac, y) =>
    reduceTree(f, ac, y), empty), x);

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

module.exports = {ui, mapTree, foldMap};
