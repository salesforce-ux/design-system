// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as DatetimePicker from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Datetime Picker', () => {
  it('renders a default datetime picker', () =>
    matchesMarkup(DatetimePicker.default));

  it('renders with a small width container', () =>
    matchesMarkup(
      getDisplayElementById(DatetimePicker.examples, 'small-width-container')
    ));

  it('renders with a date selection', () =>
    matchesMarkup(
      getDisplayElementById(DatetimePicker.states, 'date-selection')
    ));

  it('renders with a time selection', () =>
    matchesMarkup(
      getDisplayElementById(DatetimePicker.states, 'time-selection')
    ));
});
