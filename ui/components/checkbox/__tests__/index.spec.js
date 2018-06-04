/* eslint-env jest */
import React from 'react';
import {
  Checkbox,
  Disabled,
  ErrorState,
  Group,
  GroupRequired,
  GroupError,
  GroupDisabled,
  Indeterminate,
  Required,
  CheckedDisabled
} from '../base/example';
import { FormElement } from '../../form-element';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default checkbox', () =>
  matchesMarkupAndStyle(
    <FormElement>
      <Checkbox label="Checkbox Label" checked />
    </FormElement>
  ));

it('renders an indeterminate checkbox', () =>
  matchesMarkupAndStyle(<Indeterminate />));

it('renders a required checkbox', () => matchesMarkupAndStyle(<Required />));

it('renders an error state checkbox', () =>
  matchesMarkupAndStyle(<ErrorState />));

it('renders a disabled checkbox', () => matchesMarkupAndStyle(<Disabled />));

it('renders a checkbox group', () => matchesMarkupAndStyle(<Group />));

it('renders a required checkbox group', () =>
  matchesMarkupAndStyle(<GroupRequired />));

it('renders a checkbox group with error', () =>
  matchesMarkupAndStyle(<GroupError />));

it('renders a disabled checkbox group', () =>
  matchesMarkupAndStyle(<GroupDisabled />));

it('renders a stacked checkbox', () =>
  matchesMarkupAndStyle(
    <FormElement>
      <Checkbox
        className="slds-checkbox_stacked"
        label="Checkbox Label"
        checked
      />
    </FormElement>
  ));

it('renders a checked and disabled checkbox', () =>
  matchesMarkupAndStyle(<CheckedDisabled />));
