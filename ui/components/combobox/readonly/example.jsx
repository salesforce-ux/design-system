// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  Option
} from '../base/example';
import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill
} from '../../pills/listbox-of-pill-options/example';

const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

const ListboxDropdown = props => (
  <Listbox className="slds-dropdown slds-dropdown_fluid" vertical>
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
  </Listbox>
);

export default (
  <div className="demo-only" style={{ height: '10rem' }}>
    <ComboboxContainer
      inputIcon="right"
      inputIconRightSymbol="down"
      listbox={<ListboxDropdown />}
      readonly
    />
  </div>
);

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen
          inputIcon="right"
          inputIconRightSymbol="down"
          listbox={<ListboxDropdown />}
          readonly
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
          isOpen
          inputIcon="right"
          inputIconRightSymbol="down"
          listbox={<ListboxDropdown focused />}
          aria-activedescendant={listboxOptionId01}
          readonly
        />
      </div>
    )
  },
  {
    id: 'open-option-selected',
    label: 'Open - Option Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen
          inputIcon="right"
          inputIconRightSymbol="down"
          value="Option A"
          listbox={<ListboxDropdown optionOneSelected />}
          readonly
        />
      </div>
    )
  },
  {
    id: 'open-options-selected',
    label: 'Open - Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen
          inputIcon="right"
          inputIconRightSymbol="down"
          value="2 Options Selected"
          listbox={<ListboxDropdown optionOneSelected optionTwoSelected />}
          readonly
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
          inputIcon="right"
          inputIconRightSymbol="down"
          value="Option A"
          listbox={<ListboxDropdown focused optionOneSelected />}
          readonly
        />
      </div>
    )
  },
  {
    id: 'closed-options-selected',
    label: 'Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          inputIcon="right"
          inputIconRightSymbol="down"
          value="2 Options Selected"
          listbox={<ListboxDropdown optionOneSelected optionTwoSelected />}
          readonly
        >
          <ListboxPills className="slds-p-top_xxx-small">
            <ListboxPillsItem>
              <ListboxPill label="Option A" tabIndex="0" />
            </ListboxPillsItem>
            <ListboxPillsItem>
              <ListboxPill label="Option B" />
            </ListboxPillsItem>
          </ListboxPills>
        </ComboboxContainer>
      </div>
    )
  }
];
