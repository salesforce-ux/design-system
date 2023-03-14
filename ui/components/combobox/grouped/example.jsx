// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Combobox, { ComboboxGroup } from '../';
import ObjectSwitcher, { IconObjectSwitcher } from '../object-switcher/';
import Listbox from '../listbox/';
import ListboxOfSelections from '../listbox-of-pills/';
import { UtilityIcon } from '../../icons/base/example';
import * as Snapshot from '../snapshots.data';
import _ from '../../../shared/helpers';


const STORY_SINK_CONTEXT = 'Grouped';
const ComboboxId = _.uniqueId('combobox-id-');
const PrimaryComboboxId = _.uniqueId('primary-combobox-id-');
let allVariableIds = [];
for (let i = 0; i < 5; i++){
  allVariableIds.push(_.uniqueId('listbox-id-'));
}

export const Context = props => (
  <div style={{ height: '240px' }}>{props.children}</div>
);

export default [
  {
    context: STORY_SINK_CONTEXT,
    id: `${STORY_SINK_CONTEXT.toLowerCase()}-default`,
    label: `${STORY_SINK_CONTEXT} default`,
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[0]}
        comboboxID="primary-combobox-id-1"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[0]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            hasInteractions
            comboboxAriaControls="primary-combobox-id-1"
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
    )
  }
];

export let states = [
  {
    context: STORY_SINK_CONTEXT,
    id: 'focused-open',
    label: 'Focused - Open',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[1]}
        comboboxID="primary-combobox-id-2"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[1]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-2"
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
    context: STORY_SINK_CONTEXT,
    id: 'typeahead',
    label: 'Typeahead',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-activedescendant="option0"
        aria-label="{{Placeholder for Dropdown Options}}"
        aria-controls={allVariableIds[2]}
        comboboxID="primary-combobox-id-2"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[2]}
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
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-2"
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
    context: STORY_SINK_CONTEXT,
    id: 'typeahead-loading',
    label: 'Typeahead - Loading',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-activedescendant="option0"
        aria-controls={allVariableIds[3]}
        comboboxID="primary-combobox-id-2"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[3]}
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
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-2"
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="group-right"
      />
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    id: 'selected-options',
    label: 'Selected Options',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[4]}
        comboboxID="primary-combobox-id-3"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[4]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        hasFocus
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-3"
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
    context: STORY_SINK_CONTEXT,
    id: 'selected-options-open',
    label: 'Selected Options - Open',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[5]}
        comboboxID="primary-combobox-id-4"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[5]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-4"
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
    context: STORY_SINK_CONTEXT,
    id: 'overflow-collapsed',
    label: 'Selections in container - Overflowed - Collapsed',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[6]}
        comboboxID="primary-combobox-id-5"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[6]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-5"
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
    context: STORY_SINK_CONTEXT,
    id: 'overflow-expanded',
    label: 'Selections in container - Overflowed - Expanded',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[7]}
        comboboxID="primary-combobox-id-6"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[7]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        hasFocus
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-6"
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
    context: STORY_SINK_CONTEXT,
    id: 'non-grouped-overflow-collapsed',
    label: 'Selections - Collapsed',
    element: (
      <Combobox
        id={ComboboxId}
        aria-controls={allVariableIds[8]}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={allVariableIds[8]}
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
    context: STORY_SINK_CONTEXT,
    id: 'non-grouped-overflow-expanded',
    label: 'Selections - Expanded',
    element: (
      <Combobox
        id={ComboboxId}
        aria-controls={allVariableIds[9]}
        comboboxID={PrimaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={allVariableIds[9]}
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
  },
  {
    context: STORY_SINK_CONTEXT,
    id: 'scoping-results-focused',
    label: 'Scoping results - Focused',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[10]}
        comboboxID="primary-combobox-id-7"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[10]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            isOpen
            hasFocus
            comboboxAriaControls="primary-combobox-id-7"
          />
        }
        resultsType="listbox"
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
    context: STORY_SINK_CONTEXT,
    id: 'scoping-results-icon',
    label: 'Scoping results - Icon variant',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[11]}
        comboboxID="primary-combobox-id-9"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[11]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        addon={
          <IconObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Apex"
            filteredSymbol="apex"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-9"
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
    context: STORY_SINK_CONTEXT,
    id: 'scoping-results-icon-focused',
    label: 'Scoping results - Icon variant - Focused',
    element: (
      <ComboboxGroup
        id={_.uniqueId('combobox-id-')}
        aria-controls={allVariableIds[12]}
        comboboxID="primary-combobox-id-8"
        autocomplete
        results={
          <Listbox
            id={allVariableIds[12]}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        addon={
          <IconObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Apex"
            filteredSymbol="apex"
            addonPosition="start"
            isOpen
            hasFocus
            comboboxAriaControls="primary-combobox-id-8"
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
  }
];
