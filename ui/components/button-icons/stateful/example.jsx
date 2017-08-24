// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../base/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <ButtonIcon
    className="slds-button_icon-border-filled"
    aria-pressed="false"
    symbol="like"
    assistiveText="Like"
    title="Like"
  />
);

export let states = [
  {
    id: 'button-icon-stateful-selected',
    label: 'Selected',
    element:
      <ButtonIcon
        className="slds-button_icon-border-filled"
        aria-pressed="true"
        selected
        symbol="like"
        assistiveText="Like"
        title="Like"
      />
  }
];
