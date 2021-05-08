// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { Button } from '../base/example';

export let StatefulButton = props => {
  const {
    className,
    disabled,
    isNotSelected,
    isSelected,
    isSelectedClicked
  } = props;
  const [buttonSelected, setButtonSelected] = useState(
    (typeof isNotSelected !== 'undefined' &&
      Boolean(isNotSelected) === false) ||
      isSelected ||
      isSelectedClicked
  );
  const [buttonFocused, setButtonFocused] = useState(isSelectedClicked);

  return (
    <Button
      className={classNames('slds-button_stateful', className, {
        'slds-not-selected': !buttonSelected,
        'slds-is-selected': buttonSelected && !buttonFocused,
        'slds-is-selected-clicked': buttonSelected && buttonFocused
      })}
      disabled={disabled}
      aria-live="assertive"
      aria-pressed={Boolean(buttonSelected).toString()}
      isNeutral
      onBlur={() => setButtonFocused(false)}
      onFocus={() => setButtonFocused(true)}
      onClick={() => setButtonSelected(!buttonSelected)}
    >
      <span className="slds-text-not-selected">
        <SvgIcon
          className="slds-button__icon slds-button__icon_small slds-button__icon_left"
          sprite="utility"
          symbol="add"
        />
        Follow
      </span>
      <span className="slds-text-selected">
        <SvgIcon
          className="slds-button__icon slds-button__icon_small slds-button__icon_left"
          sprite="utility"
          symbol="check"
        />
        Following
      </span>
      <span className="slds-text-selected-focus">
        <SvgIcon
          className="slds-button__icon slds-button__icon_small slds-button__icon_left"
          sprite="utility"
          symbol="close"
        />
        Unfollow
      </span>
    </Button>
  );
};

StatefulButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isNotSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectedClicked: PropTypes.bool
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <StatefulButton isNeutral isNotSelected />;

export const states = [
  {
    id: 'disabled',
    label: 'disabled',
    element: <StatefulButton isNotSelected disabled />
  },
  {
    id: 'selected',
    label: 'Selected',
    element: <StatefulButton isNeutral isSelected />
  },
  {
    id: 'selected-clicked',
    label: 'Selected and Clicked',
    element: <StatefulButton isNeutral isSelectedClicked />
  }
];
