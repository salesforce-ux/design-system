// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ColorPicker from '../';

export default (
  <ColorPicker hasPredefined={false} hasCustom={false} />
);

export const states = [
  {
    id: 'open-swatches-only-color-picker',
    label: 'Open Swatches Only Color Picker',
    element: <ColorPicker hasPredefined={false} hasCustom={false} isOpen />
  }
];
