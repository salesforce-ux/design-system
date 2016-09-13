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

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let BaseIcon = props =>
<Demo style={{ padding: '0.5rem', background: '#16325c' }}>
  <span className="slds-icon_container" title="description of icon when needed">
    <SvgIcon className="slds-icon" sprite="standard" symbol="lead" />
    <span className="slds-assistive-text">Description of icon</span>
  </span>
</Demo>;

let DefaultIcon = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon-text-default" sprite="utility" symbol="lock" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let WarningIcon = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon-text-warning" sprite="utility" symbol="warning" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let ErrorIcon = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon-text-error" sprite="utility" symbol="warning" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'baseicon',
    label: 'Base',
    element: <BaseIcon />
  },
  {
    id: 'defaulticon',
    label: 'Default',
    element: <DefaultIcon />
  },
  {
    id: 'warningicon',
    label: 'Warning',
    element: <WarningIcon />
  },
  {
    id: 'erroricon',
    label: 'Error',
    element: <ErrorIcon />
  }
];
