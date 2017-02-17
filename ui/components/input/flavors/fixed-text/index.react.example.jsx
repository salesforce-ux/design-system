// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Input } from 'ui/components/input/flavors/base/index.react.example';
import { FormElement, FormElementLabel, FormElementControl }
  from 'ui/components/input/flavors/base/index.react.example';

export default (
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl className="slds-input-has-fixed-addon">
      <span className="slds-form-element__addon">$</span>
      <Input />
      <span className="slds-form-element__addon">euro</span>
    </FormElementControl>
  </FormElement>
);
