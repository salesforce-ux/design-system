// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <ButtonIcon
    className="slds-button--icon-border"
    aria-pressed="false"
    symbol="like"
    assistiveText="Like"
    title="Like"
  />
);

export let states = [
  {
    id: 'button-icon-stateful-not-selected',
    label: 'Not Selected',
    element:
      <ButtonIcon
        className="slds-button--icon-border"
        aria-pressed="false"
        symbol="like"
        assistiveText="Like"
        title="Like"
      />
  },
  {
    id: 'button-icon-stateful-selected',
    label: 'Selected',
    element:
      <ButtonIcon
        className="slds-button--icon-border"
        aria-pressed="true"
        selected
        symbol="like"
        assistiveText="Like"
        title="Like"
      />
  }
];
