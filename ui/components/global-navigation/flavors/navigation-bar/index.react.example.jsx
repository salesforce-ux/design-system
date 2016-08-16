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
import _ from 'lodash';
import { prefix as pf } from 'app_modules/ui/util/component';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

export let WaffleIcon = props =>
  <a href="javascript:void(0);" className={className(pf('icon-waffle_container context-bar__button'), props.className)}>
    <div className={pf('icon-waffle')}>
      <div className={pf('r1')}></div>
      <div className={pf('r2')}></div>
      <div className={pf('r3')}></div>
      <div className={pf('r4')}></div>
      <div className={pf('r5')}></div>
      <div className={pf('r6')}></div>
      <div className={pf('r7')}></div>
      <div className={pf('r8')}></div>
      <div className={pf('r9')}></div>
    </div>
    <span className={pf('assistive-text')}>Open App Launcher</span>
  </a>;

// Context Item Dropdown
const contextDropdown = (
  <Menu className={pf('dropdown--right')}>
    <MenuList>
      <MenuItem>
        <SvgIcon className={pf('icon icon--x-small icon-text-default m-right--x-small')} sprite="utility" symbol="add" />
        Main action
      </MenuItem>
      <li className={pf('dropdown__header has-divider--top-space')} role="separator">
        <span className={pf('text-title--caps')}>Menu header</span>
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

  <div className={className(pf('context-bar'), props.className)}>

    {/* Primary Section */}
    <div className={pf('context-bar__primary context-bar__item--divider-right')}>

      {/* App Switcher */}
      <div className={pf('context-bar__item context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--click no-hover')}>
        <div className={pf('context-bar__icon-action')}>
          <WaffleIcon />
        </div>
        {/* App Name */}
        <span className={pf('context-bar__label-action context-bar__app-name')}>
          <span className={pf('truncate')}>{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : props.appName || 'App Name' }</span>
        </span>
      </div>

    </div>
    {/* End Primary */}

    {/* Secondary Section */}
    <nav className={pf('context-bar__secondary')} role="navigation">

      <ul className={pf('grid')}>
        <li className={pf('context-bar__item')}>
          <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="Home">
            <span className={pf('truncate')}>{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Home' }</span>
          </a>
        </li>
        <li className={pf('context-bar__item context-bar__dropdown-trigger dropdown-trigger dropdown-trigger--hover hint-parent')}>
          <a href="javascript:void(0);" className={pf('context-bar__label-action')} title="Menu Item">
            <span className={pf('truncate')}>{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Menu Item' }</span>
          </a>
          <div className={pf('context-bar__icon-action p-left--none')} tabIndex="0">
            <button aria-haspopup="true" className={pf('button button--icon context-bar__button')} tabIndex="-1">
              <SvgIcon className={pf('button__icon button__icon--hint button__icon--small')} sprite="utility" symbol="chevrondown" />
              <span className={pf('assistive-text')}>Assistive text for submenu</span>
            </button>
          </div>
          { !props.hideDropdown ? contextDropdown : null }
        </li>
        { _.times(3, i =>
          <li className={pf('context-bar__item')} key={ i }>
            <a href="javascript:void(0);" className={pf('context-bar__label-action')} title={ 'Menu Item ' + i }>
              <span className={pf('truncate')}>{ props.stencil ? '🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢' : 'Menu Item' }</span>
            </a>
          </li>
        )}
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
