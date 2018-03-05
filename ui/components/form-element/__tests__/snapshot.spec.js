// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { FormElement } from '../base/example';
import { Input } from '../../input/base/example';
import ButtonIcon from '../../button-icons/';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Form Element', () => {
  it('renders base form element with input', () =>
    matchesMarkupAndStyle(
      <FormElement label="Form label" inputId="input-1">
        <Input id="input-1" />
      </FormElement>
    ));
  it('renders base required form element with input', () =>
    matchesMarkupAndStyle(
      <FormElement label="Form label" inputId="input-1" required>
        <Input id="input-1" required />
      </FormElement>
    ));
  it('renders base errored form element with input', () =>
    matchesMarkupAndStyle(
      <FormElement
        className="slds-has-error"
        label="Form label"
        inputId="input-1"
        errorId="error-1"
        required
        message="This field is required"
      >
        <Input id="input-1" required aria-describedby="error-1" />
      </FormElement>
    ));
  it('renders inline editable form element in view mode', () =>
    matchesMarkupAndStyle(
      <div className="slds-form-element slds-form-element_small slds-form-element_edit slds-hint-parent">
        <span className="slds-form-element__label">Status</span>
        <div className="slds-form-element__control">
          <span className="slds-form-element__static slds-border_bottom">
            In Progress
          </span>
          <ButtonIcon
            iconClassName="slds-button__icon_hint"
            symbol="edit"
            assistiveText="Edit: Status"
            title="Edit: Status"
          />
        </div>
      </div>
    ));
  it('renders condensed form element in view mode', () =>
    matchesMarkupAndStyle(
      <div className="slds-form-element slds-form-element_small slds-form-element_edit slds-form-element_small">
        <span className="slds-form-element__label">Status</span>
        <div className="slds-form-element__control">
          <span className="slds-form-element__static slds-border_bottom">
            In Progress
          </span>
        </div>
      </div>
    ));
});
