// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { UtilityIcon } from '../../icons/base/example';
import ButtonIcon from '../../button-icons/';
import { Select } from '../../select/base/example';
import { FormElement } from '../../form-element/base/example';
import { Input } from '../../input/base/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const dateInputId = 'date-input-id';
const dateRangeInputId01 = 'date-input-id-01';
const dateRangeInputId02 = 'date-input-id-02';
const timeInputId = 'time-input-id';

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
        id="month"
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
      <label className="slds-assistive-text" htmlFor="select-01">
        Pick a Year
      </label>
      <Select>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
      </Select>
    </div>
  </div>
);

let Weekdays = props => (
  <tr id="weekdays">
    <th id="Sunday" scope="col">
      <abbr title="Sunday">Sun</abbr>
    </th>
    <th id="Monday" scope="col">
      <abbr title="Monday">Mon</abbr>
    </th>
    <th id="Tuesday" scope="col">
      <abbr title="Tuesday">Tue</abbr>
    </th>
    <th id="Wednesday" scope="col">
      <abbr title="Wednesday">Wed</abbr>
    </th>
    <th id="Thursday" scope="col">
      <abbr title="Thursday">Thu</abbr>
    </th>
    <th id="Friday" scope="col">
      <abbr title="Friday">Fri</abbr>
    </th>
    <th id="Saturday" scope="col">
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
    className={props.className}
    role="gridcell"
    tabIndex={props.tabIndex}
  >
    <span className="slds-day">{props.children}</span>
  </td>
);

/* -----------------------------------------------------------------------------
    Public
----------------------------------------------------------------------------- */

export let DatePicker = props => (
  <DatepickerContainer className="slds-dropdown slds-dropdown_left">
    <DatepickerHeader />
    <table
      aria-labelledby="month"
      aria-multiselectable="true"
      className="slds-datepicker__month"
      role="grid"
    >
      <thead>
        <Weekdays />
      </thead>
      <tbody>
        <Week>
          <Day
            aria-disabled="true"
            aria-selected="false"
            className="slds-disabled-text"
          >
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
            'slds-has-multi-selection': props.dateRange == 'week-4',
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
                props.dateSelected != 'single' &&
                (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
            })}
          >
            24
          </Day>
          <Day
            aria-selected={
              props.dateSelected != 'single' &&
              (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={classNames({
              'slds-is-selected slds-is-selected-multi':
                props.dateSelected != 'single' &&
                (props.dateRange === 'week-4' ||
                  props.dateRange === 'week-4-5'),
              'slds-is-today': props.todayActiveInRange
            })}
          >
            25
          </Day>
          <Day
            aria-selected={
              props.dateSelected != 'single' &&
              (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={
              props.dateSelected != 'single' &&
              (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            }
          >
            26
          </Day>
          <Day
            aria-selected={
              props.dateSelected != 'single' &&
              (props.dateRange === 'week-4' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={
              props.dateSelected != 'single' &&
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
            'slds-has-multi-selection': props.dateRange == 'week-5',
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
                props.dateSelected != 'single' &&
                (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
            })}
          >
            28
          </Day>
          <Day
            aria-selected={
              props.dateSelected != 'single' &&
              (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={
              props.dateSelected != 'single' &&
              (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            }
          >
            29
          </Day>
          <Day
            aria-selected={
              props.dateSelected != 'single' &&
              (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'true'
                : 'false'
            }
            className={
              props.dateSelected != 'single' &&
              (props.dateRange === 'week-5' || props.dateRange === 'week-4-5')
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            }
          >
            30
          </Day>
          <Day
            aria-disabled="true"
            aria-selected={
              props.dateSelected != 'single' && props.dateRange === 'week-5'
                ? 'true'
                : 'false'
            }
            className={classNames(
              'slds-disabled-text',
              props.dateSelected != 'single' && props.dateRange === 'week-5'
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            )}
          >
            1
          </Day>
          <Day
            aria-disabled="true"
            aria-selected={
              props.dateSelected != 'single' && props.dateRange === 'week-5'
                ? 'true'
                : 'false'
            }
            className={classNames(
              'slds-disabled-text',
              props.dateSelected != 'single' && props.dateRange === 'week-5'
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            )}
          >
            2
          </Day>
          <Day
            aria-disabled="true"
            aria-selected={
              props.dateSelected != 'single' && props.dateRange === 'week-5'
                ? 'true'
                : 'false'
            }
            className={classNames(
              'slds-disabled-text',
              props.dateSelected != 'single' && props.dateRange === 'week-5'
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            )}
          >
            3
          </Day>
          <Day
            aria-disabled="true"
            aria-selected={
              props.dateSelected != 'single' && props.dateRange === 'week-5'
                ? 'true'
                : 'false'
            }
            className={classNames(
              'slds-disabled-text',
              props.dateSelected != 'single' && props.dateRange === 'week-5'
                ? 'slds-is-selected slds-is-selected-multi'
                : null
            )}
          >
            4
          </Day>
        </Week>
      </tbody>
    </table>
  </DatepickerContainer>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export const Context = props => (
  <div style={{ height: '25rem' }}>{props.children}</div>
);

export default (
  <FormElement
    className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
    label="Date"
    inputId={dateInputId}
    inputIcon="right"
    dropdown={<DatePicker todayActive />}
  >
    <Input id={dateInputId} placeholder=" " />
    <ButtonIcon
      className="slds-input__icon slds-input__icon_right"
      symbol="event"
      assistiveText="Select a date"
      title="Select a date"
    />
  </FormElement>
);

export let states = [
  {
    id: 'datepicker-day-selected',
    label: 'Date selected',
    element: (
      <FormElement
        className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
        label="Date"
        inputId={dateInputId}
        inputIcon="right"
        dropdown={
          <DatePicker todayActive dateSelected="single" dateRange="week-4" />
        }
      >
        <Input id={dateInputId} placeholder=" " defaultValue="06/24/2014" />
        <ButtonIcon
          className="slds-input__icon slds-input__icon_right"
          symbol="event"
          assistiveText="Select a date"
          title="Select a date"
        />
      </FormElement>
    )
  },
  {
    id: 'datepicker-with-error',
    label: 'Date Picker has Error',
    element: (
      <FormElement
        className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open slds-has-error"
        label="Date"
        inputId={dateInputId}
        inputIcon="right"
        dropdown={<DatePicker todayActive />}
      >
        <Input id={dateInputId} placeholder=" " />
        <ButtonIcon
          className="slds-input__icon slds-input__icon_right"
          symbol="event"
          assistiveText="Select a date"
          title="Select a date"
        />
      </FormElement>
    )
  }
];
