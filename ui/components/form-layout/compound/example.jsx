// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { FormElement, Fieldset } from '../../form-element/';
import { Input } from '../../input/base/example';

export const CompoundForm = props => {
  const { hasTooltip, isRequired } = props;

  return (
    <React.Fragment>
      <Fieldset
        hasCompoundFields
        hasTooltip={hasTooltip}
        isRequired={isRequired}
        label="Location"
      >
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-size_1-of-2"
              labelContent="Latitude"
              inputId="input-01"
            >
              <Input id="input-01" />
            </FormElement>
            <FormElement
              formElementClassName="slds-size_1-of-2"
              labelContent="Longitude"
              inputId="input-02"
            >
              <Input id="input-02" />
            </FormElement>
          </div>
        </div>
      </Fieldset>
      <Fieldset hasCompoundFields label="Shipping Address">
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-size_1-of-1"
              labelContent="Shipping Street"
              inputId="input-03"
            >
              <Input id="input-03" />
            </FormElement>
          </div>
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-size_4-of-6"
              labelContent="Shipping City"
              inputId="input-04"
            >
              <Input id="input-04" />
            </FormElement>
            <FormElement
              formElementClassName="slds-size_2-of-6"
              labelContent="Shipping State/Province"
              inputId="input-05"
            >
              <Input id="input-05" defaultValue="MT" />
            </FormElement>
          </div>
          <div className="slds-form-element__row slds-gutters_xx-small">
            <FormElement
              formElementClassName="slds-size_4-of-6"
              labelContent="Shipping Zip/Postal Code"
              inputId="input-06"
            >
              <Input id="input-06" />
            </FormElement>
            <FormElement
              formElementClassName="slds-size_2-of-6"
              labelContent="Shipping Country"
              inputId="input-07"
            >
              <Input id="input-07" defaultValue="Canada" />
            </FormElement>
          </div>
        </div>
      </Fieldset>
    </React.Fragment>
  );
};

CompoundForm.propTypes = {
  hasTooltip: PropTypes.bool,
  isRequired: PropTypes.bool
};
