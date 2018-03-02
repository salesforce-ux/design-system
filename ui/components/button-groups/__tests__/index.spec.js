// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { ButtonGroup } from '../base/example';
import {
  Menu,
  MenuList,
  MenuItem,
  Trigger
} from '../../menus/dropdown/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default button group', () =>
  matchesMarkupAndStyle(
    <ButtonGroup>
      <button className="slds-button slds-button_neutral">Refresh</button>
      <button className="slds-button slds-button_neutral">Edit</button>
      <button className="slds-button slds-button_neutral">Save</button>
    </ButtonGroup>
  ));

it('renders a button group with overflow open', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '8.75rem' }}>
      <ButtonGroup>
        <button className="slds-button slds-button_neutral">Refresh</button>
        <button className="slds-button slds-button_neutral">Edit</button>
        <button className="slds-button slds-button_neutral">Save</button>
        <Trigger className="slds-button_last slds-is-open">
          <Menu className="slds-dropdown_right slds-dropdown_actions">
            <MenuList>
              <MenuItem tabIndex="0">Overflow Item One</MenuItem>
              <MenuItem>Overflow Item Two</MenuItem>
              <MenuItem>Overflow Item Three</MenuItem>
            </MenuList>
          </Menu>
        </Trigger>
      </ButtonGroup>
    </div>
  ));
