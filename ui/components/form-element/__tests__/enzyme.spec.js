// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { FormElement } from '../';
import { Input } from '../../input/base/example';

describe('Form Element', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<FormElement />, document.createElement('div'));
  });

  it('renders a label targeting the html element', () => {
    const example = shallow(
      <FormElement labelContent="Form label" inputId="input-1">
        <Input id="input-1" />
      </FormElement>
    );
    const rendered = example.render();
    expect(rendered.find('.slds-form-element__label')).toHaveLength(1);
    expect(rendered.find('[for="input-1"]')).toHaveLength(1);
    expect(rendered.find('#input-1')).toHaveLength(1);
  });

  it('renders a required field', () => {
    const example = shallow(
      <FormElement labelContent="Form label" inputId="input-1" isRequired>
        <Input id="input-1" required />
      </FormElement>
    );
    const rendered = example.render();
    expect(rendered.find('.slds-required')).toHaveLength(1);
  });

  it('renders a form field with an error', () => {
    const example = shallow(
      <FormElement
        formElementClassName="slds-has-error"
        labelContent="Form label"
        inputId="input-1"
        errorId="error-1"
        isRequired
        inlineMessage="This field is required"
      >
        <Input id="input-1" required aria-describedby="error-1" />
      </FormElement>
    );
    const rendered = example.render();
    expect(rendered.find('#error-1')).toHaveLength(1);
    expect(rendered.find('[aria-describedby="error-1"]')).toHaveLength(1);
  });
});
