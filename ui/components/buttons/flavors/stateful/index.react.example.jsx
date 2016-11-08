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
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let StatefulButton = props =>
  <button className={className('slds-button', props.className)} disabled={props.disabled} aria-live="assertive">
    <span className="slds-text-not-selected">
      <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="add" />
      Follow
    </span>
    <span className="slds-text-selected">
      <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="check" />
      Following
    </span>
    <span className="slds-text-selected-focus">
      <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="close" />
      Unfollow
    </span>
  </button>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-neutral-stateful-not-selected',
    label: 'Neutral - Not Selected',
    element: <StatefulButton className="slds-button--neutral slds-not-selected" />
  },
  {
    id: 'button-neutral-stateful-selected',
    label: 'Neutral - Selected',
    element: <StatefulButton className="slds-button--neutral slds-is-selected" />
  },
  {
    id: 'button-inverse-stateful-not-selected',
    label: 'Inverse - Not Selected',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <StatefulButton className="slds-button--inverse slds-not-selected" />
      </div>
  },
  {
    id: 'button-inverse-stateful-selected',
    label: 'Inverse - Selected',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <StatefulButton className="slds-button--inverse slds-is-selected" />
      </div>
  }
];
