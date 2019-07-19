// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Combobox from '../';
import Listbox, { ListboxGroup, ListboxWrapper } from '../listbox/';
import ListboxOfSelections from '../listbox-of-pills/';
import {
  DeprecatedCombobox,
  DeprecatedListbox,
  DeprecatedListboxItem,
  DeprecatedEntityOption
} from '../deprecated/';
import { ListboxPills, ListboxPillsItem, ListboxPill } from '../../pills';
import { UtilityIcon } from '../../icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import _ from '../../../shared/helpers';
import * as Snapshot from '../snapshots.data';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

export const ListboxDropdown = props => (
  <DeprecatedListbox
    listboxClassName="slds-dropdown slds-dropdown_fluid"
    vertical
    id="listbox-unique-id"
  >
    <DeprecatedListboxItem>
      <DeprecatedEntityOption
        id={listboxOptionId01}
        entityTitle="Acme"
        entityMeta
        focused={props.focused}
      />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedEntityOption
        id={listboxOptionId02}
        entityTitle="Salesforce.com, Inc."
        entityMeta
      />
    </DeprecatedListboxItem>
  </DeprecatedListbox>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default (
  <Combobox
    id={_.uniqueId('combobox-id-')}
    aria-controls="listbox-id-1"
    inputIconPosition="right"
    rightInputIcon={
      <UtilityIcon
        symbol="down"
        className="slds-icon slds-icon_x-small slds-icon-text-default"
        containerClassName="slds-input__icon slds-input__icon_right"
        assistiveText={false}
        title={false}
      />
    }
    results={
      <Listbox
        id="listbox-id-1"
        snapshot={Snapshot.ObjectOptions}
        type="plain"
        count={8}
        visualSelection
      />
    }
    resultsType="listbox"
    hasInteractions
  />
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-4"
        readonly
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-4"
            snapshot={Snapshot.ObjectOptionsFocused}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        hasFocus
      />
    )
  },
  {
    id: 'focused-open',
    label: 'Focused - Opened',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-4"
        readonly
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-4"
            snapshot={Snapshot.ObjectOptions}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
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
        aria-controls="listbox-id-4"
        readonly
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-4"
            snapshot={Snapshot.ObjectOptionsFocused}
            type="plain"
            count={8}
            visualSelection
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
    id: 'selecting-a-single-option',
    label: 'Selecting a single option',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-6"
        readonly
        value="Accounts"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-6"
            snapshot={Snapshot.ObjectOptionsSingleSelection}
            type="plain"
            count={8}
            visualSelection
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
    id: 'selected-an-option-closed',
    label: 'Selected an option - Closed',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-5"
        readonly
        value="Accounts"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-5"
            snapshot={Snapshot.ObjectOptionsSingleSelection}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
      />
    )
  },
  {
    id: 'selecting-multiple-options',
    label: 'Selecting multiple options',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-7"
        readonly
        value="2 Options Selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-7"
            snapshot={Snapshot.ObjectOptionsMultiSelection}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'selected-multiple-options-closed',
    label: 'Selected multiple options-closed',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-8"
        readonly
        value="2 Options Selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-8"
            snapshot={Snapshot.ObjectOptionsMultiSelection}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={Snapshot.ObjectOptionsSelected}
            count={2}
          />
        }
      />
    )
  },
  {
    id: 'loading-options',
    label: 'Loading more options',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-222"
        readonly
        value="Accounts"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-222"
            snapshot={Snapshot.ObjectOptions}
            type="plain"
            count={3}
            visualSelection
            loading
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'grouped-options',
    label: 'Grouped options',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-3"
        readonly
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <ListboxWrapper
            id="listbox-id-3"
            className="slds-dropdown slds-dropdown_fluid"
          >
            <ListboxGroup
              aria-label="Group One"
              snapshot={Snapshot.PlainOptionsGroupOne}
              count={3}
            />
            <ListboxGroup
              aria-label="Group Two"
              snapshot={Snapshot.PlainOptionsGroupTwo}
              count={3}
            />
          </ListboxWrapper>
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'deprecated-closed',
    label: 'Deprecated - Closed',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          autocomplete
          inputIcon="right"
          inputIconRightSymbol="search"
          listbox={<ListboxDropdown />}
        />
      </div>
    )
  },
  {
    id: 'deprecated-focused',
    label: 'Deprecated - Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          isOpen
          autocomplete
          inputIcon="right"
          inputIconRightSymbol="search"
          listbox={<ListboxDropdown />}
        />
      </div>
    )
  },
  {
    id: 'deprecated-open-item-focused',
    label: 'Deprecated - Open - Item Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          isOpen
          autocomplete
          inputIcon="right"
          inputIconRightSymbol="search"
          listbox={<ListboxDropdown focused />}
          aria-activedescendant={listboxOptionId01}
        />
      </div>
    )
  },
  {
    id: 'deprecated-closed-options-selected',
    label: 'Deprecated - Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          inputIcon="right"
          inputIconRightSymbol="search"
          autocomplete
          listbox={<ListboxDropdown />}
        >
          <ListboxPills className="slds-p-top_xxx-small">
            <ListboxPillsItem>
              <ListboxPill label="Acme" tabIndex="0">
                <StandardIcon
                  containerClassName="slds-pill__icon_container"
                  title="Account"
                  assistiveText="Account"
                />
              </ListboxPill>
            </ListboxPillsItem>
            <ListboxPillsItem>
              <ListboxPill label="Salesforce.com, Inc.">
                <StandardIcon
                  containerClassName="slds-pill__icon_container"
                  title="Account"
                  assistiveText="Account"
                />
              </ListboxPill>
            </ListboxPillsItem>
          </ListboxPills>
        </DeprecatedCombobox>
      </div>
    )
  }
];
