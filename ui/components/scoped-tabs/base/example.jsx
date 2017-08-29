// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Tabs from '../../tabs/index.react';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Default = props => (
  <Tabs flavor="scoped" selectedIndex={props.selectedIndex || 0}>
    <Tabs.Item title="Item One" id="tab-scoped-1">
      Item One Content
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-scoped-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-scoped-3">
      Item Three Content
    </Tabs.Item>
  </Tabs>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Default />;

export let states = [
  {
    id: 'selected',
    label: 'Item Two Selected',
    element: <Default selectedIndex={1} />
  }
];
