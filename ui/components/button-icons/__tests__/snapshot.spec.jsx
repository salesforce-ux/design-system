/* eslint-env jest */
import React from 'react';
import ButtonIcon from '../';
import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

// Bare
it('renders a bare button icon', () => matchesMarkupAndStyle(<ButtonIcon />));
// Container
it('renders a button icon transparent container', () =>
  matchesMarkupAndStyle(<ButtonIcon size="medium" />));
// Bordered Container
it('renders a button icon with bordered transparent container', () =>
  matchesMarkupAndStyle(<ButtonIcon theme="transparent" />));
// Bordered Container Filled
it('renders a button icon with bordered transparent container', () =>
  matchesMarkupAndStyle(<ButtonIcon theme="neutral" />));
// Brand
it('renders a button icon with bordered transparent container', () =>
  matchesMarkupAndStyle(<ButtonIcon theme="brand" />));
// Inverse
it('renders a button icon with bordered transparent container', () =>
  matchesMarkupAndStyle(<ButtonIcon theme="inverse" />));
