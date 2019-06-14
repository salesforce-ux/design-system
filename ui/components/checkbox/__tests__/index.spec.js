// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { Checkbox } from '../base/example';
import { CheckboxPrimitive, CheckboxStandalone } from '../';
import { FormElementCheckboxStandalone } from '../form-element';

const { matchesMarkup } = createHelpers(__dirname);

describe('Checkbox', () => {
  it('renders checkbox', () => matchesMarkup(<Checkbox />));
  it('renders checkbox with a label', () =>
    matchesMarkup(<Checkbox label="label" />));
  it('renders checkbox with a hidden label', () =>
    matchesMarkup(<Checkbox label="label" hideLabel />));
  it('renders checkbox with required asterisk', () =>
    matchesMarkup(<Checkbox isRequired />));
  it('renders checkbox that is disabled', () =>
    matchesMarkup(<Checkbox disabled />));
  it('renders checkbox with help text icon', () =>
    matchesMarkup(<Checkbox hasTooltip />));
});

describe('Checkbox Primitive', () => {
  it('renders primitive checkbox', () => matchesMarkup(<CheckboxPrimitive />));
  it('renders primitive checkbox with an ID', () =>
    matchesMarkup(<CheckboxPrimitive id="checkbox-id" />));
  it('renders primitive checkbox with a name', () =>
    matchesMarkup(<CheckboxPrimitive name="checkbox-name" />));
  it('renders primitive checkbox with a value', () =>
    matchesMarkup(<CheckboxPrimitive value="checkbox-value" />));
  it('renders primitive checkbox that is disabled', () =>
    matchesMarkup(<CheckboxPrimitive isDisabled />));
  it('renders primitive checkbox that is required', () =>
    matchesMarkup(<CheckboxPrimitive isRequired />));
  it('renders primitive checkbox with an aria-describedby error ID', () =>
    matchesMarkup(<CheckboxPrimitive errorId="error-id" />));
});

describe('Standalone Checkbox', () => {
  it('renders standalone checkbox', () =>
    matchesMarkup(<CheckboxStandalone />));
  it('renders primitive checkbox with an ID', () =>
    matchesMarkup(<CheckboxStandalone id="checkbox-id" />));
  it('renders primitive checkbox with a name', () =>
    matchesMarkup(<CheckboxStandalone name="checkbox-name" />));
  it('renders primitive checkbox with a value', () =>
    matchesMarkup(<CheckboxStandalone value="checkbox-value" />));
  it('renders primitive checkbox that is disabled', () =>
    matchesMarkup(<CheckboxStandalone isDisabled />));
  it('renders primitive checkbox that is required', () =>
    matchesMarkup(<CheckboxStandalone isRequired />));
  it('renders primitive checkbox with an aria-describedby error ID', () =>
    matchesMarkup(<CheckboxStandalone errorId="error-id" />));
});

describe('Form Element Standalone Checkbox', () => {
  it('renders form element standalone checkbox with a label', () =>
    matchesMarkup(<FormElementCheckboxStandalone />));
  it('renders form element standalone checkbox with an ID and a label', () =>
    matchesMarkup(<FormElementCheckboxStandalone id="checkbox-id" />));
  it('renders form element standalone checkbox with a name and a label', () =>
    matchesMarkup(<FormElementCheckboxStandalone name="checkbox-name" />));
  it('renders form element standalone checkbox with a value and a label', () =>
    matchesMarkup(<FormElementCheckboxStandalone value="checkbox-value" />));
  it('renders form element standalone checkbox that is disabled with a label', () =>
    matchesMarkup(<FormElementCheckboxStandalone isDisabled />));
  it('renders form element standalone checkbox that is required with a label', () =>
    matchesMarkup(<FormElementCheckboxStandalone isRequired />));
  it('renders = form element standalone checkbox with an aria-describedby error ID with label and error text', () =>
    matchesMarkup(
      <FormElementCheckboxStandalone hasError inlineMessage="Error message" />
    ));
  it('renders form element standalone checkbox that is checked with a label', () =>
    matchesMarkup(<FormElementCheckboxStandalone isChecked />));
});
