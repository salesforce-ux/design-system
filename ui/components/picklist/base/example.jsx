// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  Option
} from '../../combobox/base/example';
import { ListboxPill } from '../../pills/listbox-of-pill-options/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const listboxSelectionsId = 'listbox-selections-unique-id';
const listboxOptionId00 = 'listbox-option-unique-id-00';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';
const listboxOptionId03 = 'listbox-option-unique-id-03';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ListboxDropdown = props =>
  <Listbox
    aria-label={props.heading ? props.heading : null}
    className="slds-dropdown slds-dropdown--fluid"
    vertical={true}
  >
    {props.heading ?
      <li role="presentation" className="slds-listbox__item">
        <span className="slds-media slds-listbox__option slds-listbox__option--plain" role="presentation" id={listboxOptionId00}>
          <h3 className="slds-text-title--caps" role="presentation">{props.heading}</h3>
        </span>
      </li>
    : null}
    <ListboxItem>
      <Option
        id={listboxOptionId01}
        title="Option A"
        focused={props.focused}
        selected={props.optionOneSelected}
      />
    </ListboxItem>
    <ListboxItem>
      <Option
        id={listboxOptionId02}
        title="Option B"
        selected={props.optionTwoSelected}
      />
    </ListboxItem>
    <ListboxItem>
      <Option
        id={listboxOptionId03}
        title="Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        selected={props.optionThreeSelected}
      />
    </ListboxItem>
  </Listbox>;

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Demo wrapper
export const Context = props =>
  <div style={{ height: '14rem' }}>
    {props.children}
  </div>;

// Default
export default (
  <ComboboxContainer
    className="slds-combobox-picklist"
    containerClassName="slds-size--small"
    inputIcon="right"
    inputIconRightSymbol="down"
    listbox={<ListboxDropdown />}
    readonly
  />
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element:
      <ComboboxContainer
        containerClassName="slds-size--small"
        isOpen={true}
        inputIcon="right"
        inputIconRightSymbol="down"
        listbox={<ListboxDropdown />}
        readonly
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
        containerClassName="slds-size--small"
        isOpen={true}
        inputIcon="right"
        inputIconRightSymbol="down"
        listbox={<ListboxDropdown focused={true} />}
        aria-activedescendant={listboxOptionId01}
        readonly
      />
  },
  {
    id: 'open-option-selected',
    label: 'Open - Option Selected',
    element:
      <ComboboxContainer
        containerClassName="slds-size--small"
        isOpen={true}
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Option A"
        listbox={<ListboxDropdown optionOneSelected={true} />}
        readonly
      />
  },
  {
    id: 'open-options-selected',
    label: 'Open - Option(s) Selected',
    element:
      <ComboboxContainer
        containerClassName="slds-size--small"
        isOpen={true}
        inputIcon="right"
        inputIconRightSymbol="down"
        value="2 Options Selected"
        listbox={
          <ListboxDropdown optionOneSelected={true} optionTwoSelected={true} />
        }
        readonly
      />
  },
  {
    id: 'closed-option-selected',
    label: 'Option Selected',
    element:
      <ComboboxContainer
        containerClassName="slds-size--small"
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Option A"
        listbox={<ListboxDropdown focused={true} optionOneSelected={true} />}
        readonly
      />
  },
  {
    id: 'closed-options-selected',
    label: 'Option(s) Selected',
    element:
      <ComboboxContainer
        containerClassName="slds-size--small"
        inputIcon="right"
        inputIconRightSymbol="down"
        value="2 Options Selected"
        listbox={
          <ListboxDropdown optionOneSelected={true} optionTwoSelected={true} />
        }
        readonly
      >
      <Listbox
        id={listboxSelectionsId}
        aria-label="Selected Options:"
        className="slds-p-top--xxx-small"
        horizontal
      >
        <ListboxItem>
          <ListboxPill label="Option A" tabIndex="0" />
        </ListboxItem>
        <ListboxItem>
          <ListboxPill label="Option B" />
        </ListboxItem>
      </Listbox>
    </ComboboxContainer>
  },
  {
    id: 'group-heading',
    label: 'Group heading label',
    element:
      <ComboboxContainer
        containerClassName="slds-size--small"
        isOpen={true}
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Option A"
        listbox={
          <ListboxDropdown optionOneSelected={true} heading="Recently Viewed" />
        }
        readonly
      />
  }
];
