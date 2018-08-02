/* eslint-env jest */
import React from 'react';
import {
  CheckboxToggle,
  CheckboxToggleChecked,
  CheckboxToggleDisabled
} from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a default checkbox toggle', () =>
  matchesMarkup(<CheckboxToggle />));

it('renders a checked checkbox toggle', () =>
  matchesMarkup(<CheckboxToggleChecked />));

it('renders a disabled checkbox toggle', () =>
  matchesMarkup(<CheckboxToggleDisabled />));
