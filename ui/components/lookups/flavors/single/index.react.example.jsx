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
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import _ from 'lodash';
import { Pill, PillContainer } from 'ui/components/pills/flavors/base/index.react.example';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';

// Props
//  - Globals
//    - className : classname of parent lookup
//  - Variant
//    - polymorphic : returns multi scope data selection display
//  - States
//    - showEntityDropdown : displays scope dropdown
//    - typeahead : returns typeahead display
//    - selection : returns selected object display

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const results = [{
  'name': 'The Boston Consulting Group',
  'location': 'Boston'
}, {
  'name': 'Acuity',
  'location': 'Sheboygan'
}, {
  'name': 'SAS Insistute',
  'location': 'Cary'
}, {
  'name': 'Genentech',
  'location': 'South San Francisco'
}, {
  'name': 'Camden Property Trust',
  'location': 'Houston'
}, {
  'name': 'Salesforce.com, Inc.',
  'location': 'San Francisco'
}];

let LookupSearchInput = props =>
  <div className={className('slds-form-element__control', props.polymorphic ? 'slds-grid slds-box--border' : null)}>
    { props.polymorphic ? <LookupEntity showEntityDropdown={ props.showEntityDropdown } /> : null }
    <div className={className('slds-input-has-icon slds-input-has-icon--right', props.polymorphic ? 'slds-grow' : null)}>
      <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
      <input
        id={ props.id }
        className={className('slds-lookup__search-input', props.polymorphic ? 'slds-input--bare' : 'slds-input')}
        type="search"
        placeholder={ props.placeholder || 'Search Accounts' }
        defaultValue={ props.typeahead ? 'salesforce' : null }
        aria-owns={ props.id }
        role="combobox"
        aria-activedescendent=""
        aria-expanded={ props.showLookupDropdown ? 'true' : 'false' }
        aria-autocomplete="list" />
    </div>
  </div>;

let LookupEntity = props =>
  <div className={className('slds-dropdown--trigger slds-dropdown-trigger--click slds-align-middle slds-m-left--xx-small slds-shrink-none', props.showEntityDropdown ? 'slds-is-open' : null)}>
    <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small" sprite="standard" symbol="account" />
    <ButtonIcon className="slds-button--icon slds-button--icon-small" symbol="down" assistiveText="Filter by object" aria-haspopup="true" />
    { props.showEntityDropdown ?
      <Menu className="slds-dropdown--left">
        <MenuList>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
            Accounts
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-approval slds-m-right--small" sprite="standard" symbol="approval" />
            Approvals
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-lead slds-m-right--small" sprite="standard" symbol="lead" />
            Lead
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-opportunity slds-m-right--small" sprite="standard" symbol="opportunity" />
            Opportunities
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-product slds-m-right--small" sprite="standard" symbol="product" />
            Products
          </MenuItem>
        </MenuList>
      </Menu>
    : null}
  </div>;

let LookupMenu = props => {
  const uniqueId = _.uniqueId('lookup-option-');

  return (
    <div className="slds-lookup__menu" id={ props.id }>
      { !props.typeahead ? <div className="slds-lookup__item--label slds-text-body--small">Recent Accounts</div> : null }
      <ul className="slds-lookup__list" role="listbox">
        { props.typeahead ? <LookupMenuItemLabel symbol="search" text='"salesforce" in accounts' /> : null }
        { props.typeahead ? <LookupMenuItem typeahead><mark>Salesforce</mark>.com, Inc.</LookupMenuItem> :
          _.times(results.length, i =>
            <LookupMenuItem
              key={ i }
              name={ results[i].name }
              location={ results[i].location } />
          )
        }
        <LookupMenuItemLabel />
      </ul>
    </div>
  );
};

let LookupMenuItem = props => {
  const uniqueId = _.uniqueId('lookup-option-');

  return (
    <li role="presentation">
      <span className="slds-lookup__item-action slds-media slds-media--center" id={ uniqueId } role="option">
        <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
        <div className="slds-media__body">
          <div className="slds-lookup__result-text">{ props.typeahead ? props.children : props.name || 'Salesforce.com, Inc.' }</div>
          <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; { props.location || 'San Francisco' }</span>
        </div>
      </span>
    </li>
  );
};

let LookupMenuItemLabel = props => {
  const uniqueId = _.uniqueId('lookup-option-');

  return (
    <li role="presentation">
      <span className="slds-lookup__item-action slds-lookup__item-action--label" id={ uniqueId } role="option">
        <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default" sprite="utility" symbol={ props.symbol || 'add' } />
        <span className="slds-truncate">{ props.text || 'New Account'}</span>
      </span>
    </li>
  );
};

let LookupSelection = props =>
  <div className="slds-form-element__control">
    <PillContainer>
      <Pill label="Salesforce.com, Inc." unlinked className="slds-size--1-of-1">
        <span className="slds-icon_container slds-icon-standard-account slds-pill__icon_container">
          <SvgIcon className="slds-icon" sprite="standard" symbol="account" />
          <span className="slds-assistive-text">Account</span>
        </span>
      </Pill>
    </PillContainer>
  </div>;

export let Lookup = props => {
  const uniqueId = _.uniqueId('lookup-');

  return (
    <div className={className('slds-form-element slds-lookup', props.className, props.showLookupDropdown ? 'slds-is-open' : null)} data-select="single">
      { !props.selection ?
      <label className={className('slds-form-element__label', props.hideLabel ? 'slds-assistive-text' : null)} htmlFor={ uniqueId }>{ props.label || 'Account Name' }</label> :
      <span className={className('slds-form-element__label', props.hideLabel ? 'slds-assistive-text' : null)}>{ props.label || 'Account Name' }</span>
      }
      { !props.selection ?
        <LookupSearchInput
          id={ uniqueId }
          placeholder={ props.placeholder }
          typeahead={ props.typeahead }
          polymorphic={ props.polymorphic }
          showLookupDropdown={ props.showLookupDropdown }
          showEntityDropdown={ props.showEntityDropdown } /> :
        <LookupSelection />
      }
      <LookupMenu id={ uniqueId } typeahead={ props.typeahead } />
    </div>
  );
};

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <Lookup />
  },
  {
    id: 'active',
    label: 'Active',
    element:
      <div className="demo-only" style={{ height: '380px' }}>
        <Lookup showLookupDropdown />
      </div>
  },
  {
    id: 'typeahead',
    label: 'Typeahead',
    element:
      <div className="demo-only" style={{ height: '180px' }}>
        <Lookup showLookupDropdown typeahead />
      </div>
  },
  {
    id: 'selection',
    label: 'With selection',
    element: <Lookup selection />
  }
];
