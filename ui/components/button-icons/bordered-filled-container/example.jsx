// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon, { HintParent } from '../';

const exampleDemoStyles = 'background-color: #f4f6f9; padding: 0.5rem;';

export default [
  {
    id: 'default',
    label: 'Bordered Filled – default',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        symbol="search"
        theme="neutral"
        title="Search"
      />
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Bordered Filled - Disabled',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        disabled
        symbol="search"
        theme="neutral"
        title="Search"
      />
    )
  }
];

export let examples = [
  {
    id: 'with-dropdown',
    label: 'Bordered Filled - With dropdown',
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
    label: 'Bordered Filled - Hint on hover',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <HintParent>
        <ButtonIcon
          assistiveText="More options"
          iconClassName="slds-button__icon_hint"
          theme="neutral"
          title="More Options"
        />
      </HintParent>
    )
  }
];
