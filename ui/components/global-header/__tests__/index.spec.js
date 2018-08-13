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

const { matchesMarkup, matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Deprecated Global Header', () => {
  it('renders a deprecated global header', () =>
    matchesMarkupAndStyle(<GlobalHeaderDeprecated />));
  it('renders a deprecated global header with favorites selected', () =>
    matchesMarkupAndStyle(<GlobalHeaderDeprecated favoritesSelected />));
  it('renders a deprecated global header with favorites disabled', () =>
    matchesMarkupAndStyle(<GlobalHeaderDeprecated favoritesDisabled />));
  it('renders a deprecated global header with actions menu showing', () =>
    matchesMarkupAndStyle(<GlobalHeaderDeprecated actions />));
  it('renders a deprecated global header with setup menu showing', () =>
    matchesMarkupAndStyle(<GlobalHeaderDeprecated setup />));
  it('renders a deprecated global header with search expanded', () =>
    matchesMarkupAndStyle(<GlobalHeaderDeprecated expanded />));
  it('renders a deprecated global header with search expanded and with search term', () =>
    matchesMarkupAndStyle(
      <GlobalHeaderDeprecated expanded searchingFor="ibm" />
    ));
  it('renders deprecated global action setup menu', () =>
    matchesMarkupAndStyle(<SetupDropdown />));
  it('renders deprecated global action menu', () =>
    matchesMarkupAndStyle(<ActionsDropdown />));
  it('renders deprecated global header search input', () =>
    matchesMarkupAndStyle(<GlobalSearch />));
  it('renders deprecated global header search MRU', () =>
    matchesMarkupAndStyle(<GlobalSearchMRUs />));
  it('renders deprecated global header search typeahead options', () =>
    matchesMarkupAndStyle(<GlobalSearchSearchOptions />));
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
