// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ColorPicker from '../';

export default <ColorPicker hasCustom={false} />;

export const states = [
  {
    id: 'predefined-color-picker-open',
    label: 'Open',
    element: <ColorPicker isOpen hasCustom={false} />
  }
];
