// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Combobox, { ComboboxGroup } from '../';
import ObjectSwitcher from '../object-switcher/';
import Listbox from '../listbox/';
import ListboxOfSelections from '../listbox-of-pills/';
import { UtilityIcon } from '../../icons/base/example';
import * as Snapshot from '../snapshots.data';
import _ from '../../../shared/helpers';

const ComboboxId = _.uniqueId('combobox-id-');
const ObjectSwitcherComboboxId = _.uniqueId('object-switcher-combobox-id-');
const PrimaryComboboxId = _.uniqueId('primary-combobox-id-');
const ListboxId = _.uniqueId('listbox-id-');

export const Context = props => (
  <div style={{ width: '600px', maxWidth: '100%', height: '240px' }}>
    {props.children}
  </div>
);

export default (
  <ComboboxGroup
    id={ComboboxId}
    aria-controls={ListboxId}
    comboboxID={PrimaryComboboxId}
    autocomplete
    results={
      <Listbox
        id={ListboxId}
        snapshot={Snapshot.EntityOptions}
        type="entity"
        count={4}
      />
    }
    resultsType="listbox"
    addon={
      <ObjectSwitcher
        id={ObjectSwitcherComboboxId}
        value="Accounts"
        addonPosition="start"
        hasInteractions
        comboboxAriaControls={PrimaryComboboxId}
      />
    }
    addonPosition="start"
    comboboxPosition="end"
    inputIconPosition="right"
    rightInputIcon={
      <UtilityIcon
        symbol="search"
        className="slds-icon slds-icon_x-small slds-icon-text-default"
        containerClassName="slds-input__icon slds-input__icon_right"
        assistiveText={false}
        title={false}
      />
    }
    hasInteractions
  />
);

export let states = [
  {
    id: 'typeahead',
    label: 'Typeahead',
    element: (
      <ComboboxGroup
        id={ComboboxId}
        aria-activedescendant="option0"
        aria-controls={ListboxId}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={ListboxId}
            snapshot={Snapshot.EntityOptionsTypeahead}
            term="salesforce"
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        value="salesforce"
        isOpen
        hasFocus
        addon={
          <ObjectSwitcher
            id={ObjectSwitcherComboboxId}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls={PrimaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
      />
    )
  },
  {
    id: 'typeahead-loading',
    label: 'Typeahead - Loading',
    element: (
      <ComboboxGroup
        id={ComboboxId}
        aria-activedescendant="option0"
        aria-controls={ListboxId}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={ListboxId}
            snapshot={Snapshot.EntityOptionsTypeahead}
            term="salesforce"
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        value="salesforce"
        isOpen
        showCloseButton
        isLoading
        hasFocus
        addon={
          <ObjectSwitcher
            id={ObjectSwitcherComboboxId}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls={PrimaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="group-right"
      />
    )
  },
  {
    id: 'selecting-options',
    label: 'Selecting Options',
    element: (
      <ComboboxGroup
        id={ComboboxId}
        aria-controls={ListboxId}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={ListboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        addon={
          <ObjectSwitcher
            id={ObjectSwitcherComboboxId}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls={PrimaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={2} />
        }
      />
    )
  },
  {
    id: 'overflow-collapsed',
    label: 'Selections - Overflowed - Collapsed',
    element: (
      <ComboboxGroup
        id={ComboboxId}
        aria-controls={ListboxId}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={ListboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        addon={
          <ObjectSwitcher
            id={ObjectSwitcherComboboxId}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls={PrimaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={8} />
        }
      />
    )
  },
  {
    id: 'overflow-expanded',
    label: 'Selections - Overflowed - Expanded',
    element: (
      <ComboboxGroup
        id={ComboboxId}
        aria-controls={ListboxId}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={ListboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        addon={
          <ObjectSwitcher
            id={ObjectSwitcherComboboxId}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls={PrimaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={Snapshot.EntitySelections}
            count={8}
            isExpanded
          />
        }
      />
    )
  },
  {
    id: 'non-grouped-overflow-collapsed',
    label: 'Selections - Overflowed - Expanded',
    element: (
      <Combobox
        id={ComboboxId}
        aria-controls={ListboxId}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={ListboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        hasSelection
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={8} />
        }
      />
    )
  },
  {
    id: 'non-grouped-overflow-expanded',
    label: 'Selections - Overflowed - Expanded',
    element: (
      <Combobox
        id={ComboboxId}
        aria-controls={ListboxId}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={ListboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        hasSelection
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={Snapshot.EntitySelections}
            count={8}
            isExpanded
          />
        }
      />
    )
  }
];
