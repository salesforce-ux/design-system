// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Menu, MenuList, MenuItem, Trigger } from 'ui/components/menus/flavors/dropdown/index.react.example';
import classNames from 'classnames';


///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let ButtonGroup = props =>
  <div className={classNames('slds-button-group', props.className)} role="group">
    {props.children}
  </div>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-group',
    label: 'Default',
    element:
      <ButtonGroup>
        <button className="slds-button slds-button--neutral">Refresh</button>
        <button className="slds-button slds-button--neutral">Edit</button>
        <button className="slds-button slds-button--neutral">Save</button>
      </ButtonGroup>
  },
  {
    id: 'button-group-disabled',
    label: 'Default Disabled',
    element:
      <ButtonGroup>
        <button className="slds-button slds-button--neutral">Refresh</button>
        <button className="slds-button slds-button--neutral">Edit</button>
        <button className="slds-button slds-button--neutral" disabled>Save</button>
      </ButtonGroup>
  },
  {
    id: 'button-group-more',
    label: 'More Icon',
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
    label: 'More Icon Open',
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
    label: 'More Icon Disabled',
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
  }
];
