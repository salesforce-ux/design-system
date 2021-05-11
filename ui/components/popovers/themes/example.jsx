// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Popover = props => (
  <div
    aria-label="Dialog title"
    aria-describedby="popover-body-id"
    className={`slds-popover slds-nubbin_left slds-theme_${props.theme}`}
    role="dialog"
  >
    <ButtonIcon
      className="slds-button_icon-inverse slds-button_icon-small slds-float_right slds-popover__close"
      symbol="close"
      assistiveText="Close dialog"
      title="Close dialog"
    />
    <div id="popover-body-id" className="slds-popover__body">
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
      deserunt aute id consequat veniam incididunt duis in sint irure nisi.
    </div>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let states = [
  {
    context: 'Themes',
    id: 'info',
    label: 'Theme: Info',
    element: <Popover theme="info" />
  },
  {
    context: 'Themes',
    id: 'error',
    label: 'Theme: Error',
    element: <Popover theme="error" />
  },
  {
    context: 'Themes',
    id: 'warning',
    label: 'Theme: Warning',
    element: <Popover theme="warning" />
  },
  {
    context: 'Themes',
    id: 'success',
    label: 'Theme: Success',
    element: <Popover theme="success" />
  }
];
