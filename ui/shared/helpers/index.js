// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import omit from 'lodash.omit';
import range from 'lodash.range';
import reverse from 'lodash.reverse';
import startCase from 'lodash.startcase';
import times from 'lodash.times';
import truncate from 'lodash.truncate';
import uniqueIdLodash from 'lodash.uniqueid';
import upperFirst from 'lodash.upperfirst';

// SHIM Lodash because it caches in node_modules and generates id's that are always incrementing
const uniqueId = (() => {
  const PREFIXES = {};
  let idCounter = 0;
  const newCounter = prefix => {
    PREFIXES[prefix] = 0;
  };
  const incCounter = prefix => {
    PREFIXES[prefix] = PREFIXES[prefix] + 1;
    return PREFIXES[prefix];
  };
  const initCounterForPrefix = prefix =>
    PREFIXES[prefix] != null ? PREFIXES[prefix] : newCounter(prefix);
  const addToPrefix = prefix => {
    initCounterForPrefix(prefix);
    return prefix + incCounter(prefix);
  };
  return prefix => (prefix ? addToPrefix(prefix) : idCounter++);
})();

export default {
  omit,
  range,
  reverse,
  startCase,
  times,
  truncate,
  uniqueId,
  upperFirst
};
