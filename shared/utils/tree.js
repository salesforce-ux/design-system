// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
const I = require('immutable');

const reduceTree = (f, empty, x) =>
  f(
    x
      .get('restrictees', I.List())
      .reduce((ac, y) => reduceTree(f, ac, y), empty),
    x
  );

const mapTree = (x, f) =>
  f(x).set(
    'restrictees',
    x.get('restrictees', I.List()).map(r => mapTree(r, f))
  );

const toList = component =>
  reduceTree((a, b) => a.push(b), I.List(), component).reverse();

module.exports = { mapTree, reduceTree, toList };
