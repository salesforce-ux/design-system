// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Fieldset, Legend } from '../../radio-group/base/example';
import { FormElementControl } from '../../form-element';
import {
  VisualPicker,
  VisualPickerContainer
} from '../coverable-content/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Fieldset>
        <Legend>Select an option</Legend>
        <FormElementControl>
          <VisualPickerContainer hasIcon={false}>
            <VisualPicker className="slds-visual-picker_vertical">
              <span>
                <span className="slds-text-heading_medium slds-m-bottom_x-small">
                  Item Text
                </span>
                <span className="slds-text-title">
                  Some optional item description to help the user better understand
                  what this option is about.
                </span>
              </span>
            </VisualPicker>
            <VisualPicker className="slds-visual-picker_vertical">
              <span>
                <span className="slds-text-heading_medium slds-m-bottom_x-small">
                  Item Text
                </span>
                <span className="slds-text-title">
                  Some optional item description to help the user better understand
                  what this option is about.
                </span>
              </span>
            </VisualPicker>
            <VisualPicker className="slds-visual-picker_vertical">
              <span>
                <span className="slds-text-heading_medium slds-m-bottom_x-small">
                  Item Text
                </span>
                <span className="slds-text-title">
                  Some optional item description to help the user better understand
                  what this option is about.
                </span>
              </span>
            </VisualPicker>
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Disabled option',
    element: (
      <Fieldset>
        <Legend>Select an option</Legend>
        <FormElementControl>
          <VisualPickerContainer hasIcon={false}>
            <VisualPicker className="slds-visual-picker_vertical">
              <span>
                <span className="slds-text-heading_medium slds-m-bottom_x-small">
                  Item Text
                </span>
                <span className="slds-text-title">
                  Some optional item description to help the user better
                  understand what this option is about.
                </span>
              </span>
            </VisualPicker>
            <VisualPicker className="slds-visual-picker_vertical">
              <span>
                <span className="slds-text-heading_medium slds-m-bottom_x-small">
                  Item Text
                </span>
                <span className="slds-text-title">
                  Some optional item description to help the user better
                  understand what this option is about.
                </span>
              </span>
            </VisualPicker>
            <VisualPicker className="slds-visual-picker_vertical" disabled>
              <span>
                <span className="slds-text-heading_medium slds-m-bottom_x-small">
                  Item Text
                </span>
                <span className="slds-text-title">
                  Some optional item description to help the user better
                  understand what this option is about.
                </span>
              </span>
            </VisualPicker>
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  }
];
