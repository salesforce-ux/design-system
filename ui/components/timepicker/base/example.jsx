// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  DeprecatedCombobox,
  DeprecatedListbox,
  DeprecatedListboxItem,
  DeprecatedOption
} from '../../combobox/deprecated/';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

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

const ListboxDropdown = props => (
  <DeprecatedListbox
    listboxClassName="slds-dropdown slds-dropdown_fluid slds-dropdown_length-5"
    vertical
  >
    <DeprecatedListboxItem>
      <DeprecatedOption
        id={listboxOptionId01}
        title="6:00am"
        focused={props.optionFocused}
      />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId02} title="7:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption
        id={listboxOptionId03}
        title="8:00am"
        selected={props.optionSelected}
      />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId04} title="9:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId05} title="10:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId06} title="11:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId07} title="12:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId08} title="1:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId09} title="2:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId10} title="3:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId11} title="4:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption id={listboxOptionId12} title="5:00pm" />
    </DeprecatedListboxItem>
  </DeprecatedListbox>
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
  <DeprecatedCombobox
    label="Time"
    className="slds-combobox-picklist slds-timepicker"
    autocomplete
    inputIcon="right"
    inputIconRightSymbol="clock"
    inputIconRightAssistiveText={false}
    placeholder=" "
    listbox={<ListboxDropdown />}
  />
);

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <DeprecatedCombobox
        label="Time"
        className="slds-combobox-picklist slds-timepicker"
        autocomplete
        isOpen
        inputIcon="right"
        inputIconRightSymbol="clock"
        inputIconRightAssistiveText={false}
        placeholder=" "
        listbox={<ListboxDropdown />}
      />
    )
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <DeprecatedCombobox
        label="Time"
        className="slds-combobox-picklist slds-timepicker"
        autocomplete
        isOpen
        inputIcon="right"
        inputIconRightSymbol="clock"
        inputIconRightAssistiveText={false}
        placeholder=" "
        listbox={<ListboxDropdown optionFocused />}
        aria-activedescendant={listboxOptionId01}
      />
    )
  },
  {
    id: 'time-selection',
    label: 'Open - Time selected',
    element: (
      <DeprecatedCombobox
        label="Time"
        className="slds-combobox-picklist slds-timepicker"
        autocomplete
        isOpen
        inputIcon="right"
        inputIconRightSymbol="clock"
        inputIconRightAssistiveText={false}
        placeholder=" "
        value="8:00am"
        listbox={<ListboxDropdown optionSelected />}
      />
    )
  }
];
