// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import { Menu, MenuList, MenuItem, Trigger } from '../../menus/dropdown/example';
import classNames from 'classnames';


///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let ButtonGroup = props =>
  <div className={classNames('slds-button-group', props.className)} role="group">
    {props.children}
  </div>;

export let ButtonGroupList = props =>
  <ul className={classNames('slds-button-group-list', props.className)}>
    {props.children}
  </ul>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <ButtonGroup>
    <button className="slds-button slds-button--neutral">Refresh</button>
    <button className="slds-button slds-button--neutral">Edit</button>
    <button className="slds-button slds-button--neutral">Save</button>
  </ButtonGroup>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <ButtonGroup>
        <button className="slds-button slds-button--neutral">Refresh</button>
        <button className="slds-button slds-button--neutral">Edit</button>
        <button className="slds-button slds-button--neutral" disabled>Save</button>
      </ButtonGroup>
  }
];

export let examples = [
  {
    id: 'list',
    label: 'List',
    element:
      <ButtonGroupList>
        <li>
          <button className="slds-button slds-button--neutral">Refresh</button>
        </li>
        <li>
          <button className="slds-button slds-button--neutral">Edit</button>
        </li>
        <li>
          <button className="slds-button slds-button--neutral">Save</button>
        </li>
      </ButtonGroupList>
  },
  {
    id: 'overflow',
    label: 'Overflow menu icon',
    element:
      <ButtonGroup>
        <button className="slds-button slds-button--neutral">Refresh</button>
        <button className="slds-button slds-button--neutral">Edit</button>
        <button className="slds-button slds-button--neutral">Save</button>
        <Trigger className="slds-button--last" ariaExpanded="false" />
      </ButtonGroup>
  },
  {
    id: 'button-group-more-open',
    label: 'Overflow menu icon - Open',
    element:
      <div className="demo-only" style={{ height: '8.75rem' }}>
        <ButtonGroup>
          <button className="slds-button slds-button--neutral">Refresh</button>
          <button className="slds-button slds-button--neutral">Edit</button>
          <button className="slds-button slds-button--neutral">Save</button>
          <Trigger className="slds-button--last slds-is-open">
            <Menu className="slds-dropdown--right">
              <MenuList>
                <MenuItem tabIndex="0">Overflow Item One</MenuItem>
                <MenuItem>Overflow Item Two</MenuItem>
                <MenuItem>Overflow Item Three</MenuItem>
              </MenuList>
            </Menu>
          </Trigger>
        </ButtonGroup>
      </div>
  },
  {
    id: 'button-group-icon-disabled',
    label: 'Overflow menu icon - Disabled',
    element:
      <ButtonGroup>
        <button className="slds-button slds-button--neutral">Refresh</button>
        <button className="slds-button slds-button--neutral">Edit</button>
        <button className="slds-button slds-button--neutral">Save</button>
        <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
          <ButtonIcon
            aria-haspopup="true"
            assistiveText="More Actions"
            className="slds-button--icon-border"
            disabled
            symbol="down"
            title="More Actions"
          />
        </div>
      </ButtonGroup>
  },
  {
    id: 'button-group-inverse',
    label: 'Inverse',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonGroup>
          <button className="slds-button slds-button--inverse">Refresh</button>
          <button className="slds-button slds-button--inverse">Edit</button>
          <button className="slds-button slds-button--inverse">Save</button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
            <ButtonIcon
              className="slds-button--icon-border-inverse"
              assistiveText="More Actions"
              aria-haspopup="true"
              symbol="down"
              title="More Actions"
            />
          </div>
        </ButtonGroup>
      </div>
  },
  {
    id: 'button-group-inverse-disabled',
    label: 'Inverse Disabled',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonGroup>
          <button className="slds-button slds-button--inverse">Refresh</button>
          <button className="slds-button slds-button--inverse" disabled>Edit</button>
          <button className="slds-button slds-button--inverse" >Save</button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
            <ButtonIcon
              className="slds-button--icon-border-inverse"
              assistiveText="More Actions"
              aria-haspopup="true"
              symbol="down"
              title="More Actions"
            />
          </div>
        </ButtonGroup>
      </div>
  },
  {
    id: 'button-group-icon-inverse-disabled',
    label: 'Inverse More Icon Disabled',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <ButtonGroup>
          <button className="slds-button slds-button--inverse">Refresh</button>
          <button className="slds-button slds-button--inverse">Edit</button>
          <button className="slds-button slds-button--inverse">Save</button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
            <ButtonIcon
              className="slds-button--icon-border-inverse"
              assistiveText="More Actions"
              disabled
              aria-haspopup="true"
              symbol="down"
              title="More Actions"
            />
          </div>
        </ButtonGroup>
      </div>
  },
  {
    id: 'button-group-icon',
    label: 'Icon group',
    element:
      <ButtonGroup>
        <ButtonIcon
          className="slds-button--icon-border"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button--icon-border"
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button--icon-more"
          hasDropdown={true}
          assitiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
  },
  {
    id: 'button-group-icon-selected',
    label: 'Icon group - Selected',
    element:
      <ButtonGroup>
        <ButtonIcon
          className="slds-button--icon-border slds-is-selected"
          symbol="chart"
          assistiveText="Charts"
          title="Charts"
          aria-pressed="true"
        />
        <ButtonIcon
          className="slds-button--icon-border"
          symbol="filterList"
          assistiveText="Filter List"
          title="Filter List"
          aria-pressed="false"
        />
        <ButtonIcon
          className="slds-button--icon-more"
          hasDropdown={true}
          assitiveText="More Actions"
          title="More Actions"
        />
      </ButtonGroup>
  }
];
