/* eslint-env jest */
import React from 'react';
import { CheckboxAddButton } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a default checkbox button', () =>
  matchesMarkup(<CheckboxAddButton />));

it('renders a checked checkbox button', () =>
  matchesMarkup(<CheckboxAddButton checked />));

it('renders a disabled checkbox button', () =>
  matchesMarkup(<CheckboxAddButton disabled />));

it('renders a checked and disabled checkbox button', () =>
  matchesMarkup(<CheckboxAddButton checked disabled />));
