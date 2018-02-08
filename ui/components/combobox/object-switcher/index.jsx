// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import { Listbox, ListboxItem, Option } from '../base/example';
import { UtilityIcon } from '../../icons/base/example';
import ObjectData from './data';
import Combobox from '../';
import _ from '../../../shared/helpers';

const comboboxId = _.uniqueId('objectswitcher-combobox-id-');
const listboxId = _.uniqueId('objectswitcher-listbox-id-');

/**
 * Object item
 */
const ObjectListItem = props => (
  <ListboxItem key={props.index}>
    <Option
      id={props.index}
      title={props.name}
      selected={props.selected}
      focused={props.focused}
    />
  </ListboxItem>
);

/**
 * Object List
 */
const ObjectList = props => (
  <Listbox
    id={listboxId}
    aria-label="Suggested for you"
    className="slds-dropdown slds-dropdown_x-small slds-dropdown_left slds-dropdown_length-5"
    vertical
  >
    <li role="presentation" className="slds-listbox__item">
      <div
        className="slds-media slds-listbox__option slds-listbox__option_plain"
        role="presentation"
        id="object0"
      >
        <h3
          className="slds-text-title_caps slds-truncate"
          role="presentation"
          title="Suggested for you"
        >
          Suggested for you
        </h3>
      </div>
    </li>
    {props.children}
  </Listbox>
);

class ObjectSwitcher extends Component {
  constructor() {
    super();
    this.renderObjectListboxItems = this.renderObjectListboxItems.bind(this);
  }

  renderObjectListboxItems(key) {
    const object = ObjectData[key];
    return (
      <ObjectListItem
        key={key}
        index={key}
        name={object.name}
        selected={object.selected}
        focused={object.focused}
      />
    );
  }
  render() {
    const {
      id,
      value,
      isOpen,
      hasFocus,
      comboboxAriaControls,
      hasInteractions
    } = this.props;
    return (
      <div
        className={classNames(
          'slds-combobox_object-switcher',
          this.props.addonPosition &&
            `slds-combobox-addon_${this.props.addonPosition}`
        )}
      >
        <Combobox
          id={comboboxId}
          aria-controls={listboxId}
          comboboxAriaControls={comboboxAriaControls}
          inputIcon="right"
          inputIconRightSymbol="down"
          label="Filter Search by:"
          hideLabel
          inputIconPosition="right"
          placeholder=" "
          value={value}
          rightInputIcon={
            <UtilityIcon
              symbol="down"
              className="slds-icon slds-icon_x-small slds-icon-text-default"
              containerClassName="slds-input__icon slds-input__icon_right"
            />
          }
          listbox={
            <ObjectList>
              {Object.keys(ObjectData).map(this.renderObjectListboxItems)}
            </ObjectList>
          }
          isOpen={isOpen}
          hasFocus={hasFocus}
          hasInteractions={hasInteractions}
        />
      </div>
    );
  }
}

export default ObjectSwitcher;
