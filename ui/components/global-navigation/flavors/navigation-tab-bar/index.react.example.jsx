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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import className from 'classnames';
import _ from 'lodash';

{/*
  States
    - Default
    - Loading - coming after animated icons are in
    - Pinned
    - Unsaved
    - Overflow
    - Overflow - open
    - Open Menus
*/}

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

// Context Tab
let ContextTab = props =>
  <li className={className('slds-context-bar__item slds-context-bar__item--tab', props.className, props.itemActive ? 'slds-is-active' : null, props.itemUnsaved ? 'slds-is-unsaved' : null, props.pinned ? 'slds-is-pinned' : null)} role="presentation">
    <a href="javascript:void(0);" className="slds-context-bar__label-action" role="tab" title={ props.title || 'tab name'}  aria-selected={ props.itemActive ? 'true' : 'false' } tabIndex={ props.itemActive ? '0' : '-1' }>
      { props.itemUnsaved ? <abbr className="slds-unsaved-indicator" title="Tab Not Saved">*</abbr> : null }
      <div className="slds-icon_container" title={ _.startCase(props.symbol) || 'Case' }>
        <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol={ props.symbol || 'case' } />
        <span className="slds-assistive-text">{ _.startCase(props.symbol) || 'Case' }</span>
      </div>
      <span className={className('slds-truncate', props.pinned ? 'slds-assistive-text' : null)} title={ props.title || 'tab name'}>{ props.title || 'tab name'}</span>
    </a>
    <div className={className('slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-p-left--none slds-p-right--none', props.actionOverflow == 'true' ? 'slds-is-open' : null)}>
      <ButtonIcon
        className="slds-button--icon-container slds-button--icon-x-small"
        tabIndex={ props.itemActive ? '0' : '-1' }
        symbol="chevrondown"
        aria-haspopup="true"
        assistiveText={ 'Actions for ' + props.title } />
      <Menu className="slds-dropdown--right">
        <MenuList>
          <MenuItem>Refresh Tab</MenuItem>
          <MenuItem>Pin Tab</MenuItem>
          <MenuItem>Close Tab</MenuItem>
        </MenuList>
      </Menu>
    </div>
    <div className={className('slds-context-bar__icon-action slds-col--bump-left slds-p-left--none', props.pinned ? 'slds-assistive-text' : null)}>
      <ButtonIcon
        className="slds-button--icon-container slds-button--icon-x-small"
        tabIndex={ props.itemActive ? '0' : '-1' }
        symbol="close"
        assistiveText={ 'Close ' + props.title } />
    </div>
  </li>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let ContextTabBar = props =>

  <div className={className('slds-context-bar slds-context-bar--tabs', props.className)}>

    <div className="slds-context-bar__primary">
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
        <div className="slds-context-bar__icon-action">
          { <WaffleIcon /> }
        </div>
        <span className="slds-context-bar__label-action slds-context-bar__app-name">
          <span className="slds-truncate">{ props.appName || 'App Name' }</span>
        </span>
      </div>

      <div className={className('slds-context-bar__item slds-context-bar__object-switcher slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click', props.objectSwitchClassName)}>
        <a href="javascript:void(0);" title="Context" className="slds-context-bar__label-action">
          <span className="slds-truncate">Object</span>
        </a>
        <div className="slds-context-bar__icon-action">
          <ButtonIcon
            className="slds-button--icon-container slds-button--icon-x-small"
            symbol="chevrondown"
            aria-haspopup="true"
            assistiveText="Open object switcher menu" />
        </div>
        <Menu className="slds-dropdown--right">
          <MenuList>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
              Accounts
            </MenuItem>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-case slds-m-right--small" sprite="standard" symbol="case" />
              Cases
            </MenuItem>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-work-order slds-m-right--small" sprite="standard" symbol="work_order" />
              Insights
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div className={className('slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger--click', props.addTabActive ? 'slds-is-open' : null, props.addTabClassName)}>
        <div className="slds-context-bar__icon-action">
          <ButtonIcon
            className="slds-button--icon-container slds-button--icon-x-small"
            symbol="add"
            aria-haspopup="true"
            assistiveText="Open object switcher menu" />
        </div>
        { props.addTabActive ?
          <div className="slds-popover slds-nubbin--top" role="dialog" style={{ position: 'absolute', left: '1.125rem', top: '2.75rem', marginLeft: '-10rem' }}>
            <div className="slds-popover__body">
              <div className="slds-form-element">
                <label className="slds-form-element__label" htmlFor="text-input-01">Add Page by URL or ID</label>
                <div className="slds-form-element__control slds-grid">
                  <input id="text-input-01" className="slds-input" type="text" placeholder="Placeholder Text" />
                  <button className="slds-button slds-button--brand slds-shrink-none slds-m-left--small">Add Tab</button>
                </div>
              </div>
            </div>
          </div>
        : null }
      </div>
    </div>

    <div className="slds-context-bar__secondary">
      <div className="slds-context-bar__vertical-divider"></div>
      <ul className="slds-grid" role="tablist">
        { props.children }
      </ul>
    </div>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'tab-active',
    label: 'Tab - Active',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'tab-active-focus',
    label: 'Tab - Active Focus',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" />
        <ContextTab title="Tab Item 1" className="slds-has-focus" itemActive />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'tab-item-action-menu-open',
    label: 'Tab - Action Overflow',
    element:
      <div className="demo-only" style={{height: '10rem'}}>
        <ContextTabBar>
          <ContextTab title="Home" symbol="home" />
          <ContextTab title="Tab Item 1" itemActive actionOverflow="true" />
          <ContextTab title="Tab Item 2" />
        </ContextTabBar>
      </div>
  },
  {
    id: 'pinned-tab',
    label: 'Pinned Tab',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" pinned />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'pinned-tab-active',
    label: 'Pinned Tab - Active',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" pinned itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'pinned-tab-active-focus',
    label: 'Pinned Tab - Active Focus',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" className="slds-has-focus" pinned itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'unsaved-pinned-tab',
    label: 'Unsaved Pinned Tab',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" pinned itemUnsaved />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'unsaved-tab',
    label: 'Unsaved Tab',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" itemUnsaved />
      </ContextTabBar>
  },
  {
    id: 'overflow-tabs',
    label: 'Overflow Tabs',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" />
        <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="More Tab Items" aria-haspopup="true" role="button">
            <span className="slds-p-left--xx-small slds-truncate">More <span className="slds-assistive-text">Tabs</span></span>
            <span className="slds-icon_container slds-m-left--x-small">
              <SvgIcon className="slds-icon slds-icon--xx-small slds-icon-text-default" sprite="utility" symbol="chevrondown" />
            </span>
          </a>
        </li>
      </ContextTabBar>
  },
  {
    id: 'overflow-tabs-open',
    label: 'Overflow Tabs - Open',
    element:
      <div className="demo-only" style={{height: '8rem'}}>
        <ContextTabBar>
          <ContextTab title="Home" symbol="home" itemActive />
          <ContextTab title="Tab Item 1" />
          <ContextTab title="Tab Item 2" />
          <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
            <a href="javascript:void(0);" className="slds-context-bar__label-action" title="More Tab Items" aria-haspopup="true" role="button">
              <span className="slds-p-left--xx-small slds-truncate">More <span className="slds-assistive-text">Tabs</span></span>
              <span className="slds-icon_container slds-m-left--x-small">
                <SvgIcon className="slds-icon slds-icon--xx-small slds-icon-text-default" sprite="utility" symbol="chevrondown" />
              </span>
            </a>
            <Menu className="slds-dropdown--right">
              <MenuList>
                <MenuItem>
                  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
                <MenuItem>
                  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ContextTabBar>
      </div>
  },
  {
    id: 'unsaved-overflow-tabs',
    label: 'Unsaved Overflow Tabs',
    element:
      <ContextTabBar>
        <ContextTab title="Home" symbol="home" itemActive />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2" />
        <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-is-unsaved">
          <a href="javascript:void(0);" className="slds-context-bar__label-action" title="More Tab Items"  aria-haspopup="true" role="button">
            <abbr className="slds-unsaved-indicator" title="Tab(s) within menu not saved">*</abbr>
            <span className="slds-p-left--xx-small slds-truncate">More <span className="slds-assistive-text">Tabs</span></span>
            <span className="slds-icon_container slds-m-left--x-small">
              <SvgIcon className="slds-icon slds-icon--xx-small slds-icon-text-default" sprite="utility" symbol="chevrondown" />
            </span>
          </a>
        </li>
      </ContextTabBar>
  },
  {
    id: 'unsaved-overflow-tabs-open',
    label: 'Unsaved Overflow Tabs - Open',
    element:
      <div className="demo-only" style={{height: '8rem'}}>
        <ContextTabBar>
          <ContextTab title="Home" symbol="home" itemActive />
          <ContextTab title="Tab Item 1" />
          <ContextTab title="Tab Item 2" />
          <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open slds-is-unsaved">
            <a href="javascript:void(0);" className="slds-context-bar__label-action" title="More Tab Items" aria-haspopup="true" role="button">
              <abbr className="slds-unsaved-indicator" title="Tab(s) within menu not saved">*</abbr>
              <span className="slds-p-left--xx-small slds-truncate">More <span className="slds-assistive-text">Tabs</span></span>
              <span className="slds-icon_container slds-m-left--x-small">
                <SvgIcon className="slds-icon slds-icon--xx-small slds-icon-text-default" sprite="utility" symbol="chevrondown" />
              </span>
            </a>
            <Menu className="slds-dropdown--right">
              <MenuList>
                <MenuItem className="slds-is-unsaved">
                  <abbr className="slds-unsaved-indicator" title="Tab(s) within menu not saved">*</abbr>
                  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
                <MenuItem>
                  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ContextTabBar>
      </div>
  },
  {
    id: 'object-switcher-active',
    label: 'Object Switcher - Active',
    element:
      <ContextTabBar objectSwitchClassName="slds-is-active">
        <ContextTab title="Home" symbol="home" />
        <ContextTab title="Tab Item 1" />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'object-switcher-menu-open',
    label: 'Object Switcher - Open',
    element:
      <div className="demo-only" style={{height: '11rem'}}>
        <ContextTabBar objectSwitchClassName="slds-is-open">
          <ContextTab title="Home" symbol="home" />
          <ContextTab title="Tab Item 1" />
          <ContextTab title="Tab Item 2"  />
        </ContextTabBar>
      </div>
  },
  {
    id: 'add-tab-dialog-open',
    label: 'Add Tab Dialog - Open',
    element:
      <div className="demo-only" style={{height: '8rem'}}>
        <ContextTabBar addTabActive>
          <ContextTab title="Home" symbol="home" />
          <ContextTab title="Tab Item 1" />
          <ContextTab title="Tab Item 2"  />
        </ContextTabBar>
      </div>
  }
];
