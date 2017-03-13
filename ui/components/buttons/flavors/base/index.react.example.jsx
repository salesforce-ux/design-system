// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Button = props =>
  <button className={classNames('slds-button', props.className)} disabled={props.disabled}>
    {props.children}
  </button>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
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
    label: 'Default',
    element: <Default />
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
  },
  {
    id: 'success',
    label: 'Success',
    element: <Button className="slds-button--success">Button Success</Button>
  }
];
