// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

export const Context = props => (
  <div style={{ padding: '0.5rem', backgroundColor: '#f4f6f9' }}>
    {props.children}
  </div>
);

export default <ButtonIcon theme="neutral" symbol="search" />;

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: <ButtonIcon theme="neutral" symbol="search" disabled />
  }
];

export let examples = [
  {
    id: 'with-dropdown',
    label: 'With dropdown',
    element: (
      <ButtonIcon
        hasDropdown
        theme="neutral"
        assistiveText="More options"
        title="More Options"
      />
    )
  },
  {
    id: 'hint-hover',
    label: 'Hint on hover',
    element: (
      <div className="slds-hint-parent">
        <ButtonIcon theme="neutral" iconClassName="slds-button__icon_hint" />
      </div>
    )
  }
];
