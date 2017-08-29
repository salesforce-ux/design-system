// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { StandardIcon } from '../../icons/standard/example';
import { ButtonIcon } from '../../button-icons/base/example';
import { ListboxPill } from '../../pills/listbox-of-pill-options/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  EntityOption
} from '../../combobox/base/example';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from '../../modals/base/example';
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

// Demo wrapper
export const Context = props => (
  <div style={{ height: '10rem' }}>{props.children}</div>
);

// Default
export default (
  <ComboboxContainer
    className="slds-combobox-lookup"
    selectedOptionsInline
    inputIcon="right"
    inputIconRightSymbol="search"
    autocomplete
    listbox={<ListboxDropdown />}
  />
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <ComboboxContainer
        selectedOptionsInline
        containerClassName="slds-has-input-focus"
        isOpen
        autocomplete
        inputIcon="right"
        inputIconRightSymbol="search"
        listbox={<ListboxDropdown />}
      />
    )
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <ComboboxContainer
        selectedOptionsInline
        isOpen
        autocomplete
        inputIcon="right"
        inputIconRightSymbol="search"
        listbox={<ListboxDropdown focused />}
        aria-activedescendant={listboxOptionId01}
      />
    )
  },
  {
    id: 'closed-option-selected',
    label: 'Option Selected',
    element: (
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
    )
  }
];
