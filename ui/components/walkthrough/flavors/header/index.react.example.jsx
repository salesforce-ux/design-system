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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import className from 'classnames';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let Header = props =>
  <div className="slds-trial-header slds-grid">
    <div className="slds-grid">
      <button className="slds-button slds-m-right--small">Take the salesforce tour</button>
      <div className={ className('slds-grid slds-dropdown-trigger slds-dropdown-trigger--click', props.tourMenuOpen ? 'slds-is-open' : null)}>
        <button className="slds-button" aria-haspopup="true">
          <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="right" />
          Choose your tour
        </button>
        <Menu className="slds-dropdown--inverse slds-dropdown--left">
          <MenuList>
            <MenuItem tabIndex="0" className="slds-is-selected">
              <SvgIcon className="slds-icon slds-icon--selected slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="check" />
              <span className="slds-assistive-text">Completed:</span> Conquer Your Cases
            </MenuItem>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--selected slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="check" />
              Automate For Speed
            </MenuItem>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--selected slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="check" />
              Share Your Knowledge
            </MenuItem>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--selected slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="check" />
              Finish it up in a Flash
            </MenuItem>
            <li className="slds-has-divider--top-space" role="separator"></li>
            <MenuItem>
              <SvgIcon className="slds-icon slds-icon--x-small slds-m-right--x-small" sprite="utility" symbol="upload" />
              Import Contacts and Accounts
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
    <div className="slds-grid slds-grid--vertical-align-center slds-col--bump-left">
      <span className="slds-box slds-box--xx-small slds-theme--default">30</span>
      <span className="slds-m-horizontal--x-small">Days left in trial</span>
      <a href="#" className="slds-button slds-button--success">Subscribe Now</a>
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
      <Header />
  },
  {
    id: 'menu-open',
    label: 'Tour Menu Open',
    element:
      <div className="demo-only" style={{ height: '240px' }}>
        <Header tourMenuOpen />
      </div>
  }
];
