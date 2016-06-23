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

const SetupDropdown = (
  <Menu className={pf('dropdown--right nubbin--top-right')}>
    <MenuList>
      <div className={pf('dropdown__header')}>
        <span className={pf('text-title--caps')}>Setup</span>
      </div>
      <MenuItem>Setup Home</MenuItem>
    </MenuList>
  </Menu>
);

const ActionsDropdown = (
  <Menu className={pf('dropdown--right nubbin--top-right')}>
    <MenuList>
      <li className={pf('dropdown__header')} role="separator">
        <span className={pf('text-title--caps')}>Create</span>
      </li>
      <MenuItem tabIndex="0"><SvgIcon className={pf('icon icon--small icon-standard-note m-right--x-small')} sprite="standard" symbol="note" /> New Note</MenuItem>
      <MenuItem><SvgIcon className={pf('icon icon--small icon-standard-log-a-call m-right--x-small')} sprite="standard" symbol="log_a_call" /> Log a Call</MenuItem>
      <MenuItem><SvgIcon className={pf('icon icon--small icon-standard-event m-right--x-small')} sprite="standard" symbol="event" /> New Event</MenuItem>
    </MenuList>
  </Menu>
);

let ButtonIcon = props =>
  <button className={className(pf('button'), props.className)} disabled={props.disabled} aria-haspopup={props.hasPopup}>
    <SvgIcon className={className(pf('button__icon'), props.iconClassName)} sprite="utility" symbol={ props.symbol } />
    <span className={pf('assistive-text')}>{ props.assistiveText }</span>
  </button>;

let GlobalHeader = props =>
  <header className={pf('global-header_container')}>
    <a href="javascript:void(0);" className={pf('assistive-text')}>Skip to Navigation</a>
    <a href="javascript:void(0);" className={pf('assistive-text')}>Skip to Main Content</a>
    <div className={pf('global-header grid grid--align-spread')}>
      <div className={pf('global-header__item')}>
        <div className={pf('global-header__logo')}>
          <img src="/assets/images/logo.svg" alt="Salesforce.com" />
        </div>
      </div>
      <div className={pf('global-header__item global-header__item--search')}>
        <div className={className(pf('form-element lookup'), props.autocomplete ? pf('is-open'): null)}>
          <label className={pf('assistive-text')} htmlFor="global-search">Search Salesforce</label>
          <div className={pf('form-element__control lookup__search-control input-has-icon input-has-icon--left')}>
            <SvgIcon className={pf('input__icon')} sprite="utility" symbol="search" />
            <input id="global-search" className={pf('input lookup__search-input')} type="search" placeholder="Search Salesforce" />
          </div>
        </div>
      </div>
      <ul className={pf('global-header__item grid grid--vertical-align-center')}>
        <li className={className(pf('dropdown-trigger dropdown-trigger--click'), props.actions ? pf('is-open'): null)}>
          <ButtonIcon className={pf('button--icon-container')} hasPopup symbol="add" assistiveText="Global Actions" />
          { props.actions ? ActionsDropdown : null}
        </li>
        <li className={className(pf('dropdown-trigger dropdown-trigger--click'), props.help ? pf('is-open'): null)}>
          <ButtonIcon className={pf('button--icon-container')} hasPopup symbol="question" assistiveText="Help and Training" />
        </li>
        <li className={className(pf('dropdown-trigger dropdown-trigger--click'), props.setup ? pf('is-open'): null)}>
          <ButtonIcon className={pf('button--icon-container')} hasPopup symbol="settings" assistiveText="Setup" />
          { props.setup ? SetupDropdown : null}
        </li>
        <li className={className(pf('dropdown-trigger dropdown-trigger--click m-left--x-small'), props.setup ? pf('is-open'): null)}>
          <a href="javascript:void(0);" title="View Title">
            <span className={pf('avatar avatar--circle avatar--x-small')}>
              <img src="/assets/images/avatar2.jpg" alt="person name" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </header>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'global-header',
    label: 'Default',
    element:
      <div className="demo-only" style={{ height: '60px' }}>
        <GlobalHeader />
      </div>
  },
  {
    id: 'global-header-actions-active',
    label: 'Global actions active',
    element:
      <div className="demo-only" style={{ height: '190px' }}>
        <GlobalHeader actions />
      </div>
  },
  {
    id: 'global-header-setup-active',
    label: 'Setup active',
    element:
      <div className="demo-only" style={{ height: '190px' }}>
        <GlobalHeader setup />
      </div>
  }
];
