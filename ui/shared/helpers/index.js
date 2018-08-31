// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import omit from 'lodash.omit';
import range from 'lodash.range';
import reverse from 'lodash.reverse';
import startCase from 'lodash.startcase';
import times from 'lodash.times';
import truncate from 'lodash.truncate';
import upperFirst from 'lodash.upperfirst';
import IsDependentOn from './prop-types/is-dependent-on';
import CannotBeSetWith from './prop-types/cannot-be-set-with';

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

// Get a component example in doc block from the exported states and examples objects
export const getDisplayElementById = (collection, id) => {
  if (
    !(
      Array.isArray(collection) &&
      collection.every(
        o => o.hasOwnProperty('id') && React.isValidElement(o.element)
      )
    )
  )
    throw new Error(
      `${JSON.stringify(
        collection,
        null,
        2
      )} has broken schema that requires an array of example/state objects with 'id' and 'element' properties`
    );

  const elementObj = collection.find(o => o.id === id);
  if (elementObj) {
    return elementObj.element;
  } else {
    throw new Error(`No display element with id "${id}" found`);
  }
};

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

export { IsDependentOn, CannotBeSetWith };
