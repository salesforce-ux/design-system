// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import { Fieldset, Legend } from '../../radio-group/base/example';
import { FormElementControl } from '../../form-element';
import {
  VisualPicker,
  VisualPickerContainer
} from '../coverable-content/example';
import { UtilityIcon } from '../../icons/base/example';

export const PackageOne = [
  <span className="slds-text-heading_small" key={_.uniqueId()}>
    Lightning Professional
  </span>,
  <span className="slds-text-title" key={_.uniqueId()}>
    Complete service CRM for teams of any size
  </span>
];

export const PackageTwo = [
  <span className="slds-text-heading_small" key={_.uniqueId()}>
    Lightning Enterprise
  </span>,
  <span className="slds-text-title" key={_.uniqueId()}>
    Everything you need to take support to the next level
  </span>
];

export const PackageThree = [
  <span className="slds-text-heading_small" key={_.uniqueId()}>
    Lightning Unlimited
  </span>,
  <span className="slds-text-title" key={_.uniqueId()}>
    Complete support with enterprise-grade customization
  </span>
];

export let VisualPickerMediaObject = props => (
  <a
    href="#"
    className={classNames(
      'slds-box slds-box_link slds-box_x-small slds-media',
      props.className
    )}
    onClick={e => e.preventDefault()}
  >
    <div className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small">
      <UtilityIcon className="slds-icon-text-default" symbol="knowledge_base" />
    </div>
    <div className="slds-media__body slds-border_left slds-p-around_small">
      {props.children}
    </div>
  </a>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Fieldset>
        <Legend>Select a plan</Legend>
        <FormElementControl>
          <VisualPickerContainer hasIcon={false}>
            <VisualPicker size="medium" label={PackageOne}>
              <span>
                <span className="slds-text-heading_large">$30</span>
                <span className="slds-text-title">USD/user/month *</span>
              </span>
            </VisualPicker>
            <VisualPicker size="medium" label={PackageTwo}>
              <span>
                <span className="slds-text-heading_large">$150</span>
                <span className="slds-text-title">USD/user/month *</span>
              </span>
            </VisualPicker>
            <VisualPicker size="medium" label={PackageThree}>
              <span>
                <span className="slds-text-heading_large">$300</span>
                <span className="slds-text-title">USD/user/month *</span>
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
        <Legend>Select a plan</Legend>
        <FormElementControl>
          <VisualPickerContainer hasIcon={false}>
            <VisualPicker size="medium" label={PackageOne}>
              <span>
                <span className="slds-text-heading_large">$30</span>
                <span className="slds-text-title">USD/user/month *</span>
              </span>
            </VisualPicker>
            <VisualPicker size="medium" label={PackageTwo}>
              <span>
                <span className="slds-text-heading_large">$150</span>
                <span className="slds-text-title">USD/user/month *</span>
              </span>
            </VisualPicker>
            <VisualPicker size="medium" disabled label={PackageThree}>
              <span>
                <span className="slds-text-heading_large">$300</span>
                <span className="slds-text-title">USD/user/month *</span>
              </span>
            </VisualPicker>
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  }
];
