// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as Pill from '../base/example';
import * as ListboxOfPillOptions from '../listbox-of-pill-options/example';


const { matchesMarkup } = createHelpers(__dirname);

describe('Pill', () => {
  it('renders a pill', () => matchesMarkup(Pill.default));

  it('renders a pill with an icon', () =>
    matchesMarkup(getDisplayElementById(Pill.examples, 'icon')));

  it('renders a pill with an avatar', () =>
    matchesMarkup(getDisplayElementById(Pill.examples, 'avatar')));

  it('renders a pill with an error', () =>
    matchesMarkup(getDisplayElementById(Pill.states, 'error')));

  it('renders a pill that is truncated', () =>
    matchesMarkup(getDisplayElementById(Pill.states, 'truncated')));

  it('renders a pill in a container', () =>
    matchesMarkup(getDisplayElementById(Pill.examples, 'container')));

  it('renders a pill in a container - bare (deprecated)', () =>
    matchesMarkup(getDisplayElementById(Pill.examples, 'container-bare')));
});

describe('Pill - Listbox of Pills', () => {
  it('renders a default listbox of pills', () => matchesMarkup(ListboxOfPillOptions.default));

  it('renders a listbox of pills with an icon', () =>
    matchesMarkup(getDisplayElementById(ListboxOfPillOptions.examples, 'listbox-pill-with-icon')));

  it('renders a listbox of pills with an avatar', () =>
    matchesMarkup(getDisplayElementById(ListboxOfPillOptions.examples, 'listbox-pill-with-avatar')));

  it('renders a listbox of pills - bare', () =>
    matchesMarkup(getDisplayElementById(ListboxOfPillOptions.examples, 'listbox-pill-bare')));

    it('renders a listbox of pills - group', () =>
      matchesMarkup(getDisplayElementById(ListboxOfPillOptions.examples, 'listbox-pill-group')));
});
