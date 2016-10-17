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

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

const SetupDropdown = (
  <Menu className="slds-dropdown--right slds-nubbin--top-right">
    <MenuList>
      <li className="slds-dropdown__header" role="separator">
        <span className="slds-text-title--caps">Setup</span>
      </li>
      <MenuItem tabIndex="0">Setup Home</MenuItem>
    </MenuList>
  </Menu>
);

const ActionsDropdown = (
  <Menu className="slds-dropdown--right slds-nubbin--top-right">
    <MenuList>
      <li className="slds-dropdown__header" role="separator">
        <span className="slds-text-title--caps">Create</span>
      </li>
      <MenuItem tabIndex="0"><SvgIcon className="slds-icon slds-icon--small slds-icon-standard-note slds-m-right--x-small" sprite="standard" symbol="note" /> New Note</MenuItem>
      <MenuItem><SvgIcon className="slds-icon slds-icon--small slds-icon-standard-log-a-call slds-m-right--x-small" sprite="standard" symbol="log_a_call" /> Log a Call</MenuItem>
      <MenuItem><SvgIcon className="slds-icon slds-icon--small slds-icon-standard-event slds-m-right--x-small" sprite="standard" symbol="event" /> New Event</MenuItem>
    </MenuList>
  </Menu>
);

let ButtonIcon = props =>
  <button className={className('slds-button', props.className)} disabled={props.disabled} aria-haspopup={props.hasPopup} title={ props.assistiveText }>
    <SvgIcon className={className('slds-button__icon', props.iconClassName)} sprite="utility" symbol={ props.symbol } />
    <span className="slds-assistive-text">{ props.assistiveText }</span>
  </button>;

export let GlobalHeader = props =>
  <header className={className('slds-global-header_container', props.className)}>
    <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text--focus">Skip to Navigation</a>
    <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text--focus">Skip to Main Content</a>
    <div className="slds-global-header slds-grid slds-grid--align-spread">
      <div className="slds-global-header__item">
        <div className="slds-global-header__logo">
          <img src="/assets/images/logo-noname.svg" alt="" />
        </div>
      </div>
      <div className="slds-global-header__item slds-global-header__item--search">
        <div className={className('slds-form-element slds-lookup', props.autocomplete ? 'slds-is-open': null)}>
          <label className="slds-assistive-text" htmlFor="global-search-01">Search Salesforce</label>
          { props.autocomplete ?
            props.children
            : <div className="slds-form-element__control lookup__search-control slds-input-has-icon slds-input-has-icon--left">
                <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
                <input id="global-search-01" className="slds-input slds-lookup__search-input" type="search" placeholder="Search Salesforce" />
              </div> }
        </div>
      </div>
      <ul className="slds-global-header__item slds-grid slds-grid--vertical-align-center">
        <li className={className('slds-dropdown-trigger slds-dropdown-trigger--click slds-p-around--xx-small', props.actions ? 'slds-is-open': null)}>
          <ButtonIcon
            className="slds-button--icon slds-button--icon-small slds-button--icon-container slds-global-header__button--icon-actions"
            iconClassName="slds-global-header__icon-actions"
            hasPopup
            symbol="add"
            assistiveText="Global Actions" />
          { props.actions ? ActionsDropdown : null}
        </li>
        <li className={className('slds-dropdown-trigger slds-dropdown-trigger--click', props.help ? 'slds-is-open': null)}>
          <ButtonIcon
            className="slds-button--icon slds-button--icon-container slds-global-header__button--icon"
            iconClassName="slds-global-header__icon"
            hasPopup
            symbol="question"
            assistiveText="Help and Training" />
        </li>
        <li className={className('slds-dropdown-trigger slds-dropdown-trigger--click', props.setup ? 'slds-is-open': null)}>
          <ButtonIcon
            className="slds-button--icon slds-button--icon-container slds-global-header__button--icon"
            iconClassName="slds-global-header__icon"
            hasPopup
            symbol="setup"
            assistiveText="Setup" />
          { props.setup ? SetupDropdown : null}
        </li>
        <li className={className('slds-dropdown-trigger slds-dropdown-trigger--click', props.setup ? 'slds-is-open': null)}>
          <ButtonIcon
            className="slds-button--icon slds-button--icon-container slds-global-header__button--icon"
            iconClassName="slds-global-header__icon"
            hasPopup
            symbol="notification"
            assistiveText="Notifications" />
        </li>
        <li className={className('slds-dropdown-trigger slds-dropdown-trigger--click slds-m-left--x-small', props.setup ? 'slds-is-open': null)}>
          <button className="slds-button" title="person name" aria-haspopup="true">
            <span className="slds-avatar slds-avatar--circle slds-avatar--medium">
              <img src="/assets/images/avatar2.jpg" alt="person name" />
            </span>
          </button>
        </li>
      </ul>
    </div>
    { props.popoverMenu ? props.children : null }
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
