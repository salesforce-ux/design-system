// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let LabelWrapper = props => (
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>
);

export let Label = props => (
  <label
    className={classNames('slds-checkbox_toggle slds-grid', props.className)}
    htmlFor={props.id}
  >
    {props.children}
  </label>
);

export let FauxLabel = props => (
  <span
    className={classNames('slds-form-element__label', 'slds-m-bottom_none', {
      'slds-assistive-text': props.isBare
    })}
  >
    {props.children}
  </span>
);

export let Checkbox = props => (
  <input
    name={props.uniqueId}
    value={props.uniqueId}
    type="checkbox"
    disabled={props.disabled}
    defaultChecked={props.checked}
    aria-describedby={props.uniqueId}
  />
);

export let Toggle = props => (
  <span
    id={props.uniqueId}
    className={classNames('slds-checkbox_faux_container', props.className)}
    aria-live="assertive"
  >
    <span className="slds-checkbox_faux" />
    <span className={classNames('slds-checkbox_on', props.className)}>
      {props.labelTextOn || 'Enabled'}
    </span>
    <span className={classNames('slds-checkbox_off', props.className)}>
      {props.labelTextOff || 'Disabled'}
    </span>
  </span>
);

/// ////////////////////////////////////////
// State Constructor(s)
/// ////////////////////////////////////////

export let CheckboxToggle = props => {
  const uniqueId = _.uniqueId('checkbox-toggle-');

  return (
    <LabelWrapper>
      <Label>
        <FauxLabel isBare={props.isBare}>
          {props.title || 'Toggle Label'}
        </FauxLabel>
        <Checkbox
          uniqueId={uniqueId}
          checked={props.checked}
          disabled={props.disabled}
        />
        <Toggle
          uniqueId={uniqueId}
          labelTextOn={props.labelTextOn}
          labelTextOff={props.labelTextOff}
        />
      </Label>
    </LabelWrapper>
  );
};

export let CheckboxToggleChecked = props => {
  const uniqueId = _.uniqueId('checkbox-toggle-');

  return (
    <LabelWrapper>
      <Label>
        <FauxLabel>Toggle Label</FauxLabel>
        <Checkbox uniqueId={uniqueId} checked />
        <Toggle uniqueId={uniqueId} />
      </Label>
    </LabelWrapper>
  );
};

export let CheckboxToggleDisabled = props => {
  const uniqueId = _.uniqueId('checkbox-toggle-');

  return (
    <LabelWrapper>
      <Label>
        <FauxLabel>Toggle Label</FauxLabel>
        <Checkbox uniqueId={uniqueId} disabled />
        <Toggle uniqueId={uniqueId} />
      </Label>
    </LabelWrapper>
  );
};

// TODO: refactor later
export let CheckboxToggleCheckedDisabled = props => {
  const uniqueId = _.uniqueId('checkbox-toggle-');

  return (
    <LabelWrapper>
      <Label>
        <FauxLabel>Toggle Label</FauxLabel>
        <Checkbox uniqueId={uniqueId} disabled checked />
        <Toggle uniqueId={uniqueId} />
      </Label>
    </LabelWrapper>
  );
};

export let CheckboxToggleRTL = props => {
  const uniqueId = _.uniqueId('checkbox-toggle-');

  return (
    <div dir="rtl">
      <LabelWrapper>
        <Label>
          <FauxLabel>Toggle Label</FauxLabel>
          <Checkbox uniqueId={uniqueId} checked />
          <Toggle uniqueId={uniqueId} />
        </Label>
      </LabelWrapper>
    </div>
  );
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <CheckboxToggle />;

export let states = [
  {
    id: 'checkbox-toggle-checked',
    label: 'Checked',
    element: <CheckboxToggleChecked />
  },
  {
    id: 'checkbox-toggle-disabled',
    label: 'Disabled',
    element: <CheckboxToggleDisabled />
  },
  {
    id: 'checkbox-toggle-checked-disabled',
    label: 'Checked and Disabled',
    element: <CheckboxToggleCheckedDisabled />
  },
  {
    id: 'checkbox-toggle-rtl',
    label: 'Right to Left',
    element: <CheckboxToggleRTL />
  }
];
