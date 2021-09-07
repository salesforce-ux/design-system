// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { CompoundFormElement, CompoundFormRow } from '../compound/';
import { FormElement } from '../';
import Input from '../../input/';
import { Textarea } from '../../textarea/base/example';

const addressContext = 'Address';

export default [
  {
    id: 'address-default',
    label: `${addressContext} - Default`,
    context: `${addressContext}`,
    element: (
      <CompoundFormElement labelContent="Billing Address" isAddress>
        <CompoundFormRow>
          <div className="slds-size_1-of-1">
            <FormElement
              labelContent="Billing Street"
              inputId="form-element-id-01"
            >
              <Textarea
                id="form-element-id-01"
                defaultValue="525 S. Lexington Ave"
                required
              />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing City"
              inputId="form-element-id-02"
            >
              <Input
                id="form-element-id-02"
                defaultValue="Burlington"
                required
              />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing State/Province"
              inputId="form-element-id-03"
            >
              <Input id="form-element-id-03" defaultValue="NC" required />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing Zip/Postal Code"
              inputId="form-element-id-04"
            >
              <Input id="form-element-id-04" defaultValue="27215" required />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing Country"
              inputId="form-element-id-05"
            >
              <Input id="form-element-id-05" defaultValue="USA" required />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    ),
  },
  {
    id: 'help-text',
    label: `${addressContext} - Help text icon with tooltip`,
    context: `${addressContext}`,
    element: (
      <CompoundFormElement labelContent="Billing Address" isAddress hasTooltip>
        <CompoundFormRow>
          <div className="slds-size_1-of-1">
            <FormElement
              labelContent="Billing Street"
              inputId="form-element-id-06"
            >
              <Textarea
                id="form-element-id-06"
                defaultValue="525 S. Lexington Ave"
                required
              />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing City"
              inputId="form-element-id-07"
            >
              <Input
                id="form-element-id-07"
                defaultValue="Burlington"
                required
              />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing State/Province"
              inputId="form-element-id-08"
            >
              <Input id="form-element-id-08" defaultValue="NC" required />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing Zip/Postal Code"
              inputId="form-element-id-09"
            >
              <Input id="form-element-id-09" defaultValue="27215" required />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing Country"
              inputId="form-element-id-10"
            >
              <Input id="form-element-id-10" defaultValue="USA" required />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    ),
  },
];

export let states = [
  {
    id: 'required',
    label: `${addressContext} - Required`,
    context: `${addressContext}`,
    element: (
      <CompoundFormElement labelContent="Billing Address" isAddress isRequired>
        <CompoundFormRow>
          <div className="slds-size_1-of-1">
            <FormElement
              labelContent="Billing Street"
              inputId="form-element-id-11"
            >
              <Textarea
                id="form-element-id-11"
                defaultValue="525 S. Lexington Ave"
                required
              />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing City"
              inputId="form-element-id-12"
            >
              <Input
                id="form-element-id-12"
                defaultValue="Burlington"
                required
              />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing State/Province"
              inputId="form-element-id-13"
            >
              <Input id="form-element-id-13" defaultValue="NC" required />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing Zip/Postal Code"
              inputId="form-element-id-14"
            >
              <Input id="form-element-id-14" defaultValue="27215" required />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing Country"
              inputId="form-element-id-15"
            >
              <Input id="form-element-id-15" defaultValue="USA" required />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    ),
  },
  {
    id: 'has-error',
    label: `${addressContext} - Error`,
    context: `${addressContext}`,
    element: (
      <CompoundFormElement
        labelContent="Billing Address"
        isAddress
        isRequired
        hasError
        errorId="address-error-id-01"
        inlineMessage="These fields are required"
      >
        <CompoundFormRow>
          <div className="slds-size_1-of-1">
            <FormElement
              labelContent="Billing Street"
              inputId="form-element-id-16"
            >
              <Textarea
                id="form-element-id-16"
                defaultValue="525 S. Lexington Ave"
                required
              />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing City"
              inputId="form-element-id-17"
            >
              <Input
                id="form-element-id-17"
                defaultValue="Burlington"
                required
              />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing State/Province"
              inputId="form-element-id-18"
            >
              <Input id="form-element-id-18" defaultValue="NC" required />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing Zip/Postal Code"
              inputId="form-element-id-19"
            >
              <Input id="form-element-id-19" defaultValue="27215" required />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing Country"
              inputId="form-element-id-20"
            >
              <Input id="form-element-id-20" defaultValue="USA" required />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    ),
  },
];
