// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import MobileTabs, {
  MobileTabGroup,
  NestedMobileStacked,
  DeprecatedAdjacentMobileStacked,
  DeprecatedMobileStacked
} from './';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export default <MobileTabs />;

export let states = [
  {
    id: 'drilled-in',
    label: 'Drilled In',
    element: <MobileTabs visiblePanelIdx={0} isStatic />
  }
];

export let examples = [
  {
    id: 'adjacent',
    label: 'Adjacent Stacked Drill Ins',
    element: (
      <MobileTabGroup>
        <MobileTabs isStatic />
        <MobileTabs isStatic />
      </MobileTabGroup>
    )
  },
  {
    id: 'nested',
    label: 'Nested Stacked Drill Ins',
    element: <NestedMobileStacked />
  },
  {
    id: 'deprecated-tab-stack',
    label: 'Deprecated Stacked Tabs',
    element: <DeprecatedMobileStacked />
  },
  {
    id: 'deprecated-adjacent-tab-stack',
    label: 'Deprecated Adjacent Tab Stack',
    element: <DeprecatedAdjacentMobileStacked />
  }
];
