/* eslint-env jest */
import React from 'react';
import {
  CheckboxToggle,
  CheckboxToggleChecked,
  CheckboxToggleDisabled
} from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

xit('renders a default checkbox toggle', () =>
  matchesMarkup(<CheckboxToggle />));

xit('renders a checked checkbox toggle', () =>
  matchesMarkup(<CheckboxToggleChecked />));

xit('renders a disabled checkbox toggle', () =>
  matchesMarkup(<CheckboxToggleDisabled />));
