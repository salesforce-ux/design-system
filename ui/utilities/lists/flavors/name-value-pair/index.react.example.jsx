// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let states = [
  {
    id: 'name-value-pair-horizontal',
    label: 'Horizontal',
    element:
      <div className="slds-list--horizontal slds-wrap">
        <div className="slds-item--label slds-text-color--weak slds-truncate" title="First Label">First Label:</div>
        <div className="slds-item--detail slds-truncate">Description for first label</div>
        <div className="slds-item--label slds-text-color--weak slds-truncate" title="Second Label">Second Label:</div>
        <div className="slds-item--detail slds-truncate">Description for second label</div>
      </div>
  },
  {
    id: 'name-value-pair-inline',
    label: 'Inline',
    element:
      <div className="slds-list--inline">
        <div className="slds-item--label slds-text-color--weak slds-truncate" title="First Label">First Label:</div>
        <div className="slds-item--detail slds-truncate">Description for first label</div>
        <div className="slds-item--label slds-text-color--weak slds-truncate" title="Second Label">Second Label:</div>
        <div className="slds-item--detail slds-truncate">Description for second label</div>
      </div>
  },
  {
    id: 'name-value-pair-stacked',
    label: 'Stacked',
    element:
      <div className="slds-list--stacked">
        <div className="slds-item--label slds-text-color--weak slds-truncate" title="First Label">First Label:</div>
        <div className="slds-item--detail slds-truncate">Description for first label</div>
        <div className="slds-item--label slds-text-color--weak slds-truncate" title="Second Label">Second Label:</div>
        <div className="slds-item--detail slds-truncate">Second description</div>
      </div>
  }
];
