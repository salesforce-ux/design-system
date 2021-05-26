// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as SplitView from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Split View', () => {
  it('renders a default split view', () =>
    matchesMarkup(getDisplayElementById(SplitView.default, 'default')));

  it('renders split view with a selected item', () =>
    matchesMarkup(getDisplayElementById(SplitView.states, 'selected-item')));

  it('renders split view with a deprecated selected item', () =>
    matchesMarkup(
      getDisplayElementById(SplitView.states, 'selected-item-deprecated')
    ));

  it('renders split view with overflow', () =>
    matchesMarkup(getDisplayElementById(SplitView.states, 'overflow')));

  it('renders split view with unread items', () =>
    matchesMarkup(getDisplayElementById(SplitView.states, 'unread')));

  it('renders split view with a collapsed panel', () =>
    matchesMarkup(getDisplayElementById(SplitView.states, 'panel-collapsed')));
});
