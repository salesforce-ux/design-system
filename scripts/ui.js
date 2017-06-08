// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const createParser = require('@salesforce-ux/design-system-parser');
const {mapTree, toList, reduceTree} = require('@salesforce-ux/design-system-previewer/lib/tree');
const I = require('immutable-ext');
const { fromNullable } = require('data.either');
const { NOT_FOUND_ERROR, getMarkup, getComments } = require('./markup-style');
const Task = require('data.task');

const isVariant = x =>
  x.getIn(['annotations', 'variant']);

const getMark = (cid, vid) =>
  getMarkup(cid, vid).getOrElse(I.List());

const variants = c =>
  toList(c)
  .filter(isVariant);

const markupMap = (c, vs) =>
  vs.reduce((acc, v) =>
    acc.set(v.get('id'), getMark(c.get('id'), v.get('id'))), I.Map());

const toMap = f => (ac, c) =>
  ac.set(c.get('id'), f(c.get('id')).get());

const createUI = parser =>
  I.Map({
    components: parser
                .components()
                .reduce(toMap(parser.component), I.Map()),
    utilities: parser
               .utilities()
               .reduce(toMap(parser.utility), I.Map())
  });

const requireMarkup = componentId => variant =>
  getMarkup(componentId, variant.get('id'))
    .fold(
      (error) => {
        if (error[NOT_FOUND_ERROR]) {
          return variant.set('markup', I.List());
        }
        throw error;
      },
      markup =>
        variant
          .set('markup', markup.get('sections'))
          .set('markupContext', markup.get('context'))
    );

// We only want default for markup
const onlyKeepDefault = variant =>
  variant.update('markup', markup =>
    fromNullable(markup.find(s => s.get('title') === 'default'))
    .map(d => d.get('items').first().get('markup'))
    .getOrElse(''));

// We don't want default in the examples
const removeDefaultSection = markup =>
  markup.update('sections', sections =>
    sections.filter(s => s.get('title') !== 'default'));

const requireIfVariant = name => x =>
  isVariant(x)
  ? onlyKeepDefault(requireMarkup(name)(x))
  : x;

const addMarkup = components =>
  components.map((value, name) =>
    mapTree(value, requireIfVariant(name)));

const mappings = {
  components: comp => markupMap(comp, variants(comp)).map(removeDefaultSection),
  utilities: u => getMark(u.get('id'), 'IGNORE_VARIANT')
};

const uiFromComments = () =>
  getComments()
  .map(createParser)
  .map(createUI);

const ui = () =>
  uiFromComments()
  .map(ui => ui.update('components', addMarkup));

const examples = () =>
  uiFromComments()
  .map(u =>
    u.map((group, id) =>
      group.map(comp => mappings[id](comp))));

module.exports = { examples, ui, isVariant, variants };
