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
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
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
  >
    <span className="slds-day">{props.children}</span>
  </td>
);

export let SimpleTable = props => (
  <table className="slds-table">
    <tr>
      <th>Name</th>
      <th>Date</th>
    </tr>
    <tr>
      <td>Order</td>
      <td>{props.children}</td>
    </tr>
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
          <Day aria-selected="false" isAdjacentMonth>
            31
          </Day>
          <Day aria-selected="false" tabIndex="0">
            1
          </Day>
          <Day aria-selected="false">2</Day>
          <Day aria-selected="false">3</Day>
          <Day aria-selected="false">4</Day>
          <Day aria-selected="false">5</Day>
          <Day aria-selected="false">6</Day>
        </Week>
        <Week>
          <Day aria-selected="false">7</Day>
          <Day aria-selected="false">8</Day>
          <Day aria-selected="false">9</Day>
          <Day aria-selected="false">10</Day>
          <Day aria-selected="false">11</Day>
          <Day aria-selected="false">12</Day>
          <Day aria-selected="false">13</Day>
        </Week>
        <Week>
          <Day aria-selected="false">14</Day>
          <Day aria-selected="false">15</Day>
          <Day aria-selected="false">16</Day>
          <Day aria-selected="false">17</Day>
          <Day
            aria-selected="false"
            aria-current={props.todayActive ? 'date' : null}
            className={props.todayActive ? 'slds-is-today' : null}
          >
            18
          </Day>
          <Day aria-selected="false">19</Day>
          <Day aria-selected="false">20</Day>
        </Week>
        <Week
          className={classNames({
            'slds-has-multi-selection': props.dateRange === 'week-4',
            'slds-has-multi-row-selection': props.dateRangeMulti
          })}
        >
          <Day aria-selected="false">21</Day>
          <Day aria-selected="false">22</Day>
          <Day aria-selected="false">23</Day>
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
    dropdown={
      <DatePicker
        idPrefix={props.idPrefix}
        todayActive={props.todayActive}
        todayActiveInRange={props.todayActiveInRange}
        dateSelected={props.dateSelected}
        dateRange={props.dateRange}
        dateRangeMulti={props.dateRangeMulti}
      />
    }
  >
    <Input
      id={props.dateInputId}
      placeholder=" "
      defaultValue={props.defaultValue}
    />
    <ButtonIcon
      className="slds-input__icon slds-input__icon_right"
      symbol="event"
      assistiveText="Select a date"
      title="Select a date"
    />
  </FormElement>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export const Context = props => (
  <div style={{ height: '25rem' }}>{props.children}</div>
);

export default (
  <DatePickerElement
    idPrefix="defaulPicker"
    labelContent="Date"
    dateInputId={dateInputId + '-default'}
    isOpen
    todayActive
  />
);

export let states = [
  {
    id: 'datepicker-day-selected',
    label: 'Date selected',
    element: (
      <DatePickerElement
        idPrefix="pickerDaySelected"
        labelContent="Date"
        dateInputId={dateInputId + '-day_selected'}
        isOpen
        todayActive
        dateSelected="single"
        dateRange="week-4"
        defaultValue="06/24/2020"
      />
    )
  },
  {
    id: 'datepicker-with-error',
    label: 'Date Picker has Error',
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
  }
];

export let examples = [
  {
    id: 'mobile',
    label: 'Mobile',
    element: (
      <FormElement labelContent="Date" inputId={dateInputId + '-mobile'}>
        <Input id={dateInputId + '-mobile'} type="datetime-local" />
      </FormElement>
    )
  },
  {
    id: 'datepicker-in-datatable',
    label: 'Datepicker in a Data Table',
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
          defaultValue="06/24/2020"
        />
      </SimpleTable>
    )
  },
  {
    id: 'datepicker-in-datatable_with-error',
    label: 'Datepicker with an error in a Data Table',
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
