// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Magnet } from './';

export let examples = [
  {
    id: 'above',
    label: 'Above',
    element: (
      <div>
        <Magnet />
        <Magnet />
      </div>
    )
  },
  {
    id: 'below',
    label: 'Below',
    element: (
      <div>
        <Magnet className="slds-has-bottom-magnet" />
        <Magnet className="slds-has-top-magnet" />
      </div>
    )
  }
];
