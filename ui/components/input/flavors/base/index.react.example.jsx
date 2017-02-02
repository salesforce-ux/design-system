/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

const inputId = 'text-input-id-1';

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
      id={ inputId }
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
