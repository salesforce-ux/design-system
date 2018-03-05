/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import Page from '../';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('render brand band', () => {
  it('renders small brand band', () =>
    matchesMarkupAndStyle(<Page size="small" />));
  it('renders medium brand band', () =>
    matchesMarkupAndStyle(<Page size="medium" />));
  it('renders large brand band', () =>
    matchesMarkupAndStyle(<Page size="large" />));
  it('renders brand band with no image', () =>
    matchesMarkupAndStyle(<Page size="none" />));
});
