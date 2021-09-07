// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { StandardIcon } from '../../icons/standard/example';
import { ListboxPills, ListboxPillsItem, ListboxPill } from '../../pills';
import {
  DeprecatedCombobox,
  DeprecatedListbox,
  DeprecatedListboxItem,
  DeprecatedEntityOption
} from '../deprecated';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */
const STORY_SINK_CONTEXT = 'Deprecated – Inline-Listbox';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ListboxDropdown = props => (
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
export default [
  {
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: `${STORY_SINK_CONTEXT.toLowerCase()}-default`,
    label: `${STORY_SINK_CONTEXT} default`,
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline
          autocomplete
          listbox={<ListboxDropdown />}
        />
      </div>
    )
  }
];

// States
export let states = [
  {
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-focused',
    label: 'Deprecated - Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          containerClassName="slds-has-input-focus"
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline
          autocomplete
          isOpen
          listbox={<ListboxDropdown />}
        />
      </div>
    ),
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  },
  {
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-open-item-focused',
    label: 'Deprecated - Open - Item Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline
          autocomplete
          isOpen
          listbox={<ListboxDropdown focused />}
          aria-activedescendant={listboxOptionId01}
        />
      </div>
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-closed-option-selected',
    label: 'Deprecated - Option Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          selectedOptionsInline
          autocomplete
          readonly
          inputIcon="both"
          inputIconLeftSprite="standard"
          inputIconLeftSymbol="account"
          inputButtonIcon
          inputIconRightSymbol="close"
          value="Salesforce.com, Inc."
          listbox={<ListboxDropdown />}
        />
      </div>
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-options-selected',
    label: 'Deprecated - Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline
          autocomplete
          listbox={<ListboxDropdown />}
        >
          <ListboxPills>
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
    deprecated: true,
    id: 'deprecated-focused-options-selected',
    label: 'Deprecated - Focused - Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          isOpen
          inputIcon="right"
          inputIconRightSymbol="search"
          containerClassName="slds-has-input-focus"
          selectedOptionsInline
          autocomplete
          listbox={<ListboxDropdown />}
        >
          <ListboxPills>
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
    ),
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  }
];
