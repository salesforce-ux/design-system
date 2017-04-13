// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

let idCounter = 0;

const PREFIXES = {};

// SHIM Lodash because it caches in node_modules and generates id's that are always incrementing
const _ = require('lodash');

const newCounter = prefix => {
  PREFIXES[prefix] = 0;
};

const incCounter = prefix => {
  PREFIXES[prefix] = PREFIXES[prefix] + 1;
  return PREFIXES[prefix];
};

const initCounterForPrefix = prefix =>
  PREFIXES[prefix] != null
  ? PREFIXES[prefix]
  : newCounter(prefix);

const addToPrefix = prefix => {
  initCounterForPrefix(prefix);
  return prefix + incCounter(prefix);
};

const uniqueId = prefix =>
  prefix ? addToPrefix(prefix) : idCounter++;

_.uniqueId = uniqueId;
