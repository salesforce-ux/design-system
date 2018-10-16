// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import VerticalTabs from '../';
import * as Snapshot from '../base/snapshots.data';
const { matchesMarkup } = createHelpers(__dirname);

describe('Vertical Tabs', () => {
  it('renders base vertical tab items', () =>
    matchesMarkup(<VerticalTabs tabs={Snapshot.exampleTabs} />));
  it('renders base vertical tab items with icons', () =>
    matchesMarkup(<VerticalTabs tabs={Snapshot.exampleTabsWithIcons} />));
  it('renders base vertical tab items with badges', () =>
    matchesMarkup(<VerticalTabs tabs={Snapshot.exampleTabsWithBadges} />));
});
