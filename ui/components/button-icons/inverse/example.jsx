// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

const exampleDemoStyles = 'background-color: #16325C; padding: 0.5rem;';

export default [
  {
    id: 'default',
    label: 'Inverse – default',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        theme="inverse"
        symbol="search"
      />
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Inverse - Disabled',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        theme="inverse"
        symbol="search"
        disabled
      />
    )
  }
];

export let examples = [
  {
    id: 'with-dropdown',
    label: 'Inverse - With dropdown',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <ButtonIcon
        hasDropdown
        theme="transparent"
        className="slds-button_icon-inverse"
        assistiveText="More options"
        title="More Options"
      />
    )
  },
  {
    id: 'hint-hover',
    label: 'Inverse - Hint on hover',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <div className="slds-hint-parent">
        <ButtonIcon
          theme="inverse"
          iconClassName="slds-button__icon_inverse-hint"
          assistiveText="More options"
          title="More Options"
        />
      </div>
    )
  }
];
