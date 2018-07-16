// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ProgressBar } from '..';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export const Context = props => (
  <div style={{ height: '200px' }}>{props.children}</div>
);

export default <ProgressBar value="25" isVertical />;

export let states = [
  {
    id: 'zero',
    label: '0% complete',
    element: <ProgressBar value="0" isVertical />
  },
  {
    id: '25',
    label: '25% complete',
    element: <ProgressBar value="25" isVertical />
  },
  {
    id: '50',
    label: '50% complete',
    element: <ProgressBar value="50" isVertical />
  },
  {
    id: '75',
    label: '75% complete',
    element: <ProgressBar value="75" isVertical />
  },
  {
    id: '100',
    label: '100% complete',
    element: <ProgressBar value="100" isVertical />
  }
];
