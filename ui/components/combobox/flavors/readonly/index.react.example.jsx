// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ComboboxContainer, Listbox, ListboxItem, Option }
  from 'ui/components/combobox/flavors/base/index.react.example';
import { ListboxPill }
  from 'ui/components/pills/flavors/listbox-of-pill-options/index.react.example';

const listboxSelectionsId = 'listbox-selections-unique-id';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

const ListboxDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical={ true }>
    <ListboxItem>
      <Option
        id={ listboxOptionId01 }
        title="Option A"
        focused={ props.focused }
        selected={ props.optionOneSelected }
      />
    </ListboxItem>
    <ListboxItem>
      <Option
        id={ listboxOptionId02 }
        title="Option B"
        selected={ props.optionTwoSelected }
      />
    </ListboxItem>
  </Listbox>;

export default (
  <div className="demo-only" style={{ height: '10rem' }}>
    <ComboboxContainer
      inputIcon="right"
      inputIconRightSymbol="down"
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
          isOpen={ true }
          inputIcon="right"
          inputIconRightSymbol="down"
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
          isOpen={ true }
          inputIcon="right"
          inputIconRightSymbol="down"
          listbox={ <ListboxDropdown focused={true} /> }
          aria-activedescendant={ listboxOptionId01 }
        />
      </div>
  },
  {
    id: 'open-option-selected',
    label: 'Open - Option Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen={ true }
          inputIcon="right"
          inputIconRightSymbol="down"
          value="Option A"
          listbox={ <ListboxDropdown optionOneSelected={true} /> }
        />
      </div>
  },
  {
    id: 'open-options-selected',
    label: 'Open - Option(s) Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen={ true }
          inputIcon="right"
          inputIconRightSymbol="down"
          value="2 Options Selected"
          listbox={ <ListboxDropdown optionOneSelected={true} optionTwoSelected={true} /> }
        />
      </div>
  },
  {
    id: 'closed-option-selected',
    label: 'Option Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          inputIcon="right"
          inputButtonIcon={true}
          inputIconRightSymbol="close"
          value="Option A"
          listbox={ <ListboxDropdown focused={true} optionOneSelected={true} /> }
        />
      </div>
  },
  {
    id: 'closed-options-selected',
    label: 'Option(s) Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          inputIcon="right"
          inputIconRightSymbol="down"
          value="Option A"
          value="2 Options Selected"
          listbox={ <ListboxDropdown optionOneSelected={true} optionTwoSelected={true} /> }
        >
        <Listbox
          id={listboxSelectionsId}
          aria-label="Selected Options:"
          className="slds-p-top--xxx-small"
          horizontal={ true }
        >
          <ListboxItem>
            <ListboxPill label="Option A" tabIndex="0" />
          </ListboxItem>
          <ListboxItem>
            <ListboxPill label="Option B" />
          </ListboxItem>
        </Listbox>
      </ComboboxContainer>
    </div>
  }
];
