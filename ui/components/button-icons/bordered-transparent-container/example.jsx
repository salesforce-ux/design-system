// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

export const Context = props => (
  <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
    {props.children}
  </div>
);

export default <ButtonIcon theme="transparent" symbol="search" />;

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: <ButtonIcon theme="transparent" symbol="search" disabled />
  }
];

export let examples = [
  {
    id: 'hint-hover',
    label: 'Hint on hover',
    element: (
      <div className="slds-hint-parent">
        <ButtonIcon
          theme="transparent"
          iconClassName="slds-button__icon_hint"
        />
      </div>
    )
  }
];
