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

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

export let Button = props =>
  <button className={className('slds-button', props.className)} disabled={props.disabled}>
    {props.children}
  </button>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Reset = props =>
  <Demo>
    <Button>Button</Button>
  </Demo>;

let Neutral = props =>
  <Demo>
    <Button className="slds-button--neutral">Button Neutral</Button>
  </Demo>;

let NeutralIconLeft = props =>
  <Demo>
    <Button className="slds-button--neutral">
      <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="download" />
      Button Neutral
    </Button>
  </Demo>;

let NeutralIconRight = props =>
  <Demo>
    <Button className="slds-button--neutral">
      Button Neutral
      <SvgIcon className="slds-button__icon slds-button__icon--right" sprite="utility" symbol="down" />
    </Button>
  </Demo>;

let NeutralDisabled = props =>
  <Demo>
    <Button className="slds-button--neutral" disabled>Button Neutral</Button>
  </Demo>;

let Brand = props =>
  <Demo>
    <Button className="slds-button--brand">Button Brand</Button>
  </Demo>;

let BrandDisabled = props =>
  <Demo>
    <Button className="slds-button--brand" disabled>Button Brand</Button>
  </Demo>;

let Destructive = props =>
  <Demo>
    <Button className="slds-button--destructive">Button Destructive</Button>
  </Demo>;

let DestructiveDisabled = props =>
  <Demo>
    <Button className="slds-button--destructive" disabled>Button Destructive</Button>
  </Demo>;

let Inverse = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <Button className="slds-button--inverse">Button Inverse</Button>
  </Demo>;

let InverseDisabled = props =>
  <Demo style={{ padding: '0.5rem', background: '#16325c' }}>
    <Button className="slds-button--inverse" disabled>Button Inverse</Button>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button',
    label: 'Reset',
    element: <Reset />
  },
  {
    id: 'button-neutral',
    label: 'Neutral',
    element: <Neutral />
  },
  {
    id: 'button-neutral-disabled',
    label: 'Neutral disabled',
    element: <NeutralDisabled />
  },
  {
    id: 'button-neutral-icon-left',
    label: 'Neutral with left icon',
    element: <NeutralIconLeft />
  },
  {
    id: 'button-neutral-icon-right',
    label: 'Neutral with right icon',
    element: <NeutralIconRight />
  },
  {
    id: 'button-brand',
    label: 'Brand',
    element: <Brand />
  },
  {
    id: 'button-brand-disabled',
    label: 'Brand disabled',
    element: <BrandDisabled />
  },
  {
    id: 'button-destructive',
    label: 'Destructive',
    element: <Destructive />
  },
  {
    id: 'button-destructive-disabled',
    label: 'Destructive disabled',
    element: <DestructiveDisabled />
  },
  {
    id: 'button-inverse',
    label: 'Inverse',
    element: <Inverse />
  },
  {
    id: 'button-inverse-disabled',
    label: 'Inverse disabled',
    element: <InverseDisabled />
  }
];
