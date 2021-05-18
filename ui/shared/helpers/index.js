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

import { storiesOf } from '@storybook/react';
import StoryFrame from '../../../shared/components/StoryFrame';
import DocsPage from '../../../.storybook/components/DocsPage';

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

  // if an ID was provided then search for it in the collection
  if (id !== undefined) {
    const elementObj = collection.filter(example => example.id === id);

    if (elementObj && elementObj[0]) {
      return elementObj[0][key] || elementObj[0];
    } else {
      throw new Error(`No display element with id "${id}" found`);
    }
  } else {
    // if no ID was provided then we simply return the first item of the array
    return collection[0][key];
  }
};

// Get a component example in doc block from the exported states and examples objects
export const getDisplayElementById = (collection, id) => {
  // if collection is an array, continue as expected
  if (Array.isArray(collection)) {
    return getDisplayExampleById(collection, id, 'element');
  }

  // if collection is not an array simply return it (probably a React element)
  return collection;
};

// Get a component example's styles in doc block from the exported states and examples objects
export const getDemoStylesById = (collection, id) =>
  getDisplayExampleById(collection, id, 'demoStyles');

export const capitalize = str => {
  if (typeof str === 'string') {
    return str.replace(/^\w/, c => c.toUpperCase());
  } else {
    return '';
  }
};

function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

/**
 * @desc Get all contexts for examples for a single component
 * @param object $object - the object to get contexts from
 * @return array - array of example contexts
 */
export const getExampleContexts = object => {
  let contexts = [];

  object.map(group => {
    const groupSet = new Set(
      group.map(example =>
        example.context === undefined ? 'kitchen' : example.context
      )
    );
    contexts = [...union(groupSet, new Set(contexts))];
  });

  return contexts;
};

/**
 * @desc Get all examples for a single component by type
 * @param object $object - the object to check types against
 * @param array $types - the type of examples you want
 * @return array - array of component examples based parameters
 */
export const getDisplayCollectionsByType = (object, types) => {
  let collection = [];
  if (Array.isArray(types)) {
    types.map(type => {
      if (object.hasOwnProperty(type)) {
        if (Array.isArray(object[type])) {
          object[type].map(element => {
            const {
              id,
              demoStyles,
              storybookStyles,
              label,
              demoProps,
              deprecated,
              context
            } = element;
            return collection.push({
              id: id,
              component: getDisplayElementById(object[type], id),
              label,
              demoStyles,
              storybookStyles,
              demoProps,
              deprecated,
              context
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
 * @return array - array of component examples based on parameters
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

/**
 * @desc Return the nubbin position class
 * @param {string} position Accepts declarative location e.g. "top left", 'bottom right', 'top', etc
 * @return Classname as a string
 */
export const getNubbinClass = position => {
  const nubbinPositionArray = position.split(' ');
  const nubbinComputedClass = 'slds-nubbin_' + nubbinPositionArray.join('-');
  return nubbinComputedClass;
};

/**
 * @desc Factory for creating custom React prop-types
 * @param {boolean} isRequired Sets the prop-type to required
 * @param {function} callback Prop-type validation logic
 */
export const createCustomPropType = (isRequired, callback) => {
  // The factory returns a custom prop type
  return function(props, propName, componentName) {
    const prop = props[propName];
    if (prop == null) {
      // Prop is missing
      if (isRequired) {
        // Prop is required but wasn't specified. Throw an error.
        throw new Error();
      }
      // Prop is optional. Do nothing.
    } else {
      callback(props, propName, componentName);
    }
  };
};

/**
 *
 */
export const generateStories = (
  patternName,
  examples,
  collections,
  Docs,
  options = {
    defaultDemoStyles: '',
    isFullBleed: false,
    isViewport: false,
    eyes: undefined
  }
) => {
  // retrieve examples by type
  const kitchenSink = getAllDisplayCollectionsByType(examples, collections);

  // retrieve contexts defined in examples definition files
  const contexts = getExampleContexts(kitchenSink);

  return contexts.map(context => {
    storiesOf(`Components/${patternName}`, module).add(
      `${capitalize(context)} Sink`,
      () =>
        kitchenSink.map((element, idx) => {
          const kitchen = element.filter(el =>
            context === 'kitchen'
              ? el.context === context || el.context === undefined
              : el.context === context
          );

          return kitchen.map(
            ({ label, component, storybookStyles, demoStyles }) => {
              // if storybookStyles is a boolean true then we use the same styles defined in demoStyles
              let storyStyles;
              if (storybookStyles === true) {
                storyStyles = demoStyles || '';
              } else {
                storyStyles = storybookStyles || '';
              }
              storyStyles = options.defaultDemoStyles + storyStyles;

              return (
                <StoryFrame
                  component={component}
                  label={label}
                  key={`${context}-sink-${label}-${idx}`}
                  styles={storyStyles}
                  isFullBleed={options.isFullBleed}
                  isViewport={options.isViewport}
                />
              );
            }
          );
        }),
      {
        docs: {
          page: () => <DocsPage title={patternName} Docs={Docs} />
        },
        eyes: options.eyes
      }
    );
  });
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
