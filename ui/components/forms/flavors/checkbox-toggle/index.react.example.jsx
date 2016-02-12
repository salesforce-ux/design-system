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
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only size--1-of-2')} {...props}>
    {props.children}
  </div>;

let Fieldset = props =>
  <fieldset className={className(pf('form--element form--stacked'), props.className)}>
    <legend className={pf('form-element__legend')}>
      <span className={pf('form-element__label form-element__label--top')}>Share email with</span>
    </legend>
    <div className={pf('form-element__control')}>
      {props.children}
    </div>
  </fieldset>;

let LabelWrapper = props =>
  <div className={className(pf('form-element grid grid--vertical-align-center'), props.className)}>
    {props.children}
  </div>;

let Label = props =>
  <label className={className(pf('checkbox--toggle'), props.className)} htmlFor={props.id}>
    {props.children}
  </label>;

let FauxLabel = props =>
  <span className={pf('form-element__label')}>{props.children}</span>;

let Checkbox = props =>
  <input name="checkbox" type="checkbox" disabled={props.disabled} />;

let Toggle = props =>
  <span className={className(pf('checkbox--faux'), props.className)} data-check-on="On" data-check-off="Off"></span>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////
let StateA = props ==
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
        <Checkbox disabled />
        <Toggle />
      </Label>
    </LabelWrapper>
  </Demo>;

let StateC = props =>
  <Demo>
    <Fieldset>
      <LabelWrapper>
        <Label className={pf('has-divider--bottom')}>
          <FauxLabel>North East Sales Team</FauxLabel>
          <Checkbox />
          <Toggle className={pf('col--bump-left')} />
        </Label>
      </LabelWrapper>
      <LabelWrapper>
        <Label className={pf('has-divider--bottom')}>
          <FauxLabel>Another Team</FauxLabel>
          <Checkbox />
          <Toggle className={pf('col--bump-left')} />
        </Label>
      </LabelWrapper>
      <LabelWrapper>
        <Label className={pf('has-divider--bottom')}>
          <FauxLabel>Another Team</FauxLabel>
          <Checkbox />
          <Toggle className={pf('col--bump-left')} />
        </Label>
      </LabelWrapper>
      <LabelWrapper>
        <Label className={pf('has-divider--bottom')}>
          <FauxLabel>Another Team</FauxLabel>
          <Checkbox />
          <Toggle className={pf('col--bump-left')} />
        </Label>
      </LabelWrapper>
    </Fieldset>
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
    id: 'checkbox-toggle-disabled',
    label: 'Disabled Toggle ',
    element: <StateB />
  },
  {
    id: 'checkbox-toggle-group',
    label: 'Group of toggles',
    element: <StateC />
  }
];
