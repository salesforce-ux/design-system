// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../index.react';
import { StandardIcon } from '../../icons/standard/example';
import { ButtonMenu } from '../../button-icons/menu/';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { TabsScoped } from '../../scoped-tabs/base/example';
import Card, { CardHeader, CardBody, CardFooter } from '../../cards/';

export const TabsDefault = props => (
  <Tabs selectedIndex={props.selectedIndex}>
    <Tabs.Item title="Item One" id="tab-default-1">
      {props.itemOneContent}
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      Item Three Content
    </Tabs.Item>
  </Tabs>
);

TabsDefault.propTypes = {
  selectedIndex: PropTypes.number,
  itemOneContent: PropTypes.node
};

TabsDefault.defaultProps = {
  selectedIndex: 0,
  itemOneContent: 'Item One Content'
};

export const TabsWithNestedScopedTabs = () => (
  <TabsDefault itemOneContent={<TabsScoped />} />
);

export const TabsOverflow = () => (
  <div className="demo-only" style={{ height: '12rem' }}>
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
      <Tabs.ItemOverflow title="More Tabs" id="tab-default-8">
        <ButtonMenu label="More" type="tabs" flavor="default" isOpen>
          <TabsOverflowMenu />
        </ButtonMenu>
      </Tabs.ItemOverflow>
    </Tabs>
  </div>
);

const TabsOverflowMenu = () => (
  <Menu className="slds-dropdown_right">
    <MenuList className="slds-dropdown_length-with-icon-10">
      <MenuItem title="Accounts">
        <span className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <StandardIcon className="slds-icon_small" symbol="account" />
          </span>
          <span className="slds-media__body">Accounts</span>
        </span>
      </MenuItem>
      <MenuItem title="Approvals">
        <span className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <StandardIcon className="slds-icon_small" symbol="approval" />
          </span>
          <span className="slds-media__body">Approvals</span>
        </span>
      </MenuItem>
      <MenuItem title="Lead">
        <span className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <StandardIcon className="slds-icon_small" symbol="lead" />
          </span>
          <span className="slds-media__body">Leads</span>
        </span>
      </MenuItem>
    </MenuList>
  </Menu>
);

export const TabsWithCards = () => (
  <Tabs className="slds-tabs_card" selectedIndex={0}>
    <Tabs.Item title="Item One" id="tab-default-1">
      <Card>
        <CardHeader
          symbol="contact"
          title="Card Header"
          href="javascript:void(0);"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
        />
        <CardBody hasPadding>
          This is a card inside an <code className="doc">
            .slds-tabs_card
          </code>{' '}
          to show how styling is removed when cards are nested inside.
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader
          symbol="contact"
          title="Card Header"
          href="javascript:void(0);"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
        />
        <CardBody hasPadding>
          This is a card inside an <code className="doc">
            .slds-tabs_card
          </code>{' '}
          to show how styling is removed when cards are nested inside.
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
      <Card hasCardBoundary>
        <CardHeader
          symbol="contact"
          title="Card Header"
          href="javascript:void(0);"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
        />
        <CardBody hasPadding>
          This is a card inside an <code className="doc">
            .slds-tabs_card
          </code>{' '}
          to illustrate how
          <code className="doc">.slds-card_boundary</code> adds a rounded border
          when desired.
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      Item Three Content
    </Tabs.Item>
  </Tabs>
);

export const TabsMedium = () => (
  <Tabs size="medium">
    <Tabs.Item title="Item One" id="tab-default-1">
      Item One Content
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      Item Three Content
    </Tabs.Item>
  </Tabs>
);

export const TabsLarge = () => (
  <Tabs size="large">
    <Tabs.Item title="Item One" id="tab-default-1">
      Item One Content
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      Item Two Content
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      Item Three Content
    </Tabs.Item>
  </Tabs>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <TabsDefault />;

export let states = [
  {
    id: 'selected',
    label: 'Item Two Selected',
    element: <TabsDefault selectedIndex={1} />
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
    id: 'overflow',
    label: 'Overflowing items',
    element: <TabsOverflow />
  },
  {
    id: 'nested',
    label: 'With Nested Scoped Tabs',
    element: <TabsWithNestedScopedTabs />
  },
  {
    id: 'card-look',
    label: 'Tab Card-look',
    element: <TabsWithCards />
  }
];
