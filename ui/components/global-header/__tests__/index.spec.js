// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */
import React from 'react';

import {
  SetupDropdown,
  ActionsDropdown,
  GlobalSearch,
  GlobalSearchMRUs,
  GlobalSearchSearchOptions,
  GlobalHeaderDeprecated
} from '../base/deprecated';
import GlobalHeader, { SkipLink, Logo } from '../';
import GlobalActions, {
  Favorites,
  Task,
  Help,
  Setup,
  Notifications,
  Avatar
} from '../global-actions/';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Deprecated Global Header', () => {
  it('renders a deprecated global header', () =>
    matchesMarkup(<GlobalHeaderDeprecated />));
  it('renders a deprecated global header with favorites selected', () =>
    matchesMarkup(<GlobalHeaderDeprecated favoritesSelected />));
  it('renders a deprecated global header with favorites disabled', () =>
    matchesMarkup(<GlobalHeaderDeprecated favoritesDisabled />));
  it('renders a deprecated global header with actions menu showing', () =>
    matchesMarkup(<GlobalHeaderDeprecated actions />));
  it('renders a deprecated global header with setup menu showing', () =>
    matchesMarkup(<GlobalHeaderDeprecated setup />));
  it('renders a deprecated global header with search expanded', () =>
    matchesMarkup(<GlobalHeaderDeprecated expanded />));
  it('renders a deprecated global header with search expanded and with search term', () =>
    matchesMarkup(<GlobalHeaderDeprecated expanded searchingFor="ibm" />));
  it('renders deprecated global action setup menu', () =>
    matchesMarkup(<SetupDropdown />));
  it('renders deprecated global action menu', () =>
    matchesMarkup(<ActionsDropdown />));
  it('renders deprecated global header search input', () =>
    matchesMarkup(<GlobalSearch />));
  it('renders deprecated global header search MRU', () =>
    matchesMarkup(<GlobalSearchMRUs />));
  it('renders deprecated global header search typeahead options', () =>
    matchesMarkup(<GlobalSearchSearchOptions />));
});

describe('Global Header', () => {
  it('renders global header', () => matchesMarkup(<GlobalHeader />));
  it('renders skip link', () => matchesMarkup(<SkipLink />));
  it('renders global header logo', () => matchesMarkup(<Logo />));
});

describe('Global Actions Bar', () => {
  it('renders favorites item', () => matchesMarkup(<Favorites />));
  it('renders favorites item that is disabled', () =>
    matchesMarkup(<Favorites favoritesDisabled />));
  it('renders favorites item that is selected', () =>
    matchesMarkup(<Favorites favoritesClicked />));
  it('renders favorites item with dialog menu', () =>
    matchesMarkup(<Favorites showFavoritesPopup />));
  it('renders task item', () => matchesMarkup(<Task />));
  it('renders task item with dialog menu', () =>
    matchesMarkup(<Task showTaskMenu />));
  it('renders help item', () => matchesMarkup(<Help />));
  it('renders setup item', () => matchesMarkup(<Setup />));
  it('renders notification item', () => matchesMarkup(<Notifications />));
  it('renders notification item with 1 notification', () =>
    matchesMarkup(<Notifications notificationCount="1" />));
  it('renders notification item with dialog menu', () =>
    matchesMarkup(<Notifications showNotification />));
  it('renders avatar item', () => matchesMarkup(<Avatar />));
  it('renders global actions bar', () => matchesMarkup(<GlobalActions />));
});
