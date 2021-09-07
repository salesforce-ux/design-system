// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  DeprecatedCombobox,
  DeprecatedListbox,
  DeprecatedListboxItem,
  DeprecatedOption
} from '../deprecated';
import { ListboxItemHeading } from '../listbox';
import { ListboxPills, ListboxPillsItem, ListboxPill } from '../../pills';

const STORY_SINK_CONTEXT = 'Deprecated – Select-Only';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

const ListboxDropdown = props => (
  <DeprecatedListbox
    listboxClassName="slds-dropdown slds-dropdown_fluid"
    vertical
  >
    {props.heading && <ListboxItemHeading type="plain" text={props.heading} />}
    <DeprecatedListboxItem>
      <DeprecatedOption
        id={listboxOptionId01}
        title="Option A"
        focused={props.focused}
        selected={props.optionOneSelected}
      />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption
        id={listboxOptionId02}
        title="Option B"
        selected={props.optionTwoSelected}
      />
    </DeprecatedListboxItem>
  </DeprecatedListbox>
);

export default [
  {
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: `${STORY_SINK_CONTEXT.toLowerCase()}-default`,
    label: `${STORY_SINK_CONTEXT} default`,
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          inputIcon="right"
          inputIconRightSymbol="down"
          listbox={<ListboxDropdown />}
          readonly
        />
      </div>
    )
  }
];

export let states = [
  {
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-focused',
    label: 'Deprecated - Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
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
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-open-item-focused',
    label: 'Deprecated - Open - Item Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
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
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-open-option-selected',
    label: 'Deprecated - Open - Option Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
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
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-open-options-selected',
    label: 'Deprecated - Open - Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
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
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-closed-option-selected',
    label: 'Deprecated - Option Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
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
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-closed-options-selected',
    label: 'Deprecated - Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
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
        </DeprecatedCombobox>
      </div>
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    deprecated: true,
    id: 'deprecated-open-option-heading',
    label: 'Deprecated - Sub-heading',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <DeprecatedCombobox
          isOpen
          inputIcon="right"
          inputIconRightSymbol="down"
          value="Option A"
          listbox={
            <ListboxDropdown optionOneSelected heading="Recently Viewed" />
          }
          readonly
        />
      </div>
    )
  }
];
