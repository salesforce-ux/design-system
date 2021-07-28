// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { FormElement, Fieldset } from '../../form-element/';
import Input from '../../input/';

export const CompoundForm = (props) => {
  const { hasTooltip, isRequired } = props;

  return (
    <React.Fragment>
      <Fieldset
        hasCompoundFields
        hasTooltip={hasTooltip}
        isRequired={isRequired}
        isDeprecated
        label="Location"
      >
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-size_1-of-2"
              labelContent="Latitude"
              inputId="input-10"
            >
              <Input id="input-10" />
            </FormElement>
            <FormElement
              formElementClassName="slds-size_1-of-2"
              labelContent="Longitude"
              inputId="input-11"
            >
              <Input id="input-11" />
            </FormElement>
          </div>
        </div>
      </Fieldset>
      <Fieldset
        hasCompoundFields
        label="Shipping Address"
        isAddress
        isDeprecated
      >
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-size_1-of-1"
              labelContent="Shipping Street"
              inputId="input-12"
            >
              <Input id="input-12" />
            </FormElement>
          </div>
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-size_4-of-6"
              labelContent="Shipping City"
              inputId="input-13"
            >
              <Input id="input-13" />
            </FormElement>
            <FormElement
              formElementClassName="slds-size_2-of-6"
              labelContent="Shipping State/Province"
              inputId="input-14"
            >
              <Input id="input-14" defaultValue="MT" />
            </FormElement>
          </div>
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-size_4-of-6"
              labelContent="Shipping Zip/Postal Code"
              inputId="input-15"
            >
              <Input id="input-15" />
            </FormElement>
            <FormElement
              formElementClassName="slds-size_2-of-6"
              labelContent="Shipping Country"
              inputId="input-16"
            >
              <Input id="input-16" defaultValue="Canada" />
            </FormElement>
          </div>
        </div>
      </Fieldset>
    </React.Fragment>
  );
};

CompoundForm.propTypes = {
  hasTooltip: PropTypes.bool,
  isRequired: PropTypes.bool,
};
