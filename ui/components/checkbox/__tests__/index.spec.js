/* eslint-env jest */
import React from 'react';
import {
  Checkbox,
  Disabled,
  ErrorState,
  FormElement,
  FormElementControl,
  Group,
  GroupRequired,
  GroupError,
  GroupDisabled,
  Indeterminate,
  Required
} from '../base/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default checkbox', () =>
  matchesMarkupAndStyle(
    <FormElement>
      <FormElementControl>
        <Checkbox label="Checkbox Label" checked />
      </FormElementControl>
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
      <FormElementControl>
        <Checkbox
          className="slds-checkbox_stacked"
          label="Checkbox Label"
          checked
        />
      </FormElementControl>
    </FormElement>
  ));
