// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from 'ui/components/avatar/base/example';
import { StandardIcon } from 'ui/components/icons/standard/example';
import { ComboboxContainer, Listbox, ListboxItem, EntityOption }
  from 'ui/components/combobox/base/example';
import { ListboxPill }
  from 'ui/components/pills/listbox-of-pill-options/example';
import SvgIcon from 'app_modules/ui/svg-icon';

const listboxSelectionsId = 'listbox-selections-unique-id';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

const ListboxDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical={ true }>
    <ListboxItem>
      <EntityOption
        id={ listboxOptionId01 }
        entityTitle="Acme"
        entityMeta={ true }
        focused={ props.focused }
      />
    </ListboxItem>
    <ListboxItem>
      <EntityOption
        id={ listboxOptionId02 }
        entityTitle="Salesforce.com, Inc."
        entityMeta={ true }
      />
    </ListboxItem>
  </Listbox>;

export default (
  <div className="demo-only" style={{ height: '10rem' }}>
    <ComboboxContainer
      inputIcon="right"
      inputIconRightSymbol="search"
      selectedOptionsInline={ true }
      autocomplete={ true }
      listbox={ <ListboxDropdown /> }
    />
  </div>
);

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          className="slds-has-input-focus"
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline={ true }
          autocomplete={ true }
          isOpen={ true }
          listbox={ <ListboxDropdown /> }
        />
      </div>,
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline={ true }
          autocomplete={ true }
          isOpen={ true }
          listbox={ <ListboxDropdown focused /> }
          aria-activedescendant={ listboxOptionId01 }
        />
      </div>
  },
  {
    id: 'options-selected',
    label: 'Option(s) Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline={ true }
          autocomplete={ true }
          listbox={ <ListboxDropdown /> }
        >
          <Listbox aria-label="Selected Options:" inline={ true }>
            <ListboxItem>
              <ListboxPill label="Acme" tabIndex="0">
                <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                  <StandardIcon />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
            <ListboxItem>
              <ListboxPill label="Salesforce.com, Inc.">
                <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                  <StandardIcon />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
          </Listbox>
        </ComboboxContainer>
      </div>
  },
  {
    id: 'focused-options-selected',
    label: 'Focused - Option(s) Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen={ true }
          inputIcon="right"
          inputIconRightSymbol="search"
          className="slds-has-input-focus"
          selectedOptionsInline={ true }
          autocomplete={ true }
          listbox={ <ListboxDropdown /> }
        >
          <Listbox
            id={listboxSelectionsId}
            aria-label="Selected Options:"
            inline={ true }
          >
            <ListboxItem>
              <ListboxPill label="Acme" tabIndex="0">
                <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                  <StandardIcon />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
            <ListboxItem>
              <ListboxPill label="Salesforce.com, Inc.">
                <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                  <StandardIcon />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
          </Listbox>
        </ComboboxContainer>
      </div>,
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  }
];
