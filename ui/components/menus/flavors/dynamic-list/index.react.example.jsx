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
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Lookup } from 'ui/components/lookups/flavors/single/index.react.example.jsx';
import { Listbox, ListboxList, ListboxItem } from 'ui/components/picklist/flavors/base/index.react.example.jsx';
import SvgIcon from 'app_modules/ui/svg-icon';
import _ from 'lodash';

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

let MediaItem = props =>
  <span className="slds-lookup__item-action slds-media slds-media--center slds-p-around--none">
    <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
    <div className="slds-media__body">
      <div className="slds-lookup__result-text">Salesforce.com, Inc.</div>
      <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; San Francisco</span>
    </div>
  </span>;

let FavoriteItem = props =>
  <div className="slds-grid">
    <div className="slds-text-align--center">
      <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="add" />
    </div>
    <div className="slds-text-align--center">
      Favorite this page
    </div>
  </div>;

let EditItem = props =>
  <div className="slds-grid">
    <div className="slds-text-align--center">
      <SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="edit" />
    </div>
    <div className="slds-text-align--center">Edit Favorites</div>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'dynamic-list-0-items',
    label: '0 items',
    element:
      <div className="slds-popover slds-nubbin--top-right" role="dialog">
        <div className="slds-popover__body slds-p-around--none">
          <ListboxList header>
            <ListboxItem headerText="Favorites" className="slds-text-title--caps slds-p-top--x-small">Favorites</ListboxItem>
            <ListboxItem>You can favorite any page!</ListboxItem>
          </ListboxList>
        </div>
        <footer className="slds-popover__footer slds-p-horizontal--none slds-shrink-none">
          <ListboxList>
            <ListboxItem>
              <FavoriteItem />
            </ListboxItem>
            <ListboxItem>
              <EditItem />
            </ListboxItem>
          </ListboxList>
        </footer>
      </div>
  },
  {
    id: 'dynamic-list-1-item',
    label: '1 item',
    element:
      <div className="slds-popover slds-nubbin--top-right" role="dialog">
        <div className="slds-popover__body slds-p-around--none">
          <MenuList>
            <MenuItem className="slds-dropdown__header slds-text-title--caps slds-p-bottom--xxx-small slds-p-horizontal--none" role="separator">
              Favorites
            </MenuItem>
            <MenuItem>
              <MediaItem />
            </MenuItem>
            <li className="slds-has-divider--top" role="separator"></li>
            <MenuItem>
              <FavoriteItem />
            </MenuItem>
            <MenuItem>
              <EditItem />
            </MenuItem>
          </MenuList>
        </div>
      </div>
  },
  {
    id: 'dynamic-list-less-than-10-items',
    label: '< 10 items',
    element:
      <div className="slds-popover slds-nubbin--top-right" role="dialog">
        <div className="slds-popover__body slds-p-around--none">
          <MenuList>
            <MenuItem className="slds-dropdown__header slds-text-title--caps slds-p-bottom--xxx-small slds-p-horizontal--none" role="separator">
              Favorites
            </MenuItem>
            { _.times(7, i =>
              <MenuItem>
                <MediaItem />
              </MenuItem>
            )}
            <li className="slds-has-divider--top" role="separator"></li>
            <MenuItem>
              <FavoriteItem />
            </MenuItem>
            <MenuItem>
              <EditItem />
            </MenuItem>
          </MenuList>
        </div>
      </div>
  },
  {
    id: 'dynamic-list-10-plus-items',
    label: '> 10 items',
    element:
      <div className="slds-popover slds-nubbin--top-right" role="dialog">
        <div className="slds-popover__body slds-p-around--none">
          <ListboxList header className="slds-dropdown--length-10">
            <ListboxItem headerText="Favorites" className="slds-text-title--caps slds-p-top--x-small">Favorites</ListboxItem>
            { _.times(11, i =>
              <ListboxItem>
                <MediaItem />
              </ListboxItem>
            )}
          </ListboxList>
        </div>
        <footer className="slds-popover__footer slds-p-horizontal--none slds-shrink-none">
          <ListboxList>
            <ListboxItem>
              <FavoriteItem />
            </ListboxItem>
            <ListboxItem>
              <EditItem />
            </ListboxItem>
          </ListboxList>
        </footer>
      </div>
  }
];