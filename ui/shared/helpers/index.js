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
import StoryWrapper from '../../../shared/components/StoryWrapper';

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

// Get a component example object from the exported states and examples objects
// To retrieve a specific property value from the object, pass in its key as an argument
export const getDisplayExampleById = (collection, id, key) => {
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

  const elementObj = collection.filter(example => example.id === id);
  if (elementObj && elementObj[0]) {
    return elementObj[0][key] || elementObj[0];
  } else {
    throw new Error(`No display element with id "${id}" found`);
  }
};

// Get a component example in doc block from the exported states and examples objects
export const getDisplayElementById = (collection, id) =>
  getDisplayExampleById(collection, id, 'element');

// Get a component example's styles in doc block from the exported states and examples objects
export const getDemoStylesById = (collection, id) =>
  getDisplayExampleById(collection, id, 'demoStyles');

/**
 * @desc Get all examples for a single component by type
 * @param object $object - the object to check types against
 * @param array $types - the type of examples you want
 * @return array - array of componenet examples based parameters
 */
export const getDisplayCollectionsByType = (object, types) => {
  let collection = [];
  if (Array.isArray(types)) {
    types.map(type => {
      if (object.hasOwnProperty(type)) {
        if (Array.isArray(object[type])) {
          object[type].map(element => {
            const { id, demoStyles, label, demoProps } = element;
            return collection.push({
              id: id,
              component: getDisplayElementById(object[type], id),
              label,
              demoStyles,
              demoProps
            });
          });
        } else {
          collection.push({
            label: 'Default',
            component: object[type]
          });
        }
      }
    });
  } else {
    throw new Error(`Expected "${types}" to be an array`);
  }
  return collection;
};

/**
 * @desc Get all examples for multiple components by type
 * @param array $array - the components to check types against
 * @param array $types - the type of examples you want
 * @return array - array of componenet examples based on parameters
 */
export const getAllDisplayCollectionsByType = (array, types) => {
  let collection = [];
  if (Array.isArray(array)) {
    array.map(element =>
      collection.push(getDisplayCollectionsByType(element, types))
    );
  } else {
    throw new Error(`Expected "${array}" to be an array`);
  }
  return collection;
};

/**
 * @desc Get the StoryWrapper for a demo-styled example as a Story decorator
 * @param object $example - the example object being Story-ified
 * @return object - decorator object to pass to storiesOf.add
 */
export const getStoryWrapperDecorator = example => {
  const { demoStyles, demoProps } = example;
  return demoStyles || demoProps
    ? {
        decorators: [
          storyFn => (
            <StoryWrapper styles={demoStyles} {...demoProps}>
              {storyFn()}
            </StoryWrapper>
          )
        ]
      }
    : null;
};

/**
 * @desc Get the parameters for a story with consideration for example wrapper decorator
 * @param {...Object} $paramObjects - the params to pass to story as Objects
 * @return object - parameter object to pass to storiesOf.add
 */
export const getExampleStoryParams = (...paramObjects) =>
  paramObjects.reduce((prev, next) => {
    if (prev.decorators && next.decorators)
      next.decorators = [...prev.decorators, ...next.decorators];
    return { ...prev, ...next };
  }, {});

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
