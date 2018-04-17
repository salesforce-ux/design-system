// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Combobox, { ComboboxGroup } from '../../combobox/';
import Listbox, {
  ListboxGroup,
  ListboxWrapper,
  Option
} from '../../combobox/listbox/';
import ListboxOfSelections from '../../combobox/listbox-of-pills/';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import * as Snapshot from '../../combobox/snapshots.data';

// Demo wrapper
export const Context = props => (
  <div style={{ height: '15rem' }}>{props.children}</div>
);

// Default
export default (
  <Combobox
    id="combobox-id-1"
    aria-controls="listbox-id-1"
    autocomplete
    inputIconPosition="right"
    rightInputIcon={
      <UtilityIcon
        symbol="search"
        className="slds-icon slds-icon_x-small slds-icon-text-default"
        containerClassName="slds-input__icon slds-input__icon_right"
        assistiveText={false}
        title={false}
      />
    }
    listbox={
      <Listbox
        id="listbox-id-1"
        snapshot={Snapshot.EntityOptions}
        type="entity"
        count={3}
      />
    }
    hasInteractions
  />
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <Combobox
        id="combobox-id-2"
        aria-controls="listbox-id-2"
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listbox={
          <Listbox
            id="listbox-id-2"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={3}
          />
        }
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <Combobox
        id="combobox-id-3"
        aria-controls="listbox-id-3"
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listbox={
          <Listbox
            id="listbox-id-3"
            snapshot={Snapshot.EntityOptionsFocused}
            type="entity"
            count={3}
          />
        }
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'displaying-options-based-on-input',
    label: 'Displaying options based on user input',
    element: (
      <Combobox
        id="combobox-id-4"
        aria-controls="listbox-id-4"
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        value="salesforce"
        listbox={
          <Listbox
            id="listbox-id-4"
            snapshot={Snapshot.EntityOptionsTypeahead}
            term="salesforce"
            type="entity"
            count={4}
          />
        }
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'closed-option-selected',
    label: 'Option Selected',
    element: (
      <Combobox
        id="combobox-id-5"
        aria-controls="listbox-id-5"
        inputIconPosition="left-right"
        leftInputIcon={
          <StandardIcon
            symbol="account"
            className="slds-icon_small"
            containerClassName="slds-combobox__input-entity-icon"
            assistiveText="Account"
            title="Account"
          />
        }
        rightInputIcon={
          <ButtonIcon
            className="slds-input__icon slds-input__icon_right"
            symbol="close"
            title="Remove selected option"
            assistiveText="Remove selected option"
          />
        }
        listbox={
          <Listbox
            id="listbox-id-5"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        hasSelection
        value="Salesforce.com, Inc."
        readonly
      />
    )
  }
];
