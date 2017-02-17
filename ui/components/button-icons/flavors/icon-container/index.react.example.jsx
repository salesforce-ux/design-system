// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-icon-container',
    label: 'No border',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#F4F6F9' }}>
        <ButtonIcon className="slds-button--icon-container" />
      </div>
  },
  {
    id: 'button-icon-border',
    label: 'With border',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#F4F6F9' }}>
        <ButtonIcon className="slds-button--icon-border" />
      </div>
  },
  {
    id: 'button-icon-border-filled',
    label: 'Filled — with border',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#F4F6F9' }}>
        <ButtonIcon className="slds-button--icon-border-filled" />
      </div>
  },
  {
    id: 'button-icon-border-inverse',
    label: 'Inverse - with border',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonIcon inverse className="slds-button--icon-border-inverse" />
      </div>
  }
];
