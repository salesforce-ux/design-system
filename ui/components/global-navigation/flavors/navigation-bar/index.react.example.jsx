// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { WaffleIcon } from 'ui/components/dynamic-icons/flavors/waffle/index.react.example';
import classNames from 'classnames';
import _ from 'lodash';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

// Context Item Dropdown
const contextDropdown = (
  <Menu className="slds-dropdown--right">
    <MenuList>
      <MenuItem>
        <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-m-right--x-small" sprite="utility" symbol="add" />
        Main action
      </MenuItem>
      <li className="slds-dropdown__header slds-has-divider--top-space" role="separator">
        <span className="slds-text-title--caps">Menu header</span>
      </li>
      <MenuItem>Menu Item One</MenuItem>
      <MenuItem>Menu Item Two</MenuItem>
      <MenuItem>Menu Item Three</MenuItem>
    </MenuList>
  </Menu>);

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let ContextBar = props =>

  <div className={classNames('slds-context-bar', props.className)}>

    {/* Primary Section */}
    <div className="slds-context-bar__primary slds-context-bar__item--divider-right">

      {/* App Switcher */}
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
        <div className="slds-context-bar__icon-action">
          <WaffleIcon className="slds-context-bar__button" />
        </div>
        {/* App Name */}
        <span className="slds-context-bar__label-action slds-context-bar__app-name">
          <span className="slds-truncate" title={ props.appName || 'App Name' }>{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : props.appName || 'App Name' }</span>
        </span>
      </div>

    </div>
    {/* End Primary */}

    {/* Secondary Section */}
    <nav className="slds-context-bar__secondary" role="navigation">

      <ul className="slds-grid">
        <li className="slds-context-bar__item">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Home">
            <span className="slds-truncate" title="Home">{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Home' }</span>
          </a>
        </li>
        <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--hover">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
            <span className="slds-truncate" title="Menu Item">{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Menu Item' }</span>
          </a>
          <div className="slds-context-bar__icon-action slds-p-left--none">
            <ButtonIcon
              className="slds-button--icon slds-context-bar__button"
              symbol="chevrondown"
              aria-haspopup="true"
              assistiveText="Open menu item submenu"
              title="Open menu item submenu" />
          </div>
          { !props.hideDropdown ? contextDropdown : null }
        </li>
        { !props.children ?
          _.times(3, i =>
            <li className="slds-context-bar__item" key={ i }>
              <a href="javascript:void(0);" className="slds-context-bar__label-action" title={ 'Menu Item ' + i }>
                <span className="slds-truncate" title="Menu Item">{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Menu Item ' + i }</span>
              </a>
            </li>
          ) : props.children }
      </ul>
    </nav>
    {/* End Secondary Section */}

    {/* Tertiary Section Goes Here */}
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <div className="demo-only" style={{height: '16rem'}}>
    <ContextBar itemActive />
  </div>
);

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="demo-only" style={{height: '14rem'}}>
        <ContextBar />
      </div>
  },
  {
    id: 'item-active',
    label: 'Item Active',
    element:
      <div className="demo-only" style={{height: '14rem'}}>
        <ContextBar>
          <li className="slds-context-bar__item slds-is-active">
            <a href="javascript:void(0);" className="slds-context-bar__label-action" title={ 'Menu Item'}>
              <span className="slds-assistive-text">Current Page:</span>
              <span className="slds-truncate" title="Menu Item">Menu Item</span>
            </a>
          </li>
          { _.times(2, i =>
            <li className="slds-context-bar__item" key={ i }>
              <a href="javascript:void(0);" className="slds-context-bar__label-action" title={ 'Menu Item ' + i }>
                <span className="slds-truncate" title="Menu Item">Menu Item</span>
              </a>
            </li>
          )}
        </ContextBar>
      </div>
  }
];
