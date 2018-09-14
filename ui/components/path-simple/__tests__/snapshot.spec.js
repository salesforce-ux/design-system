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

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('SimplePath', () => {
  it('renders the legacy Simple Path', () =>
    matchesMarkupAndStyle(<PathSimple />));

  it('renders the legacy Simple Path with Coaching', () =>
    matchesMarkupAndStyle(<PathSimpleCoaching />));

  it('renders the legacy Simple Path with Visible Coaching', () =>
    matchesMarkupAndStyle(<PathSimpleCoachingVisible />));

  it('renders the legacy Simple Path in a different stage', () =>
    matchesMarkupAndStyle(<PathSimpleDifferentStage />));

  it('renders the legacy Simple Path in Lost state', () =>
    matchesMarkupAndStyle(<PathSimpleLost />));

  it('renders the legacy Simple Path in Won state', () =>
    matchesMarkupAndStyle(<PathSimpleWon />));
});
