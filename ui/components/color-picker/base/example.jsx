// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ColorPicker from '../';

export default <ColorPicker />;

export const states = [
  {
    id: 'summary-error',
    label: 'Summary Error',
    element: <ColorPicker hasSummaryError />
  },
  {
    id: 'color-picker-open',
    label: 'Open, default tab selected',
    element: <ColorPicker isOpen />
  },
  {
    id: 'custom-tab-selected',
    label: 'Open, custom tab selected',
    element: <ColorPicker isOpen selectedTabIndex={1} />
  },
  {
    id: 'custom-tab-selected-error',
    label: 'Open, custom tab selected, error state',
    element: <ColorPicker isOpen hasCustomError selectedTabIndex={1} />
  }
];
