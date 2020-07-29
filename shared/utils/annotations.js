import I from 'immutable';
import uiJson from '../../.generated/ui.json';
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

/**
 * Returns array of components filtered by the criteria passed in
 * @param {array} criteria - array of criteria objects used to filter component results,
 *    ex. [ { path: ['annotations', 'layout'], type: <'exists','match','contains'>, value: <value> }, {...} ]
 */
export const getComponentsByCriteria = criteria => {
  const components = ui.get('components');
  let componentsFiltered = I.Map();

  // iterate over all criteria
  criteria.forEach(criterion => {
    let filterRule;

    switch (criterion.type) {
      // exact match
      case 'match':
        filterRule = item => {
          return item.getIn(criterion.path) === criterion.value;
        };
        break;

      // contains matching
      case 'contains':
        filterRule = item =>
          item.getIn(criterion.path).includes(criterion.value);
        break;

      // exists is default behavior
      default:
        filterRule = item => item.getIn(criterion.path);
    }

    // concatenate new results for each criterion
    componentsFiltered = componentsFiltered.mergeDeep(
      components.filter(filterRule)
    );
  });

  return componentsFiltered
    .keySeq()
    .sort()
    .toArray();
};
