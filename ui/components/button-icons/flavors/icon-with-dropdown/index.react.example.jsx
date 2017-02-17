// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-icon-with-dropdown',
    label: 'Default',
    element:
      <div className="demo-only" style={{ padding: '0.5rem' }}>
        <ButtonIcon hasDropdown className="slds-button--icon slds-button--icon-more" assistiveText="More options" title="More Options" />
      </div>
  },
  {
    id: 'button-icon-container-with-dropdown',
    label: 'Default - Container Only',
    element:
      <div className="demo-only" style={{ padding: '0.5rem' }}>
        <ButtonIcon hasDropdown className="slds-button--icon slds-button--icon-container-more" assistiveText="More options" title="More Options" />
      </div>
  },
  {
    id: 'button-icon-with-dropdown-filled',
    label: 'Filled',
    element:
      <div className="demo-only" style={{ padding: '0.5rem' }}>
        <ButtonIcon hasDropdown className="slds-button--icon-more slds-button--icon-more-filled" assistiveText="More options" title="More Options" />
      </div>
  },
  {
    id: 'button-icon-with-dropdown-inverse',
    label: 'Inverse',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonIcon hasDropdown className="slds-button--icon-inverse slds-button--icon-more" assistiveText="More options" title="More Options" />
      </div>
  },
  {
    id: 'button-icon-container-with-dropdown-inverse',
    label: 'Inverse - Container Only',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonIcon hasDropdown className="slds-button--icon-inverse slds-button--icon-container-more" assistiveText="More options" title="More Options" />
      </div>
  }
];
