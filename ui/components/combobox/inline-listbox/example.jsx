// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { StandardIcon } from '../../icons/standard/example';
import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill
} from '../../pills/listbox-of-pill-options/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  EntityOption
} from '../base/example';
import SvgIcon from '../../../shared/svg-icon';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const listboxSelectionsId = 'listbox-selections-unique-id';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ListboxDropdown = props => (
  <Listbox className="slds-dropdown slds-dropdown_fluid" vertical>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId01}
        entityTitle="Acme"
        entityMeta
        focused={props.focused}
      />
    </ListboxItem>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId02}
        entityTitle="Salesforce.com, Inc."
        entityMeta
      />
    </ListboxItem>
  </Listbox>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default (
  <div className="demo-only" style={{ height: '10rem' }}>
    <ComboboxContainer
      inputIcon="right"
      inputIconRightSymbol="search"
      selectedOptionsInline
      autocomplete
      listbox={<ListboxDropdown />}
    />
  </div>
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
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
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
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
    id: 'closed-option-selected',
    label: 'Option Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
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
    id: 'options-selected',
    label: 'Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
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
        </ComboboxContainer>
      </div>
    )
  },
  {
    id: 'focused-options-selected',
    label: 'Focused - Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
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
        </ComboboxContainer>
      </div>
    ),
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  }
];
