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

let Strength = props =>
  <span
    {...props}
    title="Description of the icon when needed"
    className={classNames('slds-icon-strength', props.className)}>
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle r="1.825" cx="2.3875" cy="50%" />
      <circle r="1.825" cx="50%" cy="50%" />
      <circle r="1.825" cx="13.6125" cy="50%" />
    </svg>
    <span className="slds-assistive-text">Text alternative when needed</span>
  </span>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'strength-0',
    label: 'Default',
    element: <Strength data-slds-strength="0" />
  },
  {
    id: 'strength-1',
    label: 'Strength: 1',
    element: <Strength data-slds-strength="1" />
  },
  {
    id: 'strength-2',
    label: 'Strength: 2',
    element: <Strength data-slds-strength="2" />
  },
  {
    id: 'strength-3',
    label: 'Strength: 3',
    element: <Strength data-slds-strength="3" />
  },
  {
    id: 'animated',
    label: 'Animated on load',
    element: <Strength className="slds-is-animated" data-slds-strength="3" />
  },
  {
    id: 'paused',
    label: 'Paused',
    element: <Strength className="slds-is-animated slds-is-paused" data-slds-strength="3" />
  }
];
