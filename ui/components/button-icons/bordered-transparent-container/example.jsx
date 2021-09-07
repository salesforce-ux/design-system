// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

const exampleDemoStyles = 'background-color: #f4f6f9; padding: 0.5rem;';

export default [
  {
    id: 'default',
    label: 'Bordered Transparent - default',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        theme="transparent"
        symbol="search"
      />
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Bordered Transparent - Disabled',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        theme="transparent"
        symbol="search"
        disabled
      />
    )
  }
];

export let examples = [
  {
    id: 'hint-hover',
    label: 'Bordered Transparent - Hint on hover',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <div className="slds-hint-parent">
        <ButtonIcon
          theme="transparent"
          iconClassName="slds-button__icon_hint"
          assistiveText="More options"
          title="More Options"
        />
      </div>
    )
  }
];
