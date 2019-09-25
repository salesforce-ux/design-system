/* eslint-env jest */
import React from 'react';

import Spinner from '../';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders spinner', () => matchesMarkup(<Spinner size="medium" />));

it('renders delayed spinner', () =>
  matchesMarkup(<Spinner isDelayed size="medium" />));
