// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Input } from '../base/example';
import { FormElement, FormElementLabel, FormElementControl }
  from '../base/example';
import { SpinnerContainer, Spinner } from '../../spinners/base/example';

export let states = [
  {
    id: 'double-icon-spinner',
    label: 'Icons with Spinner',
    element:
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon--left-right" >
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon--left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <Input />
          <div className="slds-input__icon-group slds-input__icon-group_right">
            <Spinner className="slds-spinner_brand slds-spinner--x-small slds-input__spinner" />
            <button className="slds-input__icon slds-input__icon--right slds-button slds-button--icon">
              <SvgIcon
                className="slds-button__icon slds-icon-text-light"
                sprite="utility"
                symbol="clear"
              />
              <span className="slds-assistive-text">Clear</span>
            </button>
          </div>
        </FormElementControl>
      </FormElement>
  }
];
