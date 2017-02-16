// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="slds-box">
        <p>This is a regular-sized box.</p>
      </div>
  },
  {
    id: 'small',
    label: 'Small',
    element:
      <div className="slds-box slds-box--small">
        <p>This is a small box.</p>
      </div>
  },
  {
    id: 'x-small',
    label: 'X-Small',
    element:
      <div className="slds-box slds-box--x-small">
        <p>This is an extra-small box.</p>
      </div>
  },
  {
    id: 'xx-small',
    label: 'Xx-Small',
    element:
      <div className="slds-box slds-box--xx-small">
        <p>This is an extra-extra-small box.</p>
      </div>
  }
];
