// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as Lookup from '../base/example';
import * as LookupMultiEntity from '../multi-entity/example';
import LookupAdvancedModal from '../advanced-modal/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Lookup', () => {
  it('renders a default lookup', () => matchesMarkup(Lookup.default));

  it('renders a lookup with focus', () =>
    matchesMarkup(getDisplayElementById(Lookup.states, 'focused')));

  it('renders an open lookup with focus on an item', () =>
    matchesMarkup(getDisplayElementById(Lookup.states, 'open-item-focused')));

  it('renders a lookup displaying options based on user input', () =>
    matchesMarkup(
      getDisplayElementById(Lookup.states, 'displaying-options-based-on-input')
    ));

  it('renders a lookup with option selected', () =>
    matchesMarkup(
      getDisplayElementById(Lookup.states, 'closed-option-selected')
    ));
});

describe('Lookup - Multi-Entity', () => {
  it('renders a default multi-entity lookup', () =>
    matchesMarkup(LookupMultiEntity.default));

  it('renders a multi-entity lookup with focus', () =>
    matchesMarkup(getDisplayElementById(LookupMultiEntity.states, 'focused')));

  it('renders an open multi-entity lookup with focus on an item', () =>
    matchesMarkup(
      getDisplayElementById(LookupMultiEntity.states, 'open-item-focused')
    ));

  it('renders a multi-entity lookup with options selected', () =>
    matchesMarkup(
      getDisplayElementById(LookupMultiEntity.states, 'options-selected')
    ));

  it('renders a multi-entity lookup with focus and options selected', () =>
    matchesMarkup(
      getDisplayElementById(
        LookupMultiEntity.states,
        'focused-options-selected'
      )
    ));
});

describe('Lookup - Advanced Modal', () => {
  it('renders a lookup with modal', () => matchesMarkup(LookupAdvancedModal));
});
