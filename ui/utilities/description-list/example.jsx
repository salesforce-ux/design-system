// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'description-list',
    label: 'Default',
    element: (
      <dl>
        <dt>First Label:</dt>
        <dd>Description for first label</dd>
        <dt>Second Label:</dt>
        <dd>Description for second label</dd>
      </dl>
    )
  },
  {
    id: 'description-list-inline',
    label: 'Inline',
    element: (
      <dl className="slds-dl_inline">
        <dt className="slds-dl_inline__label">First Label:</dt>
        <dd className="slds-dl_inline__detail">Description for first label</dd>
        <dt className="slds-dl_inline__label">Second Label:</dt>
        <dd className="slds-dl_inline__detail">Description for second label</dd>
      </dl>
    )
  },
  {
    id: 'description-list-horizontal',
    label: 'Horizontal',
    element: (
      <dl className="slds-dl_horizontal">
        <dt className="slds-dl_horizontal__label">First Label:</dt>
        <dd className="slds-dl_horizontal__detail">
          Description for first label
        </dd>
        <dt className="slds-dl_horizontal__label">Second Label:</dt>
        <dd className="slds-dl_horizontal__detail">Second description</dd>
      </dl>
    )
  }
];
