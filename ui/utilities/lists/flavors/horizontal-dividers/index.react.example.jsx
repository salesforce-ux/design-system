// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let states = [
  {
    id: 'horizontal-list-left',
    label: 'Left',
    element:
      <ul className="slds-list--horizontal slds-has-dividers--left">
        <li className="slds-item">Horizontal List with dot dividers to the left</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
  },
  {
    id: 'horizontal-list-link-left',
    label: 'Left with link',
    element:
      <ul className="slds-list--horizontal slds-has-dividers--left slds-has-block-links">
        <li className="slds-item"><a href="javascript:void(0);">Horizontal List with block level links and dot dividers</a></li>
        <li className="slds-item"><a href="javascript:void(0);">List Item</a></li>
        <li className="slds-item"><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-link-space-left',
    label: 'Left with link space',
    element:
      <ul className="slds-list--horizontal slds-has-dividers--left slds-has-block-links--space">
        <li className="slds-item"><a href="javascript:void(0);">Horizontal List with block level links and dot dividers with space</a></li>
        <li className="slds-item"><a href="javascript:void(0);">List Item</a></li>
        <li className="slds-item"><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-right',
    label: 'Right',
    element:
      <ul className="slds-list--horizontal slds-has-dividers--right">
        <li className="slds-item">Horizontal List with dot dividers to the right</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
  },
  {
    id: 'horizontal-list-link-right',
    label: 'Right with link',
    element:
      <ul className="slds-list--horizontal slds-has-dividers--right slds-has-block-links">
        <li className="slds-item"><a href="javascript:void(0);">Horizontal List with block level links and dot dividers</a></li>
        <li className="slds-item"><a href="javascript:void(0);">List Item</a></li>
        <li className="slds-item"><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-link-space-right',
    label: 'Right with link space',
    element:
      <ul className="slds-list--horizontal slds-has-dividers--right slds-has-block-links--space">
        <li className="slds-item"><a href="javascript:void(0);">Horizontal List with block level links and dot dividers with space</a></li>
        <li className="slds-item"><a href="javascript:void(0);">List Item</a></li>
        <li className="slds-item"><a href="javascript:void(0);">List Item</a></li>
      </ul>
  }
];
