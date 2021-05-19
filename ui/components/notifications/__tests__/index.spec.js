// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

// import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import { examples } from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Notifications', () => {
  it('renders a single notification', () =>
    matchesMarkup(getDisplayElementById(examples, 'task-notification'))
  )

  it('renders two stacked notifications', () =>
    matchesMarkup(getDisplayElementById(examples, 'stacked-2'))
  )

  it('renders three stacked notifications', () =>
    matchesMarkup(getDisplayElementById(examples, 'stacked-3'))
  )

  it('renders six stacked notifications', () =>
    matchesMarkup(getDisplayElementById(examples, 'overflow-six'))
  )
});
