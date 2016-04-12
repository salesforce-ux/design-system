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
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

// Entity Add Dropdown
const entityAddDropdown = (
  <div className={pf('popover nubbin--top')} role="dialog" style={{ position: 'absolute', left: '267px', top: '44px' }}>
  <div className={pf('popover__body')}>
    <div className={pf('form-element')}>
      <label className={pf('form-element__label')} htmlFor="text-input-01">Add Page by URL or ID</label>
      <div className={pf('form-element__control grid')}>
        <input id="text-input-01" className={pf('input')} type="text" placeholder="Placeholder Text" />
        <button className={pf('button button--brand shrink-none m-left--small')}>Add Tab</button>
      </div>
    </div>
  </div>
</div>);

// Context Tab
let ContextTab = props =>
  <li className={className(pf('context-bar__item context-bar__tab-item'), props.className)} role="presentation">
    <a href="#void" className={pf('context-bar__item-action context-bar__tab-item-action')} role="tab" title={ props.title || 'tab name'} tabIndex={ props.tabIndex || '-1' }>{ props.title || 'tab name'}</a>
    <div className={className(pf('context-bar__action-area context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--hover'), props.contextDropdownActive ? pf('is-open') : null)}>
      <button aria-haspopup="true" className={pf('context-bar__tab-menu-trigger button button--icon button--icon-xx-small')}>
        <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="down" />
        <span className={pf('assistive-text')}>Assistive text for submenu</span>
      </button>
      <Menu className={pf('dropdown--left')}>
        <MenuList>
          <MenuItem>Refresh Tab</MenuItem>
          <MenuItem>Pin Tab</MenuItem>
          <MenuItem>Close Tab</MenuItem>
        </MenuList>
      </Menu>
    </div>
    <div className={pf('context-bar__action-area context-bar__action-area--right')}>
      <button className={pf('context-bar__tab-close button button--icon')}>
        <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="close" />
        <span className={pf('assistive-text')}>Close Tab</span>
      </button>
    </div>
  </li>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let Default = props =>
<div className="demo-only" style={{height: '16rem'}}>
  <div className={className(pf('context-bar'), props.className)}>
    <div className={pf('context-bar__shadow')}></div>

    {/* Primary Section */}
    <div className={pf('context-bar__primary')}>

      {/* App Switcher */}
      <div className={pf('context-bar__item context-bar__app-switcher')}>
        <a role="button" href="#void" aria-haspopup="true" className={pf('context-bar__item-action context-bar__item-action--button button button--icon')}>
          <SvgIcon className={pf('button__icon button__icon--large')} sprite="utility" symbol="apps" />
        </a>
      </div>

      {/* App Name */}
      <div className={pf('context-bar__item context-bar__app-name')}>
        <a href="#void" className={pf('context-bar__item-action')}>
          <span className={pf('truncate')}>{ props.appName || 'Service Console' }</span>
        </a>
      </div>

      {/* Object Context */}
      <div className={pf('context-bar__item context-bar__item--hover context-bar__object-name col--bump-left')}>
        <div className={pf('context-bar__vertical-divider')}></div>
        <a href="#void" title="Context" className={pf('context-bar__item-action context-bar__item-action--hover truncate')}>
          <span className={pf('truncate')}>Accounts</span>
        </a>
      </div>

      {/* Object Context Switcher */}
      <div className={pf('context-bar__item context-bar__item--hover context-bar__object-switcher context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--hover')}>
        {/*<div className={pf('context-bar__vertical-divider')}></div>*/}
        <button aria-haspopup="true" className={pf('context-bar__item-action context-bar__item-action--hover context-bar__item-action--button button button--icon')}>
          <SvgIcon className={pf('button__icon')} sprite="utility" symbol="down" />
          <span className={pf('assistive-text')}>Assistive text for submenu</span>
        </button>
        <Menu className={pf('dropdown--right')}>
          <MenuList>
            <MenuItem><SvgIcon className={pf('icon icon--small icon-standard-account m-right--small')} sprite="standard" symbol="account" />Accounts</MenuItem>
            <MenuItem><SvgIcon className={pf('icon icon--small icon-standard-case m-right--small')} sprite="standard" symbol="case" />Cases</MenuItem>
            <MenuItem><SvgIcon className={pf('icon icon--small icon-standard-insights m-right--small')} sprite="standard" symbol="insights" />Work Order</MenuItem>
            <MenuItem><SvgIcon className={pf('icon icon--small icon-standard-work-order m-right--small')} sprite="standard" symbol="work_order" />Insights</MenuItem>
          </MenuList>
        </Menu>
      </div>

      {/* Entity Add */}
      <div className={className(pf('context-bar__item context-bar__item--hover context-bar__object-switcher dropdown-trigger dropdown-trigger--click'), props.objectSwitcherActive ? pf('is-open') : null)}>
        <div className={pf('context-bar__vertical-divider')}></div>
        <button aria-haspopup="true" className={pf('context-bar__item-action context-bar__item-action--hover context-bar__item-action--button button button--icon')}>
          <SvgIcon className={pf('button__icon')} sprite="utility" symbol="add" />
          <span className={pf('assistive-text')}>Assistive text for submenu</span>
        </button>
      </div>

    </div>
    {/* End Primary */}

    {/* Secondary Section */}
    <div className={pf('context-bar__secondary')}>
      <div className={pf('context-bar__vertical-divider')}></div>
      <ul className={pf('grid')} role="tablist">
        <ContextTab title="Home" />
        <ContextTab title="Acme Inc." />
      </ul>
    </div>
    {/* End Secondary Section */}

    {/* Tertiary Section */}
    <div className={pf('context-bar__tertiary col--bump-left')}>
      <ul className={pf('grid')}>
        <li className={pf('context-bar__item context-bar__item--hover')}>
          <a className={pf('context-bar__item-action')} href="#void">Actions</a>
        </li>
      </ul>
    </div>
  </div>
  { props.entityAddActive ? entityAddDropdown : null }
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'context-bar',
    label: 'Default',
    element: <Default className={pf('context-bar--theme-service')} />
  },
  {
    id: 'context-bar-custom-entity',
    label: 'Custom Entity Active',
    element: <Default className={pf('context-bar--theme-service')} entityAddActive />
  }
];
