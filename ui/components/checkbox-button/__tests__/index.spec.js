/* eslint-env jest */
import React from 'react';
import { CheckboxAddButton } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default checkbox button', () =>
  matchesMarkupAndStyle(<CheckboxAddButton />));

it('renders a checked checkbox button', () =>
  matchesMarkupAndStyle(<CheckboxAddButton checked />));

it('renders a disabled checkbox button', () =>
  matchesMarkupAndStyle(<CheckboxAddButton disabled />));
