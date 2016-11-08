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

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Fieldset = props =>
  <fieldset className={className('slds-form-element', props.className)}>
    <legend className="slds-form-element__legend slds-form-element__label">Scheduled Day(s)</legend>
    <div className="slds-form-element__control">
      {props.children}
    </div>
  </fieldset>;

let CheckboxGroup = props =>
  <div className="slds-checkbox--button-group">
    {props.children}
  </div>;

let Checkbox = props =>
  <span className={className('slds-button slds-checkbox--button', props.className)} htmlFor={props.id}>
    <input name="checkbox" type="checkbox" id={props.id} disabled={props.disabled}  aria-describedby={props.errorId} />
    <label className="slds-checkbox--button__label" htmlFor={props.id}>
      <span className="slds-checkbox--faux">
        {props.children}
      </span>
    </label>
  </span>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let StateA = props =>
  <Demo>
    <Fieldset>
      <CheckboxGroup>
        <Checkbox id="monday">Mon</Checkbox>
        <Checkbox id="tuesday">Tue</Checkbox>
        <Checkbox id="wednesday">Wed</Checkbox>
        <Checkbox id="thursday">Thu</Checkbox>
        <Checkbox id="friday">Fri</Checkbox>
      </CheckboxGroup>
    </Fieldset>
  </Demo>;

let StateB = props =>
  <Demo>
    <Fieldset className="slds-has-error">
      <CheckboxGroup>
        <Checkbox errorId="error_01" id="monday">Mon</Checkbox>
        <Checkbox errorId="error_01" id="tuesday">Tue</Checkbox>
        <Checkbox errorId="error_01" id="wednesday">Wed</Checkbox>
        <Checkbox errorId="error_01" id="thursday">Thu</Checkbox>
        <Checkbox errorId="error_01" id="friday">Fri</Checkbox>
      </CheckboxGroup>
      <div id="error_01" className="slds-form-element__help">This field is required</div>
    </Fieldset>
  </Demo>;

let StateC = props =>
  <Demo>
    <Fieldset>
      <CheckboxGroup>
        <Checkbox id="monday" disabled="true">Mon</Checkbox>
        <Checkbox id="tuesday" disabled="true">Tue</Checkbox>
        <Checkbox id="wednesday" disabled="true">Wed</Checkbox>
        <Checkbox id="thursday" disabled="true">Thu</Checkbox>
        <Checkbox id="friday" disabled="true">Fri</Checkbox>
      </CheckboxGroup>
    </Fieldset>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'checkbox-alt',
    label: 'Default',
    element: <StateA />
  },
  {
    id: 'checkbox-alt-has-error',
    label: 'Has error',
    element: <StateB />
  },
  {
    id: 'checkbox-alt-disabled',
    label: 'Disabled',
    element: <StateC />
  }
];
