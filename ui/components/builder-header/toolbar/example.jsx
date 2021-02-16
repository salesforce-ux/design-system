// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import BuilderHeader from '../';

export default <BuilderHeader showToolbar />;

export let states = [
  {
    id: 'menu-open-with-toolbar',
    label: 'Menu open with toolbar',
    isOpen: true,
    element: <BuilderHeader openDropDown showToolbar />
  },
  {
    id: 'has-status-text',
    label: 'Has Status Text',
    element: <BuilderHeader hasStatus showToolbar />
  },
  {
    id: 'has-status-text-with-tooltip',
    label: 'Has Status Text with Tooltip',
    element: <BuilderHeader hasStatus hasStatusTooltip showToolbar />
  },
  {
    id: 'has-status-text-with-warning',
    label: 'Has Status Text with Warning',
    element: <BuilderHeader hasStatus hasWarning showToolbar />
  },
  {
    id: 'has-status-text-with-error',
    label: 'Has Status Text with error',
    element: <BuilderHeader hasStatus hasError showToolbar />
  },
  {
    id: 'has-status-text-with-warning-and-error',
    label: 'Has Status Text with warning and error',
    element: <BuilderHeader hasStatus hasWarning hasError showToolbar />
  }
];
