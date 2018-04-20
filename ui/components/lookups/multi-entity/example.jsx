// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Combobox, { ComboboxGroup } from '../../combobox/';
import Listbox, {
  ListboxGroup,
  ListboxWrapper,
  Option
} from '../../combobox/listbox/';
import ObjectSwitcher from '../../combobox/object-switcher/';
import ListboxOfSelections from '../../combobox/listbox-of-pills/';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import _ from '../../../shared/helpers';
import * as Snapshot from '../../combobox/snapshots.data';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Demo wrapper
export const Context = props => (
  <div style={{ height: '15rem' }}>{props.children}</div>
);

// Default
export default (
  <ComboboxGroup
    id="combobox-id-1"
    aria-controls="listbox-id-1"
    comboboxID="primary-combobox-id-1"
    autocomplete
    listbox={
      <Listbox
        id="listbox-id-1"
        snapshot={Snapshot.EntityOptions}
        type="entity"
        count={4}
      />
    }
    addon={
      <ObjectSwitcher
        id={_.uniqueId('combobox-id-')}
        value="Accounts"
        addonPosition="start"
        hasInteractions
        comboboxAriaControls="primary-combobox-id-1"
      />
    }
    addonPosition="start"
    comboboxPosition="end"
    inputIconPosition="right"
    rightInputIcon={
      <UtilityIcon
        symbol="search"
        className="slds-icon slds-icon_x-small slds-icon-text-default"
        containerClassName="slds-input__icon slds-input__icon_right"
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
      <ComboboxGroup
        id="combobox-id-1"
        aria-controls="listbox-id-1"
        comboboxID="primary-combobox-id-1"
        autocomplete
        listbox={
          <Listbox
            id="listbox-id-1"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            hasInteractions
            comboboxAriaControls="primary-combobox-id-1"
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
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
      <ComboboxGroup
        id="combobox-id-2"
        aria-controls="listbox-id-2"
        comboboxID="primary-combobox-id-2"
        autocomplete
        listbox={
          <Listbox
            id="listbox-id-2"
            snapshot={Snapshot.EntityOptionsFocused}
            type="entity"
            count={4}
          />
        }
        aria-activedescendant="option1"
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            hasInteractions
            comboboxAriaControls="primary-combobox-id-2"
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'options-selected',
    label: 'Option(s) Selected',
    element: (
      <ComboboxGroup
        id="combobox-id-3"
        aria-controls="listbox-id-3"
        comboboxID="primary-combobox-id-3"
        autocomplete
        listbox={
          <Listbox
            id="listbox-id-3"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        hasFocus
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-3"
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={2} />
        }
      />
    )
  },
  {
    id: 'focused-options-selected',
    label: 'Focused - Option(s) Selected',
    element: (
      <ComboboxGroup
        id="combobox-id-4"
        aria-controls="listbox-id-4"
        comboboxID="primary-combobox-id-4"
        autocomplete
        listbox={
          <Listbox
            id="listbox-id-4"
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        isOpen
        hasFocus
        addon={
          <ObjectSwitcher
            id={_.uniqueId('combobox-id-')}
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls="primary-combobox-id-4"
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={2} />
        }
      />
    )
  }
];
