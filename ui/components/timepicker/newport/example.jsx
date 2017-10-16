// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  Option
} from '../../combobox/newport/example';
import { DatePicker } from '../../datepickers/base/example';
import { UtilityIcon } from '../../icons/base/example';
import { FormElement } from '../../form-element/base/example';
import { NewportInput } from '../../input/newport/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const dateInputId = 'date-input-id';
const timeInputId = 'time-input-id';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';
const listboxOptionId03 = 'listbox-option-unique-id-03';
const listboxOptionId04 = 'listbox-option-unique-id-04';
const listboxOptionId05 = 'listbox-option-unique-id-05';
const listboxOptionId06 = 'listbox-option-unique-id-06';
const listboxOptionId07 = 'listbox-option-unique-id-07';
const listboxOptionId08 = 'listbox-option-unique-id-08';
const listboxOptionId09 = 'listbox-option-unique-id-09';
const listboxOptionId10 = 'listbox-option-unique-id-10';
const listboxOptionId11 = 'listbox-option-unique-id-11';
const listboxOptionId12 = 'listbox-option-unique-id-12';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const NewportListboxDropdown = props => (
  <Listbox
    className="slds-dropdown slds-dropdown--fluid slds-dropdown--length-5"
    vertical
  >
    <ListboxItem>
      <Option
        id={listboxOptionId01}
        title="6:00am"
        focused={props.optionFocused}
      />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId02} title="7:00am" />
    </ListboxItem>
    <ListboxItem>
      <Option
        id={listboxOptionId03}
        title="8:00am"
        selected={props.optionSelected}
      />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId04} title="9:00am" />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId05} title="10:00am" />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId06} title="11:00am" />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId07} title="12:00pm" />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId08} title="1:00pm" />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId09} title="2:00pm" />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId10} title="3:00pm" />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId11} title="4:00pm" />
    </ListboxItem>
    <ListboxItem>
      <Option id={listboxOptionId12} title="5:00pm" />
    </ListboxItem>
  </Listbox>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Demo wrapper
export const Context = props => (
  <div style={{ height: '15rem' }}>{props.children}</div>
);

// Default
export default (
  <ComboboxContainer
    label="Time"
    className="slds-combobox-picklist slds-timepicker"
    inputIcon="right"
    inputIconRightSymbol="clock"
    placeholder=" "
    listbox={<NewportListboxDropdown />}
  />
);

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <ComboboxContainer
        label="Time"
        className="slds-combobox-picklist slds-timepicker"
        isOpen
        inputIcon="right"
        inputIconRightSymbol="clock"
        placeholder=" "
        listbox={<NewportListboxDropdown />}
      />
    )
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <ComboboxContainer
        label="Time"
        className="slds-combobox-picklist slds-timepicker"
        isOpen
        inputIcon="right"
        inputIconRightSymbol="clock"
        placeholder=" "
        listbox={<NewportListboxDropdown optionFocused />}
        aria-activedescendant={listboxOptionId01}
      />
    )
  },
  {
    id: 'time-selection',
    label: 'Open - Time selected',
    element: (
      <ComboboxContainer
        label="Time"
        className="slds-combobox-picklist slds-timepicker"
        isOpen
        inputIcon="right"
        inputIconRightSymbol="clock"
        placeholder=" "
        value="8:00am"
        listbox={<NewportListboxDropdown optionSelected />}
      />
    )
  }
];
