// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

const exampleDemoStyles = 'background-color: #f4f6f9; padding: 0.5rem;';

export default [
  {
    id: 'default',
    label: 'Transparent - default',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        size="medium"
        symbol="search"
      />
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Transparent - Disabled',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        size="medium"
        symbol="search"
        disabled
      />
    )
  }
];

export let examples = [
  {
    id: 'with-dropdown',
    label: 'Transparent - With dropdown',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="More options"
        title="More Options"
        hasDropdown
        theme="transparent"
      />
    )
  },
  {
    id: 'hint-hover',
    label: 'Transparent - Hint on hover',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <div className="slds-hint-parent">
        <ButtonIcon
          assistiveText="More options"
          title="More Options"
          size="medium"
          iconClassName="slds-button__icon_hint"
        />
      </div>
    )
  }
];
