// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import _ from 'lodash';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let CheckboxAddButton = props => {
  const uniqueId = _.uniqueId('add-checkbox-');

  return (
    <div className="slds-checkbox--add-button">
      <input
        className="slds-assistive-text"
        type="checkbox"
        id={uniqueId}
        disabled={props.disabled}
        defaultChecked={props.checked}
        tabIndex={props.tabIndex}
      />
      <label htmlFor={uniqueId} className="slds-checkbox--faux">
        <span className="slds-assistive-text">{ props.label || 'Add product' }</span>
      </label>
    </div>
  );
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <CheckboxAddButton />
);

export let states = [
  {
    id: 'checkbox-add-button-checked',
    label: 'Checked',
    element: <CheckboxAddButton checked />
  },
  {
    id: 'checkbox-add-button-disabled',
    label: 'Disabled',
    element: <CheckboxAddButton disabled />
  }
];
