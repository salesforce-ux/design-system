// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

export const CheckboxPrimitive = props => {
  const { id, name, value, isDisabled, isChecked, isRequired, errorId } = props;

  return (
    <input
      type="checkbox"
      id={id}
      name={name || 'label'}
      value={value || 'option'}
      disabled={isDisabled}
      defaultChecked={isChecked}
      required={isRequired}
      aria-describedby={errorId}
    />
  );
};

CheckboxPrimitive.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isRequired: PropTypes.bool,
  errorId: PropTypes.string
};

export const CheckboxStandalone = props => {
  const { id, name, value, isDisabled, isChecked, isRequired, errorId } = props;

  return (
    <span className="slds-checkbox slds-checkbox_standalone">
      <CheckboxPrimitive
        id={id}
        name={name}
        value={value}
        isDisabled={isDisabled}
        isChecked={isChecked}
        isRequired={isRequired}
        errorId={errorId}
      />
      <span className="slds-checkbox_faux" />
    </span>
  );
};

CheckboxStandalone.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isRequired: PropTypes.bool,
  errorId: PropTypes.string
};
