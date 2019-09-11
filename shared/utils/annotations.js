import I from 'immutable';
import uiJson from '../../.dist/ui.json';
import { toList } from './tree';

const ui = I.fromJS(uiJson);

const getComponents = () =>
  ui
    .get('components')
    .keySeq()
    .sort()
    .toArray();

const getComponent = name => ui.getIn(['components', name]);

const getComponentVariants = name => {
  const comp = getComponent(name);

  return isUtil(comp)
    ? comp.get('restrictees')
    : toList(comp)
        .filter(item => item.getIn(['annotations', 'variant']))
        .map(item => item.getIn(['annotations', 'name']))
        .toSet() // this removes duplicate entries - [TODO] but why do we have duplicates?
        .toJS();
};

const isUtil = item => item.getIn(['annotations', 'utility']);

export { getComponents, getComponent, getComponentVariants };
