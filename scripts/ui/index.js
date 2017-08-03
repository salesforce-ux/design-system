// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Task = require('data.task');
const gulp = require('gulp');
const gulpfile = require('gulp-file');
const paths = require('../helpers/paths');

const createParser = require("@salesforce-ux/design-system-parser");
const {
  mapTree,
  toList
} = require("@salesforce-ux/design-system-previewer/lib/tree");

const I = require("immutable-ext");
const Either = require("data.either");

const getComments = require("./comments");
const getShowcase = require("./showcase");

const isVariant = x => x.getIn(["annotations", "variant"]);
const isUtil = x => x.getIn(["annotations", "utility"]);

const variants = c => toList(c).filter(isVariant);

const toMap = f => (ac, c) => ac.set(c.get("id"), f(c.get("id")).get());

const createUI = parser =>
  I.Map({
    components: parser.components().reduce(toMap(parser.component), I.Map()),
    utilities: parser.utilities().reduce(toMap(parser.utility), I.Map())
  });

const addShowcaseIfVariantOrUtil = componentId => item =>
  isVariant(item) || isUtil(item)
    ? getShowcase(componentId, item.get("id"), isUtil(item)).fold(
        e => {
          throw e;
        },
        s => item.set("showcase", s)
      )
    : item;

const addShowcases = ui =>
  ui.map(group =>
    group.map((value, name) =>
      mapTree(value, addShowcaseIfVariantOrUtil(name))));

const uiFromComments = () => getComments().map(createParser).map(createUI);

const ui = () => uiFromComments().map(addShowcases);

const writeToDist = () =>
  ui()
  .map(x => JSON.stringify(x, null, 2))
  .chain(json =>
    new Task((rej, res) =>
      gulpfile('ui.json', json, { src: true })
      .pipe(gulp.dest(paths.dist))
      .on('finish', res)
      .on('error', rej)
    )
  );

module.exports = { ui, isVariant, variants, writeToDist };
