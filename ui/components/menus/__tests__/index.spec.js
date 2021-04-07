// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { Submenu } from '../submenu/example';
import { BaseMenu, MenuItem } from '../dropdown/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Base Menu', () => {
  it('renders a base menu to the left', () =>
    matchesMarkup(<BaseMenu className="slds-dropdown_left" />));

  it('renders a base menu to the right', () =>
    matchesMarkup(<BaseMenu className="slds-dropdown_right" />));

  it('renders a base menu to the bottom', () =>
    matchesMarkup(<BaseMenu className="slds-dropdown_bottom" />));
});

describe('Menu with submenu', () => {
  it('renders a closed submenu', () => matchesMarkup(<Submenu parentIsOpen />));

  it('renders an open submenu', () =>
    matchesMarkup(<Submenu parentIsOpen ariaExpanded />));
});

describe('MenuItem', () => {
  it('should render a menu item', () => {
    matchesMarkup(<MenuItem>menu item</MenuItem>);
  });

  it('should render an error menu item', () => {
    matchesMarkup(<MenuItem statusLevel="error">menu item</MenuItem>);
  });

  it('should render an success menu item', () => {
    matchesMarkup(<MenuItem statusLevel="success">menu item</MenuItem>);
  });

  it('should render an warning menu item', () => {
    matchesMarkup(<MenuItem statusLevel="warning">menu item</MenuItem>);
  });
});
