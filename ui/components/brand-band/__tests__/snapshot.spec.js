/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import Page from '../';
const { matchesMarkup } = createHelpers(__dirname);

describe('render brand band', () => {
  it('renders small brand band', () => matchesMarkup(<Page size="small" />));
  it('renders medium brand band', () => matchesMarkup(<Page size="medium" />));
  it('renders large brand band', () => matchesMarkup(<Page size="large" />));
  it('renders brand band with no image', () =>
    matchesMarkup(<Page size="none" />));
});
