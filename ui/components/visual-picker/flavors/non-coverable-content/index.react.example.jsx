// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';
import { Fieldset, Legend, FormElementControl } from 'ui/components/radio-group/flavors/base/index.react.example';
import { VisualPicker } from 'ui/components/visual-picker/flavors/coverable-content/index.react.example';

const PackageOne = ([
  <span className="slds-text-heading--small" key={_.uniqueId()}>Lightning Professional</span>,
  <span className="slds-text-title" key={_.uniqueId()}>Complete service CRM for teams of any size</span>
]);

const PackageTwo = ([
  <span className="slds-text-heading--small" key={_.uniqueId()}>Lightning Enterprise</span>,
  <span className="slds-text-title" key={_.uniqueId()}>Everything you need to take support to the next level</span>
]);

const PackageThree = ([
  <span className="slds-text-heading--small" key={_.uniqueId()}>Lightning Unlimited</span>,
  <span className="slds-text-title" key={_.uniqueId()}>Complete support with enterprise-grade customization</span>
]);

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'radio-group',
    label: 'Radio group',
    element:
      <Fieldset>
        <Legend>Select a plan</Legend>
        <FormElementControl>
          <VisualPicker type="radio" size="medium" label={PackageOne}>
            <span>
              <span className="slds-text-heading--large">$30</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker type="radio" size="medium" label={PackageTwo}>
            <span>
              <span className="slds-text-heading--large">$150</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker type="radio" size="medium" label={PackageThree}>
            <span>
              <span className="slds-text-heading--large">$300</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'disabled',
    label: 'Disabled option',
    element:
      <Fieldset>
        <Legend>Select a plan</Legend>
        <FormElementControl>
          <VisualPicker type="radio" size="medium" label={PackageOne}>
            <span>
              <span className="slds-text-heading--large">$30</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker type="radio" size="medium" label={PackageTwo}>
            <span>
              <span className="slds-text-heading--large">$150</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker type="radio" size="medium" disabled={true} label={PackageThree}>
            <span>
              <span className="slds-text-heading--large">$300</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element:
      <Fieldset>
        <Legend>Select a plan</Legend>
        <FormElementControl>
          <VisualPicker type="radio" size="large" label={PackageOne}>
            <span>
              <span className="slds-text-heading--large">$30</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker type="radio" size="large" label={PackageTwo}>
            <span>
              <span className="slds-text-heading--large">$150</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker type="radio" size="large" label={PackageThree}>
            <span>
              <span className="slds-text-heading--large">$300</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
        </FormElementControl>
      </Fieldset>
  }
];
