/* eslint-env jest */
import React from 'react';
import {
  CheckboxToggle,
  CheckboxToggleChecked,
  CheckboxToggleDisabled
} from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

xit('renders a default checkbox toggle', () =>
  matchesMarkupAndStyle(<CheckboxToggle />));

xit('renders a checked checkbox toggle', () =>
  matchesMarkupAndStyle(<CheckboxToggleChecked />));

xit('renders a disabled checkbox toggle', () =>
  matchesMarkupAndStyle(<CheckboxToggleDisabled />));
