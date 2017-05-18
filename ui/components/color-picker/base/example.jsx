// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import ColorPicker from '../';

export default (
  <ColorPicker />
);

export const states = [
  {
    id: 'custom-tab-selected',
    label: 'Custom Tab Selected',
    element: <ColorPicker selectedTabIndex={1} />
  }
];
