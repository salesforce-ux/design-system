// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Tabset from '../';
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
    id: 'with-start-icon',
    label: 'With Start Icon',
    element: (
      <Tabset>
        <Tab
          label="Opportunities"
          startIcon={{ sprite: 'standard', symbol: 'opportunity' }}
        >
          <p>This is tab 1 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Cases" startIcon={{ sprite: 'standard', symbol: 'case' }}>
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab
          label="Products"
          startIcon={{ sprite: 'standard', symbol: 'product' }}
        >
          <p>This is tab 3 content</p>
          <p>It can be any html</p>
        </Tab>
      </Tabset>
    )
  },
  {
    id: 'with-end-icon',
    label: 'With End Icon',
    element: (
      <Tabset>
        <Tab label="Opportunities">
          <p>This is tab 1 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab
          label="Cases"
          endIcon={{ sprite: 'utility', symbol: 'error' }}
          endIconAltText="There is an error"
          endIconColor="error"
        >
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Products">
          <p>This is tab 3 content</p>
          <p>It can be any html</p>
        </Tab>
      </Tabset>
    )
  },
  {
    id: 'with-nested-scoped-tabs',
    label: 'With Nested Scoped Tabs',
    element: (
      <Tabset>
        <Tab label="Opportunities">
          <Tabset>
            <Tab label="Nested Item 1">
              <p>How amazing, a Tabset within a Tabset.</p>
            </Tab>
            <Tab label="Nested Item 2">
              <p>How amazing, a Tabset within a Tabset.</p>
            </Tab>
          </Tabset>
        </Tab>

        <Tab label="Cases">
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Products">
          <p>This is tab 3 content</p>
          <p>It can be any html</p>
        </Tab>
      </Tabset>
    )
  }
];
