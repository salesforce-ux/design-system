// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { ButtonIcon } from '../../button-icons/base/example';
import { Trigger, Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { PillContainer } from '../../pills/base/example';
import { Listbox as ListboxHoriz, ListboxItem as ListItemHoriz } from '../../combobox/base/example';
import { ListboxPill } from '../../pills/listbox-of-pill-options/example';
import { FormElement } from '../../form-element/base/example';
import { Input } from '../../input/base/example';
import _ from 'lodash';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Listbox = props =>
  <div className={props.className} id={props.id || 'option-list-01'} role="listbox">
    {props.children}
  </div>;

export let ListboxList = props =>
  <ul
    className={classNames('slds-dropdown__list', props.className)}
    role={props.role == 'group' ? 'group' : 'presentation'}
    aria-label={props.role == 'group' ? props['aria-label'] : null}
  >
    {props.children}
  </ul>;

export let ListboxItem = props => {
  const uniqueId = _.uniqueId('listbox-option-');

  return (
    <li className={props.className} role="presentation">
      <span
        className={classNames(props.role == 'presentation' ? 'slds-lookup__item--label' : (props.text ? 'slds-lookup__item-action slds-lookup__item-action--label' : 'slds-lookup__item-action slds-media'))}
        role={!props.role ? 'option' : props.role}
        tabIndex={props.tabIndex}
        id={uniqueId}
      >
        { props.isSelectable
          ? <SvgIcon className="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small slds-shrink-none" sprite="utility" symbol="check" />
        : null }
        { props.headerText
          ? <h3 className="slds-text-title--caps" role="presentation">{ props.headerText }</h3>
        : (props.text
          ? <span className="slds-truncate" title={props.children}>{ props.children }</span>
        : props.children
        )}
      </span>
    </li>
  );
};

export const PickList = props =>
  <div
    aria-expanded={props.isOpen ? 'true' : 'false'}
    aria-haspopup="listbox"
    className={classNames('slds-picklist slds-dropdown-trigger slds-dropdown-trigger--click', { 'slds-is-open': props.isOpen, 'slds-picklist--fluid': props.isFluid }, props.classNames)}
    role="combobox"
  >
    { props.children }
  </div>;

let ComboboxSearchInput = props =>
  <FormElement
    label="Categories"
    inputId="text-input-01"
    inputIcon="right"
    formControlClassName="slds-picklist__input"
  >
      <input
        aria-activedescendant=""
        aria-autocomplete={props.autocomplete ? 'list' : null}
        aria-controls="option-list-01"
        autoComplete="off"
        className="slds-lookup__search-input slds-input"
        id="text-input-01"
        placeholder={props.placeholder || 'Select an Option'}
        readOnly={!props.autocomplete}
        role="textbox"
        type="text"
        value={props.value}
      />
      {
        !props.autocomplete
        ? <ButtonIcon
          className="slds-input__icon slds-text-color--default"
          symbol="down"
          assistiveText="Expand category options"
          title="Expand category options"
          aria-expanded={props.dropdown == 'open' ? 'true' : 'false'}
          iconClassName="slds-button__icon"
          tabIndex="-1"
          />
        : null
      }
  </FormElement>;

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <div className="demo-only" style={{height: '240px'}}>
    <PickList isOpen>
      <ComboboxSearchInput dropdown="open" />
      <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
        <ListboxList>
          <ListboxItem isSelectable text>Option A</ListboxItem>
          <ListboxItem isSelectable text>Option B</ListboxItem>
          <ListboxItem isSelectable text>Option C</ListboxItem>
          <ListboxItem isSelectable text>Option D</ListboxItem>
          <ListboxItem isSelectable text>Option E</ListboxItem>
          <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
        </ListboxList>
      </Listbox>
    </PickList>
  </div>
);

export let states = [
  {
    id: 'picklist-closed',
    label: 'Closed',
    element:
      <PickList>
        <ComboboxSearchInput />
        <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
          <ListboxList>
            <ListboxItem isSelectable text>Option A</ListboxItem>
            <ListboxItem isSelectable text>Option B</ListboxItem>
            <ListboxItem isSelectable text>Option C</ListboxItem>
            <ListboxItem isSelectable text>Option D</ListboxItem>
            <ListboxItem isSelectable text>Option E</ListboxItem>
            <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
          </ListboxList>
        </Listbox>
      </PickList>
  },
  {
    id: 'picklist-open-item-selected',
    label: 'Item selected',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <PickList isOpen>
          <ComboboxSearchInput value="Option A" dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList>
              <ListboxItem className="slds-is-selected" isSelected="true" text isSelectable>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem isSelectable text>Option B</ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </PickList>
      </div>
  },
  {
    id: 'picklist-open-item-multi-selected',
    label: 'Multiple items selected',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <PickList isOpen>
          <ComboboxSearchInput value="2 Options selected" dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option B
              </ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </PickList>
      </div>
  },
  {
    id: 'picklist-closed-item-multi-selected',
    label: 'Closed - Multiple items selected',
    element:
      <div className="demo-only">
        <PickList>
          <ComboboxSearchInput value="2 Options selected" dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left">
            <ListboxList>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option B
              </ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </PickList>
        <PillContainer className="slds-pill_container--bare">
          <ListboxHoriz horizontal>
            <ListItemHoriz>
              <ListboxPill label="Option A" tabIndex="0" />
            </ListItemHoriz>
            <ListItemHoriz>
              <ListboxPill label="Option B" />
            </ListItemHoriz>
          </ListboxHoriz>
        </PillContainer>
      </div>
  },
  {
    id: 'picklist-with-header',
    label: 'With Header',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <PickList isOpen>
          <ComboboxSearchInput value="2 Options selected" dropdown="open" />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList role="group" aria-label="Recently Viewed">
              <ListboxItem role="presentation" headerText="Recently Viewed" />
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option B
              </ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </PickList>
      </div>
  },
  {
    id: 'picklist-with-autocomplete',
    label: 'Autocomplete',
    element:
      <div className="demo-only" style={{height: '240px'}}>
        <PickList isOpen>
          <ComboboxSearchInput placeholder="Find Option" dropdown="open" autocomplete />
          <Listbox className="slds-dropdown slds-dropdown--left slds-dropdown--length-5">
            <ListboxList role="group" aria-label="Recently Viewed">
              <ListboxItem role="presentation" headerText="Recently Viewed" />
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option A
              </ListboxItem>
              <ListboxItem className="slds-is-selected" isSelected="true" isSelectable text>
                <span className="slds-assistive-text">Current Selection:</span>Option B
              </ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
            <ListboxList role="group" aria-label="Another List" className="slds-has-divider--top-space">
              <ListboxItem role="presentation" headerText="Another List" />
              <ListboxItem isSelectable text>Option A</ListboxItem>
              <ListboxItem isSelectable text>Option B</ListboxItem>
              <ListboxItem isSelectable text>Option C</ListboxItem>
              <ListboxItem isSelectable text>Option D</ListboxItem>
              <ListboxItem isSelectable text>Option E</ListboxItem>
              <ListboxItem isSelectable text title="Option FGHIJKLMNOPQRSTUVWXYZ">Option FGHIJKLMNOPQRSTUVWXYZ</ListboxItem>
            </ListboxList>
          </Listbox>
        </PickList>
      </div>
  }
];
