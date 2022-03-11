// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Combobox from '../../combobox';
import Listbox, { ListboxWrapper, ListboxGroup } from '../../combobox/listbox/';
import {
  ListboxDeprecated,
  ListboxListDeprecated,
  ListboxItemDeprecated,
  ComboboxSearchInputDeprecated
} from '../deprecated/';
import ListboxOfSelections from '../../combobox/listbox-of-pills/';
import { UtilityIcon } from '../../icons/base/example';
import _ from '../../../shared/helpers';
import * as snapshot from '../snapshots.data';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        containerClassName="slds-size_small"
        aria-controls="listbox-id-1"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-1"
            snapshot={snapshot.options}
            type="plain"
            count={8}
          />
        }
        resultsType="listbox"
        selectOnly
        hasInteractions
      />
    )
  }
];

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        containerClassName="slds-size_small"
        aria-controls="listbox-id-2"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-2"
            snapshot={snapshot.options}
            type="plain"
            count={8}
          />
        }
        resultsType="listbox"
        selectOnly
        hasFocus
        isOpen
      />
    )
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        containerClassName="slds-size_small"
        aria-controls="listbox-id-3"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-3"
            snapshot={snapshot.optionsFocused}
            type="plain"
            count={8}
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        selectOnly
        hasFocus
        isOpen
      />
    )
  },
  {
    id: 'open-option-selected',
    label: 'Open - Option Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        containerClassName="slds-size_small"
        aria-controls="listbox-id-4"
        inputIconPosition="right"
        value="Option A"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-4"
            snapshot={snapshot.optionSelected}
            type="plain"
            count={8}
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        selectOnly
        hasFocus
        isOpen
      />
    )
  },
  {
    id: 'open-options-selected',
    label: 'Open - Options Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        containerClassName="slds-size_small"
        aria-controls="listbox-id-5"
        selectOnly
        value="2 Options Selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-5"
            snapshot={snapshot.optionsSelected}
            type="plain"
            count={8}
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'closed-option-selected',
    label: 'Closed - Option Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        containerClassName="slds-size_small"
        aria-controls="listbox-id-6"
        inputIconPosition="right"
        value="Option A"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-6"
            snapshot={snapshot.optionSelected}
            type="plain"
            count={8}
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        selectOnly
      />
    )
  },
  {
    id: 'closed-options-selected',
    label: 'Closed - Options Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        containerClassName="slds-size_small"
        aria-controls="listbox-id-7"
        selectOnly
        value="2 Options Selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-7"
            snapshot={snapshot.optionsSelected}
            type="plain"
            count={8}
          />
        }
        resultsType="listbox"
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={snapshot.selectionOfOptions}
            count={2}
          />
        }
      />
    )
  },
  {
    id: 'group-heading',
    label: 'Group heading label',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        containerClassName="slds-size_small"
        aria-controls="listbox-id-8"
        selectOnly
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <ListboxWrapper
            id="listbox-id-8"
            className="slds-dropdown slds-dropdown_fluid"
          >
            <ListboxGroup
              aria-label="Group One"
              snapshot={snapshot.optionGroup}
              count={3}
            />
          </ListboxWrapper>
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    // pulled this from `v2.2.2` to display and test #4113
    id: 'deprecated-picklist-open',
    label: 'Deprecated Picklist Open',
    element: (
      <div className="demo-only" style={{ height: '240px' }}>
        <div className="slds-picklist slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
          <ComboboxSearchInputDeprecated dropdown="open" />
          <ListboxDeprecated className="slds-dropdown_left slds-dropdown_length-5">
            <ListboxListDeprecated>
              <ListboxItemDeprecated
                isSelectable
                text
                title="Option A"
                tabIndex="0"
              >
                Option A
              </ListboxItemDeprecated>
              <ListboxItemDeprecated isSelectable text title="Option B">
                Option B
              </ListboxItemDeprecated>
              <ListboxItemDeprecated isSelectable text title="Option C">
                Option C
              </ListboxItemDeprecated>
              <ListboxItemDeprecated isSelectable text title="Option D">
                Option D
              </ListboxItemDeprecated>
              <ListboxItemDeprecated isSelectable text title="Option E">
                Option E
              </ListboxItemDeprecated>
              <ListboxItemDeprecated isSelectable text title="Option F">
                Option FGHIJKLMNOPQRSTUVWXYZ
              </ListboxItemDeprecated>
            </ListboxListDeprecated>
          </ListboxDeprecated>
        </div>
      </div>
    )
  }
];
