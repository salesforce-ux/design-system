// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Fieldset = props =>
  <fieldset className={classNames('slds-form-element', props.className)}>
    {props.children}
  </fieldset>;

let Legend = props =>
  <legend className="slds-form-element__legend slds-form-element__label">{props.children}</legend>;

let FormElement = props =>
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>;

let FormElementLabel = props =>
  <label className="slds-form-element__label" htmlFor={props.id}>Checkbox Label</label>;

let FormElementControl = props =>
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

export let Checkbox = props => {
  const uniqueId = _.uniqueId('checkbox-');

  return (
    <span className="slds-checkbox">
      {props.children}
      <input type="checkbox" name={props.name || 'options'} id={props.id ? props.id : uniqueId} disabled={props.disabled} defaultChecked={props.checked} aria-describedby={props.errorId} />
      <label className={classNames('slds-checkbox__label', props.className)} htmlFor={props.id ? props.id : uniqueId}>
        <span className="slds-checkbox--faux" />
        <span className={classNames('slds-form-element__label', props.hideLabel ? 'slds-assistive-text' : null)}>{props.label}</span>
      </label>
    </span>
  );
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Indeterminate = props =>
  <FormElement>
    <FormElementControl>
      <Checkbox id="checkbox-indeterminate-01" label="Indeterminate Checkbox Label" />
    </FormElementControl>
  </FormElement>;

let Required = props =>
  <FormElement>
    <FormElementControl>
      <Checkbox label="Checkbox Label"><abbr className="slds-required" title="required">*</abbr></Checkbox>
    </FormElementControl>
  </FormElement>;

let ErrorState = props =>
  <FormElement className="slds-has-error">
    <FormElementControl>
      <Checkbox label="Checkbox Label" errorId="error_01"><abbr className="slds-required" title="required">*</abbr></Checkbox>
    </FormElementControl>
    <div id="error_01" className="slds-form-element__help">This field is required</div>
  </FormElement>;

let Disabled = props =>
  <FormElement>
    <FormElementControl>
      <Checkbox label="Checkbox Label" disabled />
    </FormElementControl>
  </FormElement>;

let Group = props =>
  <Fieldset>
    <Legend>Checkbox Group Label</Legend>
    <FormElementControl>
      <Checkbox label="Checkbox Label" checked />
      <Checkbox label="Checkbox Label" />
    </FormElementControl>
  </Fieldset>;

let GroupRequired = props =>
  <Fieldset>
    <Legend><abbr className="slds-required" title="required">*</abbr> Checkbox Group Label</Legend>
    <FormElementControl>
      <Checkbox label="Checkbox Label" checked />
      <Checkbox label="Checkbox Label" />
    </FormElementControl>
  </Fieldset>;

let GroupError = props =>
  <Fieldset className="slds-has-error">
    <Legend><abbr className="slds-required" title="required">*</abbr> Checkbox Group Label</Legend>
    <FormElementControl>
      <Checkbox errorId="error_01" label="Checkbox Label" checked />
      <Checkbox errorId="error_01" label="Checkbox Label" />
    </FormElementControl>
    <div id="error_01" className="slds-form-element__help">This field is required</div>
  </Fieldset>;

let GroupDisabled = props =>
  <Fieldset>
    <Legend>Checkbox Group Label</Legend>
    <FormElementControl>
      <Checkbox label="Checkbox Label" disabled />
      <Checkbox label="Checkbox Label" disabled />
    </FormElementControl>
  </Fieldset>;

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <FormElement>
    <FormElementControl>
      <Checkbox label="Checkbox Label" checked />
    </FormElementControl>
  </FormElement>
);

export let states = [
  {
    id: 'indeterminate',
    label: 'Indeterminate',
    element: <Indeterminate />,
    script: `
      var checkbox = document.getElementById('checkbox-indeterminate-01')
      checkbox.indeterminate = true
    `
  },
  {
    id: 'required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'error',
    label: 'Error',
    element: <ErrorState />
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: <Disabled />
  }
];

export let examples = [
  {
    id: 'group',
    label: 'Group',
    element: <Group />
  },
  {
    id: 'group-required',
    label: 'Group Required',
    element: <GroupRequired />
  },
  {
    id: 'group-error',
    label: 'Group with error',
    element: <GroupError />
  },
  {
    id: 'group-disabled',
    label: 'Group Disabled',
    element: <GroupDisabled />
  }
];
