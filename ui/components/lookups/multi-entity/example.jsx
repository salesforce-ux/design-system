// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { StandardIcon } from '../../icons/standard/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  EntityOption
} from '../../combobox/base/example';
import { ListboxPill }
  from '../../pills/listbox-of-pill-options/example';
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

const ListboxDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical>
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
  </Listbox>;

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Demo wrapper
export const Context = props =>
  <div style={{ height: '10rem' }}>
    {props.children}
  </div>;

// Default
export default (
  <ComboboxContainer
    inputIcon="right"
    inputIconRightSymbol="search"
    objectSwitcherInline
    autocomplete={true}
    listbox={<ListboxDropdown />}
    objectSwitcher={true}
  />
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element:
      <ComboboxContainer
        containerClassName="slds-has-input-focus"
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete={true}
        isOpen={true}
        listbox={<ListboxDropdown />}
        objectSwitcher
      />,
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element:
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline={true}
        autocomplete={true}
        isOpen={true}
        listbox={<ListboxDropdown focused />}
        objectSwitcher={true}
        aria-activedescendant={listboxOptionId01}
      />
  },
  {
    id: 'options-selected',
    label: 'Option(s) Selected',
    element:
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline={true}
        autocomplete={true}
        objectSwitcher={true}
      >
        <Listbox
          id={listboxSelectionsId}
          aria-label="Selected Options:"
          className="slds-p-top--xxx-small"
          inline
        >
          <ListboxItem>
            <ListboxPill label="Acme" tabIndex="0">
              <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                <StandardIcon symbol="account" />
              </Avatar>
            </ListboxPill>
          </ListboxItem>
          <ListboxItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                <StandardIcon symbol="opportunity" />
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
      <ComboboxContainer
        isOpen={true}
        containerClassName="slds-has-input-focus"
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline={true}
        autocomplete={true}
        listbox={<ListboxDropdown />}
        objectSwitcher={true}
      >
        <Listbox
          id={listboxSelectionsId}
          aria-label="Selected Options:"
          className="slds-p-top--xxx-small"
          inline
        >
          <ListboxItem>
            <ListboxPill label="Acme" tabIndex="0">
              <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                <StandardIcon symbol="account" />
              </Avatar>
            </ListboxPill>
          </ListboxItem>
          <ListboxItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                <StandardIcon symbol="opportunity" />
              </Avatar>
            </ListboxPill>
          </ListboxItem>
        </Listbox>
      </ComboboxContainer>,
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  }
];
