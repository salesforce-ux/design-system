// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

/**
 * Default
 */
export default (
  <ButtonIcon
    hasDropdown
    theme="neutral"
    assistiveText="More options"
    title="More Options"
  />
);

/**
 * States
 */
export let states = [
  {
    id: 'button-icon-container-with-dropdown',
    label: 'Transparent Container',
    element: (
      <ButtonIcon
        hasDropdown
        theme="transparent"
        assistiveText="More options"
        title="More Options"
      />
    )
  },
  {
    id: 'button-icon-with-dropdown-filled',
    label: 'Bordered with Filled Container',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
        <ButtonIcon
          hasDropdown
          theme="neutral"
          assistiveText="More options"
          title="More Options"
        />
      </div>
    )
  },
  {
    id: 'button-icon-with-dropdown-inverse',
    label: 'Bordered on Inverse Background',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
        <ButtonIcon
          hasDropdown
          theme="neutral"
          assistiveText="More options"
          title="More Options"
        />
      </div>
    )
  },
  {
    id: 'button-icon-container-with-dropdown-inverse',
    label: 'Transparent Container on Inverse Background',
    element: (
      <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
        <ButtonIcon
          hasDropdown
          theme="transparent"
          className="slds-button_icon-inverse"
          assistiveText="More options"
          title="More Options"
        />
      </div>
    )
  }
];
