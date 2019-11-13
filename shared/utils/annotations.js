import I from 'immutable';
import uiJson from '../../.dist/ui.json';
import { toList } from './tree';

const ui = I.fromJS(uiJson);

/**
 * Returns alphabetized array of component names
 */
export const getComponents = () =>
  ui
    .get('components')
    .keySeq()
    .sort()
    .toArray();

/**
 * Gets the annotations object for a particular component
 * @param {string} name - component name to get the data for
 */
export const getComponent = name => ui.getIn(['components', name]);

/**
 * Gets the annotations object for a particular component
 * @param {string} name - component name to get the data for
 */
export const getComponentVariants = name =>
  toList(getComponent(name))
    .filter(item => item.getIn(['annotations', 'variant']))
    .map(item => item.getIn(['annotations', 'name']))
    .toSet() // this removes duplicate entries - [TODO] but why do we have duplicates?
    .toJS();

/**
 * Returns alphabetized array of utilities
 */
export const getUtils = () =>
  ui
    .get('utilities')
    .keySeq()
    .sort()
    .toArray();

/**
 * Gets the annotations object for a particular utility
 * @param {string} name - utility name to get the data for
 */
export const getUtil = name => ui.getIn(['utilities', name]);
