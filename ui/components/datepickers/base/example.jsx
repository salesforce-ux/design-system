// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import ButtonIcon from '../../button-icons/';
import { Select } from '../../select/base/example';
import { FormElement } from '../../form-element';
import Input from '../../input/';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const dateInputId = 'date-input-id';
const demoStyles = 'height: 25rem;';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

let DatepickerContainer = props => (
  <div
    aria-hidden="false"
    aria-label="Date picker: June"
    className={classNames('slds-datepicker', props.className)}
    role="dialog"
  >
    {props.children}
    <button className="slds-button slds-align_absolute-center slds-text-link">
      Today
    </button>
  </div>
);

let DatepickerHeader = props => (
  <div className="slds-datepicker__filter slds-grid">
    <div className="slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow">
      <div className="slds-align-middle">
        <ButtonIcon
          assistiveText="Previous Month"
          className="slds-button_icon-container"
          symbol="left"
          title="Previous Month"
        />
      </div>
      <h2
        aria-atomic="true"
        aria-live="assertive"
        className="slds-align-middle"
        id={`${props.idPrefix}-month`}
      >
        June
      </h2>
      <div className="slds-align-middle">
        <ButtonIcon
          assistiveText="Next Month"
          className="slds-button_icon-container"
          symbol="right"
          title="Next Month"
        />
      </div>
    </div>
    <div className="slds-shrink-none">
      <label
        className="slds-assistive-text"
        htmlFor={`${props.idPrefix}_select`}
      >
        Pick a Year
      </label>
      <Select id={`${props.idPrefix}_select`}>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </Select>
    </div>
  </div>
);

let Weekdays = props => (
  <tr id={`${props.idPrefix}-weekdays`}>
    <th id={`${props.idPrefix}-Sunday`} scope="col">
      <abbr title="Sunday">Sun</abbr>
    </th>
    <th id={`${props.idPrefix}-Monday`} scope="col">
      <abbr title="Monday">Mon</abbr>
    </th>
    <th id={`${props.idPrefix}-Tuesday`} scope="col">
      <abbr title="Tuesday">Tue</abbr>
    </th>
    <th id={`${props.idPrefix}-Wednesday`} scope="col">
      <abbr title="Wednesday">Wed</abbr>
    </th>
    <th id={`${props.idPrefix}-Thursday`} scope="col">
      <abbr title="Thursday">Thu</abbr>
    </th>
    <th id={`${props.idPrefix}-Friday`} scope="col">
      <abbr title="Friday">Fri</abbr>
    </th>
    <th id={`${props.idPrefix}-Saturday`} scope="col">
      <abbr title="Saturday">Sat</abbr>
    </th>
  </tr>
);

let Week = props => <tr {...props}>{props.children}</tr>;

let Day = props => (
  <td
    aria-disabled={props['aria-disabled']}
    aria-selected={props['aria-selected']}
    aria-current={props['aria-current']}
    className={classNames(props.className, {
      'slds-day_adjacent-month': props.isAdjacentMonth
    })}
    role="gridcell"
    tabIndex={props.tabIndex}
    aria-label={props['aria-label']}
  >
    <span className="slds-day">{props.children}</span>
  </td>
);

export let SimpleTable = props => (
  <table className="slds-table" aria-label="Example table for datepicker">
    <tbody>
      <tr>
        <th>Name</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Order</td>
        <td>{props.children}</td>
      </tr>
    </tbody>
  </table>
);

/* -----------------------------------------------------------------------------
    Public
----------------------------------------------------------------------------- */

export let DatePicker = props => (
  <DatepickerContainer className="slds-dropdown slds-dropdown_left">
    <DatepickerHeader idPrefix={props.idPrefix} />
    <table
      aria-labelledby={`${props.idPrefix}-month`}
      aria-multiselectable="true"
      className="slds-datepicker__month"
      role="grid"
    >
      <thead>
        <Weekdays idPrefix={props.idPrefix} />
      </thead>
      <tbody>
        <Week>
          <Day aria-selected="false" isAdjacentMonth aria-label="31 May 2020">
            31
          </Day>
          <Day aria-selected="false" tabIndex="0" aria-label="1 June 2020">
            1
          </Day>
          <Day aria-selected="false" aria-label="2 June 2020">
            2
          </Day>
          <Day aria-selected="false" aria-label="3 June 2020">
            3
          </Day>
          <Day aria-selected="false" aria-label="4 June 2020">
            4
          </Day>
          <Day aria-selected="false" aria-label="5 June 2020">
            5
          </Day>
          <Day aria-selected="false" aria-label="6 June 2020">
            6
          </Day>
        </Week>
        <Week>
          <Day aria-selected="false" aria-label="7 June 2020">
            7
          </Day>
          <Day aria-selected="false" aria-label="8 June 2020">
            8
          </Day>
          <Day aria-selected="false" aria-label="9 June 2020">
            9
          </Day>
          <Day aria-selected="false" aria-label="10 June 2020">
            10
          </Day>
          <Day aria-selected="false" aria-label="11 June 2020">
            11
          </Day>
          <Day aria-selected="false" aria-label="12 June 2020">
            12
          </Day>
          <Day aria-selected="false" aria-label="13 June 2020">
            13
          </Day>
        </Week>
        <Week>
          <Day aria-selected="false" aria-label="14 June 2020">
            14
          </Day>
          <Day aria-selected="false" aria-label="15 June 2020">
            15
          </Day>
          <Day aria-selected="false" aria-label="16 June 2020">
            16
          </Day>
          <Day aria-selected="false" aria-label="17 June 2020">
            17
          </Day>
          <Day
            aria-selected="false"
            aria-current={props.todayActive ? 'date' : null}
            className={props.todayActive ? 'slds-is-today' : null}
            aria-label="18 June 2020"
          >
            18
          </Day>
          <Day aria-selected="false" aria-label="19 June 2020">
            19
          </Day>
          <Day aria-selected="false" aria-label="20 June 2020">
            20
          </Day>
        </Week>
        <Week
          className={classNames({
            'slds-has-multi-selection': props.dateRange === 'week-4',
            'slds-has-multi-row-selection': props.dateRangeMulti
          })}
        >
          <Day aria-selected="false" aria-label="21 June 2020">
            21
          </Day>
          <Day aria-selected="false" aria-label="22 June 2020">
            22
          </Day>
          <Day aria-selected="false" aria-label="23 June 2020">
            23
          </Day>
          <Day
            aria-selected={
              props.dateSelected &&
                (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={classNames({
              'slds-is-selected':
                props.dateSelected === 'single' &&
                (props.dateRange === 'week-4' ||
                  props.dateRange === 'week-4-5'),
              'slds-is-selected slds-is-selected-multi':
                props.dateSelected !== 'single' &&
                (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
            })}
            aria-label="24 June 2020"
          >
            24
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={classNames({
              'slds-is-selected slds-is-selected-multi':
                props.dateSelected !== 'single' &&
                (props.dateRange === 'week-4' ||
                  props.dateRange === 'week-4-5'),
              'slds-is-today': props.todayActiveInRange
            })}
            aria-label="25 June 2020"
            aria-current={props.todayActiveInRange ? 'date' : null}
          >
            25
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            }
            aria-label="26 June 2020"
          >
            26
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            }
            aria-label="27 June 2020"
          >
            27
          </Day>
        </Week>
        <Week
          className={classNames({
            'slds-has-multi-selection': props.dateRange === 'week-5',
            'slds-has-multi-row-selection': props.dateRangeMulti
          })}
        >
          <Day
            aria-selected={
              props.dateSelected &&
                (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={classNames({
              'slds-is-selected':
                props.dateSelected === 'single' && props.dateRange === 'week-5',
              'slds-is-selected slds-is-selected-multi':
                props.dateSelected !== 'single' &&
                (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
            })}
            aria-label="28 June 2020"
          >
            28
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            }
            aria-label="29 June 2020"
          >
            29
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={
              props.dateSelected !== 'single' &&
                (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            }
            aria-label="30 June 2020"
          >
            30
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' && props.dateRange === 'week-5'
                ? 'true'
                : 'false'
            }
            className={classNames(
              props.dateSelected !== 'single' && props.dateRange === 'week-5'
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            )}
            isAdjacentMonth
            aria-label="1 July 2020"
          >
            1
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' && props.dateRange === 'week-5'
                ? 'true'
                : 'false'
            }
            className={classNames(
              props.dateSelected !== 'single' && props.dateRange === 'week-5'
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            )}
            isAdjacentMonth
            aria-label="2 July 2020"
          >
            2
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' && props.dateRange === 'week-5'
                ? 'true'
                : 'false'
            }
            className={classNames(
              props.dateSelected !== 'single' && props.dateRange === 'week-5'
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            )}
            isAdjacentMonth
            aria-label="3 July 2020"
          >
            3
          </Day>
          <Day
            aria-selected={
              props.dateSelected !== 'single' && props.dateRange === 'week-5'
                ? 'true'
                : 'false'
            }
            className={classNames(
              props.dateSelected !== 'single' && props.dateRange === 'week-5'
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            )}
            isAdjacentMonth
            aria-label="4 July 2020"
          >
            4
          </Day>
        </Week>
      </tbody>
    </table>
  </DatepickerContainer>
);

export let DatePickerElement = props => (
  <FormElement
    formElementClassName={
      'slds-dropdown-trigger slds-dropdown-trigger_click' +
      (props.isOpen && ' slds-is-open')
    }
    labelContent={props.labelContent}
    inputId={props.dateInputId}
    hasRightIcon
    hasError={props.hasError}
    isRequired={props.isRequired}
    isDisabled={props.isDisabled}
    dropdown={
      (!props.isDisabled &&
        <DatePicker
          idPrefix={props.idPrefix}
          todayActive={props.todayActive}
          todayActiveInRange={props.todayActiveInRange}
          dateSelected={props.dateSelected}
          dateRange={props.dateRange}
          dateRangeMulti={props.dateRangeMulti}
        />
      )
    }
  >
    <Input
      id={props.dateInputId}
      placeholder=" "
      defaultValue={props.defaultValue}
      required={props.isRequired}
      disabled={props.isDisabled}
    />
    <ButtonIcon
      className="slds-input__icon slds-input__icon_right"
      symbol="event"
      assistiveText="Select a date"
      title="Select a date"
      disabled={props.isDisabled}
    />
  </FormElement>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default [
  {
    id: 'default',
    label: 'Base – default',
    demoStyles: demoStyles,
    element: (
      <DatePickerElement
        idPrefix="defaultPicker"
        labelContent="Date"
        dateInputId={dateInputId + '-default'}
        isOpen
        todayActive
      />
    )
  }
];

export let states = [
  {
    id: 'datepicker-day-selected',
    label: 'Date selected',
    demoStyles: demoStyles,
    element: (
      <DatePickerElement
        idPrefix="pickerDaySelected"
        labelContent="Date"
        dateInputId={dateInputId + '-day_selected'}
        isOpen
        todayActive
        dateSelected="single"
        dateRange="week-4"
        defaultValue="06/24/2021"
      />
    )
  },
  {
    id: 'datepicker-with-error',
    label: 'Date Picker has Error',
    demoStyles: demoStyles,
    element: (
      <DatePickerElement
        idPrefix="pickerWithError"
        labelContent="Date"
        dateInputId={dateInputId + '-error'}
        isOpen
        todayActive
        hasError
      />
    )
  },
  {
    id: 'datepicker-required',
    label: 'Date Picker - required',
    demoStyles: demoStyles,
    element: (
      <DatePickerElement
        idPrefix="pickerRequired"
        labelContent="Date"
        dateInputId={dateInputId + '-required'}
        isOpen
        todayActive
        isRequired
      />
    )
  },
  {
    id: 'datepicker-required-with-error',
    label: 'Date Picker - required with error',
    demoStyles: demoStyles,
    element: (
      <DatePickerElement
        idPrefix="pickerRequired"
        labelContent="Date"
        dateInputId={dateInputId + '-required'}
        isOpen
        todayActive
        isRequired
        hasError
      />
    )
  },
  {
    id: 'datepicker-disabled',
    label: 'Datepicker - disabled',
    demoStyles: 'height: 8rem;',
    storybookStyles: true,
    element: (
      <DatePickerElement
        idPrefix="pickerDisabled"
        labelContent="Date"
        dateInputId={dateInputId + '-table'}
        isDisabled
      />
    )
  }
];

export let examples = [
  {
    id: 'mobile',
    label: 'Mobile',
    demoStyles: demoStyles,
    element: (
      <FormElement labelContent="Date" inputId={dateInputId + '-mobile'}>
        <Input id={dateInputId + '-mobile'} type="datetime-local" />
      </FormElement>
    )
  },
  {
    id: 'datepicker-in-datatable',
    label: 'Datepicker in a Data Table',
    demoStyles: demoStyles,
    element: (
      <SimpleTable>
        <DatePickerElement
          idPrefix="pickerInTable"
          labelContent="Date"
          dateInputId={dateInputId + '-table'}
          isOpen
          todayActive
        />
      </SimpleTable>
    )
  },
  {
    id: 'datepicker-in-datatable_date-selected',
    label: 'Datepicker with date selected in a Data Table',
    demoStyles: demoStyles,
    element: (
      <SimpleTable>
        <DatePickerElement
          idPrefix="pickerInTable-selected"
          labelContent="Date"
          dateInputId={dateInputId + '-table'}
          isOpen
          todayActive
          dateSelected="single"
          dateRange="week-4"
          defaultValue="06/24/2021"
        />
      </SimpleTable>
    )
  },
  {
    id: 'datepicker-in-datatable_with-error',
    label: 'Datepicker with an error in a Data Table',
    demoStyles: demoStyles,
    element: (
      <SimpleTable>
        <DatePickerElement
          idPrefix="pickerInTable-error"
          labelContent="Date"
          dateInputId={dateInputId + '-table'}
          isOpen
          todayActive
          hasError
        />
      </SimpleTable>
    )
  }
];
