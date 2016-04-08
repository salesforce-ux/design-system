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

// Object Switcher
const objectSwitcher = (
  <Menu className={pf('nubbin--top')}>
    <MenuList isSelectable={false}>
      <MenuItem>
        <SvgIcon className={pf('icon icon--small icon-standard-account m-right--small')} sprite="standard" symbol="account" />Object 1
      </MenuItem>
      <MenuItem>
        <SvgIcon className={pf('icon icon--small icon-standard-case m-right--small')} sprite="standard" symbol="case" />Object 2
      </MenuItem>
      <MenuItem>
        <SvgIcon className={pf('icon icon--small icon-standard-insights m-right--small')} sprite="standard" symbol="insights" />Object 3
      </MenuItem>
      <MenuItem>
        <SvgIcon className={pf('icon icon--small icon-standard-work-order m-right--small')} sprite="standard" symbol="work_order" />Object 4
      </MenuItem>
    </MenuList>
  </Menu>);

// Context Item Dropdown
const contextDropdown = (
  <Menu className={pf('nubbin--top')}>
    <MenuList>
      <MenuItem>
        <SvgIcon className={pf('icon icon--x-small icon-text-default m-right--x-small')} sprite="utility" symbol="add" />
        Main action
      </MenuItem>
    </MenuList>
    <hr className={pf('m-vertical--xx-small')} role="presentation" />
    <div className={pf('dropdown__header')}>
      <span className={pf('text-heading--label')}>Menu header</span>
    </div>
    <MenuList isSelectable={false}>
      <MenuItem>Menu Item One</MenuItem>
      <MenuItem>Menu Item Two</MenuItem>
      <MenuItem>Menu Item Three</MenuItem>
    </MenuList>
  </Menu>);

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
          <span className={pf('truncate')}>{ props.appName || 'App Name' }</span>
        </a>
      </div>

      {/* Object Context */}
      <div className={pf('context-bar__item context-bar__object-name col--bump-left')}>
        <div className={pf('context-bar__vertical-divider')}></div>
        <a href="#void" title="Context" className={pf('context-bar__item-action context-bar__item-action--hover truncate')}>
          <span className={pf('truncate')}>Object</span>
        </a>
      </div>

      {/* Object Context Switcher */}
      <div className={className(pf('context-bar__item context-bar__object-switcher dropdown-trigger dropdown-trigger--hover'), props.objectSwitcherActive ? pf('is-open dropdown-trigger--click') : null)}>
        {/*<div className={pf('context-bar__vertical-divider')}></div>*/}
        <button aria-haspopup="true" className={pf('context-bar__item-action context-bar__item-action--hover context-bar__item-action--button button button--icon')}>
          <SvgIcon className={pf('button__icon')} sprite="utility" symbol="down" />
          <span className={pf('assistive-text')}>Assistive text for submenu</span>
        </button>
        { props.objectSwitcherActive ? objectSwitcher : null }
      </div>

    </div>
    {/* End Primary */}

    {/* Secondary Section */}
    <nav className={pf('context-bar__secondary')} role="navigation">
      <div className={pf('context-bar__vertical-divider')}></div>

      <ul className={pf('grid')}>

        <li className={pf('context-bar__item')}>
          <a href="#void" className={pf('context-bar__item-action context-bar__item-action--hover')}>Home</a>
        </li>

        <li className={className(pf('context-bar__item dropdown-trigger dropdown-trigger--hover'), props.contextDropdownActive ? pf('is-open dropdown-trigger--click') : null)}>
          <a href="#void" className={pf('context-bar__item-action context-bar__item-action--hover')}>
            Context Menu Item 1
            <SvgIcon className={pf('context-bar__item-action--icon button__icon button__icon--small m-left--xx-small')} sprite="utility" symbol="down" />
            <span className={pf('assistive-text')}>Assistive text for submenu</span>
          </a>
          {/*<div className={pf('context-bar__action-area context-bar__action-area--right')}>
            <button aria-haspopup="true" className={pf('context-bar-action__trigger1 button button--icon-bare')}>
              <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="down" />
              <span className={pf('assistive-text')}>Assistive text for submenu</span>
            </button>
            <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="down" />
            <span className={pf('assistive-text')}>Assistive text for submenu</span>
          </div>*/}
          { props.contextDropdownActive ? contextDropdown : null }
        </li>

        <li className={pf('context-bar__item')}>
          <a href="#void" className={pf('context-bar__item-action context-bar__item-action--hover')}>
            Context Menu Item 2
            <SvgIcon className={pf('context-bar__item-action--icon button__icon button__icon--small m-left--xx-small')} sprite="utility" symbol="down" />
            <span className={pf('assistive-text')}>Assistive text for submenu</span>
          </a>
          {/*<div className={pf('context-bar__action-area context-bar__action-area--right')}>
            <button aria-haspopup="true" className={pf('context-bar-action__trigger button button--icon')}>
              <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="down" />
              <span className={pf('assistive-text')}>Assistive text for submenu</span>
            </button>
            <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="down" />
            <span className={pf('assistive-text')}>Assistive text for submenu</span>
          </div>*/}
        </li>

      </ul>
    </nav>
    {/* End Secondary Section */}

    {/* Tertiary Section */}
    <div className={pf('context-bar__tertiary col--bump-left')}>
      <ul className={pf('grid')}>
        <li className={pf('context-bar__item')}>
          <a className={pf('context-bar__item-action context-bar__item-action--hover')} href="#void">Actions</a>
        </li>
      </ul>
    </div>
  </div>
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'context-bar',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'context-bar-object-switcher',
    label: 'Object Switcher Active',
    element: <Default objectSwitcherActive />
  },
  {
    id: 'context-bar-item-dropdown',
    label: 'Context Item Dropdown Active',
    element: <Default contextDropdownActive />
  }
];
