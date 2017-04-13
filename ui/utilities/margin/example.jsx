// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const Context = props =>
  <div className="demo-only-spacing demo-only-margin">
    {props.children}
  </div>;

export let examples = [
  {
    id: 'top',
    label: 'Top',
    element:
    <div>
      <div className="slds-m-top--none" />
      <div className="slds-m-top--xxx-small" />
      <div className="slds-m-top--xx-small" />
      <div className="slds-m-top--x-small" />
      <div className="slds-m-top--small" />
      <div className="slds-m-top--medium" />
      <div className="slds-m-top--large" />
      <div className="slds-m-top--x-large" />
      <div className="slds-m-top--xx-large" />
    </div>
  },
  {
    id: 'right',
    label: 'Right',
    element:
    <div>
      <div className="slds-m-right--none" />
      <div className="slds-m-right--xxx-small" />
      <div className="slds-m-right--xx-small" />
      <div className="slds-m-right--x-small" />
      <div className="slds-m-right--small" />
      <div className="slds-m-right--medium" />
      <div className="slds-m-right--large" />
      <div className="slds-m-right--x-large" />
      <div className="slds-m-right--xx-large" />
    </div>
  },
  {
    id: 'bottom',
    label: 'Bottom',
    element:
    <div>
      <div className="slds-m-bottom--none" />
      <div className="slds-m-bottom--xxx-small" />
      <div className="slds-m-bottom--xx-small" />
      <div className="slds-m-bottom--x-small" />
      <div className="slds-m-bottom--small" />
      <div className="slds-m-bottom--medium" />
      <div className="slds-m-bottom--large" />
      <div className="slds-m-bottom--x-large" />
      <div className="slds-m-bottom--xx-large" />
    </div>
  },
  {
    id: 'left',
    label: 'Left',
    element:
    <div>
      <div className="slds-m-left--none" />
      <div className="slds-m-left--xxx-small" />
      <div className="slds-m-left--xx-small" />
      <div className="slds-m-left--x-small" />
      <div className="slds-m-left--small" />
      <div className="slds-m-left--medium" />
      <div className="slds-m-left--large" />
      <div className="slds-m-left--x-large" />
      <div className="slds-m-left--xx-large" />
    </div>
  },
  {
    id: 'vertical',
    label: 'Vertical',
    element:
    <div>
      <div className="slds-m-vertical--none" />
      <div className="slds-m-vertical--xxx-small" />
      <div className="slds-m-vertical--xx-small" />
      <div className="slds-m-vertical--x-small" />
      <div className="slds-m-vertical--small" />
      <div className="slds-m-vertical--medium" />
      <div className="slds-m-vertical--large" />
      <div className="slds-m-vertical--x-large" />
      <div className="slds-m-vertical--xx-large" />
    </div>
  },
  {
    id: 'horizontal',
    label: 'Horizontal',
    element:
    <div>
      <div className="slds-m-horizontal--none" />
      <div className="slds-m-horizontal--xxx-small" />
      <div className="slds-m-horizontal--xx-small" />
      <div className="slds-m-horizontal--x-small" />
      <div className="slds-m-horizontal--small" />
      <div className="slds-m-horizontal--medium" />
      <div className="slds-m-horizontal--large" />
      <div className="slds-m-horizontal--x-large" />
      <div className="slds-m-horizontal--xx-large" />
    </div>
  },
  {
    id: 'around',
    label: 'Around',
    element:
    <div>
      <div className="slds-m-around--none" />
      <div className="slds-m-around--xxx-small" />
      <div className="slds-m-around--xx-small" />
      <div className="slds-m-around--x-small" />
      <div className="slds-m-around--small" />
      <div className="slds-m-around--medium" />
      <div className="slds-m-around--large" />
      <div className="slds-m-around--x-large" />
      <div className="slds-m-around--xx-large" />
    </div>
  }
];
