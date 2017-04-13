// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const Context = props =>
  <div className="demo-only-spacing demo-only-padding">
    {props.children}
  </div>;

export let examples = [
  {
    id: 'top',
    label: 'Top',
    element:
    <div>
      <div className="slds-p-top--none" />
      <div className="slds-p-top--xxx-small" />
      <div className="slds-p-top--xx-small" />
      <div className="slds-p-top--x-small" />
      <div className="slds-p-top--small" />
      <div className="slds-p-top--medium" />
      <div className="slds-p-top--large" />
      <div className="slds-p-top--x-large" />
      <div className="slds-p-top--xx-large" />
    </div>
  },
  {
    id: 'right',
    label: 'Right',
    element:
    <div>
      <div className="slds-p-right--none" />
      <div className="slds-p-right--xxx-small" />
      <div className="slds-p-right--xx-small" />
      <div className="slds-p-right--x-small" />
      <div className="slds-p-right--small" />
      <div className="slds-p-right--medium" />
      <div className="slds-p-right--large" />
      <div className="slds-p-right--x-large" />
      <div className="slds-p-right--xx-large" />
    </div>
  },
  {
    id: 'bottom',
    label: 'Bottom',
    element:
    <div>
      <div className="slds-p-bottom--none" />
      <div className="slds-p-bottom--xxx-small" />
      <div className="slds-p-bottom--xx-small" />
      <div className="slds-p-bottom--x-small" />
      <div className="slds-p-bottom--small" />
      <div className="slds-p-bottom--medium" />
      <div className="slds-p-bottom--large" />
      <div className="slds-p-bottom--x-large" />
      <div className="slds-p-bottom--xx-large" />
    </div>
  },
  {
    id: 'left',
    label: 'Left',
    element:
    <div>
      <div className="slds-p-left--none" />
      <div className="slds-p-left--xxx-small" />
      <div className="slds-p-left--xx-small" />
      <div className="slds-p-left--x-small" />
      <div className="slds-p-left--small" />
      <div className="slds-p-left--medium" />
      <div className="slds-p-left--large" />
      <div className="slds-p-left--x-large" />
      <div className="slds-p-left--xx-large" />
    </div>
  },
  {
    id: 'vertical',
    label: 'Vertical',
    element:
    <div>
      <div className="slds-p-vertical--none" />
      <div className="slds-p-vertical--xxx-small" />
      <div className="slds-p-vertical--xx-small" />
      <div className="slds-p-vertical--x-small" />
      <div className="slds-p-vertical--small" />
      <div className="slds-p-vertical--medium" />
      <div className="slds-p-vertical--large" />
      <div className="slds-p-vertical--x-large" />
      <div className="slds-p-vertical--xx-large" />
    </div>
  },
  {
    id: 'horizontal',
    label: 'Horizontal',
    element:
    <div>
      <div className="slds-p-horizontal--none" />
      <div className="slds-p-horizontal--xxx-small" />
      <div className="slds-p-horizontal--xx-small" />
      <div className="slds-p-horizontal--x-small" />
      <div className="slds-p-horizontal--small" />
      <div className="slds-p-horizontal--medium" />
      <div className="slds-p-horizontal--large" />
      <div className="slds-p-horizontal--x-large" />
      <div className="slds-p-horizontal--xx-large" />
    </div>
  },
  {
    id: 'around',
    label: 'Around',
    element:
    <div>
      <div className="slds-p-around--none" />
      <div className="slds-p-around--xxx-small" />
      <div className="slds-p-around--xx-small" />
      <div className="slds-p-around--x-small" />
      <div className="slds-p-around--small" />
      <div className="slds-p-around--medium" />
      <div className="slds-p-around--large" />
      <div className="slds-p-around--x-large" />
      <div className="slds-p-around--xx-large" />
    </div>
  }
];
