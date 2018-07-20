// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { Checkbox } from '../base/example';
import { CheckboxPrimitive, CheckboxStandalone } from '../';

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
