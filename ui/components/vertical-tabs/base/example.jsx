// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import VerticalTabs from '../';
import * as Snapshot from './snapshots.data';

export default <VerticalTabs tabs={Snapshot.exampleTabs} />;

export let examples = [
  {
    id: 'with-icons',
    label: 'With icons',
    element: <VerticalTabs tabs={Snapshot.exampleTabsWithIcons} />
  },
  {
    id: 'with-badges',
    label: 'With badges',
    element: <VerticalTabs tabs={Snapshot.exampleTabsWithBadges} />
  },
  {
    id: 'item-focus',
    label: 'Item Focus',
    element: <VerticalTabs itemFocused tabs={Snapshot.exampleTabs} />
  }
];
