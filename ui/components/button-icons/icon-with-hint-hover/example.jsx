// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../base/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <div className="demo-only" style={{ padding: '0.5rem' }}>
    <div className="slds-hint-parent">
      <ButtonIcon className="slds-button_icon" iconClassName="slds-button__icon_hint" />
    </div>
  </div>
);
export let states = [
  {
    id: 'button-icon-border-with-hint-hover',
    label: 'Container with border',
    element:
      <div className="demo-only" style={{ padding: '0.5rem' }}>
        <div className="slds-hint-parent">
          <ButtonIcon className="slds-button_icon-border" iconClassName="slds-button__icon_hint" />
        </div>
      </div>
  },
  {
    id: 'button-icon-inverse-with-hint-hover',
    label: 'Inverse with no border',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <div className="slds-hint-parent">
          <ButtonIcon className="slds-button_icon-inverse" iconClassName="slds-button__icon_inverse-hint" />
        </div>
      </div>
  },
  {
    id: 'button-icon-border-inverse-with-hint-hover',
    label: 'Inverse container with border',
    element:
    <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
      <div className="slds-hint-parent">
        <ButtonIcon className="slds-button_icon-border-inverse" iconClassName="slds-button__icon_inverse-hint" />
      </div>
    </div>
  }
];
