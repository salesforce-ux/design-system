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
import Grid, { Column } from '../../../utilities/grid/docs/Grid';
import _ from '../../../shared/helpers';
import * as Snapshot from '../snapshots.data';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */
const STORY_SINK_CONTEXT = 'Select-Only (Base)';
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

const ComboBoxDefault = props => (
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
    selectOnly
    {...props}
  />
)

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default [
  {
    context: STORY_SINK_CONTEXT,
    id: `${STORY_SINK_CONTEXT.toLowerCase()}-default`,
    label: `${STORY_SINK_CONTEXT} default (select-only)`,
    element: (
      <ComboBoxDefault />
    )
  }
];

// States
export let states = [
  {
    context: STORY_SINK_CONTEXT,
    id: 'focused',
    label: 'Focused (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-4"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'focused-open',
    label: 'Focused - Opened (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-4"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'highlighting-an-option',
    label: 'Highlighting an option (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-4"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'selecting-a-single-option',
    label: 'Selecting a single option (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-6"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'selected-an-option-closed',
    label: 'Selected an option - Closed (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-5"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'selecting-multiple-options',
    label: 'Selecting multiple options (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-7"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'selected-multiple-options-closed',
    label: 'Selected multiple options-closed (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-8"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'selecting-a-single-option-truncated',
    label: 'Selecting a single option (truncated)',
    demoStyles: 'max-width: 225px;',
    storybookStyles: true,
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-6"
        selectOnly
        value="Accounts (should truncate)"
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
    context: STORY_SINK_CONTEXT,
    id: 'loading-options',
    label: 'Loading more options (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-222"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'grouped-options',
    label: 'Grouped options (select-only)',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls="listbox-id-3"
        selectOnly
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
    context: STORY_SINK_CONTEXT,
    id: 'deprecated-closed',
    label: 'Deprecated - Closed (select-only)',
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
    context: STORY_SINK_CONTEXT,
    id: 'deprecated-focused',
    label: 'Deprecated - Focused (select-only)',
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
    context: STORY_SINK_CONTEXT,
    id: 'deprecated-open-item-focused',
    label: 'Deprecated - Open - Item Focused (select-only)',
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
    context: STORY_SINK_CONTEXT,
    id: 'deprecated-closed-options-selected',
    label: 'Deprecated - Option(s) Selected (select-only)',
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
  },
  {
    context: STORY_SINK_CONTEXT,
    id: `${STORY_SINK_CONTEXT.toLowerCase()}-without-placeholder`,
    label: `${STORY_SINK_CONTEXT} without placeholder (select-only)`,
    element: (
      <Grid className="slds-gutters">
        <Column><ComboBoxDefault placeholder="This has a placeholder…"/></Column>
        <Column><ComboBoxDefault placeholder=""/></Column>
        <Column><ComboBoxDefault placeholder="…the middle one does not"/></Column>
      </Grid>
    )
  }
];
