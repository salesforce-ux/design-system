/* eslint-env jest */
import React from 'react';
import { CheckboxAddButtonDeprecated } from '../';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a default checkbox button', () =>
  matchesMarkup(<CheckboxAddButtonDeprecated />));

it('renders a checked checkbox button', () =>
  matchesMarkup(<CheckboxAddButtonDeprecated checked />));

it('renders a disabled checkbox button', () =>
  matchesMarkup(<CheckboxAddButtonDeprecated disabled />));

it('renders a checked and disabled checkbox button', () =>
  matchesMarkup(<CheckboxAddButtonDeprecated checked disabled />));
