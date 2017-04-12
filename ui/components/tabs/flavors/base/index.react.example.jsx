// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Tabs from 'ui/components/tabs/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Menu, MenuList, MenuItem } from 'ui/components/menus/flavors/dropdown/index.react.example';
import { Default as ScopedTabs } from 'ui/components/scoped-tabs/flavors/base/index.react.example';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
<div className="demo-only">
  <Tabs selectedIndex={props.selectedIndex || 0}>
    <Tabs.Item title="Item One" id="tab-default-1">
      {props.itemOneContent || 'Item One Content'}
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      Item Three Content
    </Tabs.Item>
  </Tabs>
</div>;

let Overflowing = props =>
<div className="demo-only" style={{height: '10rem'}}>
  <Tabs>
    <Tabs.Item title="Item One" id="tab-default-1">
      Item One Content
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      Item Three Content
    </Tabs.Item>
    <Tabs.Item title="Item Four" id="tab-default-4">
      <h2>Item Four Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Five" id="tab-default-5">
      <h2>Item Five Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Six" id="tab-default-6">
      <h2>Item Six Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Seven" id="tab-default-7">
      <h2>Item Seven Content</h2>
    </Tabs.Item>
    <Tabs.ItemOverflow title="More tabs" className="slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open slds-tabs--default__item">
      <a className="slds-tabs--default__link" href="javascript:void(0);" aria-haspopup="true">
        <span className="slds-truncate" title="More tabs">More <span className="slds-assistive-text">tabs</span></span>
        <SvgIcon className="slds-button__icon slds-button__icon--x-small" sprite="utility" symbol="down" />
      </a>
      <Menu className="slds-dropdown--right">
        <MenuList className="slds-dropdown--length-with-icon-10">
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-account slds-m-right--small" sprite="standard" symbol="account" />
            Accounts
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-approval slds-m-right--small" sprite="standard" symbol="approval" />
            Approvals
          </MenuItem>
          <MenuItem>
            <SvgIcon className="slds-icon slds-icon--small slds-icon-standard-lead slds-m-right--small" sprite="standard" symbol="lead" />
            Lead
          </MenuItem>
        </MenuList>
      </Menu>
    </Tabs.ItemOverflow>
  </Tabs>
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <Default />
);

export let states = [
  {
    id: 'selected',
    label: 'Item Two Selected',
    element: <Default selectedIndex={1} />
  }
];

export let examples = [
  {
    id: 'overflow',
    label: 'Overflowing items',
    element: <Overflowing />
  },
  {
    id: 'nested',
    label: 'With Nested Scoped Tabs',
    element: <Default itemOneContent={<ScopedTabs />} />
  }
];
