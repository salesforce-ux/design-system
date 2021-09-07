// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon, { HintParent } from '../';

export default [
  {
    id: 'default',
    label: 'Base – default',
    element: <ButtonIcon assistiveText="Settings" title="Settings" />
  }
];

export let states = [
  {
    id: 'error',
    label: 'Base - Error',
    element: (
      <ButtonIcon
        feedback="error"
        symbol="error"
        title="Error"
        assistiveText="Error"
      />
    )
  },
  {
    id: 'warning',
    label: 'Base - Warning',
    element: (
      <ButtonIcon
        feedback="warning"
        symbol="warning"
        title="Warning"
        assistiveText="Warning"
      />
    )
  },
  {
    id: 'bare-disabled',
    label: 'Base - Disabled',
    element: <ButtonIcon assistiveText="Settings" disabled title="Settings" />
  }
];

export let examples = [
  {
    id: 'hint-hover',
    label: 'Base - Hint on hover',
    element: (
      <HintParent>
        <ButtonIcon
          assistiveText="Settings"
          iconClassName="slds-button__icon_hint"
          title="Settings"
        />
      </HintParent>
    )
  }
];
