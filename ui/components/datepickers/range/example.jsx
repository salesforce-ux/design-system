// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { DatePickerElement, SimpleTable } from '../base/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const dateRangeInputId01 = 'date-input-id-01';
const dateRangeInputId02 = 'date-input-id-02';
const demoStyles = 'height: 25rem;';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

// form element
let CompoundFormElement = props => (
  <div className="slds-form slds-form_compound">
    <fieldset className="slds-form-element">
      <legend className="slds-form-element__label slds-form-element__legend">
        Start and End Date
      </legend>
      <div className="slds-form-element__control">
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">{props.children}</div>
        </div>
      </div>
    </fieldset>
  </div>
);

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default

export default [
  {
    id: 'default',
    label: 'Base - Default',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <DatePickerElement
          idPrefix="rangeDefault_start"
          labelContent="Start Date"
          dateInputId={`${dateRangeInputId01}-default`}
          isOpen
          todayActive
        />
        <DatePickerElement
          idPrefix="rangeDefault_end"
          labelContent="End Date"
          dateInputId={`${dateRangeInputId02}-default`}
        />
      </CompoundFormElement>
    )
  }
];

export let states = [
  {
    id: 'start-date',
    label: 'Start date selected',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <DatePickerElement
          idPrefix="rangeSelected_start"
          labelContent="Start Date"
          dateInputId={`${dateRangeInputId01}-start_selected`}
          isOpen
          todayActive
          dateSelected="single"
          dateRange="week-4"
          defaultValue="06/24/2021"
        />
        <DatePickerElement
          idPrefix="rangeSelected_end"
          labelContent="End Date"
          dateInputId={`${dateRangeInputId02}-start_selected`}
        />
      </CompoundFormElement>
    )
  },
  {
    id: 'end-date-week',
    label: 'End date selected (Same week)',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <DatePickerElement
          idPrefix="rangeWeekSame_start"
          labelContent="Start Date"
          dateInputId={`${dateRangeInputId01}-end_selected`}
          defaultValue="06/24/2021"
        />
        <DatePickerElement
          idPrefix="rangeWeekSame_end"
          labelContent="End Date"
          dateInputId={`${dateRangeInputId02}-end_selected`}
          isOpen
          todayActive
          dateSelected
          dateRange="week-4"
          defaultValue="06/27/2020"
        />
      </CompoundFormElement>
    )
  },
  {
    id: 'end-date-weeks',
    label: 'End date selected (Different week)',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <DatePickerElement
          idPrefix="rangeWeekDiff_start"
          labelContent="Start Date"
          dateInputId={`${dateRangeInputId01}-end_selected_diff_week`}
          defaultValue="06/24/2021"
        />
        <DatePickerElement
          idPrefix="rangeWeekDiff_end"
          labelContent="End Date"
          dateInputId={`${dateRangeInputId02}-end_selected_diff_week`}
          isOpen
          todayActive
          dateSelected
          dateRange="week-4-5"
          dateRangeMulti
          defaultValue="06/30/2020"
        />
      </CompoundFormElement>
    )
  },
  {
    id: 'today-in-range',
    label: 'Today - In selected range',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <DatePickerElement
          idPrefix="rangeToday_start"
          labelContent="Start Date"
          dateInputId={`${dateRangeInputId01}-today_in_range`}
          defaultValue="06/24/2021"
        />
        <DatePickerElement
          idPrefix="rangeToday_end"
          labelContent="End Date"
          dateInputId={`${dateRangeInputId02}-today_in_range`}
          isOpen
          todayActiveInRange
          dateSelected
          dateRange="week-4-5"
          dateRangeMulti
          defaultValue="06/30/2020"
        />
      </CompoundFormElement>
    )
  },
  {
    id: 'span-across-month-in-range',
    label: 'Current and adjacent month in selected range',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <DatePickerElement
          idPrefix="rangeSpanMonth_start"
          labelContent="Start Date"
          dateInputId={`${dateRangeInputId01}-adjacent_month`}
          defaultValue="06/28/2020"
        />
        <DatePickerElement
          idPrefix="rangeSpanMonth_end"
          labelContent="End Date"
          dateInputId={`${dateRangeInputId02}-adjacent_month`}
          isOpen
          dateSelected
          dateRange="week-5"
          defaultValue="07/04/2020"
        />
      </CompoundFormElement>
    )
  }
];

export let examples = [
  {
    id: 'table_default',
    label: 'Default in a Data Table',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <SimpleTable>
          <DatePickerElement
            idPrefix="tableRangeDefault_start"
            labelContent="Start Date"
            dateInputId={`${dateRangeInputId01}-default`}
            isOpen
            todayActive
          />
          <DatePickerElement
            idPrefix="tableRangeDefault_end"
            labelContent="End Date"
            dateInputId={`${dateRangeInputId02}-default`}
          />
        </SimpleTable>
      </CompoundFormElement>
    )
  },
  {
    id: 'table_start-date',
    label: 'Start date selected in a Data Table',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <SimpleTable>
          <DatePickerElement
            idPrefix="tableRangeSelected_start"
            labelContent="Start Date"
            dateInputId={`${dateRangeInputId01}-table-start_selected`}
            isOpen
            todayActive
            dateSelected="single"
            dateRange="week-4"
            defaultValue="06/24/2021"
          />
          <DatePickerElement
            idPrefix="tableRangeSelected_end"
            labelContent="End Date"
            dateInputId={`${dateRangeInputId02}-table-start_selected`}
          />
        </SimpleTable>
      </CompoundFormElement>
    )
  },
  {
    id: 'table_end-date-week',
    label: 'End date selected (Same week) in a Data Table',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <SimpleTable>
          <DatePickerElement
            idPrefix="tableRangeWeekSame_start"
            labelContent="Start Date"
            dateInputId={`${dateRangeInputId01}-table-end_selected`}
            defaultValue="06/24/2021"
          />
          <DatePickerElement
            idPrefix="tableRangeWeekSame_end"
            labelContent="End Date"
            dateInputId={`${dateRangeInputId02}-table-end_selected`}
            isOpen
            todayActive
            dateSelected
            dateRange="week-4"
            defaultValue="06/27/2020"
          />
        </SimpleTable>
      </CompoundFormElement>
    )
  },
  {
    id: 'table_end-date-weeks',
    label: 'End date selected (Different week) in a Data Table',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <SimpleTable>
          <DatePickerElement
            idPrefix="tableRangeWeekDiff_start"
            labelContent="Start Date"
            dateInputId={`${dateRangeInputId01}-table-end_selected_diff_week`}
            defaultValue="06/24/2021"
          />
          <DatePickerElement
            idPrefix="tableRangeWeekDiff_end"
            labelContent="End Date"
            dateInputId={`${dateRangeInputId02}-table-end_selected_diff_week`}
            isOpen
            todayActive
            dateSelected
            dateRange="week-4-5"
            dateRangeMulti
            defaultValue="06/30/2020"
          />
        </SimpleTable>
      </CompoundFormElement>
    )
  },
  {
    id: 'table_today-in-range',
    label: 'Today - In selected range in a Data Table',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <SimpleTable>
          <DatePickerElement
            idPrefix="tableRangeToday_start"
            labelContent="Start Date"
            dateInputId={`${dateRangeInputId01}-table-today_in_range`}
            defaultValue="06/24/2021"
          />
          <DatePickerElement
            idPrefix="tableRangeToday_end"
            labelContent="End Date"
            dateInputId={`${dateRangeInputId02}-table-today_in_range`}
            isOpen
            todayActiveInRange
            dateSelected
            dateRange="week-4-5"
            dateRangeMulti
            defaultValue="06/30/2020"
          />
        </SimpleTable>
      </CompoundFormElement>
    )
  },
  {
    id: 'table_span-across-month-in-range',
    label: 'Current and adjacent month in selected range in a Data Table',
    demoStyles: demoStyles,
    element: (
      <CompoundFormElement>
        <SimpleTable>
          <DatePickerElement
            idPrefix="tableRangeSpanMonth_start"
            labelContent="Start Date"
            dateInputId={`${dateRangeInputId01}-table-adjacent_month`}
            defaultValue="06/28/2020"
          />
          <DatePickerElement
            idPrefix="tableRangeSpanMonth_end"
            labelContent="End Date"
            dateInputId={`${dateRangeInputId02}-table-adjacent_month`}
            isOpen
            dateSelected
            dateRange="week-5"
            defaultValue="07/04/2020"
          />
        </SimpleTable>
      </CompoundFormElement>
    )
  }
];
