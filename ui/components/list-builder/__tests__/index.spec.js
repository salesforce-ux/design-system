// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as ListBuilder from '../base/example';
import ListBuilderInlineEdit from '../inline-edit/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('List Builder', () => {
  it('renders a default list builder', () =>
    matchesMarkup(ListBuilder.default));

  it('renders a list builder with hidden header', () =>
    matchesMarkup(
      getDisplayElementById(
        ListBuilder.examples,
        'two-column-with-hidden-header'
      )
    ));

  it('renders a list builder with filtered results', () =>
    matchesMarkup(getDisplayElementById(ListBuilder.examples, 'filtered')));

  it('renders a list builder with items selected', () =>
    matchesMarkup(getDisplayElementById(ListBuilder.states, 'items-selected')));

  it('renders a list builder with items disabled', () =>
    matchesMarkup(getDisplayElementById(ListBuilder.states, 'items-disabled')));

  it('renders a list builder with default items disabled', () =>
    matchesMarkup(
      getDisplayElementById(ListBuilder.states, 'items-default-selected')
    ));
});

describe('List Builder Inline Edit', () => {
  it('renders a default list builder with inline edit', () =>
    matchesMarkup(ListBuilderInlineEdit));
});
