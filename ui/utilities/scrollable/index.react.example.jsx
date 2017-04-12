// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

const Lorem = props =>
  <p>
    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt
    aute id consequat veniam incididunt duis in sint irure nisi.
    Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
  </p>;

export let examples = [
  {
    id: 'auto',
    label: 'Auto',
    element:
    <div className="slds-scrollable">
      Scrollable Content Here
    </div>
  },
  {
    id: 'none',
    label: 'None',
    element:
    <div className="slds-scrollable--none">
      Scrollable Content Here
    </div>
  },
  {
    id: 'x-axis',
    label: 'X-axis',
    element:
    <div className="slds-scrollable--x">
      Scrollable Content Here
    </div>
  },
  {
    id: 'y-axis',
    label: 'Y-axis',
    element:
    <div className="slds-scrollable--y">
      Scrollable Content Here
    </div>
  }
];
