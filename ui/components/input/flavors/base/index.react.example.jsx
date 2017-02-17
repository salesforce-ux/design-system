// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

let inputId = 'text-input-id-1';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

// Might need to move this to its own component example
export let FormElement = props =>
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>;

export let FormElementLabel = props =>
  <label
    className={ classNames('slds-form-element__label', props.className)}
    htmlFor={ inputId }
  >
    {props.children}
  </label>;

export let FormElementControl = props =>
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

export let Input = props => {

  return (
    <input
      {...props}
      id={ props.id || inputId }
      className={classNames('slds-input', props.className)}
      type={ props.type || 'text'}
      placeholder={ props.placeholder || 'Placeholder Text' }
    />
  );
};

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
    <FormElement>
      <FormElementLabel>Input Label</FormElementLabel>
      <FormElementControl>
        <Input />
      </FormElementControl>
    </FormElement>;


let Required = props =>
    <FormElement>
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Input Label</FormElementLabel>
      <FormElementControl>
        <Input required />
      </FormElementControl>
    </FormElement>;

let ErrorState = props =>
    <FormElement className="slds-has-error">
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Input Label</FormElementLabel>
      <FormElementControl>
        <Input required aria-describedby={props.errorId} />
      </FormElementControl>
      <div id={props.errorId} className="slds-form-element__help">This field is required</div>
    </FormElement>;

let ErrorIcon = props =>
    <FormElement className="slds-has-error">
      <FormElementLabel><abbr className="slds-required" title="required">*</abbr> Input Label</FormElementLabel>
      <FormElementControl className="slds-input-has-icon slds-input-has-icon--left">
        <SvgIcon className="slds-input__icon" sprite="utility" symbol="warning" />
        <Input required aria-describedby={props.errorId} />
      </FormElementControl>
      <div id={props.errorId} className="slds-form-element__help">This field is required</div>
    </FormElement>;

let Disabled = props =>
    <FormElement>
      <FormElementLabel>Input Label</FormElementLabel>
      <FormElementControl>
        <Input disabled />
      </FormElementControl>
    </FormElement>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl>
      <Input />
    </FormElementControl>
  </FormElement>
);

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'input-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'input-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'input-error',
    label: 'Error',
    element: <ErrorState errorId="error-message" />
  },
  {
    id: 'input-error-icon',
    label: 'Error with icon',
    element: <ErrorIcon errorId="error-message" />
  }
];
