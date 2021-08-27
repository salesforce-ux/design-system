// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as Timepicker from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Timepicker', () => {
  it('renders base state', () => matchesMarkup(Timepicker.default));

  it('renders focus state', () =>
    matchesMarkup(getDisplayElementById(Timepicker.states, 'focused')));

  it('renders a listbox', () =>
    matchesMarkup(
      getDisplayElementById(Timepicker.states, 'open-item-focused')
    ));

  it('renders a listbox with a selected item', () =>
    matchesMarkup(getDisplayElementById(Timepicker.states, 'time-selection')));

  it('renders required state', () =>
    matchesMarkup(getDisplayElementById(Timepicker.states, 'required')));

  it('renders error state', () =>
    matchesMarkup(getDisplayElementById(Timepicker.states, 'error')));

  it('renders required plus error state', () =>
    matchesMarkup(getDisplayElementById(Timepicker.states, 'required-error')));

  it('renders a disabled state', () =>
    matchesMarkup(getDisplayElementById(Timepicker.states, 'disabled')));

});
