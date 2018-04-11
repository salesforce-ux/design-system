// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Fieldset = props => (
  <fieldset className={classNames('form--element', props.className)}>
    <legend className="slds-form-element__legend slds-form-element__label">
      Share email with
    </legend>
    <div className="slds-form-element__control slds-box_border">
      {props.children}
    </div>
  </fieldset>
);

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
      Enabled
    </span>
    <span className={classNames('slds-checkbox_off', props.className)}>
      Disabled
    </span>
  </span>
);

/// ////////////////////////////////////////
// State Constructor(s)
/// ////////////////////////////////////////

export const Context = props => (
  <div className="demo-only slds-size_1-of-2" {...props}>
    {props.children}
  </div>
);

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
        <Toggle uniqueId={uniqueId} />
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
  }
];
