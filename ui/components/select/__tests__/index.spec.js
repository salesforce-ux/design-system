/* eslint-env jest */
import React from 'react';

import { MultipleDeprecated } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a deprecated multiple selection select', () =>
  matchesMarkupAndStyle(<MultipleDeprecated />));
