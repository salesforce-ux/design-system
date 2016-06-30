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

// Context Item Dropdown
const contextDropdown = (
  <Menu className={pf('dropdown--right')}>
    <MenuList>
      <MenuItem>
        <SvgIcon className={pf('icon icon--x-small icon-text-default m-right--x-small')} sprite="utility" symbol="add" />
        Main action
      </MenuItem>
    </MenuList>
    <hr className={pf('m-vertical--xx-small')} role="presentation" />
    <div className={pf('dropdown__header')}>
      <span className={pf('text-title--caps')}>Menu header</span>
    </div>
    <MenuList>
      <MenuItem>Menu Item One</MenuItem>
      <MenuItem>Menu Item Two</MenuItem>
      <MenuItem>Menu Item Three</MenuItem>
    </MenuList>
  </Menu>);

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let ContextBar = props =>
<div className="demo-only" style={{height: '16rem'}}>
  <div className={className(pf('context-bar'), props.className)}>

    {/* Primary Section */}
    <div className={pf('context-bar__primary')}>

      {/* App Switcher */}
      <div className={pf('context-bar__item context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--click no-hover')}>
        <div className={pf('context-bar__icon-action')}>
          <a href="javascript:void(0);" aria-haspopup="true" className={pf('button button--icon context-bar__button')}>
            <SvgIcon className={pf('button__icon button__icon--large')} sprite="utility" symbol="apps" />
          </a>
        </div>
        {/* App Name */}
        <span className={pf('context-bar__label-action context-bar__app-name')}>
          <span className={pf('truncate')}>{ props.appName || 'App Name' }</span>
        </span>
      </div>

    </div>
    {/* End Primary */}

    {/* Secondary Section */}
    <nav className={pf('context-bar__secondary')} role="navigation">

      <ul className={pf('grid')}>
        <li className={className(pf('context-bar__item'), props.itemActive ? pf('is-active') : null)}>
          <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="Home">
            <span className={pf('truncate')}>Home</span>
          </a>
        </li>
        <li className={pf('context-bar__item context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--hover hint-parent')}>
          <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="Menu Item 1">
            <span className={pf('truncate')}>Menu Item 1</span>
          </a>
          <div className={pf('context-bar__icon-action p-left--none')}>
            <button aria-haspopup="true" className={pf('button button--icon context-bar__button')}>
              <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="down" />
              <span className={pf('assistive-text')}>Assistive text for submenu</span>
            </button>
          </div>
          { contextDropdown }
        </li>
        <li className={pf('context-bar__item')}>
          <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="Menu Item 2">
            <span className={pf('truncate')}>Menu Item 2</span>
          </a>
        </li>
        <li className={pf('context-bar__item')}>
          <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="Menu Item 3">
            <span className={pf('truncate')}>Menu Item 3</span>
          </a>
        </li>
        <li className={pf('context-bar__item')}>
          <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="Menu Item 4">
            <span className={pf('truncate')}>Menu Item 4</span>
          </a>
        </li>
      </ul>
    </nav>
    {/* End Secondary Section */}

    {/* Tertiary Section Goes Here */}
  </div>
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <ContextBar itemActive />
);
