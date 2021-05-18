// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Pill, PillContainer } from '../';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <Pill />;

export let states = [
  {
    id: 'error',
    label: 'Error',
    element: (
      <Pill className="slds-has-error">
        <span className="slds-pill__icon_container">
          <span className="slds-icon_container" title="Error">
            <SvgIcon
              className="slds-icon slds-icon-text-error"
              sprite="utility"
              symbol="error"
            />
            <span className="slds-assistive-text">Warning</span>
          </span>
        </span>
      </Pill>
    )
  },
  {
    id: 'truncated',
    label: 'Truncated',
    demoStyles: 'width: 220px;',
    storybookStyles: true,
    element: (
      <PillContainer>
        <Pill label="Pill label that is longer than the area that contains it" />
      </PillContainer>
    )
  }
];

export let examples = [
  {
    id: 'icon',
    label: 'With icon',
    element: (
      <Pill>
        <span className="slds-pill__icon_container">
          <span
            className="slds-icon_container slds-icon-standard-account"
            title="Account"
          >
            <SvgIcon className="slds-icon" sprite="standard" symbol="account" />
            <span className="slds-assistive-text">Account</span>
          </span>
        </span>
      </Pill>
    )
  },
  {
    id: 'avatar',
    label: 'With avatar',
    element: (
      <Pill>
        <span className="slds-pill__icon_container">
          <span className="slds-avatar slds-avatar_circle" title="User avatar">
            <img
              alt="Person name"
              src="/assets/images/avatar2.jpg"
              title="User avatar"
            />
          </span>
        </span>
      </Pill>
    )
  },
  {
    id: 'container',
    label: 'Pill with Container',
    element: (
      <PillContainer>
        <Pill />
        <Pill />
        <Pill />
      </PillContainer>
    )
  },
  {
    id: 'container-bare',
    label: 'Pill with Bare Container - Deprecated',
    element: (
      <PillContainer variant="container-bare">
        <Pill />
        <Pill />
        <Pill />
      </PillContainer>
    )
  }
];
