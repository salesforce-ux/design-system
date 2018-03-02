/* eslint-env jest */
import React from 'react';

import Spinner from '../index.react';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders spinner', () =>
  matchesMarkupAndStyle(<Spinner className="slds-spinner_medium" />));

it('renders delayed spinner', () =>
  matchesMarkupAndStyle(
    <Spinner className="slds-spinner_delayed slds-spinner_medium" />
  ));
