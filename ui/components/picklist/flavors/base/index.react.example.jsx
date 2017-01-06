/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';
import SvgIcon from 'app_modules/ui/svg-icon';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import { Trigger, Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Pill, PillContainer } from 'ui/components/pills/flavors/base/index.react.example';
import { FormElement, FormElementLabel, FormElementControl, Input } from 'ui/components/forms/flavors/input/index.react.example';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Listbox = props =>
  <div className={props.className} id={ props.id || 'option-list-01' } role="listbox">
    {props.children}
  </div>;

export let ListboxList = props =>
  <ul
    className={classNames('slds-dropdown__list', props.className)}
    role={ props.role == 'group' ? 'group' : 'presentation' }
    aria-label={ props.role == 'group' ? props['aria-label'] : null }
  >
    {props.children}
  </ul>;

export let ListboxItem = props => {
  const uniqueId = _.uniqueId('listbox-option-');

  return (
    <li className={ props.className } role="presentation">
      <span
        className={ classNames( props.role == 'presentation' ? 'slds-lookup__item--label' : ( props.text ? 'slds-lookup__item-action slds-lookup__item-action--label' : 'slds-lookup__item-action slds-media'))}
        role={ !props.role ? 'option' : props.role}
        tabIndex={ props.tabIndex }
        id={ uniqueId }
      >
        { props.isSelectable ?
          <SvgIcon className="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small slds-shrink-none" sprite="utility" symbol="check" />
        : null }
        { props.headerText ?
          <h3 className="slds-text-title--caps" role="presentation">{ props.headerText }</h3>
        : (props.text ?
          <span className="slds-truncate" title={ props.title }>{ props.children }</span>
        : props.children
        )}
      </span>
    </li>
  );
};

let ComboboxSearchInput = props =>
  <FormElement>
    <FormElementLabel>Categories</FormElementLabel>
    <FormElementControl className="slds-input-has-icon slds-input-has-icon--right slds-picklist__input">
      <input
        id="text-input-01"
        className="slds-lookup__search-input slds-input"
        type="search"
        placeholder={ props.placeholder || 'Select an Option' }
        aria-owns="option-list-01"
        role="combobox"
        aria-activedescendant=""
        aria-expanded={ props.dropdown == 'open' ? 'true' : 'false' }
        readOnly={ !props.autocomplete }
        aria-autocomplete={ props.autocomplete }
        value={ props.value }
      />
      {
        !props.autocomplete ?
        <ButtonIcon
          className="slds-input__icon slds-text-color--default"
          symbol="down"
          assistiveText="Expand category options"
          title="Expand category options"
          aria-expanded={ props.dropdown == 'open' ? 'true' : 'false' }
          iconClassName="slds-button__icon"
          tabIndex="-1"
          />
        : null
      }
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
      <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click">
        <ComboboxSearchInput />
        <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
          <ListboxList>
            <ListboxItem isSelectable text>Option A</ListboxItem>
            <ListboxItem isSelectable text>Option B</ListboxItem>
            <ListboxItem isSelectable text>Option C</ListboxItem>
            <ListboxItem isSelectable text>Option D</ListboxItem>
            <ListboxItem isSelectable text>Option E</ListboxItem>
            <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
          </ListboxList>
        </Listbox>
      </div>
  },
  {
    id: 'picklist-open',
    label: 'Open',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
          <ComboboxSearchInput dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList>
              <ListboxItem isSelectable text>Option A</ListboxItem>
              <ListboxItem isSelectable text>Option B</ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </div>
      </div>
  },
  {
    id: 'picklist-open-item-selected',
    label: 'Item selected',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
          <ComboboxSearchInput value="Option A" dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList>
              <ListboxItem className="slds-is-selected" isSelected="true" text isSelectable>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem isSelectable text>Option B</ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </div>
      </div>
  },
  {
    id: 'picklist-open-item-multi-selected',
    label: 'Multiple items selected',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
          <ComboboxSearchInput value="2 Options selected" dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option B
              </ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </div>
      </div>
  },
  {
    id: 'picklist-closed-item-multi-selected',
    label: 'Closed - Multiple items selected',
    element:
      <div className="demo-only">
        <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click">
          <ComboboxSearchInput value="2 Options selected" dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left">
            <ListboxList>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option B
              </ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </div>
        <PillContainer className="slds-pill_container--bare">
          <Pill label="Option A" unlinked />
          <Pill label="Option B" unlinked />
        </PillContainer>
      </div>
  },
  {
    id: 'picklist-with-header',
    label: 'With Header',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
          <ComboboxSearchInput value="2 Options selected" dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList role="group" aria-label="Recently Viewed">
              <ListboxItem role="presentation" headerText="Recently Viewed" />
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option B
              </ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </div>
      </div>
  },
  {
    id: 'picklist-with-autocomplete',
    label: 'Autocomplete',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
          <ComboboxSearchInput placeholder="Find Option" dropdown="open" autocomplete />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList role="group" aria-label="Recently Viewed">
              <ListboxItem role="presentation" headerText="Recently Viewed" />
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option B
              </ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
            <ListboxList role="group" aria-label="Another List" className="slds-has-divider--top-space">
              <ListboxItem role="presentation" headerText="Another List" />
              <ListboxItem isSelectable text>Option A</ListboxItem>
              <ListboxItem isSelectable text>Option B</ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </div>
      </div>
  }
];
