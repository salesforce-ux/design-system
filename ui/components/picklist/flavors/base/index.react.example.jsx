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
import { Trigger, Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Pill, PillContainer } from 'ui/components/pills/flavors/base/index.react.example';
import { LookupMenu, LookupMenuItem, LookupMenuItemLabel } from 'ui/components/lookups/flavors/single/index.react.example';
import { FormElement, FormElementLabel, FormElementControl } from 'ui/components/forms/flavors/input/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let ComboboxSearchInput = props =>
  <FormElement>
    <FormElementLabel>Input Label</FormElementLabel>
    <FormElementControl className="slds-input-has-icon slds-input-has-icon--right slds-picklist__input">
      <input
        id="text-input-01"
        className="slds-lookup__search-input slds-input"
        type="search"
        placeholder={ props.placeholder || 'Select an Option' }
        aria-owns={ props.id }
        role="combobox"
        aria-activedescendent=""
        readOnly />
      <ButtonIcon className="slds-input__icon slds-text-color--default" symbol="down" assistiveText="More Options" iconClassName="slds-button__icon" />
    </FormElementControl>
  </FormElement>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'picklist-closed',
    label: 'Closed',
    element:
      <div className="slds-picklist">
        <ComboboxSearchInput />
        <Menu className="slds-dropdown--left">
          <MenuList className="slds-dropdown--length-5">
            <MenuItem isSelectable>Option A</MenuItem>
            <MenuItem isSelectable>Option B</MenuItem>
            <MenuItem isSelectable>Option C</MenuItem>
            <MenuItem isSelectable>Option D</MenuItem>
            <MenuItem isSelectable>Option E</MenuItem>
            <MenuItem isSelectable>Option FGHIJKLMNOPQRSTUVWXYZ</MenuItem>
          </MenuList>
        </Menu>
      </div>
  },
  {
    id: 'picklist-open',
    label: 'Open',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <div className="slds-picklist slds-is-open">
          <ComboboxSearchInput />
          <Menu className="slds-dropdown--left">
            <MenuList className="slds-dropdown--length-5">
              <MenuItem isSelectable tabIndex="0">Option A</MenuItem>
              <MenuItem isSelectable>Option B</MenuItem>
              <MenuItem isSelectable>Option C</MenuItem>
              <MenuItem isSelectable>Option D</MenuItem>
              <MenuItem isSelectable>Option E</MenuItem>
              <MenuItem isSelectable>Option FGHIJKLMNOPQRSTUVWXYZ</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
  },
  {
    id: 'picklist-open-item-selected',
    label: 'Item selected',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <div className="slds-picklist slds-is-open">
          <ComboboxSearchInput />
          <Menu className="slds-dropdown--left">
            <MenuList className="slds-dropdown--length-5">
              <MenuItem className="slds-is-selected" isSelected="true" isSelectable tabIndex="0">Option A</MenuItem>
              <MenuItem isSelectable>Option B</MenuItem>
              <MenuItem isSelectable>Option C</MenuItem>
              <MenuItem isSelectable>Option D</MenuItem>
              <MenuItem isSelectable>Option E</MenuItem>
              <MenuItem isSelectable>Option FGHIJKLMNOPQRSTUVWXYZ</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
  },
  {
    id: 'picklist-open-item-multi-selected',
    label: 'Multiple items selected',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <div className="slds-picklist slds-is-open">
          <ComboboxSearchInput />
          <Menu className="slds-dropdown--left">
            <MenuList className="slds-dropdown--length-5">
              <MenuItem className="slds-is-selected" isSelected="true" isSelectable tabIndex="0">Option A</MenuItem>
              <MenuItem className="slds-is-selected" isSelected="true" isSelectable>Option B</MenuItem>
              <MenuItem isSelectable>Option C</MenuItem>
              <MenuItem isSelectable>Option D</MenuItem>
              <MenuItem isSelectable>Option E</MenuItem>
              <MenuItem isSelectable>Option FGHIJKLMNOPQRSTUVWXYZ</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
  },
  {
    id: 'picklist-closed-item-multi-selected',
    label: 'Closed - Multiple items selected',
    element:
      <div className="demo-only">
        <div className="slds-picklist">
          <ComboboxSearchInput />
          <Menu className="slds-dropdown--left">
            <MenuList className="slds-dropdown--length-5">
              <MenuItem className="slds-is-selected" isSelected="true" isSelectable>Option A</MenuItem>
              <MenuItem className="slds-is-selected" isSelected="true" isSelectable>Option B</MenuItem>
              <MenuItem isSelectable>Option C</MenuItem>
              <MenuItem isSelectable>Option D</MenuItem>
              <MenuItem isSelectable>Option E</MenuItem>
              <MenuItem isSelectable>Option FGHIJKLMNOPQRSTUVWXYZ</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <PillContainer className="slds-pill_container--bare">
          <Pill label="Option A" unlinked />
          <Pill label="Option B" unlinked />
        </PillContainer>
      </div>
  },
  {
    id: 'example-for-simon',
    label: 'Hello Simon',
    element:
      <div className="demo-only">
        <div className="slds-picklist">
          <ComboboxSearchInput />
          <LookupMenu />
        </div>
      </div>
  }
];
