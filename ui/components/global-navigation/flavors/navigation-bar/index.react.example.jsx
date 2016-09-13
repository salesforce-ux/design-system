/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import className from 'classnames';
import _ from 'lodash';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

export let WaffleIcon = props =>
  <a href="javascript:void(0);" className={className('slds-icon-waffle_container slds-context-bar__button', props.className)}>
    <div className="slds-icon-waffle">
      <div className="slds-r1"></div>
      <div className="slds-r2"></div>
      <div className="slds-r3"></div>
      <div className="slds-r4"></div>
      <div className="slds-r5"></div>
      <div className="slds-r6"></div>
      <div className="slds-r7"></div>
      <div className="slds-r8"></div>
      <div className="slds-r9"></div>
    </div>
    <span className="slds-assistive-text">Open App Launcher</span>
  </a>;

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

  <div className={className('slds-context-bar', props.className)}>

    {/* Primary Section */}
    <div className="slds-context-bar__primary slds-context-bar__item--divider-right">

      {/* App Switcher */}
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
        <div className="slds-context-bar__icon-action">
          <WaffleIcon />
        </div>
        {/* App Name */}
        <span className="slds-context-bar__label-action slds-context-bar__app-name">
          <span className="slds-truncate">{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : props.appName || 'App Name' }</span>
        </span>
      </div>

    </div>
    {/* End Primary */}

    {/* Secondary Section */}
    <nav className="slds-context-bar__secondary" role="navigation">

      <ul className="slds-grid">
        <li className="slds-context-bar__item">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Home">
            <span className="slds-truncate">{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Home' }</span>
          </a>
        </li>
        <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--hover" aria-haspopup="true">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
            <span className="slds-truncate">{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Menu Item' }</span>
          </a>
          <div className="slds-context-bar__icon-action slds-p-left--none" tabIndex="0">
            <ButtonIcon
              className="slds-button--icon slds-context-bar__button"
              symbol="chevrondown"
              tabIndex="-1"
              assistiveText="Open menu item submenu" />
          </div>
          { !props.hideDropdown ? contextDropdown : null }
        </li>
        { !props.children ?
          _.times(3, i =>
            <li className="slds-context-bar__item" key={ i }>
              <a href="javascript:void(0);" className="slds-context-bar__label-action" title={ 'Menu Item ' + i }>
                <span className="slds-truncate">{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Menu Item' }</span>
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
              <span className="slds-truncate">Menu Item</span>
            </a>
          </li>
          { _.times(2, i =>
            <li className="slds-context-bar__item" key={ i }>
              <a href="javascript:void(0);" className="slds-context-bar__label-action" title={ 'Menu Item ' + i }>
                <span className="slds-truncate">Menu Item</span>
              </a>
            </li>
          )}
        </ContextBar>
      </div>
  }
];
