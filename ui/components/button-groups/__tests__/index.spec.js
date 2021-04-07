// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { Button } from '../../buttons/base/example';
import ButtonIcon from '../../button-icons/';
import { ButtonGroup } from '../base/example';
import { ButtonGroupRow, ButtonGroupItem } from '../row/example';
import {
  Menu,
  MenuList,
  MenuItem,
  Trigger
} from '../../menus/dropdown/example';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a default button group', () =>
  matchesMarkup(
    <ButtonGroup>
      <Button isNeutral>Refresh</Button>
      <Button isNeutral>Edit</Button>
      <Button isNeutral>Save</Button>
    </ButtonGroup>
  ));

it('renders a button group with overflow open', () =>
  matchesMarkup(
    <div className="demo-only" style={{ height: '8.75rem' }}>
      <ButtonGroup>
        <Button isNeutral>Refresh</Button>
        <Button isNeutral>Edit</Button>
        <Button isNeutral>Save</Button>
        <Trigger className="slds-button_last" isOpen>
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

it('renders a row a buttons spaced out', () =>
  matchesMarkup(
    <ButtonGroupRow>
      <ButtonGroupItem>
        <Button isNeutral>Refresh</Button>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <Button isNeutral>Edit</Button>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <Button isBrand>Save</Button>
      </ButtonGroupItem>
    </ButtonGroupRow>
  ));

it('renders a row a button icons spaced out', () =>
  matchesMarkup(
    <ButtonGroupRow>
      <ButtonGroupItem>
        <div className="slds-dropdown-trigger slds-dropdown-trigger_clicked">
          <ButtonIcon
            hasDropdown
            theme="neutral"
            assistiveText="More options"
            title="More Options"
          />
        </div>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <div className="slds-dropdown-trigger slds-dropdown-trigger_clicked">
          <ButtonIcon
            hasDropdown
            theme="neutral"
            symbol="table"
            assistiveText="More options"
            title="More Options"
          />
        </div>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <ButtonIcon symbol="edit" theme="neutral" />
      </ButtonGroupItem>
      <ButtonGroupItem>
        <ButtonIcon symbol="refresh" theme="neutral" />
      </ButtonGroupItem>
      <ButtonGroupItem>
        <ButtonGroup>
          <ButtonIcon symbol="chart" theme="neutral" />
          <ButtonIcon symbol="filter" theme="neutral" />
        </ButtonGroup>
      </ButtonGroupItem>
    </ButtonGroupRow>
  ));

it('renders a single brand button with brand button icon dropdown', () =>
  matchesMarkup(
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

describe('Style Encapsulation Markup & Classes', () => {
  it('renders a encapsulated button with the `slds-button_first` class', () =>
    matchesMarkup(
      <ButtonGroup>
        <div>
          <Button isNeutral isFirst>
            First
          </Button>
        </div>
      </ButtonGroup>
    ));

  it('renders a encapsulated button with the `slds-button_middle` class', () =>
    matchesMarkup(
      <ButtonGroup>
        <div>
          <Button isNeutral isMiddle>
            Middle
          </Button>
        </div>
      </ButtonGroup>
    ));

  it('renders a encapsulated button with the `slds-button_last` class', () =>
    matchesMarkup(
      <ButtonGroup>
        <div>
          <Button isNeutral isFirst>
            Last
          </Button>
        </div>
      </ButtonGroup>
    ));
});
