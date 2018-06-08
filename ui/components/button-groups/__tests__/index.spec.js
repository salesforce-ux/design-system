// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { Button } from '../../buttons/base/example';
import { ButtonGroup } from '../base/example';
import ButtonIcon from '../../button-icons/';
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
      <Button isNeutral>Refresh</Button>
      <Button isNeutral>Edit</Button>
      <Button isNeutral>Save</Button>
    </ButtonGroup>
  ));

it('renders a button group with overflow open', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '8.75rem' }}>
      <ButtonGroup>
        <Button isNeutral>Refresh</Button>
        <Button isNeutral>Edit</Button>
        <Button isNeutral>Save</Button>
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

it('renders a single brand button with brand button icon dropdown', () =>
  matchesMarkupAndStyle(
    <ButtonGroup>
      <Button isBrand>Save</Button>
      <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
        <ButtonIcon
          aria-haspopup="true"
          assistiveText="More Actions"
          className="slds-button_icon-brand"
          symbol="down"
          title="More Actions"
        />
      </div>
    </ButtonGroup>
  ));
