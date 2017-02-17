// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let states = [
  {
    id: 'divider-top',
    label: 'Top',
    element:
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li className="slds-has-divider--top">List Item</li>
      </ul>
  },
  {
    id: 'divider-top-space',
    label: 'Top with space',
    element:
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li className="slds-has-divider--top-space">List Item</li>
      </ul>
  },
  {
    id: 'divider-right',
    label: 'Right',
    element:
      <ul className="slds-list--horizontal">
        <li>List Item</li>
        <li className="slds-has-divider--right">List Item</li>
        <li>List Item</li>
      </ul>
  },
  {
    id: 'divider-bottom',
    label: 'Bottom',
    element:
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li className="slds-has-divider--bottom">List Item</li>
      </ul>
  },
  {
    id: 'divider-bottom-space',
    label: 'Bottom with space',
    element:
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li className="slds-has-divider--bottom-space">List Item</li>
      </ul>
  },
  {
    id: 'divider-left',
    label: 'Left',
    element:
      <ul className="slds-list--horizontal">
        <li>List Item</li>
        <li className="slds-has-divider--left">List Item</li>
        <li>List Item</li>
      </ul>
  }
];
