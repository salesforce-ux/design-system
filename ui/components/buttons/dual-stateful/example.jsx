// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { Button } from '../base/example';

const DefaultText = props => {
  return (
    <span className="slds-text-not-pressed">
      <SvgIcon
        className="slds-button__icon slds-button__icon_small slds-button__icon_left"
        sprite="utility"
        symbol="add"
      />
      {props.children}
    </span>
  );
};

DefaultText.propTypes = {
  children: PropTypes.string.isRequired
};

const PressedText = props => {
  return (
    <span className="slds-text-pressed">
      <SvgIcon
        className="slds-button__icon slds-button__icon_small slds-button__icon_left"
        sprite="utility"
        symbol="check"
      />
      {props.children}
    </span>
  );
};

PressedText.propTypes = {
  children: PropTypes.string.isRequired
};

const DualStatefulButton = props => {
  const { isDisabled, isPressed } = props;
  const [buttonSelected, setButtonSelected] = useState(isPressed);

  return (
    <Button
      isNeutral
      className={classNames('slds-button_dual-stateful', {
        'slds-is-pressed': buttonSelected
      })}
      disabled={isDisabled}
      aria-live="assertive"
      aria-pressed={Boolean(buttonSelected).toString()}
      onClick={() => setButtonSelected(!buttonSelected)}
    >
      <DefaultText>Follow</DefaultText>
      <PressedText>Following</PressedText>
    </Button>
  );
};

DualStatefulButton.propTypes = {
  isDisabled: PropTypes.bool,
  isPressed: PropTypes.bool
};

export { DualStatefulButton, DefaultText, PressedText };

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <DualStatefulButton>
        <DefaultText>Follow</DefaultText>
        <PressedText>Following</PressedText>
      </DualStatefulButton>
    )
  }
];

export const states = [
  {
    id: 'disabled',
    label: 'disabled',
    element: (
      <DualStatefulButton isDisabled>
        <DefaultText>Follow</DefaultText>
        <PressedText>Following</PressedText>
      </DualStatefulButton>
    )
  }
];

export const examples = [
  {
    id: 'pressed',
    label: 'pressed',
    element: (
      <DualStatefulButton isPressed>
        <DefaultText>Follow</DefaultText>
        <PressedText>Following</PressedText>
      </DualStatefulButton>
    )
  }
];
