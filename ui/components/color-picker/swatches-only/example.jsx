// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';

// component imports
import { ColorPickerSwatches } from '../';
import { Popover } from '../../popovers/base/example';

export default (
  <div className="slds-color-picker">
    <Popover className="slds-color-picker__selector">
      <ColorPickerSwatches />
    </Popover>
  </div>
);
