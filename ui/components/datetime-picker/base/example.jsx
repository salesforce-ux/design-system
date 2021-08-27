// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import Combobox from '../../combobox';
import Listbox from '../../combobox/listbox/';
import {
  PlainTimeOptions,
  PlainTimeOptionsSelected
} from '../../combobox/snapshots.data';
import { UtilityIcon } from '../../icons/base/example';
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
  hasFocus,
  hasError,
  isOpen,
  isRequired,
  isDisabled,
  listboxData,
  dateDefaultValue,
  showRequiredIndicator
}) => {
  const focusedRef = useRef();
  const [focusedId, setFocusedId] = useState('');
  const [focusedValue, setFocusedValue] = useState('');
  const [uniqueId] = useState(_.uniqueId('example-unique-id-'));
  const [comboboxId] = useState(_.uniqueId('example-unique-id-'));
  const [listboxId] = useState(_.uniqueId('example-unique-id-'));

  useEffect(() => {
    if (focusedRef.current) {
      if ('id' in focusedRef.current && focusedRef.current.id) {
        setFocusedId(focusedRef.current.id);
      }
      if (
        'ariaChecked' in focusedRef.current &&
        focusedRef.current.ariaChecked
      ) {
        setFocusedValue(focusedRef.current.textContent);
      }
    }
  }, []);

  const computedClassNames = {
    'slds-is-open': dropdownIsOpen
  };

  return (
    <div className="slds-form">
      <fieldset
        className={classNames('slds-form-element slds-form-element_compound', {
          'slds-has-error': hasError
        })}
      >
        <legend className="slds-form-element__label slds-form-element__legend">
          {isRequired && (
            <abbr className="slds-required" title="required">
              *{' '}
            </abbr>
          )}
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
                hasError={hasError}
                isRequired={isRequired}
                showRequiredIndicator={showRequiredIndicator}
              >
                <Input
                  id={uniqueId}
                  placeholder="Select a date…"
                  defaultValue={dateDefaultValue}
                  aria-describedby={hasError && uniqueId + '-error'}
                  required={isRequired}
                  disabled={isDisabled}
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon_right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                  disabled={isDisabled}
                />
              </FormElement>

              <Combobox
                id={comboboxId}
                aria-controls={listboxId}
                aria-activedescendant={focusedId}
                autocomplete
                label="Time"
                placeholder="Select a time…"
                inputIconPosition="right"
                hasError={hasError}
                isDisabled={isDisabled}
                // TODO: Combobox and Listbox do not currently have aria-describedby
                // aria-describedby={hasError && (uniqueId + "-error")}

                rightInputIcon={
                  <UtilityIcon
                    symbol="clock"
                    className={classNames(
                      'slds-icon slds-icon_x-small slds-icon-text-default',
                      {
                        'slds-icon-text-error': hasError,
                        'slds-is-disabled': isDisabled
                      }
                    )}
                    containerClassName="slds-input__icon slds-input__icon_right"
                    assistiveText={false}
                    title={false}
                  />
                }
                results={
                  <Listbox
                    className="slds-dropdown_fluid slds-dropdown_left"
                    id={listboxId}
                    snapshot={listboxData}
                    type="plain"
                    count={6}
                    focusedRef={focusedRef}
                  />
                }
                resultsType="listbox"
                hasInteractions
                hasFocus={hasFocus}
                isOpen={isOpen}
                value={focusedValue}
              />
            </div>
          </div>
        </div>
        {hasError && (
          <div className="slds-form-element__help" id={uniqueId + '-error'}>
            Complete this field.
          </div>
        )}
      </fieldset>
    </div>
  );
};

ExampleDatetimePicker.propTypes = {
  dropdown: PropTypes.node,
  dropdownIsOpen: PropTypes.bool,
  hasFocus: PropTypes.bool,
  isOpen: PropTypes.bool,
  isRequired: PropTypes.bool,
  hasError: PropTypes.bool,
  listboxIsOpen: PropTypes.bool,
  listboxData: PropTypes.object.isRequired,
  dateDefaultValue: PropTypes.string,
  showRequiredIndicator: PropTypes.bool,
  isDisabled: PropTypes.bool
};

ExampleDatetimePicker.defaultProps = {
  dropdown: <DatePicker todayActive />,
  dropdownIsOpen: true,
  showRequiredIndicator: false,
  isDisabled: false
};

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default <ExampleDatetimePicker listboxData={PlainTimeOptions} />;

export const examples = [
  {
    id: 'small-width-container',
    label: 'Small Width Container',
    demoStyles: 'height: auto; width: 200px; border: 1px dashed #ddd;',
    storybookStyles: true,
    element: (
      <ExampleDatetimePicker
        dropdownIsOpen={false}
        listboxData={PlainTimeOptions}
      />
    )
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
        dateDefaultValue="06/24/2021"
        listboxData={PlainTimeOptions}
      />
    )
  },
  {
    id: 'time-selection',
    label: 'Time selected',
    demoStyles: 'height: 20rem;',
    storybookStyles: true,
    element: (
      <ExampleDatetimePicker
        dropdown={
          <DatePicker
            todayActive
            dateSelected="single"
            dateRange="week-4"
            value="8:00am"
          />
        }
        dropdownIsOpen={false}
        dateDefaultValue="06/24/2021"
        isOpen
        hasFocus
        listboxData={PlainTimeOptionsSelected}
      />
    )
  },
  {
    id: 'required',
    label: 'Date and Time - required',
    demoStyles: 'height: 20rem;',
    element: (
      <ExampleDatetimePicker
        dropdownIsOpen={false}
        isRequired
        listboxData={PlainTimeOptions}
      />
    )
  },
  {
    id: 'error',
    label: 'Date and Time - error',
    demoStyles: 'height: 20rem;',
    element: (
      <ExampleDatetimePicker
        dropdownIsOpen={false}
        hasError
        listboxData={PlainTimeOptions}
      />
    )
  },
  {
    id: 'required-error',
    label: 'Date and Time - required and has error',
    demoStyles: 'height: 20rem;',
    element: (
      <ExampleDatetimePicker
        dropdownIsOpen={false}
        isRequired
        hasError
        listboxData={PlainTimeOptions}
      />
    )
  },
  {
    id: 'disabled',
    label: 'Date and Time - disabled',
    demoStyles: 'height: 10rem;',
    storybookStyles: true,
    element: (
      <ExampleDatetimePicker
        dropdownIsOpen={false}
        listboxData={PlainTimeOptions}
        isDisabled
      />
    )
  }
];
