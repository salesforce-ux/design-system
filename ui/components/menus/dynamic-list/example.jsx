// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Listbox, ListboxList, ListboxItem, PickList } from '../../picklist/base/example';
import { Popover } from '../../popovers/base/example';
import { FormElement } from '../../form-element/base/example';
import SvgIcon from '../../../shared/svg-icon';
import _ from 'lodash';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

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

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let states = [
  {
    id: '0-items',
    label: '0 items',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-around--medium"
        footerClassName="slds-p-horizontal--none"
        footer={<Footer />}
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
        footer={<Footer />}
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
        footer={<Footer />}
      >
        <Listbox className="slds-dropdown--length-10">
          <ListboxList role="group" aria-label="My Favorites">
            <ListboxItem role="presentation" headerText="My Favorites" />
            { _.times(7, i =>
              <ListboxItem tabIndex={(i === 0) ? '0' : null} key={`listbox-${i}`}>
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
        footer={<Footer />}
      >
        <PickList classNames="slds-size--1-of-1" isOpen>
          <FormElement
            className="slds-p-around--small"
            label="Categories"
            hideLabel
            inputId="text-input-01"
            inputIcon="left"
          >
            <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
            <input
              aria-activedescendant=""
              aria-autocomplete="list"
              aria-controls="option-list-01"
              autoComplete="off"
              className="slds-input slds-lookup__search-input"
              id="text-input-01"
              placeholder="Quick find&hellip;"
              role="textbox"
              type="text"
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
        </PickList>
      </Popover>
  }
];
