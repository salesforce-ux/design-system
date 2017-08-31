import React from 'react';
import classNames from 'classnames';

const ButtonGroup = props => (
  <div
    className={classNames('slds-button-group', props.className)}
    role="group"
  >
    {props.children}
  </div>
);

const ButtonGroupList = props => (
  <ul className={classNames('slds-button-group-list', props.className)}>
    {props.children}
  </ul>
);

export default ({ list = false, ...props }) =>
  list ? <ButtonGroupList {...props} /> : <ButtonGroup {...props} />;
