// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonGroup } from '../base/example';
import ButtonIcon from '../../button-icons/';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <ButtonGroup>
    <ButtonIcon
      className="slds-button_icon-border"
      symbol="chart"
      assistiveText="Charts"
      title="Charts"
      aria-pressed="false"
    />
    <ButtonIcon
      className="slds-button_icon-border"
      symbol="filterList"
      assistiveText="Filter List"
      title="Filter List"
      aria-pressed="false"
    />
    <ButtonIcon
      className="slds-button_icon-more"
      hasDropdown
      assistiveText="More Actions"
      title="More Actions"
    />
  </ButtonGroup>
);

export let states = [
  {
    id: 'button-group-icon-selected',
    label: 'Selected',
    element: (
      <ButtonGroup>
        <ButtonIcon
          className="slds-button_icon-border slds-is-selected"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="true"
        />
        <ButtonIcon
          className="slds-button_icon-border"
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-more"
          hasDropdown
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    )
  }
];
