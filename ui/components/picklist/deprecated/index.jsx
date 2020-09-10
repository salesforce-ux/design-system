/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// pulled this file's contents from `v2.2.2` to display and test #4113

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import {
  FormElement,
  FormElementLabel,
  FormElementControl
} from '../../form-element/';
import _ from '../../../shared/helpers';

export const ListboxDeprecated = props => (
  <div className={classNames('slds-dropdown', props.className)} role="listbox">
    {props.children}
  </div>
);

export const ListboxListDeprecated = props => (
  <ul
    id={props.id || 'option-list-01'}
    className={classNames('slds-dropdown__list', props.className)}
    role={props.role === 'group' ? 'group' : 'presentation'}
    aria-label={props.role === 'group' ? props['aria-label'] : null}
  >
    {props.children}
  </ul>
);

export const ListboxItemDeprecated = props => {
  const uniqueId = _.uniqueId('listbox-option-');

  return (
    <li className={props.className} role="presentation">
      <span
        className={classNames(
          props.role === 'presentation'
            ? 'slds-lookup__item_label'
            : props.text
            ? 'slds-lookup__item-action slds-lookup__item-action_label'
            : 'slds-lookup__item-action slds-media'
        )}
        role={!props.role ? 'option' : props.role}
        tabIndex={props.tabIndex || '-1'}
        id={uniqueId}
      >
        {props.isSelectable ? (
          <SvgIcon
            className="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small slds-shrink-none"
            sprite="utility"
            symbol="check"
          />
        ) : null}
        {props.headerText ? (
          <h3 className="slds-text-title_caps" role="presentation">
            {props.headerText}
          </h3>
        ) : props.text ? (
          <span className="slds-truncate" title={props.title}>
            {props.children}
          </span>
        ) : (
          props.children
        )}
      </span>
    </li>
  );
};

export const ComboboxSearchInputDeprecated = ({
  autocomplete,
  dropdown,
  placeholder
}) => (
  <FormElement>
    <FormElementLabel labelContent="Categories" inputId="text-input-01" />
    <FormElementControl className="slds-input-has-icon slds-input-has-icon_right slds-picklist__input">
      <input
        id="text-input-01"
        className="slds-lookup__search-input slds-input"
        type="text" // changed to pass aria test on deprecated markup, originally set to: "search"
        placeholder={placeholder}
        aria-owns="option-list-01"
        role="textbox" // changed to pass aria test on deprecated markup, originally set to: "combobox"
        // removed below to pass aria test on deprecated markup, originally set to: "combobox"
        // aria-expanded={props.dropdown === 'open' ? 'true' : 'false'}
        readOnly={!autocomplete}
        aria-autocomplete={autocomplete ? 'list' : null}
      />
      {!autocomplete ? (
        <ButtonIcon
          className="slds-input__icon slds-text-color_default"
          symbol="down"
          assistiveText="Expand category options"
          aria-expanded={dropdown === 'open' ? 'true' : 'false'}
          iconClassName="slds-button__icon"
          tabIndex="-1"
        />
      ) : null}
    </FormElementControl>
  </FormElement>
);

ComboboxSearchInputDeprecated.propTypes = {
  autocomplete: PropTypes.bool,
  dropdown: PropTypes.string,
  placeholder: PropTypes.string
};

ComboboxSearchInputDeprecated.defaultProps = {
  placeholder: 'Select an Option…'
};
