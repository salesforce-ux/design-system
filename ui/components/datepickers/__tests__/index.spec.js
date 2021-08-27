// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as BaseExamples from '../base/example';
import * as RangeExamples from '../range/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Date Picker', () => {
  it('renders a default datetime picker', () =>
    matchesMarkup(BaseExamples.default));

  it('renders a Date Picker with Date selected', () =>
    matchesMarkup(
      getDisplayElementById(BaseExamples.states, 'datepicker-day-selected')
    ));

  it('renders a Date Picker with error', () =>
    matchesMarkup(
      getDisplayElementById(BaseExamples.states, 'datepicker-with-error')
    ));

  it('renders a Date Picker with required', () =>
    matchesMarkup(
      getDisplayElementById(BaseExamples.states, 'datepicker-required')
    ));

  it('renders a Date Picker with required and error', () =>
    matchesMarkup(
      getDisplayElementById(
        BaseExamples.states,
        'datepicker-required-with-error'
      )
    ));

  it('renders a disabled Date picker', () =>
    matchesMarkup(
      getDisplayElementById(
        BaseExamples.states,
        'datepicker-disabled'
      )
    ));

  it('renders a Date Picker with mobile layout', () =>
    matchesMarkup(getDisplayElementById(BaseExamples.examples, 'mobile')));

  it('renders a Date Picker in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(BaseExamples.examples, 'datepicker-in-datatable')
    ));

  it('renders a Date picker with date selected in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(
        BaseExamples.examples,
        'datepicker-in-datatable_date-selected'
      )
    ));

  it('renders a Date picker with an error in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(
        BaseExamples.examples,
        'datepicker-in-datatable_with-error'
      )
    ));

  it('renders a Date Picker with Range - Start date selected', () =>
    matchesMarkup(getDisplayElementById(RangeExamples.states, 'start-date')));

  it('renders a Date Picker with Range - End date selected (Same week)', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.states, 'end-date-week')
    ));

  it('renders a Date Picker with Range - End date selected (Different week)', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.states, 'end-date-weeks')
    ));

  it('renders a Date Picker with Range - Today - In selected range', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.states, 'today-in-range')
    ));

  it('renders a Date Picker with Range - Current and adjacent month in selected range', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.states, 'span-across-month-in-range')
    ));

  it('renders a Date Picker with Range - Default in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.examples, 'table_default')
    ));

  it('renders a Date Picker with Range - Start date selected in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.examples, 'table_start-date')
    ));

  it('renders a Date Picker with Range - End date selected (Same week) in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.examples, 'table_end-date-week')
    ));

  it('renders a Date Picker with Range - End date selected (Different week) in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.examples, 'table_end-date-weeks')
    ));

  it('renders a Date Picker with Range - Today - In selected range in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(RangeExamples.examples, 'table_today-in-range')
    ));

  it('renders a Date Picker with Range - Current and adjacent month in selected range in a Data Table', () =>
    matchesMarkup(
      getDisplayElementById(
        RangeExamples.examples,
        'table_span-across-month-in-range'
      )
    ));
});
