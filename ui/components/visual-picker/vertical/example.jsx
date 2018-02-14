// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import {
  Fieldset,
  Legend,
  FormElementControl
} from '../../radio-group/base/example';
import { VisualPicker } from '../coverable-content/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Fieldset>
    <Legend>Select an option</Legend>
    <FormElementControl>
      <VisualPicker className="slds-visual-picker_vertical" type="radio">
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
      <VisualPicker className="slds-visual-picker_vertical" type="radio">
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
      <VisualPicker className="slds-visual-picker_vertical" type="radio">
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
    </FormElementControl>
  </Fieldset>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled option',
    element: (
      <Fieldset>
        <Legend>Select an option</Legend>
        <FormElementControl>
          <VisualPicker className="slds-visual-picker_vertical" type="radio">
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
          <VisualPicker className="slds-visual-picker_vertical" type="radio">
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
          <VisualPicker
            className="slds-visual-picker_vertical"
            type="radio"
            disabled
          >
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
        </FormElementControl>
      </Fieldset>
    )
  }
];
