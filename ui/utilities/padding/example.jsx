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
      <div className="slds-p-top--none"></div>
      <div className="slds-p-top--xxx-small"></div>
      <div className="slds-p-top--xx-small"></div>
      <div className="slds-p-top--x-small"></div>
      <div className="slds-p-top--small"></div>
      <div className="slds-p-top--medium"></div>
      <div className="slds-p-top--large"></div>
      <div className="slds-p-top--x-large"></div>
      <div className="slds-p-top--xx-large"></div>
    </div>
  },
  {
    id: 'right',
    label: 'Right',
    element:
    <div>
      <div className="slds-p-right--none"></div>
      <div className="slds-p-right--xxx-small"></div>
      <div className="slds-p-right--xx-small"></div>
      <div className="slds-p-right--x-small"></div>
      <div className="slds-p-right--small"></div>
      <div className="slds-p-right--medium"></div>
      <div className="slds-p-right--large"></div>
      <div className="slds-p-right--x-large"></div>
      <div className="slds-p-right--xx-large"></div>
    </div>
  },
  {
    id: 'bottom',
    label: 'Bottom',
    element:
    <div>
      <div className="slds-p-bottom--none"></div>
      <div className="slds-p-bottom--xxx-small"></div>
      <div className="slds-p-bottom--xx-small"></div>
      <div className="slds-p-bottom--x-small"></div>
      <div className="slds-p-bottom--small"></div>
      <div className="slds-p-bottom--medium"></div>
      <div className="slds-p-bottom--large"></div>
      <div className="slds-p-bottom--x-large"></div>
      <div className="slds-p-bottom--xx-large"></div>
    </div>
  },
  {
    id: 'left',
    label: 'Left',
    element:
    <div>
      <div className="slds-p-left--none"></div>
      <div className="slds-p-left--xxx-small"></div>
      <div className="slds-p-left--xx-small"></div>
      <div className="slds-p-left--x-small"></div>
      <div className="slds-p-left--small"></div>
      <div className="slds-p-left--medium"></div>
      <div className="slds-p-left--large"></div>
      <div className="slds-p-left--x-large"></div>
      <div className="slds-p-left--xx-large"></div>
    </div>
  },
  {
    id: 'vertical',
    label: 'Vertical',
    element:
    <div>
      <div className="slds-p-vertical--none"></div>
      <div className="slds-p-vertical--xxx-small"></div>
      <div className="slds-p-vertical--xx-small"></div>
      <div className="slds-p-vertical--x-small"></div>
      <div className="slds-p-vertical--small"></div>
      <div className="slds-p-vertical--medium"></div>
      <div className="slds-p-vertical--large"></div>
      <div className="slds-p-vertical--x-large"></div>
      <div className="slds-p-vertical--xx-large"></div>
    </div>
  },
  {
    id: 'horizontal',
    label: 'Horizontal',
    element:
    <div>
      <div className="slds-p-horizontal--none"></div>
      <div className="slds-p-horizontal--xxx-small"></div>
      <div className="slds-p-horizontal--xx-small"></div>
      <div className="slds-p-horizontal--x-small"></div>
      <div className="slds-p-horizontal--small"></div>
      <div className="slds-p-horizontal--medium"></div>
      <div className="slds-p-horizontal--large"></div>
      <div className="slds-p-horizontal--x-large"></div>
      <div className="slds-p-horizontal--xx-large"></div>
    </div>
  },
  {
    id: 'around',
    label: 'Around',
    element:
    <div>
      <div className="slds-p-around--none"></div>
      <div className="slds-p-around--xxx-small"></div>
      <div className="slds-p-around--xx-small"></div>
      <div className="slds-p-around--x-small"></div>
      <div className="slds-p-around--small"></div>
      <div className="slds-p-around--medium"></div>
      <div className="slds-p-around--large"></div>
      <div className="slds-p-around--x-large"></div>
      <div className="slds-p-around--xx-large"></div>
    </div>
  }
];
