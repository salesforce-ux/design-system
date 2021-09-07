// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

export default [
  {
    id: 'default',
    label: 'Brand – default',
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        theme="brand"
        symbol="search"
      />
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Brand – Disabled',
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        theme="brand"
        symbol="search"
        disabled
      />
    )
  }
];
