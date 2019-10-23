// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from '../../shared/helpers';
import { UtilityIcon } from '../icons/base/example';

export const CheckboxButton = ({
  isFocused,
  isDisabled,
  isChecked,
  tabIndex,
  iconAssistiveText,
  iconSize,
  iconSymbol,
  iconCurrentColor,
  onChange,
  onFocus,
  onBlur
}) => {
  const uniqueId = _.uniqueId('checkbox-button-');

  const computedClassNames = {
    'slds-checkbox-button_is-focused': isFocused,
    'slds-checkbox-button_is-checked': isChecked,
    'slds-checkbox-button_is-disabled': isDisabled
  };

  return (
    <label
      className={classNames('slds-checkbox-button', computedClassNames)}
      htmlFor={uniqueId}
    >
      <input
        className="slds-assistive-text"
        type="checkbox"
        id={uniqueId}
        value={uniqueId}
        disabled={isDisabled}
        defaultChecked={isChecked}
        tabIndex={tabIndex}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <UtilityIcon
        symbol={iconSymbol}
        size={iconSize}
        useCurrentColor={iconCurrentColor}
        assistiveText={iconAssistiveText}
      />
    </label>
  );
};

CheckboxButton.defaultProps = {
  iconAssistiveText: 'Add product',
  iconSize: 'x-small',
  iconSymbol: 'add',
  iconCurrentColor: true
};

CheckboxButton.propTypes = {
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  tabIndex: PropTypes.number,
  iconAssistiveText: PropTypes.string,
  iconSize: PropTypes.string,
  iconSymbol: PropTypes.string,
  iconCurrentColor: PropTypes.bool
};

export const CheckboxAddButtonDeprecated = ({
  disabled,
  checked,
  tabIndex,
  label
}) => {
  const uniqueId = _.uniqueId('add-checkbox-');

  return (
    <div className="slds-checkbox_add-button">
      <input
        className="slds-assistive-text"
        type="checkbox"
        id={uniqueId}
        value={uniqueId}
        disabled={disabled}
        defaultChecked={checked}
        tabIndex={tabIndex}
      />
      <label htmlFor={uniqueId} className="slds-checkbox_faux">
        <span className="slds-assistive-text">{label || 'Add product'}</span>
      </label>
    </div>
  );
};
