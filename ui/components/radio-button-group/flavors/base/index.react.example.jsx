/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';
import { FormElementControl } from 'ui/components/radio-group/flavors/base/index.react.example';
import { Fieldset, Legend } from 'ui/components/radio-group/flavors/base/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let RadioButtonGroup = props =>
  <div className="slds-radio--button-group">
    {props.children}
  </div>;

let RadioButton = props =>
  <span className={classNames('slds-button slds-radio--button', props.className)}>
    <input
      name="radio"
      type="radio"
      id={props.id}
      disabled={props.disabled}
      aria-describedby={props.errorId}
    />
    <label className="slds-radio--button__label" htmlFor={props.id}>
      <span className="slds-radio--faux">
        {props.children}
      </span>
    </label>
  </span>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Fieldset>
    <Legend>Radio Group Label</Legend>
    <FormElementControl>
      <RadioButtonGroup>
        <RadioButton id="monday">Mon</RadioButton>
        <RadioButton id="tuesday">Tue</RadioButton>
        <RadioButton id="wednesday">Wed</RadioButton>
        <RadioButton id="thursday">Thu</RadioButton>
        <RadioButton id="friday">Fri</RadioButton>
      </RadioButtonGroup>
    </FormElementControl>
  </Fieldset>
);

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <RadioButtonGroup>
            <RadioButton id="monday">Mon</RadioButton>
            <RadioButton id="tuesday">Tue</RadioButton>
            <RadioButton id="wednesday">Wed</RadioButton>
            <RadioButton id="thursday">Thu</RadioButton>
            <RadioButton id="friday">Fri</RadioButton>
          </RadioButtonGroup>
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <Fieldset>
        <Legend>Radio Group Label</Legend>
        <FormElementControl>
          <RadioButtonGroup>
            <RadioButton id="monday" disabled="true">Mon</RadioButton>
            <RadioButton id="tuesday" disabled="true">Tue</RadioButton>
            <RadioButton id="wednesday" disabled="true">Wed</RadioButton>
            <RadioButton id="thursday" disabled="true">Thu</RadioButton>
            <RadioButton id="friday" disabled="true">Fri</RadioButton>
          </RadioButtonGroup>
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'required',
    label: 'Required',
    element:
      <Fieldset>
        <Legend>
          <abbr className="slds-required" title="required">*</abbr>Radio Group Label
        </Legend>
        <FormElementControl>
          <RadioButtonGroup>
            <RadioButton id="monday">Mon</RadioButton>
            <RadioButton id="tuesday">Tue</RadioButton>
            <RadioButton id="wednesday">Wed</RadioButton>
            <RadioButton id="thursday">Thu</RadioButton>
            <RadioButton id="friday">Fri</RadioButton>
          </RadioButtonGroup>
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'error',
    label: 'Has error',
    element:
      <Fieldset className="slds-has-error">
        <Legend>
          <abbr className="slds-required" title="required">*</abbr>Radio Group Label
        </Legend>
        <FormElementControl>
          <RadioButtonGroup>
            <RadioButton errorId="error_01" id="monday">Mon</RadioButton>
            <RadioButton errorId="error_01" id="tuesday">Tue</RadioButton>
            <RadioButton errorId="error_01" id="wednesday">Wed</RadioButton>
            <RadioButton errorId="error_01" id="thursday">Thu</RadioButton>
            <RadioButton errorId="error_01" id="friday">Fri</RadioButton>
          </RadioButtonGroup>
          <div id="error_01" className="slds-form-element__help">This field is required</div>
        </FormElementControl>
      </Fieldset>
  }
];
