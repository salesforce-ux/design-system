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
import { prefix as pf } from 'app_modules/ui/util/component';

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

// Entity Add Dropdown
const entityAddDropdown = (
  <div className={pf('popover nubbin--top')} role="dialog" style={{ position: 'absolute', left: '224px', top: '44px' }}>
    <div className={pf('popover__body')}>
      <div className={pf('form-element')}>
        <label className={pf('form-element__label')} htmlFor="text-input-01">Add Page by URL or ID</label>
        <div className={pf('form-element__control grid')}>
          <input id="text-input-01" className={pf('input')} type="text" placeholder="Placeholder Text" />
          <button className={pf('button button--brand shrink-none m-left--small')}>Add Tab</button>
        </div>
      </div>
    </div>
  </div>
);

// Context Tab
let ContextTab = props =>
  <li className={className(pf('context-bar__item context-bar__item--tab'), props.className, props.itemActive ? pf('is-active') : null)} role="presentation">
    <a href="javascript:void(0);" className={pf('context-bar__label-action')} role="tab" title={ props.title || 'tab name'}  aria-selected={ props.itemActive ? 'true' : 'false' } tabIndex={ props.itemActive ? '0' : '-1' }>
      <div className={pf('icon_container')}>
        <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="standard" symbol="case" />
        <span className={pf('assistive-text')}>Case</span>
      </div>
      <span className={pf('truncate toggle-visibility--pinned')} title={ props.title || 'tab name'}>{ props.title || 'tab name'}</span>
    </a>
    <div className={className(pf('context-bar__icon-action context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--click p-left--none p-right--none'), props.actionOverflow == 'true' ? pf('is-open') : null)}>
      <ButtonIcon
        className={pf('button--icon-container button--icon-x-small')}
        tabIndex="-1"
        symbol="chevrondown"
        aria-haspopup="true"
        assistiveText="Open tab actions menu" />
      <Menu className={pf('dropdown--right')}>
        <MenuList>
          <MenuItem>Refresh Tab</MenuItem>
          <MenuItem>Pin Tab</MenuItem>
          <MenuItem>Close Tab</MenuItem>
        </MenuList>
      </Menu>
    </div>
    <div className={pf('context-bar__icon-action col--bump-left p-left--none toggle-visibility--pinned')}>
      <ButtonIcon
        className={pf('button--icon-container button--icon-x-small')}
        tabIndex="-1"
        symbol="close"
        assistiveText="Close Tab" />
    </div>
  </li>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let ContextTabBar = props =>

  <div className={className(pf('context-bar'), props.className)}>

    <div className={pf('context-bar__primary')}>
      <div className={pf('context-bar__item context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--click no-hover')}>
        <div className={pf('context-bar__icon-action')}>
          { <WaffleIcon /> }
        </div>
        <span className={pf('context-bar__label-action context-bar__app-name')}>
          <span className={pf('truncate')}>{ props.appName || 'App Name' }</span>
        </span>
      </div>

      <div className={className(pf('context-bar__item context-bar__object-switcher context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--click'), props.objectSwitchClassName)}>
        <a href="javascript:void(0);" title="Context" className={pf('context-bar__label-action')}>
          <span className={pf('truncate')}>Object</span>
        </a>
        <div className={pf('context-bar__icon-action')}>
          <ButtonIcon
            className={pf('button--icon-container button--icon-x-small')}
            symbol="chevrondown"
            aria-haspopup="true"
            assistiveText="Open object switcher menu" />
        </div>
        <Menu className={pf('dropdown--right')}>
          <MenuList>
            <MenuItem>
              <SvgIcon className={pf('icon icon--small icon-standard-account m-right--small')} sprite="standard" symbol="account" />
              Accounts
            </MenuItem>
            <MenuItem>
              <SvgIcon className={pf('icon icon--small icon-standard-case m-right--small')} sprite="standard" symbol="case" />
              Cases
            </MenuItem>
            <MenuItem>
              <SvgIcon className={pf('icon icon--small icon-standard-work-order m-right--small')} sprite="standard" symbol="work_order" />
              Insights
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div className={className(pf('context-bar__item dropdown-trigger dropdown-trigger--click'), props.objectSwitcherActive ? pf('is-open') : null)}>
        <div className={pf('context-bar__icon-action')}>
          <ButtonIcon
            className={pf('button--icon-container button--icon-x-small')}
            symbol="add"
            assistiveText="Open object switcher menu" />
        </div>
      </div>
    </div>

    <div className={pf('context-bar__secondary')}>
      <div className={pf('context-bar__vertical-divider')}></div>
      <ul className={pf('grid')} role="tablist">
        { props.children }
      </ul>
    </div>

    { props.showTertiary ?
    <div className={pf('context-bar__tertiary col--bump-left')}>
      <ul className={pf('grid')}>
        <li className={pf('context-bar__item')}>
          <ButtonIcon
            className={pf('button--icon context-bar__icon-action')}
            symbol="side_list"
            assistiveText="Toggle split view" />
        </li>
        <li className={pf('context-bar__item')}>
          <ButtonIcon
            className={pf('button--icon context-bar__icon-action')}
            symbol="table"
            assistiveText="Toggle split view" />
        </li>
      </ul>
    </div> : null }
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
        <ContextTab title="Home" />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'pinned-tab',
    label: 'Pinned Tab',
    element:
      <ContextTabBar>
        <ContextTab title="Home" className={pf('is-pinned')} />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  },
  {
    id: 'unsaved-tab',
    label: 'Unsaved Tab',
    element:
      <ContextTabBar>
        <ContextTab title="Home" />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2" className={pf('is-unsaved')} />
      </ContextTabBar>
  },
  {
    id: 'overflow-tabs',
    label: 'Overflow Tabs',
    element:
      <ContextTabBar>
        <ContextTab title="Home" />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2" />
        <li className={pf('context-bar__item context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--click')} aria-haspopup="true">
          <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="More Tab Items">
            <span className={pf('truncate')}>More</span>
            <span className={pf('icon_container m-left--x-small')}>
              <SvgIcon className={pf('icon icon--xx-small icon-text-default')} sprite="utility" symbol="chevrondown" />
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
          <ContextTab title="Home" />
          <ContextTab title="Tab Item 1" itemActive />
          <ContextTab title="Tab Item 2" />
          <li className={pf('context-bar__item context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--click is-open')} aria-haspopup="true">
            <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="More Tab Items">
              <span className={pf('truncate')}>More</span>
              <span className={pf('icon_container m-left--x-small')}>
                <SvgIcon className={pf('icon icon--xx-small icon-text-default')} sprite="utility" symbol="chevrondown" />
              </span>
            </a>
            <Menu className={pf('dropdown--right')}>
              <MenuList>
                <MenuItem>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="standard" symbol="case" />
                  <span>Overflow Tab Item</span>
                </MenuItem>
                <MenuItem>
                  <SvgIcon className={pf('icon icon--small icon-text-default')} sprite="standard" symbol="case" />
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
      <ContextTabBar objectSwitchClassName={pf('is-active')}>
        <ContextTab title="Home" />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2"  />
      </ContextTabBar>
  },
  {
    id: 'object-switcher-menu-open',
    label: 'Object Switcher Menu - Open',
    element:
      <div className="demo-only" style={{height: '11rem'}}>
        <ContextTabBar objectSwitchClassName={pf('is-active is-open')}>
          <ContextTab title="Home" />
          <ContextTab title="Tab Item 1" itemActive />
          <ContextTab title="Tab Item 2"  />
        </ContextTabBar>
      </div>
  },
  {
    id: 'tab-item-action-menu-open',
    label: 'Tab Item - Action Overflow',
    element:
      <div className="demo-only" style={{height: '10rem'}}>
        <ContextTabBar>
          <ContextTab title="Home" />
          <ContextTab title="Tab Item 1" itemActive />
          <ContextTab title="Tab Item 2" actionOverflow="true" />
        </ContextTabBar>
      </div>
  },
  {
    id: 'tertiary',
    label: 'Tertiary actions',
    element:
      <ContextTabBar showTertiary>
        <ContextTab title="Home" />
        <ContextTab title="Tab Item 1" itemActive />
        <ContextTab title="Tab Item 2" />
      </ContextTabBar>
  }
];
