// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Tabs from '../../tabs/index.react';
import { ButtonMenu } from '../../button-icons/menu/';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';

export let TabsScoped = props => (
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

export const TabsMedium = () => (
  <Tabs flavor="scoped" size="medium">
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

export const TabsLarge = () => (
  <Tabs flavor="scoped" size="large">
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

export const TabsOverflowing = () => (
  <div className="demo-only" style={{ height: '12rem' }}>
    <Tabs flavor="scoped">
      <Tabs.Item title="Item One" id="tab-scoped-1">
        Item One Content
      </Tabs.Item>
      <Tabs.Item title="Item Two" id="tab-scoped-2">
        Item Two Content
      </Tabs.Item>
      <Tabs.Item title="Item Three" id="tab-scoped-3">
        Item Three Content
      </Tabs.Item>
      <Tabs.ItemOverflow title="More Tabs" id="tab-scoped-4">
        <ButtonMenu label="More" type="tabs" flavor="scoped" isOpen>
          <TabsOverflowMenu />
        </ButtonMenu>
      </Tabs.ItemOverflow>
    </Tabs>
  </div>
);

const TabsOverflowMenu = () => (
  <Menu className="slds-dropdown_right">
    <MenuList className="slds-dropdown_length-with-icon-10">
      <MenuItem title="Item Four">Item Four</MenuItem>
      <MenuItem title="Item Five">Item Five</MenuItem>
      <MenuItem title="Item Six">Item Six</MenuItem>
    </MenuList>
  </Menu>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <TabsScoped />;

export let states = [
  {
    id: 'selected',
    label: 'Item Two Selected',
    element: <TabsScoped selectedIndex={1} />
  }
];

export let examples = [
  {
    id: 'size-medium',
    label: 'Size - Medium',
    element: <TabsMedium />
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element: <TabsLarge />
  },
  {
    id: 'overflowing-items',
    label: 'Overflowing Items',
    element: <TabsOverflowing />
  }
];
