// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let states = [
  {
    id: 'horizontal-list',
    label: 'Default',
    element:
      <ul className="slds-list--horizontal">
        <li>Horizontal List</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
  },
  {
    id: 'horizontal-list-links',
    label: 'Links',
    element:
      <ul className="slds-list--horizontal">
        <li><a href="javascript:void(0);">Horizontal List with inline level links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-block-links',
    label: 'Block links',
    element:
      <ul className="slds-list--horizontal slds-has-block-links">
        <li><a href="javascript:void(0);">Horizontal List with block level links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-block-links-space',
    label: 'Block links with space',
    element:
      <ul className="slds-list--horizontal slds-has-block-links--space">
        <li><a href="javascript:void(0);">Horizontal List with block level links and space</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-inline-block-links',
    label: 'Inline block links',
    element:
      <ul className="slds-list--horizontal slds-has-inline-block-links">
        <li><a href="javascript:void(0);">Horizontal List with inline-block level links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-inline-block-links-space',
    label: 'Inline block links with space',
    element:
      <ul className="slds-list--horizontal slds-has-inline-block-links--space">
        <li><a href="javascript:void(0);">Horizontal List with inline-block level links and space</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  }
];
