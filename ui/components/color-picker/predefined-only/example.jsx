// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';

// component imports
import {
  ColorPickerSummary,
  ColorPickerSwatches,
  ColorPickerFooter
} from '../';
import { Popover } from '../../popovers/base/example';

export default (
  <div className="slds-color-picker">
    <ColorPickerSummary />

    <Popover
      title="Choose a color"
      className="slds-color-picker__selector"
      footer={<ColorPickerFooter />}
    >
      <ColorPickerSwatches />
    </Popover>
  </div>
);
