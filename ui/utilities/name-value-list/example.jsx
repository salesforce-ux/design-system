// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'name-value-pair-horizontal',
    label: 'Horizontal',
    element: (
      <dl className="slds-list_horizontal slds-wrap">
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="First Label"
        >
          First Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for first label"
        >
          Description for first label
        </dd>
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="Second Label"
        >
          Second Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for second label"
        >
          Description for second label
        </dd>
      </dl>
    )
  },
  {
    id: 'name-value-pair-inline',
    label: 'Inline',
    element: (
      <dl className="slds-list_inline">
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="First Label"
        >
          First Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for first label"
        >
          Description for first label
        </dd>
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="Second Label"
        >
          Second Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for second label"
        >
          Description for second label
        </dd>
      </dl>
    )
  },
  {
    id: 'name-value-pair-stacked',
    label: 'Stacked',
    element: (
      <dl className="slds-list_stacked">
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="First Label"
        >
          First Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for first label"
        >
          Description for first label
        </dd>
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="Second Label"
        >
          Second Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Second description"
        >
          Second description
        </dd>
      </dl>
    )
  }
];
