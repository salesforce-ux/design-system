// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as DynamicMenu from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Dynamic Menu', () => {
  it('renders a default dynamic menu', () =>
    matchesMarkup(DynamicMenu.default));

  it('renders a dynamic menu with 0 items', () =>
    matchesMarkup(
      getDisplayElementById(DynamicMenu.states, 'dynamic-menu-0-items')
    ));

  it('renders a dynamic menu with 1 item', () =>
    matchesMarkup(
      getDisplayElementById(DynamicMenu.states, 'dynamic-menu-1-item')
    ));

  it('renders a dynamic menu with less than 10 items', () =>
    matchesMarkup(
      getDisplayElementById(DynamicMenu.states, 'dynamic-menu-sub-10-item')
    ));

  it('renders a dynamic menu with more than 10 items', () =>
    matchesMarkup(
      getDisplayElementById(DynamicMenu.states, 'dynamic-menu-over-10-item')
    ));
});
