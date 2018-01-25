// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Demo = props => (
  <div className="demo-only slds-size_1-of-2" {...props}>
    {props.children}
  </div>
);

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
  <span className="slds-form-element__label slds-m-bottom_none">
    {props.children}
  </span>
);

export let Checkbox = props => (
  <input
    name="checkbox"
    type="checkbox"
    disabled={props.disabled}
    defaultChecked={props.checked}
    aria-describedby="toggle-desc"
  />
);

export let Toggle = props => (
  <span
    id="toggle-desc"
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
export let CheckboxToggle = props => (
  <Demo>
    <LabelWrapper>
      <Label>
        <FauxLabel>Toggle Label</FauxLabel>
        <Checkbox />
        <Toggle />
      </Label>
    </LabelWrapper>
  </Demo>
);

export let CheckboxToggleChecked = props => (
  <Demo>
    <LabelWrapper>
      <Label>
        <FauxLabel>Toggle Label</FauxLabel>
        <Checkbox checked />
        <Toggle />
      </Label>
    </LabelWrapper>
  </Demo>
);

export let CheckboxToggleDisabled = props => (
  <Demo>
    <LabelWrapper>
      <Label>
        <FauxLabel>Toggle Label</FauxLabel>
        <Checkbox disabled />
        <Toggle />
      </Label>
    </LabelWrapper>
  </Demo>
);

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
