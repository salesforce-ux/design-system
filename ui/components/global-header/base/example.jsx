// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import GlobalHeader from '../';
import { ComboboxGroup } from '../../combobox/';
import ObjectSwitcher from '../../combobox/object-switcher/';
import Listbox from '../../combobox/listbox/';
import { UtilityIcon } from '../../icons/base/example';
import * as Snapshot from '../search/data';
import _ from '../../../shared/helpers';

export const Context = props => (
  <div className="demo-only" style={{ height: '340px' }}>
    {props.children}
  </div>
);

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <GlobalHeader
        globalSearch={
          <ComboboxGroup
            id={_.uniqueId('combobox-id-')}
            aria-controls="search-listbox-id-1"
            comboboxID="primary-search-combobox-id-1"
            autocomplete
            inputContainerClassName="slds-global-search__form-element"
            label="Search Salesforce"
            hideLabel
            placeholder="Search Salesforce"
            results={
              <Listbox
                id="search-listbox-id-1"
                aria-label="Recent Items"
                snapshot={Snapshot.SearchResults}
                type="entity"
                count={6}
              />
            }
            resultsType="listbox"
            addon={
              <ObjectSwitcher
                id={_.uniqueId('objectswitcher-combobox-id-')}
                value="Accounts"
                addonPosition="start"
                hasInteractions
                comboboxAriaControls="primary-search-combobox-id-1"
                listboxId={_.uniqueId('objectswitcher-listbox-id-')}
              />
            }
            addonPosition="start"
            comboboxPosition="end"
            inputIconPosition="left"
            leftInputIcon={
              <UtilityIcon
                symbol="search"
                className="slds-icon slds-icon_xx-small slds-icon-text-default"
                containerClassName="slds-input__icon slds-input__icon_left"
                title={false}
                assistiveText={false}
              />
            }
            hasInteractions
          />
        }
      />
    )
  }
];

export let states = [
  {
    id: 'search-focused-expanded',
    label: 'Global Search - Focused and Exanded',
    element: (
      <GlobalHeader
        globalSearch={
          <ComboboxGroup
            id={_.uniqueId('combobox-id-')}
            aria-controls="search-listbox-id-2"
            comboboxID="primary-search-combobox-id-2"
            autocomplete
            inputContainerClassName="slds-global-search__form-element"
            label="Search Salesforce"
            hideLabel
            placeholder="Search Salesforce"
            results={
              <Listbox
                id="search-listbox-id-2"
                aria-label="Recent Items"
                snapshot={Snapshot.SearchResults}
                type="entity"
                count={6}
              />
            }
            resultsType="listbox"
            addon={
              <ObjectSwitcher
                id={_.uniqueId('objectswitcher-combobox-id-')}
                value="Accounts"
                addonPosition="start"
                comboboxAriaControls="primary-search-combobox-id-2"
                listboxId={_.uniqueId('objectswitcher-listbox-id-')}
              />
            }
            addonPosition="start"
            comboboxPosition="end"
            inputIconPosition="left"
            leftInputIcon={
              <UtilityIcon
                symbol="search"
                className="slds-icon slds-icon_xx-small slds-icon-text-default"
                containerClassName="slds-input__icon slds-input__icon_left"
                title={false}
                assistiveText={false}
              />
            }
          />
        }
      />
    )
  },
  {
    id: 'search-active-typing',
    label: 'Global Search - Active and typing',
    element: (
      <GlobalHeader
        globalSearch={
          <ComboboxGroup
            id={_.uniqueId('combobox-id-')}
            aria-controls="search-listbox-id-4"
            comboboxID="primary-search-combobox-id-4"
            autocomplete
            inputContainerClassName="slds-global-search__form-element"
            label="Search Salesforce"
            hideLabel
            placeholder="Search Salesforce"
            value="salesforce"
            results={
              <Listbox
                id="search-listbox-id-4"
                term="salesforce"
                snapshot={Snapshot.SearchResultsTypeahead}
                type="entity"
                count={6}
              />
            }
            resultsType="listbox"
            aria-activedescendant="option0"
            addon={
              <ObjectSwitcher
                id={_.uniqueId('objectswitcher-combobox-id-')}
                value="Accounts"
                addonPosition="start"
                comboboxAriaControls="primary-search-combobox-id-4"
                listboxId={_.uniqueId('objectswitcher-listbox-id-')}
              />
            }
            addonPosition="start"
            comboboxPosition="end"
            inputIconPosition="left"
            leftInputIcon={
              <UtilityIcon
                symbol="search"
                className="slds-icon slds-icon_xx-small slds-icon-text-default"
                containerClassName="slds-input__icon slds-input__icon_left"
                title={false}
                assistiveText={false}
              />
            }
            hasFocus
            isOpen
          />
        }
      />
    )
  },
  {
    id: 'favorites-disabled',
    label: 'Favorites - Disabled',
    element: (
      <GlobalHeader
        favoritesDisabled
        globalSearch={
          <ComboboxGroup
            id={_.uniqueId('combobox-id-')}
            aria-controls="search-listbox-id-1"
            comboboxID="primary-search-combobox-id-1"
            autocomplete
            inputContainerClassName="slds-global-search__form-element"
            label="Search Salesforce"
            hideLabel
            placeholder="Search Salesforce"
            results={
              <Listbox
                id="search-listbox-id-1"
                aria-label="Recent Items"
                snapshot={Snapshot.SearchResults}
                type="entity"
                count={2}
              />
            }
            resultsType="listbox"
            addon={
              <ObjectSwitcher
                id={_.uniqueId('objectswitcher-combobox-id-')}
                value="Accounts"
                addonPosition="start"
                hasInteractions
                comboboxAriaControls="primary-search-combobox-id-1"
                listboxId={_.uniqueId('objectswitcher-listbox-id-')}
              />
            }
            addonPosition="start"
            comboboxPosition="end"
            inputIconPosition="left"
            leftInputIcon={
              <UtilityIcon
                symbol="search"
                className="slds-icon slds-icon_xx-small slds-icon-text-default"
                containerClassName="slds-input__icon slds-input__icon_left"
                title={false}
                assistiveText={false}
              />
            }
            hasInteractions
          />
        }
      />
    )
  },
  {
    id: 'notification-count-1',
    label: 'Notification - Count +1',
    element: (
      <GlobalHeader
        playground
        globalSearch={
          <ComboboxGroup
            id={_.uniqueId('combobox-id-')}
            aria-controls="search-listbox-id-1"
            comboboxID="primary-search-combobox-id-1"
            autocomplete
            inputContainerClassName="slds-global-search__form-element"
            label="Search Salesforce"
            hideLabel
            placeholder="Search Salesforce"
            results={
              <Listbox
                id="search-listbox-id-1"
                aria-label="Recent Items"
                snapshot={Snapshot.SearchResults}
                type="entity"
                count={2}
              />
            }
            resultsType="listbox"
            addon={
              <ObjectSwitcher
                id={_.uniqueId('objectswitcher-combobox-id-')}
                value="Accounts"
                addonPosition="start"
                hasInteractions
                comboboxAriaControls="primary-search-combobox-id-1"
                listboxId={_.uniqueId('objectswitcher-listbox-id-')}
              />
            }
            addonPosition="start"
            comboboxPosition="end"
            inputIconPosition="left"
            leftInputIcon={
              <UtilityIcon
                symbol="search"
                className="slds-icon slds-icon_xx-small slds-icon-text-default"
                containerClassName="slds-input__icon slds-input__icon_left"
                title={false}
                assistiveText={false}
              />
            }
            hasInteractions
          />
        }
      />
    )
  }
];
