/* eslint-env jest */
import React from 'react';
import ButtonIcon from '../';
import createHelpers from '../../../../jest.helpers';
import { render, mount } from 'enzyme';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

// Bare
describe('bare button icon', () => {
  it('renders a button icon', () => matchesMarkupAndStyle(<ButtonIcon />));

  it('renders a disabled button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon />));

  it('renders hint on hover', () => {
    const wrapper = mount(
      <div className="slds-hint-parent">
        <ButtonIcon iconClassName="slds-button__icon_hint" />
      </div>
    );
    return matchesMarkupAndStyle(
      wrapper
        .find('.slds-hint-parent')
        .at(0)
        .simulate('mouseEnter')
        .html()
    );
  });
});

// Container
describe('button icon with container', () => {
  it('renders a button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon size="medium" />));

  it('renders a disabled button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon size="medium" disabled />));
});

// Bordered Container
describe('button icon with bordered transparent container', () => {
  it('renders a button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon theme="transparent" />));

  it('renders a disabled button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon theme="transparent" disabled />));
});

// Bordered Container Filled
describe('button icon with bordered filled container', () => {
  it('renders a button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon theme="neutral" />));

  it('renders a disabled button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon theme="neutral" disabled />));
});

// Brand
describe('brand button icon', () => {
  it('renders a button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon theme="brand" />));

  it('renders a disabled button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon theme="brand" disabled />));
});

// Inverse
describe('button icon on inversed background', () => {
  it('renders a button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon theme="inverse" />));

  it('renders a disabled button icon', () =>
    matchesMarkupAndStyle(<ButtonIcon theme="inverse" disabled />));
});

// Dropdown
describe('button menu icon for dropdowns', () => {
  it('renders a button menu icon', () =>
    matchesMarkupAndStyle(<ButtonIcon hasDropdown theme="neutral" />));

  it('renders a button menu icon on inversed background', () =>
    matchesMarkupAndStyle(
      <ButtonIcon
        hasDropdown
        theme="transparent"
        className="slds-button_icon-inverse"
      />
    ));
});
