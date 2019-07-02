// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import Combobox from '../';
import Listbox from '../listbox/';
import ListboxOfSelections from '../listbox-of-pills/';
import { UtilityIcon } from '../../icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import _ from '../../../shared/helpers';
import * as Snapshot from '../snapshots.data';

export default (
  <Combobox
    id={_.uniqueId('combobox-id-')}
    aria-controls="listbox-id-9"
    autocomplete
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
    results={
      <Listbox
        id="listbox-id-9"
        snapshot={Snapshot.PlainOptions}
        type="plain"
        count={3}
      />
    }
    resultsType="listbox"
    hasInteractions
  />
);

export let states = [
  {
    id: 'focused-open',
    label: 'Focused - Open',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-10"
        autocomplete
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
        results={
          <Listbox
            id="listbox-id-10"
            snapshot={Snapshot.PlainOptions}
            type="plain"
            count={3}
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'lookup-focused-open',
    label: 'Lookup - Focused - Open',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-15"
        autocomplete
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
        results={
          <Listbox
            id="listbox-id-15"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'typeahead',
    label: 'Typeahead',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-11"
        autocomplete
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
        value="opp"
        results={
          <Listbox
            id="listbox-id-11"
            snapshot={Snapshot.PlainOptionsTypeahead}
            term="opp"
            type="plain"
            count={4}
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'lookup-typeahead',
    label: 'Lookup - Typeahead',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-16"
        autocomplete
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
        value="salesforce"
        results={
          <Listbox
            id="listbox-id-16"
            snapshot={Snapshot.EntityOptionsTypeahead}
            term="salesforce"
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        aria-activedescendant="option0"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'highlighting-an-option',
    label: 'Highlighting an option',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-12"
        autocomplete
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
        results={
          <Listbox
            id="listbox-id-12"
            snapshot={Snapshot.PlainOptionsFocused}
            type="plain"
            count={3}
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'lookup-highlighting-an-option',
    label: 'Lookup - Highlighting an option',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-17"
        autocomplete
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
        results={
          <Listbox
            id="listbox-id-17"
            snapshot={Snapshot.EntityOptionsFocused}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'selected-an-option',
    label: 'Selected an option',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-unique-id-03"
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <ButtonIcon
            className="slds-input__icon slds-input__icon_right"
            symbol="clear"
            title="Clear the text input"
            assistiveText="Clear the text input"
          />
        }
        results={
          <Listbox
            id="listbox-unique-id-03"
            snapshot={Snapshot.PlainOptions}
            type="entity"
            count={3}
          />
        }
        resultsType="listbox"
        value="GenePoint"
        hasSelection
        readonly
      />
    )
  },
  {
    id: 'lookup-selected-an-option',
    label: 'Lookup - Selected an option',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-18"
        inputIconPosition="left-right"
        leftInputIcon={
          <StandardIcon
            symbol="account"
            className="slds-icon_small"
            containerClassName="slds-combobox__input-entity-icon"
            assistiveText="Account"
            title="Account"
          />
        }
        rightInputIcon={
          <ButtonIcon
            className="slds-input__icon slds-input__icon_right"
            symbol="close"
            title="Remove selected option"
            assistiveText="Remove selected option"
          />
        }
        results={
          <Listbox
            id="listbox-id-18"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        hasSelection
        value="Salesforce.com, Inc."
        readonly
      />
    )
  },
  {
    id: 'selected-multiple-options',
    label: 'Selected multiple options',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-13"
        autocomplete
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
        results={
          <Listbox
            id="listbox-id-13"
            snapshot={Snapshot.PlainOptions}
            type="entity"
            count={3}
          />
        }
        resultsType="listbox"
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={Snapshot.PlainOptionsSelected}
            count={2}
          />
        }
      />
    )
  },
  {
    id: 'lookup-multiple-options',
    label: 'Lookup - Selected multiple options',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-19"
        autocomplete
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
        results={
          <Listbox
            id="listbox-id-19"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={2} />
        }
      />
    )
  }
];

export let examples = [
  {
    id: 'lookup',
    label: 'Lookup',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-14"
        autocomplete
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
        results={
          <Listbox
            id="listbox-id-14"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        hasInteractions
      />
    )
  }
];
