/* eslint-env jest */
import React from 'react';

import Spinner from '../index.react';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders spinner', () =>
  matchesMarkup(<Spinner className="slds-spinner_medium" />));

it('renders delayed spinner', () =>
  matchesMarkup(
    <Spinner className="slds-spinner_delayed slds-spinner_medium" />
  ));
