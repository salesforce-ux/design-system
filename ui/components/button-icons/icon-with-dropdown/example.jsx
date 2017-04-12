// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/base/example';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <ButtonIcon
    hasDropdown={true}
    className="slds-button--icon slds-button--icon-more"
    assistiveText="More options"
    title="More Options"
  />
);

export let states = [
  {
    id: 'button-icon-container-with-dropdown',
    label: 'Default - Container Only',
    element:
      <ButtonIcon
        hasDropdown={true}
        className="slds-button--icon slds-button--icon-container-more"
        assistiveText="More options"
        title="More Options"
      />
  },
  {
    id: 'button-icon-with-dropdown-filled',
    label: 'Filled',
    element:
      <ButtonIcon
        hasDropdown={true}
        className="slds-button--icon-more slds-button--icon-more-filled"
        assistiveText="More options"
        title="More Options"
      />
  },
  {
    id: 'button-icon-with-dropdown-inverse',
    label: 'Inverse',
    element:
      <ButtonIcon
        hasDropdown={true}
        className="slds-button--icon-inverse slds-button--icon-more"
        assistiveText="More options"
        title="More Options"
      />
  },
  {
    id: 'button-icon-container-with-dropdown-inverse',
    label: 'Inverse - Container Only',
    element:
      <ButtonIcon
        hasDropdown={true}
        className="slds-button--icon-inverse slds-button--icon-container-more"
        assistiveText="More options"
        title="More Options"
      />
  }
];
