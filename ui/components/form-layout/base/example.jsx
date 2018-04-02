// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { FormElement } from '../../form-element/base/example';
import { Input } from '../../input/base/example';
import { Textarea } from '../../textarea/base/example';
import { Radio } from '../../radio-group/base/example';
import { Checkbox } from '../../checkbox/base/example';

const inputId01 = 'input-id-01';
const inputId02 = 'input-id-02';
const inputId03 = 'input-id-03';

export const Form = props => (
  <div className={classNames('slds-form', props.className)}>
    <FormElement label="Text Input" inputId={inputId01}>
      <Input id={inputId01} />
    </FormElement>
    <FormElement label="Textarea Label" inputId={inputId02}>
      <Textarea id={inputId02} />
    </FormElement>
    <fieldset className="slds-form-element">
      <legend className="slds-form-element__legend slds-form-element__label">
        Checkbox Group label
      </legend>
      <div className="slds-form-element__control">
        <Checkbox label="All opportunities owned by you" name="default" />
        <Checkbox
          label="All contacts in the account owned by you"
          name="default"
        />
      </div>
    </fieldset>
    <fieldset className="slds-form-element">
      <legend className="slds-form-element__legend slds-form-element__label">
        Checkbox Group label
      </legend>
      <div className="slds-form-element__control">
        <Radio label="Lead Generation" name="options" />
        <Radio label="Education Leads" name="options" />
      </div>
    </fieldset>
  </div>
);

export let states = [
  {
    id: 'horizontal',
    label: 'Horizontal',
    element: <Form className="slds-form_horizontal" />
  }
];
