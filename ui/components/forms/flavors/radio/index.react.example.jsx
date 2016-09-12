/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Fieldset = props =>
  <fieldset className={className('slds-form-element', props.className)}>
    {props.children}
  </fieldset>;

let Legend = props =>
  <legend className="slds-form-element__legend slds-form-element__label">{props.children}</legend>;

let FormElementControl = props =>
  <div className={className('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

export let Radio = props => {
  const uniqueId = _.uniqueId('radio-');

  return (
    <span className="slds-radio">
      <input type="radio" id={ uniqueId } name="options" disabled={props.disabled} defaultChecked={props.checked} aria-describedby={props.errorId} />
      <label className="slds-radio__label" htmlFor={ uniqueId }>
        <span className="slds-radio--faux"></span>
        <span className="slds-form-element__label">{props.children}</span>
      </label>
    </span>
  );
};

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo>
    <Fieldset>
      <Legend>Radio Group Label</Legend>
      <FormElementControl>
        <Radio checked>Radio Label One</Radio>
        <Radio>Radio Label Two</Radio>
      </FormElementControl>
    </Fieldset>
  </Demo>;

let Required = props =>
  <Demo>
    <Fieldset>
      <Legend><abbr className="slds-required" title="required">*</abbr> Radio Group Label</Legend>
      <FormElementControl>
        <Radio checked>Radio Label One</Radio>
        <Radio>Radio Label Two</Radio>
      </FormElementControl>
    </Fieldset>
  </Demo>;

let ErrorState = props =>
  <Demo>
    <Fieldset className="slds-has-error">
      <Legend><abbr className="slds-required" title="required">*</abbr> Radio Group Label</Legend>
      <FormElementControl>
        <Radio errorId="error_01" checked>Radio Label One</Radio>
        <Radio errorId="error_01">Radio Label Two</Radio>
      </FormElementControl>
      <div id="error_01" className="slds-form-element__help" iref="form-element__help">This field is required</div>
    </Fieldset>
  </Demo>;

let Disabled = props =>
  <Demo>
    <Fieldset>
      <Legend>Radio Group Label</Legend>
      <FormElementControl>
        <Radio disabled>Radio Label One</Radio>
        <Radio disabled>Radio Label Two</Radio>
      </FormElementControl>
    </Fieldset>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'radio-group',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'radio-group-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'radio-group-error',
    label: 'Error',
    element: <ErrorState />
  },
  {
    id: 'radio-group-disabled',
    label: 'Disabled',
    element: <Disabled />
  }
];
