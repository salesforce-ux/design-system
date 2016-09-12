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
import { WaffleIcon } from 'ui/components/global-navigation/flavors/navigation-bar/index.react.example';
import className from 'classnames';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

// Entity Add Dropdown
const entityAddDropdown = (
  <div className="slds-popover slds-nubbin--top" role="dialog" style={{ position: 'absolute', left: '224px', top: '44px' }}>
  <div className="slds-popover__body">
    <div className="slds-form-element">
      <label className="slds-form-element__label" htmlFor="text-input-01">Add Page by URL or ID</label>
      <div className="slds-form-element__control slds-grid">
        <input id="text-input-01" className="slds-input" type="text" placeholder="Placeholder Text" />
        <button className="slds-button slds-button--brand slds-shrink-none slds-m-left--small">Add Tab</button>
      </div>
    </div>
  </div>
</div>);

// Context Tab
let ContextTab = props =>
  <li className={className('slds-context-bar__item slds-context-bar__item--tab', props.className, props.itemActive ? 'slds-is-active' : null)} role="presentation">
    <a href="javascript:void(0);" className="slds-context-bar__label-action" role="tab" title={ props.title || 'tab name'}>
      <div className="slds-icon_container">
        <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
        <span className="slds-assistive-text">Case</span>
      </div>
      <span className="slds-truncate" title={ props.title || 'tab name'}>{ props.title || 'tab name'}</span>
    </a>
    <div className={className('slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--hover slds-hint-parent slds-p-left--none', props.contextDropdownActive ? 'slds-is-open' : null)}>
      <button aria-haspopup="true" className="slds-button slds-button--icon-container slds-button--icon-x-small">
        <SvgIcon className="slds-button__icon slds-button__icon--hint" sprite="utility" symbol="chevrondown" />
        <span className="slds-assistive-text">Assistive text for submenu</span>
      </button>
      <Menu className="slds-dropdown--right">
        <MenuList>
          <MenuItem>Refresh Tab</MenuItem>
          <MenuItem>Pin Tab</MenuItem>
          <MenuItem>Close Tab</MenuItem>
        </MenuList>
      </Menu>
    </div>
    <div className="slds-context-bar__icon-action slds-hint-parent slds-col--bump-left">
      <button className="slds-button slds-button--icon slds-button--icon-x-small">
        <SvgIcon className="slds-button__icon slds-button__icon--hint" sprite="utility" symbol="close" />
        <span className="slds-assistive-text">Close Tab</span>
      </button>
    </div>
  </li>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let ContextTabBar = props =>
<div className="demo-only" style={{height: '16rem'}}>
  <div className={className('slds-context-bar', props.className)}>

    {/* Primary Section */}
    <div className="slds-context-bar__primary">

      {/* App Switcher */}
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
        <div className="slds-context-bar__icon-action">
          { <WaffleIcon /> }
        </div>

        {/* App Name */}
        <span className="slds-context-bar__label-action slds-context-bar__app-name">
          <span className="slds-truncate">{ props.appName || 'App Name' }</span>
        </span>
      </div>

      {/* Object Context Switcher */}
      <div className="slds-context-bar__vertical-divider"></div>
      <div className="slds-context-bar__item slds-context-bar__object-switcher slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--hover slds-hint-parent">
        <a href="javascript:void(0);" title="Context" className="slds-context-bar__label-action slds-truncate">
          <span className="slds-truncate">Object</span>
        </a>
        <div className="slds-context-bar__icon-action">
          <button aria-haspopup="true" className="slds-button slds-button--icon-container slds-button--icon-x-small">
            <SvgIcon className="slds-button__icon slds-button__icon--hint" sprite="utility" symbol="chevrondown" />
            <span className="slds-assistive-text">Assistive text for submenu</span>
          </button>
        </div>
        <Menu className="slds-dropdown--right">
          <MenuList>
            <MenuItem><SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />Accounts</MenuItem>
            <MenuItem><SvgIcon className="slds-icon slds-icon--small slds-icon-standard-case slds-m-right--small" sprite="standard" symbol="case" />Cases</MenuItem>
            <MenuItem><SvgIcon className="slds-icon slds-icon--small slds-icon-standard-insights slds-m-right--small" sprite="standard" symbol="insights" />Work Order</MenuItem>
            <MenuItem><SvgIcon className="slds-icon slds-icon--small slds-icon-standard-work-order slds-m-right--small" sprite="standard" symbol="work_order" />Insights</MenuItem>
          </MenuList>
        </Menu>
      </div>

      {/* Entity Add */}
      <div className={className('slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger--click', props.objectSwitcherActive ? 'slds-is-open' : null)}>
        <div className="slds-context-bar__vertical-divider"></div>
        <button aria-haspopup="true" className="slds-context-bar__icon-action slds-button slds-button--icon slds-context-bar__button">
          <SvgIcon className="slds-button__icon" sprite="utility" symbol="add" />
          <span className="slds-assistive-text">Assistive text for submenu</span>
        </button>
      </div>

    </div>
    {/* End Primary */}

    {/* Secondary Section */}
    <div className="slds-context-bar__secondary">
      <div className="slds-context-bar__vertical-divider"></div>
      <ul className="slds-grid" role="tablist">
        { props.children }
      </ul>
    </div>
    {/* End Secondary Section */}

    {/* Tertiary Section */}
    <div className="slds-context-bar__tertiary slds-col--bump-left">
      <ul className="slds-grid">
        <li className="slds-context-bar__item">
          <a className="slds-context-bar__label-action" href="javascript:void(0);">Actions</a>
        </li>
      </ul>
    </div>
  </div>
  { props.entityAddActive ? entityAddDropdown : null }
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <ContextTabBar className="context-bar--theme-service">
    <ContextTab title="Home" itemActive />
    <ContextTab title="Tab Item 1"  />
  </ContextTabBar>
);
