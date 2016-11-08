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
  <div className="demo-only slds-size--1-of-2" {...props}>
    {props.children}
  </div>;

let Fieldset = props =>
  <fieldset className={className('form--element', props.className)}>
    <legend className="slds-form-element__legend slds-form-element__label">Share email with</legend>
    <div className="slds-form-element__control slds-box--border">
      {props.children}
    </div>
  </fieldset>;

let LabelWrapper = props =>
  <div className={className('slds-form-element', props.className)}>
    {props.children}
  </div>;

let Label = props =>
  <label className={className('slds-checkbox--toggle slds-grid', props.className)} htmlFor={props.id}>
    {props.children}
  </label>;

let FauxLabel = props =>
  <span className="slds-form-element__label slds-m-bottom--none">{props.children}</span>;

let Checkbox = props =>
  <input name="checkbox" type="checkbox" disabled={props.disabled} defaultChecked={props.checked} aria-describedby="toggle-desc" />;

let Toggle = props =>
  <span id="toggle-desc" className={className('slds-checkbox--faux_container', props.className)} aria-live="assertive">
    <span className="slds-checkbox--faux"></span>
    <span className={className('slds-checkbox--on', props.className)}>Enabled</span>
    <span className={className('slds-checkbox--off', props.className)}>Disabled</span>
  </span>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////
let StateA = props =>
  <Demo>
    <LabelWrapper>
      <Label>
        <FauxLabel>Toggle Label</FauxLabel>
        <Checkbox />
        <Toggle />
      </Label>
    </LabelWrapper>
  </Demo>;

let StateB = props =>
<Demo>
  <LabelWrapper>
    <Label>
      <FauxLabel>Toggle Label</FauxLabel>
      <Checkbox checked />
      <Toggle />
    </Label>
  </LabelWrapper>
</Demo>;

let StateC = props =>
  <Demo>
    <LabelWrapper>
      <Label>
        <FauxLabel>Toggle Label</FauxLabel>
        <Checkbox disabled />
        <Toggle />
      </Label>
    </LabelWrapper>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'checkbox-toggle',
    label: 'Default',
    element: <StateA />
  },
  {
    id: 'checkbox-toggle-checked',
    label: 'Checked',
    element: <StateB />
  },
  {
    id: 'checkbox-toggle-disabled',
    label: 'Disabled',
    element: <StateC />
  }
];
