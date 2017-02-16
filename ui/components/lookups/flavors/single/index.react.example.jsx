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
import classNames from 'classnames';
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
  <div className={classNames('slds-form-element__control', props.polymorphic ? 'slds-grid slds-box--border' : null)}>
    { props.polymorphic ? <LookupEntity showEntityDropdown={ props.showEntityDropdown } /> : null }
    <div className={classNames('slds-input-has-icon slds-input-has-icon--right', props.polymorphic ? 'slds-grow' : null)}>
      <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
      <input
        aria-activedescendant=""
        aria-autocomplete="list"
        aria-controls={ props.listId }
        autoComplete="off"
        className={classNames('slds-lookup__search-input', props.polymorphic ? 'slds-input--bare' : 'slds-input')}
        defaultValue={ props.typeahead ? 'salesforce' : null }
        id={ props.id }
        placeholder={ props.placeholder || 'Search Accounts' }
        role="textbox"
        type="search"
      />
    </div>
  </div>;

let LookupEntity = props =>
  <div className={classNames('slds-dropdown--trigger slds-dropdown-trigger--click slds-align-middle slds-m-left--xx-small slds-shrink-none', props.showEntityDropdown ? 'slds-is-open' : null)}>
    <span className="slds-icon_container slds-icon-standard-account" title="Accounts">
      <SvgIcon className="slds-icon slds-icon--small" sprite="standard" symbol="account" />
      <span className="slds-assistive-text">Searching in: Accounts</span>
    </span>
    <ButtonIcon className="slds-button--icon slds-button--icon-small" symbol="down" assistiveText="Select object to search in" aria-haspopup="true" title="Select object to search in" />
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
    <div className="slds-lookup__menu" id={ props.id } role="listbox">
      <ul className="slds-lookup__list" role={ !props.typeahead ? 'group' : 'presentation' } aria-label={ !props.typeahead ? 'Recent Accounts' : null }>
        { !props.typeahead ? <LookupMenuItemHeading /> : null }
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
      <span className="slds-lookup__item-action slds-media" id={ uniqueId } role="option">
        <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
        <span className="slds-media__body">
          <span className="slds-lookup__result-text">{ props.typeahead ? props.children : props.name || 'Salesforce.com, Inc.' }</span>
          <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; { props.location || 'San Francisco' }</span>
        </span>
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
        <span className="slds-truncate" title="{ props.text || 'New Account' }">{ props.text || 'New Account'}</span>
      </span>
    </li>
  );
};

let LookupMenuItemHeading = props =>
  <li role="presentation">
    <h3 role="presentation" className="slds-lookup__item--label slds-text-body--small">Recent Accounts</h3>
  </li>;

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
  const uniqueInputId = _.uniqueId('lookup-input-');
  const uniqueListId = _.uniqueId('lookup-listbox-');
  const ariaExpanded = props.showLookupDropdown ? 'true' : 'false';

  return (
    <div
      aria-expanded={ props.selection ? null : ariaExpanded }
      aria-haspopup={ props.selection ? null : 'listbox' }
      className={classNames('slds-form-element slds-lookup', props.className, props.showLookupDropdown ? 'slds-is-open' : null, props.selection ? 'slds-has-selection' : null)}
      role={ props.selection ? null : 'combobox' }
    >
      { !props.selection ?
        <label className={classNames('slds-form-element__label', props.hideLabel ? 'slds-assistive-text' : null)} htmlFor={ uniqueInputId }>{ props.label || 'Account Name' }</label> :
        <span className={classNames('slds-form-element__label', props.hideLabel ? 'slds-assistive-text' : null)}>{ props.label || 'Account Name' }</span>
      }
      { !props.selection ?
        <LookupSearchInput
          id={ uniqueInputId }
          listId={ uniqueListId }
          placeholder={ props.placeholder }
          typeahead={ props.typeahead }
          polymorphic={ props.polymorphic }
          showEntityDropdown={ props.showEntityDropdown } /> :
        <LookupSelection />
      }
      <LookupMenu id={ uniqueListId } typeahead={ props.typeahead } />
    </div>
  );
};

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Lookup />
);

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
      <div className="demo-only" style={{ height: '400px' }}>
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
