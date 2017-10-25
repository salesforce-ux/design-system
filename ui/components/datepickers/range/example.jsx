// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { DatePicker } from '../base/example';
import { UtilityIcon } from '../../icons/base/example';
import ButtonIcon from '../../button-icons/';
import { FormElement } from '../../form-element/base/example';
import { Input } from '../../input/base/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const dateInputId = 'date-input-id';
const dateRangeInputId01 = 'date-input-id-01';
const dateRangeInputId02 = 'date-input-id-02';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Demo wrapper
export const Context = props => (
  <div style={{ height: '25rem' }}>{props.children}</div>
);

// Default
export default (
  <div className="slds-form slds-form--compound">
    <fieldset className="slds-form-element">
      <legend className="slds-form-element__label">Start and End Date</legend>
      <div className="slds-form-element__group">
        <div className="slds-form-element__row">
          <FormElement
            className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
            label="Start Date"
            inputId={dateRangeInputId01}
            inputIcon="right"
            dropdown={<DatePicker todayActive />}
          >
            <Input id={dateRangeInputId01} placeholder=" " />
            <ButtonIcon
              className="slds-input__icon slds-input__icon--right"
              symbol="event"
              assistiveText="Select a date"
              title="Select a date"
            />
          </FormElement>
          <FormElement
            className="slds-dropdown-trigger slds-dropdown-trigger_click"
            label="End Date"
            inputId={dateRangeInputId02}
            inputIcon="right"
          >
            <Input id={dateRangeInputId02} placeholder=" " />
            <ButtonIcon
              className="slds-input__icon slds-input__icon--right"
              symbol="event"
              assistiveText="Select a date"
              title="Select a date"
            />
          </FormElement>
        </div>
      </div>
    </fieldset>
  </div>
);

export let states = [
  {
    id: 'start-date',
    label: 'Start date selected',
    element: (
      <div className="slds-form slds-form--compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label">
            Start and End Date
          </legend>
          <div className="slds-form-element__group">
            <div className="slds-form-element__row">
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                label="Start Date"
                inputId={dateRangeInputId01}
                inputIcon="right"
                dropdown={
                  <DatePicker
                    todayActive
                    dateSelected="single"
                    dateRange="week-4"
                  />
                }
              >
                <Input
                  id={dateRangeInputId01}
                  placeholder=" "
                  defaultValue="06/24/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click"
                label="End Date"
                inputId={dateRangeInputId02}
                inputIcon="right"
              >
                <Input id={dateRangeInputId02} placeholder=" " />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
            </div>
          </div>
        </fieldset>
      </div>
    )
  },
  {
    id: 'end-date-week',
    label: 'End date selected (Same week)',
    element: (
      <div className="slds-form slds-form--compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label">
            Start and End Date
          </legend>
          <div className="slds-form-element__group">
            <div className="slds-form-element__row">
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click"
                label="Start Date"
                inputId={dateRangeInputId01}
                inputIcon="right"
              >
                <Input
                  id={dateRangeInputId01}
                  placeholder=" "
                  defaultValue="06/24/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                label="End Date"
                inputId={dateRangeInputId02}
                inputIcon="right"
                dropdown={
                  <DatePicker todayActive dateSelected dateRange="week-4" />
                }
              >
                <Input
                  id={dateRangeInputId02}
                  placeholder=" "
                  defaultValue="06/27/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
            </div>
          </div>
        </fieldset>
      </div>
    )
  },
  {
    id: 'end-date-weeks',
    label: 'End date selected (Different week)',
    element: (
      <div className="slds-form slds-form--compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label">
            Start and End Date
          </legend>
          <div className="slds-form-element__group">
            <div className="slds-form-element__row">
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click"
                label="Start Date"
                inputId={dateRangeInputId01}
                inputIcon="right"
              >
                <Input
                  id={dateRangeInputId01}
                  placeholder=" "
                  defaultValue="06/24/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                label="End Date"
                inputId={dateRangeInputId02}
                inputIcon="right"
                dropdown={
                  <DatePicker
                    todayActive
                    dateSelected
                    dateRange="week-4-5"
                    dateRangeMulti
                  />
                }
              >
                <Input
                  id={dateRangeInputId02}
                  placeholder=" "
                  defaultValue="06/29/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
            </div>
          </div>
        </fieldset>
      </div>
    )
  },
  {
    id: 'today-in-range',
    label: 'Today - In selected range',
    element: (
      <div className="slds-form slds-form--compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label">
            Start and End Date
          </legend>
          <div className="slds-form-element__group">
            <div className="slds-form-element__row">
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click"
                label="Start Date"
                inputId={dateRangeInputId01}
                inputIcon="right"
              >
                <Input
                  id={dateRangeInputId01}
                  placeholder=" "
                  defaultValue="06/24/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                label="End Date"
                inputId={dateRangeInputId02}
                inputIcon="right"
                dropdown={
                  <DatePicker
                    todayActiveInRange
                    dateSelected
                    dateRange="week-4-5"
                    dateRangeMulti
                  />
                }
              >
                <Input
                  id={dateRangeInputId02}
                  placeholder=" "
                  defaultValue="06/30/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
            </div>
          </div>
        </fieldset>
      </div>
    )
  },
  {
    id: 'span-across-month-in-range',
    label: 'Current and adjacent month in selected range',
    element: (
      <div className="slds-form slds-form--compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label">
            Start and End Date
          </legend>
          <div className="slds-form-element__group">
            <div className="slds-form-element__row">
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click"
                label="Start Date"
                inputId={dateRangeInputId01}
                inputIcon="right"
              >
                <Input
                  id={dateRangeInputId01}
                  placeholder=" "
                  defaultValue="06/24/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
              <FormElement
                className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                label="End Date"
                inputId={dateRangeInputId02}
                inputIcon="right"
                dropdown={<DatePicker dateSelected dateRange="week-5" />}
              >
                <Input
                  id={dateRangeInputId02}
                  placeholder=" "
                  defaultValue="06/30/2014"
                />
                <ButtonIcon
                  className="slds-input__icon slds-input__icon--right"
                  symbol="event"
                  assistiveText="Select a date"
                  title="Select a date"
                />
              </FormElement>
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
];
