// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Input } from '../base/example';
import { FormElement, FormElementLabel, FormElementControl }
  from '../base/example';

export let states = [
  {
    id: 'left-icon',
    label: 'Left Icon',
    element:
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon--left" >
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon--left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <Input />
        </FormElementControl>
      </FormElement>
  },
  {
    id: 'right-icon',
    label: 'Right Icon',
    element:
      <FormElement>
        <FormElementLabel>Input Label</FormElementLabel>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon--right" >
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon--right slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <Input />
        </FormElementControl>
      </FormElement>
  },
  {
    id: 'double-icon',
    label: 'Left & Right Icon',
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
          <button className="slds-input__icon slds-input__icon--right slds-button slds-button--icon">
            <SvgIcon
              className="slds-button__icon slds-icon-text-light"
              sprite="utility"
              symbol="clear"
            />
            <span className="slds-assistive-text">Clear</span>
          </button>
        </FormElementControl>
      </FormElement>
  }
];
