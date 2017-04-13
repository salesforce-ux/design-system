// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { StandardIcon } from '../../icons/standard/example';
import { ComboboxContainer, Listbox, ListboxItem, EntityOption }
  from '../base/example';
import { ListboxPill }
  from '../../pills/listbox-of-pill-options/example';
import SvgIcon from '../../../shared/svg-icon';

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
      objectSwitcherInline={ true }
      autocomplete={ true }
      listbox={ <ListboxDropdown /> }
      objectSwitcher={ true }
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
          objectSwitcherInline={ true }
          autocomplete={ true }
          isOpen={ true }
          listbox={ <ListboxDropdown /> }
          objectSwitcher={ true }
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
          objectSwitcherInline={ true }
          autocomplete={ true }
          isOpen={ true }
          listbox={ <ListboxDropdown focused /> }
          objectSwitcher={ true }
          aria-activedescendant={ listboxOptionId01 }
        />
      </div>
  },
  {
    id: 'options-selected',
    label: 'Option(s) Selected',
    element:
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline={ true }
        autocomplete={ true }
        objectSwitcher={ true }
      >
        <Listbox
          id={listboxSelectionsId}
          aria-label="Selected Options:"
          className="slds-p-top--xxx-small"
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
  },
  {
    id: 'focused-options-selected',
    label: 'Focused - Option(s) Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen={ true }
          className="slds-has-input-focus"
          inputIcon="right"
          inputIconRightSymbol="search"
          objectSwitcherInline={ true }
          autocomplete={ true }
          listbox={ <ListboxDropdown /> }
          objectSwitcher={ true }
        >
          <Listbox
            id={listboxSelectionsId}
            aria-label="Selected Options:"
            className="slds-p-top--xxx-small"
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

export let examples = [
  {
    id: 'inline-options-selected',
    label: 'Inline Option(s) Selected',
    element:
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        selectedOptionsInline={ true }
        autocomplete={ true }
        objectSwitcher={ true }
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
  },
  {
    id: 'focused-inline-options-selected',
    label: 'Focused - Inline Option(s) Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen={ true }
          className="slds-has-input-focus"
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline={ true }
          autocomplete={ true }
          listbox={ <ListboxDropdown /> }
          objectSwitcher={ true }
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
