/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Listbox, ListboxList, ListboxItem } from 'ui/components/picklist/flavors/base/index.react.example';
import { Popover } from 'ui/components/popovers/flavors/base/index.react.example';
import { FormElement } from 'ui/components/form-layout/flavors/element/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Footer = props =>
  <ul>
    <li>
      <button className="slds-button slds-lookup__item-action slds-lookup__item-action--label">
        <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="add" />
        Favorite this page
      </button>
    </li>
    <li>
      <button className="slds-button slds-lookup__item-action slds-lookup__item-action--label">
        <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="edit" />
        Edit Favorites
      </button>
    </li>
  </ul>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: '0-items',
    label: '0 items',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-around--medium"
        footerClassName="slds-p-horizontal--none"
        footer={ <Footer /> }
      >
        <h3 className="slds-text-title--caps slds-m-bottom--x-small" role="presentation">My Favorites</h3>
        <p>You can favorite any page!</p>
      </Popover>
  },
  {
    id: '1-item',
    label: '1 item',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-vertical--xx-small slds-p-horizontal--none"
        footerClassName="slds-p-horizontal--none"
        footer={ <Footer /> }
      >
        <Listbox className="slds-dropdown--length-10">
          <ListboxList role="group" aria-label="My Favorites">
            <ListboxItem role="presentation" headerText="My Favorites" />
            <ListboxItem tabIndex="0">
              <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
              <span className="slds-media__body">
                <span className="slds-lookup__result-text">Salesforce.com, Inc.</span>
                <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; San Francisco</span>
              </span>
            </ListboxItem>
          </ListboxList>
        </Listbox>
      </Popover>
  },
  {
    id: 'less-than-10-items',
    label: '< 10 items',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-vertical--xx-small slds-p-horizontal--none"
        footerClassName="slds-p-horizontal--none"
        footer={ <Footer /> }
      >
        <Listbox className="slds-dropdown--length-10">
          <ListboxList role="group" aria-label="My Favorites">
            <ListboxItem role="presentation" headerText="My Favorites" />
            { _.times(7, i =>
              <ListboxItem tabIndex={ (i===0) ? '0' : null } key={`listbox-${i}`}>
                <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
                <span className="slds-media__body">
                  <span className="slds-lookup__result-text">Salesforce.com, Inc.</span>
                  <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; San Francisco</span>
                </span>
              </ListboxItem>
            )}
          </ListboxList>
        </Listbox>
      </Popover>
  },
  {
    id: '10-plus-items',
    label: '> 10 items',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-vertical--xx-small slds-p-horizontal--none"
        footerClassName="slds-p-horizontal--none"
        footer={ <Footer /> }
      >
        <FormElement
          className="slds-p-around--small"
          label="Categories"
          hideLabel={ true }
          inputId="text-input-01"
          inputIcon="right"
        >
          <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
          <input
            id="text-input-01"
            className="slds-input slds-lookup__search-input"
            type="search"
            placeholder="Search Accounts"
            aria-owns="option-list-01"
            role="combobox"
            aria-activedescendant=""
            aria-expanded="true"
            aria-autocomplete="list"
          />
        </FormElement>
        <Listbox className="slds-dropdown--length-10" id="option-list-01">
          <ListboxList role="group" aria-label="My Favorites">
            <ListboxItem role="presentation" headerText="My Favorites" />
            { _.times(11, i =>
              <ListboxItem key={`listbox-${i}`}>
                <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
                <span className="slds-media__body">
                  <span className="slds-lookup__result-text">Salesforce.com, Inc.</span>
                  <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; San Francisco</span>
                </span>
              </ListboxItem>
            )}
          </ListboxList>
        </Listbox>
      </Popover>
  }
];
