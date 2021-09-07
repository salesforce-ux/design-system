// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { CompoundFormElement, CompoundFormRow } from './';
import { CompoundForm } from '../../form-layout/compound/example';
import { FormElement, Fieldset } from '../';
import Input from '../../input/';

const compoundContext = 'Compound';

export default [
  {
    id: 'compound-default',
    label: `${compoundContext} - Default`,
    context: `${compoundContext}`,
    element: (
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
    ),
  },
];

export let states = [
  {
    id: 'required',
    label: `${compoundContext} - Required`,
    context: `${compoundContext}`,
    element: (
      <CompoundFormElement labelContent="Location" isRequired>
        <CompoundFormRow>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Latitude" inputId="input-03">
              <Input id="input-03" />
            </FormElement>
          </div>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Longitude" inputId="input-04">
              <Input id="input-04" />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    ),
  },
  {
    id: 'help-text',
    label: `${compoundContext} - Help text icon with tooltip`,
    context: `${compoundContext}`,
    element: (
      <CompoundFormElement labelContent="Location" hasTooltip>
        <CompoundFormRow>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Latitude" inputId="input-05">
              <Input id="input-05" />
            </FormElement>
          </div>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Longitude" inputId="input-06">
              <Input id="input-06" />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    ),
  },
  {
    id: 'has-error',
    label: `${compoundContext} - Error`,
    context: `${compoundContext}`,
    element: (
      <CompoundFormElement labelContent="Location" isRequired>
        <CompoundFormRow>
          <div className="slds-size_1-of-2">
            <FormElement
              labelContent="Latitude"
              inputId="input-07"
              isRequired
              hasError
              errorId="error-message-unique-id"
              inlineMessage="This field is required"
            >
              <Input
                id="input-07"
                required
                aria-describedby="error-message-unique-id"
              />
            </FormElement>
          </div>
          <div className="slds-size_1-of-2">
            <FormElement labelContent="Longitude" inputId="input-08">
              <Input id="input-08" />
            </FormElement>
          </div>
        </CompoundFormRow>
      </CompoundFormElement>
    ),
  },
  {
    id: 'compound-field-required',
    label: `${compoundContext} - Form Layout (Required)`,
    context: `${compoundContext}`,
    element: <CompoundForm />,
  },
  {
    id: 'compound-field-required-tooltip-help',
    label: `${compoundContext} - Form Layout (Required with Tooltip Help)`,
    context: `${compoundContext}`,
    element: <CompoundForm />,
  },
];

export let examples = [
  {
    id: 'deprecated-stacked',
    label: 'Deprecated - Compound form element',
    context: 'Deprecated',
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
              inputId="location-latitude-02"
            >
              <Input id="location-latitude-02" defaultValue="54.293" />
            </FormElement>
          </div>
        </div>
      </Fieldset>
    ),
  },
  {
    id: 'compound-field',
    label: `${compoundContext} - Form Layout`,
    context: `${compoundContext}`,
    element: <CompoundForm />,
  },
];
