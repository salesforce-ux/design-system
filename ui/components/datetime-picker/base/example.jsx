// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import {
  DeprecatedCombobox,
  DeprecatedListbox,
  DeprecatedListboxItem,
  DeprecatedOption
} from '../../combobox/deprecated/';
import { DatePicker } from '../../datepickers/base/example';
import ButtonIcon from '../../button-icons/';
import { FormElement } from '../../form-element';
import Input from '../../input/';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ExampleDatetimePicker = ({
  dropdown,
  dropdownIsOpen,
  listboxIsOpen,
  dateDefaultValue,
  timeDefaultValue
}) => {
  const uniqueId = _.uniqueId('text-input-unique-id-');

  const computedClassNames = {
    'slds-is-open': dropdownIsOpen
  };

  return (
    <div className="slds-form">
      <fieldset className="slds-form-element slds-form-element_compound">
        <legend className="slds-form-element__label slds-form-element__legend">
          Date and Time
        </legend>
        <div className="slds-form-element__control">
          <div className="slds-form-element__group">
            <div className="slds-form-element__row">
              <FormElement
                formElementClassName={classNames(
                  'slds-dropdown-trigger slds-dropdown-trigger_click',
                  computedClassNames
                )}
                labelContent="Date"
                inputId={uniqueId}
                hasRightIcon
                dropdown={dropdown}
              >
                <Input
                  id={uniqueId}
                  placeholder=" "
                  defaultValue={dateDefaultValue}
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon_right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
              <DeprecatedCombobox
                label="Time"
                autocomplete
                isOpen={listboxIsOpen}
                className="slds-combobox-picklist slds-timepicker"
                inputIcon="right"
                inputIconRightSymbol="clock"
                inputIconRightAssistiveText={false}
                placeholder=" "
                listbox={<ListboxDropdown optionSelected />}
                value={timeDefaultValue}
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

ExampleDatetimePicker.propTypes = {
  dropdown: PropTypes.node,
  dropdownIsOpen: PropTypes.bool,
  listboxIsOpen: PropTypes.bool,
  dateDefaultValue: PropTypes.string,
  timeDefaultValue: PropTypes.string
};

ExampleDatetimePicker.defaultProps = {
  dropdown: <DatePicker todayActive />,
  dropdownIsOpen: true
};

const ListboxDropdown = props => (
  <DeprecatedListbox
    listboxClassName="slds-dropdown slds-dropdown_fluid slds-dropdown_length-5"
    vertical
  >
    <DeprecatedListboxItem>
      <DeprecatedOption title="6:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="7:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="8:00am" selected={props.optionSelected} />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="9:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="10:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="11:00am" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="12:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="1:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="2:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="3:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="4:00pm" />
    </DeprecatedListboxItem>
    <DeprecatedListboxItem>
      <DeprecatedOption title="5:00pm" />
    </DeprecatedListboxItem>
  </DeprecatedListbox>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default <ExampleDatetimePicker />;

export const examples = [
  {
    id: 'small-width-container',
    label: 'Small Width Container',
    demoStyles: 'height: auto; width: 200px; border: 1px dashed #ddd;',
    element: <ExampleDatetimePicker dropdownIsOpen={false} />
  }
];

export let states = [
  {
    id: 'date-selection',
    label: 'Date selected',
    element: (
      <ExampleDatetimePicker
        dropdown={
          <DatePicker todayActive dateSelected="single" dateRange="week-4" />
        }
        dateDefaultValue="06/24/2020"
      />
    )
  },
  {
    id: 'time-selection',
    label: 'Time selected',
    demoStyles: 'height: 20rem;',
    element: (
      <ExampleDatetimePicker
        dropdown={
          <DatePicker todayActive dateSelected="single" dateRange="week-4" />
        }
        dropdownIsOpen={false}
        listboxIsOpen
        timeDefaultValue="8:00am"
        dateDefaultValue="06/24/2020"
      />
    )
  }
];
