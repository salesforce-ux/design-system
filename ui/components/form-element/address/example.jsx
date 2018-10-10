// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { CompoundFormElement, CompoundFormRow } from '../compound/';
import { FormElement } from '../';
import { Input } from '../../input/base/example';
import { Textarea } from '../../textarea/base/example';

export default (
  <CompoundFormElement labelContent="Billing Address" isAddress>
    <CompoundFormRow>
      <div className="slds-size_1-of-1">
        <FormElement labelContent="Billing Street" inputId="form-element-id-04">
          <Textarea
            id="form-element-id-04"
            defaultValue="525 S. Lexington Ave"
            required
          />
        </FormElement>
      </div>
    </CompoundFormRow>
    <CompoundFormRow>
      <div className="slds-size_4-of-6">
        <FormElement labelContent="Billing City" inputId="form-element-id-05">
          <Input id="form-element-id-05" defaultValue="Burlington" required />
        </FormElement>
      </div>
      <div className="slds-size_2-of-6">
        <FormElement
          labelContent="Billing State/Province"
          inputId="form-element-id-06"
        >
          <Input id="form-element-id-06" defaultValue="NC" required />
        </FormElement>
      </div>
    </CompoundFormRow>
    <CompoundFormRow>
      <div className="slds-size_4-of-6">
        <FormElement
          labelContent="Billing Zip/Postal Code"
          inputId="form-element-id-07"
        >
          <Input id="form-element-id-07" defaultValue="27215" required />
        </FormElement>
      </div>
      <div className="slds-size_2-of-6">
        <FormElement
          labelContent="Billing Country"
          inputId="form-element-id-08"
        >
          <Input id="form-element-id-08" defaultValue="USA" required />
        </FormElement>
      </div>
    </CompoundFormRow>
  </CompoundFormElement>
);

export let states = [
  {
    id: 'required',
    label: 'Required',
    element: (
      <CompoundFormElement labelContent="Billing Address" isAddress isRequired>
        <CompoundFormRow>
          <div className="slds-size_1-of-1">
            <FormElement
              labelContent="Billing Street"
              inputId="form-element-id-04"
            >
              <Textarea
                id="form-element-id-04"
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
              inputId="form-element-id-05"
            >
              <Input
                id="form-element-id-05"
                defaultValue="Burlington"
                required
              />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing State/Province"
              inputId="form-element-id-06"
            >
              <Input id="form-element-id-06" defaultValue="NC" required />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing Zip/Postal Code"
              inputId="form-element-id-07"
            >
              <Input id="form-element-id-07" defaultValue="27215" required />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing Country"
              inputId="form-element-id-08"
            >
              <Input id="form-element-id-08" defaultValue="USA" required />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    )
  },
  {
    id: 'help-text',
    label: 'Has help text icon with tooltip',
    element: (
      <CompoundFormElement labelContent="Billing Address" isAddress hasTooltip>
        <CompoundFormRow>
          <div className="slds-size_1-of-1">
            <FormElement
              labelContent="Billing Street"
              inputId="form-element-id-04"
            >
              <Textarea
                id="form-element-id-04"
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
              inputId="form-element-id-05"
            >
              <Input
                id="form-element-id-05"
                defaultValue="Burlington"
                required
              />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing State/Province"
              inputId="form-element-id-06"
            >
              <Input id="form-element-id-06" defaultValue="NC" required />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing Zip/Postal Code"
              inputId="form-element-id-07"
            >
              <Input id="form-element-id-07" defaultValue="27215" required />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing Country"
              inputId="form-element-id-08"
            >
              <Input id="form-element-id-08" defaultValue="USA" required />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    )
  },
  {
    id: 'has-error',
    label: 'Has error',
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
              inputId="form-element-id-04"
            >
              <Textarea
                id="form-element-id-04"
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
              inputId="form-element-id-05"
            >
              <Input
                id="form-element-id-05"
                defaultValue="Burlington"
                required
              />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing State/Province"
              inputId="form-element-id-06"
            >
              <Input id="form-element-id-06" defaultValue="NC" required />
            </FormElement>
          </div>
        </CompoundFormRow>
        <CompoundFormRow>
          <div className="slds-size_4-of-6">
            <FormElement
              labelContent="Billing Zip/Postal Code"
              inputId="form-element-id-07"
            >
              <Input id="form-element-id-07" defaultValue="27215" required />
            </FormElement>
          </div>
          <div className="slds-size_2-of-6">
            <FormElement
              labelContent="Billing Country"
              inputId="form-element-id-08"
            >
              <Input id="form-element-id-08" defaultValue="USA" required />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    )
  }
];
