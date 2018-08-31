// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Horizontal, Stacked } from './';

export default <Horizontal />;

export let states = [
  {
    id: 'data-table-responsive-horizontal',
    label: 'Stacked with Horizontal Cells',
    element: <Horizontal />
  },
  {
    id: 'data-table-responsive-stacked',
    label: 'Stacked',
    element: <Stacked />
  }
  // , @TODO - wait for S1 to fix scrolling
  // {
  //   id: 'data-table-responsive-overflow',
  //   label: 'Overflow',
  //   element: <Overflow />
  // }
];
