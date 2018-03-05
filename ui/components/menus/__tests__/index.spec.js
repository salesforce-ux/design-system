// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { Submenu } from '../submenu/example';
import { BaseMenu } from '../dropdown/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Base Menu', () => {
  it('renders a base menu to the left', () =>
    matchesMarkupAndStyle(<BaseMenu className="slds-dropdown_left" />));

  it('renders a base menu to the right', () =>
    matchesMarkupAndStyle(<BaseMenu className="slds-dropdown_right" />));

  it('renders a base menu to the bottom', () =>
    matchesMarkupAndStyle(<BaseMenu className="slds-dropdown_bottom" />));
});

describe('Menu with submenu', () => {
  it('renders a closed submenu', () => matchesMarkupAndStyle(<Submenu />));

  it('renders an open submenu', () =>
    matchesMarkupAndStyle(<Submenu ariaExpanded />));
});
