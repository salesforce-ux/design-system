// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'default',
    label: 'Size - Default',
    element: (
      <div className="slds-box">
        <p>This is a regular-sized box.</p>
      </div>
    )
  },
  {
    id: 'small',
    label: 'Size - small',
    element: (
      <div className="slds-box slds-box_small">
        <p>This is a small box.</p>
      </div>
    )
  },
  {
    id: 'x-small',
    label: 'Size - x-xmall',
    element: (
      <div className="slds-box slds-box_x-small">
        <p>This is an extra-small box.</p>
      </div>
    )
  },
  {
    id: 'xx-small',
    label: 'Size - xx-small',
    element: (
      <div className="slds-box slds-box_xx-small">
        <p>This is an extra-extra-small box.</p>
      </div>
    )
  }
];
