// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import {
  Menu,
  MenuList,
  MenuItem,
  Trigger
} from '../../menus/dropdown/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let ButtonGroup = props => (
  <div
    className={classNames('slds-button-group', props.className)}
    role="group"
  >
    {props.children}
  </div>
);

export let ButtonGroupList = props => (
  <ul className={classNames('slds-button-group-list', props.className)}>
    {props.children}
  </ul>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <ButtonGroup>
    <button className="slds-button slds-button_neutral">Refresh</button>
    <button className="slds-button slds-button_neutral">Edit</button>
    <button className="slds-button slds-button_neutral">Save</button>
  </ButtonGroup>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <ButtonGroup>
        <button className="slds-button slds-button_neutral">Refresh</button>
        <button className="slds-button slds-button_neutral" disabled>
          Edit
        </button>
        <button className="slds-button slds-button_neutral">Save</button>
      </ButtonGroup>
    )
  },
  {
    id: 'with-overflow',
    label: 'With Overflow Menu',
    element: (
      <ButtonGroup>
        <button className="slds-button slds-button_neutral">Refresh</button>
        <button className="slds-button slds-button_neutral">Edit</button>
        <button className="slds-button slds-button_neutral">Save</button>
        <Trigger className="slds-button_last" ariaExpanded="false" />
      </ButtonGroup>
    )
  },
  {
    id: 'with-overflow-open',
    label: 'With Overflow Menu - Open',
    element: (
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
    )
  },
  {
    id: 'with-overflow-disabled',
    label: 'With Overflow Menu - Disabled',
    element: (
      <ButtonGroup>
        <button className="slds-button slds-button_neutral">Refresh</button>
        <button className="slds-button slds-button_neutral">Edit</button>
        <button className="slds-button slds-button_neutral">Save</button>
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
          <ButtonIcon
            aria-haspopup="true"
            assistiveText="More Actions"
            className="slds-button_icon-border-filled"
            disabled
            symbol="down"
            title="More Actions"
          />
        </div>
      </ButtonGroup>
    )
  }
];

export let examples = [
  {
    id: 'inverse',
    label: 'Inverse',
    element: (
      <div
        className="demo-only"
        style={{ padding: '0.5rem', background: '#16325c' }}
      >
        <ButtonGroup>
          <button className="slds-button slds-button_inverse">Refresh</button>
          <button className="slds-button slds-button_inverse">Edit</button>
          <button className="slds-button slds-button_inverse">Save</button>
        </ButtonGroup>
      </div>
    )
  },
  {
    id: 'inverse-disabled',
    label: 'Inverse - Disabled',
    element: (
      <div
        className="demo-only"
        style={{ padding: '0.5rem', background: '#16325c' }}
      >
        <ButtonGroup>
          <button className="slds-button slds-button_inverse">Refresh</button>
          <button className="slds-button slds-button_inverse" disabled>
            Edit
          </button>
          <button className="slds-button slds-button_inverse">Save</button>
        </ButtonGroup>
      </div>
    )
  },
  {
    id: 'inverse-overflow',
    label: 'Inverse - With Overflow Menu',
    element: (
      <div
        className="demo-only"
        style={{ padding: '0.5rem', background: '#16325c' }}
      >
        <ButtonGroup>
          <button className="slds-button slds-button_inverse">Refresh</button>
          <button className="slds-button slds-button_inverse">Edit</button>
          <button className="slds-button slds-button_inverse">Save</button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
            <ButtonIcon
              className="slds-button_icon-border-inverse"
              assistiveText="More Actions"
              aria-haspopup="true"
              symbol="down"
              title="More Actions"
            />
          </div>
        </ButtonGroup>
      </div>
    )
  },
  {
    id: 'inverse-overflow-disabled',
    label: 'Inverse - With Overflow Menu - Disabled',
    element: (
      <div
        className="demo-only"
        style={{ padding: '0.5rem', background: '#16325c' }}
      >
        <ButtonGroup>
          <button className="slds-button slds-button_inverse">Refresh</button>
          <button className="slds-button slds-button_inverse">Edit</button>
          <button className="slds-button slds-button_inverse">Save</button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
            <ButtonIcon
              className="slds-button_icon-border-inverse"
              assistiveText="More Actions"
              disabled
              aria-haspopup="true"
              symbol="down"
              title="More Actions"
            />
          </div>
        </ButtonGroup>
      </div>
    )
  },
  {
    id: 'button-group-icon',
    label: 'Button Icon Group',
    element: (
      <ButtonGroup>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-more"
          hasDropdown
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    )
  },
  {
    id: 'button-group-icon-disabled',
    label: 'Button Icon Group - Disabled',
    element: (
      <ButtonGroup>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-border-filled"
          disabled
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-more"
          hasDropdown
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    )
  },
  {
    id: 'button-group-icon-selected',
    label: 'Button Icon Group - Selected',
    element: (
      <ButtonGroup>
        <ButtonIcon
          className="slds-button_icon-border-filled slds-is-selected"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="true"
        />
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button_icon-more"
          hasDropdown
          assistiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
    )
  }
];
