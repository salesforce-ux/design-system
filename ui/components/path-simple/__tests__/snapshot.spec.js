/* eslint-env jest */
import React from 'react';
import {
  PathSimple,
  PathSimpleCoaching,
  PathSimpleCoachingVisible,
  PathSimpleDifferentStage,
  PathSimpleLost,
  PathSimpleWon
} from '../';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('SimplePath', () => {
  it('renders the legacy Simple Path', () => matchesMarkup(<PathSimple />));

  it('renders the legacy Simple Path with Coaching', () =>
    matchesMarkup(<PathSimpleCoaching />));

  it('renders the legacy Simple Path with Visible Coaching', () =>
    matchesMarkup(<PathSimpleCoachingVisible />));

  it('renders the legacy Simple Path in a different stage', () =>
    matchesMarkup(<PathSimpleDifferentStage />));

  it('renders the legacy Simple Path in Lost state', () =>
    matchesMarkup(<PathSimpleLost />));

  it('renders the legacy Simple Path in Won state', () =>
    matchesMarkup(<PathSimpleWon />));
});
