// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ColorPickerSwatches } from '../';
import { Trigger } from '../../menus/dropdown/example';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Trigger>
        <div className="slds-dropdown slds-dropdown_left">
          <div className="slds-color-picker slds-color-picker_swatches-only">
            <div className="slds-color-picker__selector">
              <ColorPickerSwatches isMenuRole />
            </div>
          </div>
        </div>
      </Trigger>
    )
  }
];

export const states = [
  {
    id: 'open-swatches-only-color-picker',
    label: 'Open',
    element: (
      <div style={{ height: '12rem' }}>
        <Trigger isOpen>
          <div className="slds-dropdown slds-dropdown_left">
            <div className="slds-color-picker slds-color-picker_swatches-only">
              <div className="slds-color-picker__selector">
                <ColorPickerSwatches isMenuRole />
              </div>
            </div>
          </div>
        </Trigger>
      </div>
    )
  }
];
