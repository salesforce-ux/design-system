/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Trigger } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Menu } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { MenuList } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Lookup } from 'ui/components/lookups/flavors/single/index.react.example.jsx';
import SvgIcon from 'app_modules/ui/svg-icon';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let LookupTest = props =>
  <div className="slds-popover slds-nubbin--left" role="dialog">
    <div className="slds-popover__body slds-scrollable--y" style={{ height: '200px' }}>
      <Lookup showLookupDropdown typeahead />
    </div>
    <footer className="slds-popover__footer slds-shrink-none">
      <p>Footer Item</p>
    </footer>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'dynamic-list-0-items',
    label: '0 items',
    element:
      <div className="slds-popover slds-nubbin--left" role="dialog">
        <div className="slds-popover__body">
          <MenuList>
            <li className="slds-dropdown__header" role="separator">
              <span className="slds-text-title--caps">Favorites</span>
            </li>
            <li className="slds-p-around--small">
              <p>You can favorite any page that you care about, and it will be accessible whenever you need it.</p>
            </li>
          </MenuList>
        </div>
        <footer className="slds-popover__footer slds-shrink-none">
          <MenuList>
            <MenuItem>
              <div className="slds-grid">
                <div>
                  <div className="slds-text-align--center">
                    <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="add" />
                  </div>
                </div>
                <div>
                  <div className="slds-text-align--center">
                    Favorite this page
                  </div>
                </div>
              </div>
            </MenuItem>
          </MenuList>
        </footer>
      </div>
  },
  {
    id: 'dynamic-list-10-plus-items',
    label: '> 10 items',
    element:
      <p>soon</p>
  }
];