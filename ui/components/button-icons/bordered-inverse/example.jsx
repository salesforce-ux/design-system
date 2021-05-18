// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon, { HintParent } from '../';

export const Context = props => (
  <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
    {props.children}
  </div>
);

const exampleDemoStyles = 'background-color: #16325C; padding: 0.5rem;';

export default [
  {
    id: 'default',
    label: 'Bordered Inverse – default',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        size="medium"
        symbol="search"
        theme="inverse"
        title="Search"
      />
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Bordered Inverse – Disabled',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        disabled
        size="medium"
        symbol="search"
        theme="inverse"
        title="Search"
      />
    )
  }
];

export let examples = [
  {
    id: 'with-dropdown',
    label: 'Bordered Inverse – With dropdown',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="More options"
        hasDropdown
        theme="neutral"
        title="More Options"
      />
    )
  },
  {
    id: 'hint-hover',
    label: 'Bordered Inverse – Hint on hover',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <HintParent>
        <ButtonIcon
          assistiveText="More options"
          iconClassName="slds-button__icon_inverse-hint"
          size="medium"
          theme="inverse"
          title="More Options"
        />
      </HintParent>
    )
  }
];
