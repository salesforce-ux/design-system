// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { FormElement } from '../../form-element';
import Input from '../../input';
import ButtonIcon from '../../button-icons';

const inputLabel = 'Counter Label';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="default1"
        labelClassName="slds-m-right_none"
      >
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_decrement"
          symbol="ban"
          assistiveText="Decrement counter"
          title="Decrement counter"
        />
        <Input id="default1" type="number" placeholder="1" />
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_increment"
          symbol="new"
          assistiveText="Increment counter"
          title="Increment counter"
        />
      </FormElement>
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="state-disabled"
        labelClassName="slds-m-right_none"
      >
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_decrement"
          symbol="ban"
          assistiveText="Decrement counter"
          title="Decrement counter"
          disabled
        />
        <Input id="state-disabled" type="number" placeholder="1" disabled />
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_increment"
          symbol="new"
          assistiveText="Increment counter"
          title="Increment counter"
          disabled
        />
      </FormElement>
    )
  },
  {
    id: 'read-only',
    label: 'Read only',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="state-read-only"
        labelClassName="slds-m-right_none"
      >
        <Input id="state-read-only" type="text" placeholder="1" readOnly />
      </FormElement>
    )
  },
  {
    id: 'required',
    label: 'Required',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId="state-required"
        isRequired
        labelClassName="slds-m-right_none"
      >
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_decrement"
          symbol="ban"
          assistiveText="Decrement counter"
          title="Decrement counter"
        />
        <Input id="state-required" type="number" placeholder="1" required />
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_increment"
          symbol="new"
          assistiveText="Increment counter"
          title="Increment counter"
        />
      </FormElement>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElement
        hasError
        labelContent={inputLabel}
        inputId="state-error"
        errorId="state-error-1"
        isRequired
        inlineMessage="This field is required"
        labelClassName="slds-m-right_none"
      >
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_decrement"
          symbol="ban"
          assistiveText="Decrement counter"
          title="Decrement counter"
        />
        <Input
          id="state-error"
          type="number"
          placeholder="1"
          required
          aria-describedby="state-error-1"
        />
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_increment"
          symbol="new"
          assistiveText="Increment counter"
          title="Increment counter"
        />
      </FormElement>
    )
  }
];

export let examples = [
  {
    id: 'centered',
    label: 'Label Centered',
    element: (
      <FormElement
        formElementClassName="slds-text-align_center"
        labelContent={inputLabel}
        inputId="example-centered"
        labelClassName="slds-m-right_none"
      >
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_decrement"
          symbol="ban"
          assistiveText="Decrement counter"
          title="Decrement counter"
        />
        <Input id="example-centered" type="number" placeholder="1" />
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_increment"
          symbol="new"
          assistiveText="Increment counter"
          title="Increment counter"
        />
      </FormElement>
    )
  }
];
