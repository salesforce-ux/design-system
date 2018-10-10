// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { CompoundFormElement, CompoundFormRow } from './';
import { FormElement, Fieldset } from '../';
import { Input } from '../../input/base/example';

export default (
  <CompoundFormElement labelContent="Location">
    <CompoundFormRow>
      <div className="slds-size_1-of-2">
        <FormElement labelContent="Latitude" inputId="input-01">
          <Input id="input-01" />
        </FormElement>
      </div>
      <div className="slds-size_1-of-2">
        <FormElement labelContent="Longitude" inputId="input-02">
          <Input id="input-02" />
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
      <CompoundFormElement labelContent="Location" isRequired>
        <CompoundFormRow>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Latitude" inputId="input-01">
              <Input id="input-01" />
            </FormElement>
          </div>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Longitude" inputId="input-02">
              <Input id="input-02" />
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
      <CompoundFormElement labelContent="Location" hasTooltip>
        <CompoundFormRow>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Latitude" inputId="input-01">
              <Input id="input-01" />
            </FormElement>
          </div>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Longitude" inputId="input-02">
              <Input id="input-02" />
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
      <CompoundFormElement labelContent="Location" isRequired>
        <CompoundFormRow>
          <div className="slds-size_1-of-2">
            <FormElement
              labelContent="Latitude"
              inputId="input-01"
              isRequired
              hasError
              errorId="error-message-unique-id"
              inlineMessage="This field is required"
            >
              <Input
                id="input-01"
                required
                aria-describedby="error-message-unique-id"
              />
            </FormElement>
          </div>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Longitude" inputId="input-02">
              <Input id="input-02" />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    )
  }
];

export let examples = [
  {
    id: 'deprecated-stacked',
    label: 'Deprecated - Compound form element',
    element: (
      <Fieldset label="Location" hasCompoundFields isDeprecated>
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-size_1-of-2"
              labelContent="Longitude"
              inputId="location-longitude-01"
            >
              <Input id="location-longitude-01" defaultValue="10.283" />
            </FormElement>
            <FormElement
              formElementClassName="slds-size_1-of-2"
              labelContent="Latitude"
              inputId="location-latitude-01"
            >
              <Input id="location-latitude-01" defaultValue="54.293" />
            </FormElement>
          </div>
        </div>
      </Fieldset>
    )
  }
];
