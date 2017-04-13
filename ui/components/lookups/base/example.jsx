// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';
import { Pill, PillContainer } from '../../pills/base/example';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '../../modals/base/example';

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
  <div className={classNames('slds-form-element__control slds-input-has-icon slds-input-has-icon--right', props.polymorphic ? 'slds-grid slds-box--border' : null)}>
    { props.polymorphic ? <LookupEntity showEntityDropdown={ props.showEntityDropdown } /> : null }
    <div className={props.polymorphic ? 'slds-grow' : null}>
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
        type="text"
      />
    </div>
  </div>;

let LookupEntity = props =>
  <div className={classNames('slds-dropdown-trigger slds-dropdown-trigger--click slds-align-middle slds-m-left--xx-small slds-shrink-none', props.showEntityDropdown ? 'slds-is-open' : null)}>
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

export const Context = props =>
  <div className="demo-only" style={{ height: '400px' }}>
    {props.children}
  </div>;

export default (
  <Lookup />
);

export let states = [
  {
    id: 'active',
    label: 'Active',
    element: <Lookup showLookupDropdown />
  },
  {
    id: 'typeahead',
    label: 'Typeahead',
    element: <Lookup showLookupDropdown typeahead />
  },
  {
    id: 'selection',
    label: 'With selection',
    element: <Lookup selection />
  }
];

export let examples = [
  {
    id: 'default',
    label: 'Polymorphic lookup',
    element: <Lookup polymorphic />
  },
  {
    id: 'object-dropdown',
    label: 'Object dropdown',
    element: <Lookup polymorphic showEntityDropdown />
  },
  {
    id: 'active',
    label: 'Active',
    element: <Lookup polymorphic showLookupDropdown />
  },
  {
    id: 'typeahead',
    label: 'Typeahead',
    element: <Lookup polymorphic showLookupDropdown typeahead />
  },
  {
    id: 'selection',
    label: 'With selection',
    element: <Lookup polymorphic selection />
  },
  {
    id: 'advanced',
    label: 'Advanced lookup in Modal',
    element:
    <div className="demo-only" style={{height: '640px'}}>
      <Modal className="slds-modal--large">
        <ModalHeader>
          <h2 className="slds-text-heading--medium">Account Name</h2>
        </ModalHeader>

        <ModalContent>
          <div className="slds-lookup" data-select="multi" data-scope="single" data-typeahead="true">
            <div className="slds-form-element slds-p-top--medium slds-p-horizontal--medium slds-m-bottom--small">
              <label className="slds-form-element__label" htmlFor="lookup">Accounts</label>
              <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
                <SvgIcon className="slds-icon slds-input__icon slds-icon-text-default" sprite="utility" symbol="search" />
                <input id="lookup" className="slds-input" type="text" aria-haspopup="true" aria-autocomplete="list" role="combobox" aria-activedescendant="" />
              </div>
            </div>
            <table className="slds-table slds-table--bordered slds-table--cell-buffer slds-no-row-hover" role="listbox">
              <thead>
                <tr>
                  <th colSpan="4" scope="col">
                    <div className="slds-float--right">
                      <ButtonIcon className="slds-button--icon slds-button--icon-x-small" symbol="filterList" assistiveText="Filter List" title="Filter List" />
                      <ButtonIcon className="slds-button--icon slds-button--icon-x-small" symbol="sort" assistiveText="Sort" title="Sort" />
                    </div>
                    5 Results, sorted by relevancy
                  </th>
                </tr>
                <tr>
                  <th scope="col"><div className="slds-truncate" title="Account Name">Account Name</div></th>
                  <th scope="col"><div className="slds-truncate" title="Location">Location</div></th>
                  <th scope="col"><div className="slds-truncate" title="Secondary Column">Secondary Column</div></th>
                  <th scope="col"><div className="slds-truncate" title="Tertiary Column">Tertiary Column</div></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <a id="s01" href="javascript:void(0);" role="option">
                      <div className="slds-truncate" title="Acme Landscape">
                        <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                        Acme Landscape
                      </div>
                    </a>
                  </th>
                  <td><div className="slds-truncate" title="Seattle, WA">Seattle, WA</div></td>
                  <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
                  <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
                </tr>
                <tr>
                  <th scope="row">
                    <a id="s02" href="javascript:void(0);" role="option">
                      <div className="slds-truncate" title="ACME Construction">
                        <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                        ACME Construction
                      </div>
                    </a>
                  </th>
                  <td><div className="slds-truncate" title="San Francisco, CA">San Francisco, CA</div></td>
                  <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
                  <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
                </tr>
                <tr>
                  <th scope="row">
                    <a id="s03" href="javascript:void(0);" role="option">
                      <div className="slds-truncate" title="Action Sports">
                        <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                        Action Sports
                      </div>
                    </a>
                  </th>
                  <td><div className="slds-truncate" title="Madison, WI">Madison, WI</div></td>
                  <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
                  <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
                </tr>
                <tr>
                  <th scope="row">
                    <a id="s04" href="javascript:void(0);" role="option">
                      <div className="slds-truncate" title="Moderno Bistro">
                        <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                        Moderno Bistro
                      </div>
                    </a>
                  </th>
                  <td><div className="slds-truncate" title="Acton, OH">Acton, OH</div></td>
                  <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
                  <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
                </tr>
                <tr>
                  <th scope="row">
                    <a id="s05" href="javascript:void(0);" role="option">
                      <div className="slds-truncate" title="Cozy Kitchen">
                        <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-m-right--x-small" sprite="standard" symbol="account" />
                        Cozy Kitchen
                      </div>
                    </a>
                  </th>
                  <td><div className="slds-truncate" title="Acton, CA">Acton, CA</div></td>
                  <td><div className="slds-truncate" title="Secondary Field">Secondary Field</div></td>
                  <td><div className="slds-truncate" title="Tertiary Field">Tertiary Field</div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </ModalContent>

        <ModalFooter className="slds-modal__footer--directional">
          <button className="slds-button slds-button--neutral">Cancel</button>
          <button className="slds-button slds-button--neutral">New Account</button>
        </ModalFooter>
      </Modal>
      <div className="slds-backdrop slds-backdrop--open" />
    </div>
  }
];
