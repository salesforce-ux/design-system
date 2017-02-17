// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonGroup } from 'ui/components/button-groups/flavors/base/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <ButtonGroup>
    <ButtonIcon className="slds-button--icon-border" symbol="chart" assistiveText="Charts" title="Charts" />
    <ButtonIcon className="slds-button--icon-border" symbol="filterList" assistiveText="Filter List" title="Filter List" />
    <ButtonIcon className="slds-button--icon-more" hasDropdown assitiveText="More Actions" title="More Actions" />
  </ButtonGroup>;

let Selected = props =>
  <ButtonGroup>
    <ButtonIcon className="slds-button--icon-border slds-is-selected" symbol="chart" assistiveText="Charts" title="Charts" />
    <ButtonIcon className="slds-button--icon-border" symbol="filterList" assistiveText="Filter List" title="Filter List" />
    <ButtonIcon className="slds-button--icon-more" hasDropdown assitiveText="More Actions" title="More Actions" />
  </ButtonGroup>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-group-icon',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'button-group-icon-selected',
    label: 'Selected',
    element: <Selected />
  }
];
