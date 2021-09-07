// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import Listbox from '../listbox/';
import { UtilityIcon } from '../../icons/base/example';
import * as Snapshot from './data';
import Combobox from '../';

const listboxId01 = 'objectswitcher-listbox-id-01';
const listboxId02 = 'objectswitcher-listbox-id-02';

class ObjectSwitcher extends Component {
  render() {
    const {
      id,
      value,
      isOpen,
      hasFocus,
      addonPosition,
      comboboxAriaControls,
      hasInteractions,
      listboxId
    } = this.props;
    return (
      <div
        className={classNames(
          'slds-combobox_object-switcher',
          addonPosition && `slds-combobox-addon_${addonPosition}`
        )}
      >
        <Combobox
          id={id}
          aria-controls={listboxId || listboxId01}
          comboboxAriaControls={comboboxAriaControls}
          label="Filter Search by:"
          hideLabel
          inputIconPosition="right"
          placeholder=" "
          value={value}
          selectOnly
          rightInputIcon={
            <UtilityIcon
              symbol="down"
              className="slds-icon slds-icon_xx-small slds-icon-text-default"
              containerClassName="slds-input__icon slds-input__icon_right"
              assistiveText={false}
              title={false}
            />
          }
          results={
            <Listbox
              className="slds-dropdown_x-small slds-dropdown_left"
              aria-label="Suggested for you"
              id={listboxId || listboxId01}
              snapshot={Snapshot.Options}
              type="plain"
              count={8}
            />
          }
          resultsType="listbox"
          isOpen={isOpen}
          hasFocus={hasFocus}
          hasInteractions={hasInteractions}
        />
      </div>
    );
  }
}

export class IconObjectSwitcher extends Component {
  render() {
    const {
      id,
      value,
      isOpen,
      hasFocus,
      filteredSymbol,
      addonPosition,
      comboboxAriaControls,
      hasInteractions,
      listboxId,
      label
    } = this.props;

    return (
      <div
        className={classNames(
          'slds-combobox_object-switcher',
          addonPosition && `slds-combobox-addon_${addonPosition}`
        )}
      >
        <Combobox
          id={id}
          containerClassName="slds-has-icon-only"
          aria-controls={listboxId || listboxId02}
          comboboxAriaControls={comboboxAriaControls}
          label={label || 'Filter Search by:'}
          hideLabel
          inputIconPosition="left-right"
          placeholder=" "
          value={value}
          leftInputIcon={
            <UtilityIcon
              symbol={filteredSymbol}
              className="slds-icon slds-icon_x-small slds-icon-text-default"
              containerClassName="slds-input__icon slds-input__icon_left"
              assistiveText={filteredSymbol}
              title={filteredSymbol}
            />
          }
          rightInputIcon={
            <UtilityIcon
              symbol="down"
              className="slds-icon slds-icon_xx-small slds-icon-text-default"
              containerClassName="slds-input__icon slds-input__icon_right"
              assistiveText={false}
              title={false}
            />
          }
          results={
            <Listbox
              className="slds-dropdown_x-small slds-dropdown_left"
              id={listboxId || listboxId02}
              hasUniqueId
              snapshot={Snapshot.BuilderOptions}
              type="plain"
              count={4}
            />
          }
          resultsType="listbox"
          isOpen={isOpen}
          hasFocus={hasFocus}
          hasInteractions={hasInteractions}
        />
      </div>
    );
  }
}

export default ObjectSwitcher;
