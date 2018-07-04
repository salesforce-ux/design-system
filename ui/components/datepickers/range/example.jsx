// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { DatePicker } from '../base/example';
import ButtonIcon from '../../button-icons/';
import { FormElement } from '../../form-element';
import { Input } from '../../input/base/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

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
  <div className="slds-form slds-form_compound">
    <fieldset className="slds-form-element">
      <legend className="slds-form-element__label slds-form-element__legend">
        Start and End Date
      </legend>
      <div className="slds-form-element__control">
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">
            <FormElement
              formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
              labelContent="Start Date"
              inputId={dateRangeInputId01}
              hasRightIcon
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
              formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click"
              labelContent="End Date"
              inputId={dateRangeInputId02}
              hasRightIcon
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
      </div>
    </fieldset>
  </div>
);

export let states = [
  {
    id: 'start-date',
    label: 'Start date selected',
    element: (
      <div className="slds-form slds-form_compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label slds-form-element__legend">
            Start and End Date
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-form-element__group">
              <div className="slds-form-element__row">
                <FormElement
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                  labelContent="Start Date"
                  inputId={dateRangeInputId01}
                  hasRightIcon
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
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click"
                  labelContent="End Date"
                  inputId={dateRangeInputId02}
                  hasRightIcon
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
          </div>
        </fieldset>
      </div>
    )
  },
  {
    id: 'end-date-week',
    label: 'End date selected (Same week)',
    element: (
      <div className="slds-form slds-form_compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label slds-form-element__legend">
            Start and End Date
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-form-element__group">
              <div className="slds-form-element__row">
                <FormElement
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click"
                  labelContent="Start Date"
                  inputId={dateRangeInputId01}
                  hasRightIcon
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
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                  labelContent="End Date"
                  inputId={dateRangeInputId02}
                  hasRightIcon
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
          </div>
        </fieldset>
      </div>
    )
  },
  {
    id: 'end-date-weeks',
    label: 'End date selected (Different week)',
    element: (
      <div className="slds-form slds-form_compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label slds-form-element__legend">
            Start and End Date
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-form-element__group">
              <div className="slds-form-element__row">
                <FormElement
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click"
                  labelContent="Start Date"
                  inputId={dateRangeInputId01}
                  hasRightIcon
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
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                  labelContent="End Date"
                  inputId={dateRangeInputId02}
                  hasRightIcon
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
          </div>
        </fieldset>
      </div>
    )
  },
  {
    id: 'today-in-range',
    label: 'Today - In selected range',
    element: (
      <div className="slds-form slds-form_compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label slds-form-element__legend">
            Start and End Date
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-form-element__group">
              <div className="slds-form-element__row">
                <FormElement
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click"
                  labelContent="Start Date"
                  inputId={dateRangeInputId01}
                  hasRightIcon
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
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                  labelContent="End Date"
                  inputId={dateRangeInputId02}
                  hasRightIcon
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
          </div>
        </fieldset>
      </div>
    )
  },
  {
    id: 'span-across-month-in-range',
    label: 'Current and adjacent month in selected range',
    element: (
      <div className="slds-form slds-form_compound">
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__label slds-form-element__legend">
            Start and End Date
          </legend>
          <div className="slds-form-element__control">
            <div className="slds-form-element__group">
              <div className="slds-form-element__row">
                <FormElement
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click"
                  labelContent="Start Date"
                  inputId={dateRangeInputId01}
                  hasRightIcon
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
                  formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                  labelContent="End Date"
                  inputId={dateRangeInputId02}
                  hasRightIcon
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
          </div>
        </fieldset>
      </div>
    )
  }
];
