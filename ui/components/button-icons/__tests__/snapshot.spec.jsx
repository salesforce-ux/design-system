/* eslint-env jest */
import React from 'react';
import ButtonIcon from '../';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

// Bare
describe('bare button icon', () => {
  it('renders a button icon', () => matchesMarkup(<ButtonIcon />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled />));
});

// Container
describe('button icon with container', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon size="medium" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled size="medium" />));
});

// Bordered Container
describe('button icon with bordered transparent container', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon theme="transparent" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled theme="transparent" />));
});

// Bordered Container Filled
describe('button icon with bordered filled container', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon theme="neutral" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled theme="neutral" />));
});

// Brand
describe('brand button icon', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon theme="brand" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled theme="brand" />));
});

// Inverse
describe('button icon on inversed background', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon theme="inverse" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled theme="inverse" />));
});

// Dropdown
describe('button menu icon for dropdowns', () => {
  it('renders a button menu icon', () =>
    matchesMarkup(<ButtonIcon hasDropdown theme="neutral" />));

  it('renders a button menu icon on inversed background', () =>
    matchesMarkup(
      <ButtonIcon
        className="slds-button_icon-inverse"
        hasDropdown
        theme="transparent"
      />
    ));
});
