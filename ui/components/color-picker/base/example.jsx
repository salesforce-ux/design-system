// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ColorPicker from '../';

export default (
  <ColorPicker />
);

export const states = [
  {
    id: 'color-picker-open',
    label: 'Open, default tab selected',
    element: <ColorPicker isOpen />
  },
  {
    id: 'custom-tab-selected',
    label: 'Open, custom tab selected',
    element: <ColorPicker selectedTabIndex={1} isOpen />
  }
];
