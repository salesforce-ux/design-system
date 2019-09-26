// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Tabset from '../tabset';
import Tab from '../tab';

export default (
  <Tabset>
    <Tab label="Tab 1">
      <p>This is tab 1 content</p>
      <p>It can be any html</p>
    </Tab>

    <Tab label="Tab 2">
      <p>This is tab 2 content</p>
      <p>It can be any html</p>
    </Tab>

    <Tab label="Tab 3">
      <p>This is tab 3 content</p>
      <p>It can be any html</p>
    </Tab>
  </Tabset>
);

export const examples = [
  {
    id: 'with-overflow',
    label: 'With Overflow',
    element: <div>tbd.</div>
  },
  {
    id: 'with-icon',
    label: 'With Icon',
    element: (
      <Tabset>
        <Tab
          label="Opportunities"
          tabIcon={{ sprite: 'standard', symbol: 'opportunity' }}
        >
          <p>This is tab 1 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Cases" tabIcon={{ sprite: 'standard', symbol: 'case' }}>
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab
          label="Products"
          tabIcon={{ sprite: 'standard', symbol: 'product' }}
        >
          <p>This is tab 3 content</p>
          <p>It can be any html</p>
        </Tab>
      </Tabset>
    )
  },
  {
    id: 'with-error',
    label: 'With Error',
    element: <div>tbd.</div>
  },
  {
    id: 'with-nested-scoped-tabs',
    label: 'With Nested Scoped Tabs',
    element: <div>tbd.</div>
  }
];
