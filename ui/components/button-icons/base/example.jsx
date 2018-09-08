// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon, { HintParent } from '../';

export default <ButtonIcon assistiveText="Settings" title="Settings" />;

export let states = [
  {
    id: 'error',
    label: 'Error',
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
    id: 'bare-disabled',
    label: 'Disabled',
    element: <ButtonIcon assistiveText="Settings" disabled title="Settings" />
  }
];

export let examples = [
  {
    id: 'hint-hover',
    label: 'Hint on hover',
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
