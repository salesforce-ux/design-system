// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../index.react';
import { StandardIcon } from '../../icons/standard/example';
import { UtilityIcon } from '../../icons/base/example';
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
        <h2>Item One Content</h2>
      </Tabs.Item>
      <Tabs.Item title="Item Two" id="tab-default-2">
        <h2>Item Two Content</h2>
      </Tabs.Item>
      <Tabs.Item title="Item Three" id="tab-default-3">
        <h2>Item Three Content</h2>
      </Tabs.Item>
      <Tabs.Item title="Item Four" id="tab-default-4">
        <h2>Item Four Content</h2>
      </Tabs.Item>
      <Tabs.Item title="Item Five" id="tab-default-5">
        <h2>Item Five Content</h2>
      </Tabs.Item>
      <Tabs.ItemOverflow title="More Tabs" id="tab-default-8">
        <ButtonMenu label="More" type="tabs" flavor="default" isOpen>
          <TabsOverflowMenu />
        </ButtonMenu>
      </Tabs.ItemOverflow>
    </Tabs>
  </div>
);

export const TabsOverflowIcons = () => (
  <div className="demo-only" style={{ height: '12rem' }}>
    <Tabs>
      <Tabs.Item
        title="Opportunities"
        leftIcon={
          <StandardIcon
            className="slds-icon_small"
            symbol="opportunity"
            title="Opportunities"
            assistiveText={false}
          />
        }
        id="tab-default-1"
      >
        <h2>Item One Content</h2>
      </Tabs.Item>
      <Tabs.Item
        title="Cases"
        leftIcon={
          <StandardIcon
            className="slds-icon_small"
            title="Cases"
            symbol="case"
            assistiveText={false}
          />
        }
        id="tab-default-2"
      >
        <h2>Item Two Content</h2>
      </Tabs.Item>
      <Tabs.Item
        title="Products"
        leftIcon={
          <StandardIcon
            className="slds-icon_small"
            title="Products"
            symbol="product"
            assistiveText={false}
          />
        }
        id="tab-default-3"
      >
        <h2>Item Three Content</h2>
      </Tabs.Item>
      <Tabs.Item
        title="Price Books"
        leftIcon={
          <StandardIcon
            className="slds-icon_small"
            title="Price Books"
            symbol="pricebook"
            assistiveText={false}
          />
        }
        id="tab-default-4"
      >
        <h2>Item Four Content</h2>
      </Tabs.Item>
      <Tabs.Item
        title="Contacts"
        leftIcon={
          <StandardIcon
            className="slds-icon_small"
            title="Contacts"
            symbol="contact"
            assistiveText={false}
          />
        }
        id="tab-default-5"
      >
        <h2>Item Five Content</h2>
      </Tabs.Item>
      <Tabs.ItemOverflow title="More Tabs" id="tab-default-8">
        <ButtonMenu label="More" type="tabs" flavor="default" isOpen>
          <TabsOverflowMenuIcons />
        </ButtonMenu>
      </Tabs.ItemOverflow>
    </Tabs>
  </div>
);

const TabsOverflowMenu = () => (
  <Menu className="slds-dropdown_right">
    <MenuList className="slds-dropdown_length-with-icon-10">
      <MenuItem title="Accounts">Accounts</MenuItem>
      <MenuItem title="Approvals">Approvals</MenuItem>
      <MenuItem title="Lead">Leads</MenuItem>
    </MenuList>
  </Menu>
);

const TabsOverflowMenuIcons = () => (
  <Menu className="slds-dropdown_right">
    <MenuList className="slds-dropdown_length-with-icon-10">
      <MenuItem title="Accounts">
        <span className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <StandardIcon
              className="slds-icon_small"
              symbol="account"
              assistiveText={false}
            />
          </span>
          <span className="slds-media__body">Accounts</span>
        </span>
      </MenuItem>
      <MenuItem title="Approvals">
        <span className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <StandardIcon
              className="slds-icon_small"
              symbol="approval"
              assistiveText={false}
            />
          </span>
          <span className="slds-media__body">Approvals</span>
        </span>
      </MenuItem>
      <MenuItem title="Lead">
        <span className="slds-media slds-media_center">
          <span className="slds-media__figure">
            <StandardIcon
              className="slds-icon_small"
              symbol="lead"
              assistiveText={false}
            />
          </span>
          <span className="slds-media__body">Leads</span>
        </span>
      </MenuItem>
    </MenuList>
  </Menu>
);

export const TabsWithCards = () => (
  <Tabs isCard selectedIndex={0}>
    <Tabs.Item title="Item One" id="tab-default-1">
      <Card>
        <CardHeader
          symbol="contact"
          title="Card Header"
          href="#"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
          onClick={e => e.preventDefault()}
        />
        <CardBody hasPadding>
          This is a card inside an <code className="doc">.slds-tabs_card</code>{' '}
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
          href="#"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
          onClick={e => e.preventDefault()}
        />
        <CardBody hasPadding>
          This is a card inside an <code className="doc">.slds-tabs_card</code>{' '}
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
          href="#"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
          onClick={e => e.preventDefault()}
        />
        <CardBody hasPadding>
          This is a card inside an <code className="doc">.slds-tabs_card</code>{' '}
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

export const TabsWithError = () => (
  <div className="demo-only" style={{ height: '12rem' }}>
    <Tabs>
      <Tabs.Item title="Item One" id="tab-default-1">
        <h2>Item One Content</h2>
      </Tabs.Item>
      <Tabs.Item
        title="Item Two"
        id="tab-default-2"
        rightIcon={
          <UtilityIcon
            className="slds-icon_x-small slds-icon-text-error"
            symbol="error"
            title="This item has an error"
            assistiveText="This item has an error"
          />
        }
      >
        <h2>Item Two Content - Has Error</h2>
      </Tabs.Item>
      <Tabs.Item title="Item Three" id="tab-default-3">
        <h2>Item Three Content</h2>
      </Tabs.Item>
      <Tabs.Item title="Item Four" id="tab-default-4">
        <h2>Item Four Content</h2>
      </Tabs.Item>
    </Tabs>
  </div>
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
    label: 'Overflowing Items',
    element: <TabsOverflow />
  },
  {
    id: 'overflow',
    label: 'Overflowing Items with Icons',
    element: <TabsOverflowIcons />
  },
  {
    id: 'error',
    label: 'Tabs With Error inside of content',
    element: <TabsWithError />
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
  },
  {
    id: 'styling-hooks',
    label: 'Styling Hooks',
    demoStyles: `
      --sds-c-tabs-list-sizing-border: 5px;
      --sds-c-tabs-list-color-border: red;
      --sds-c-tabs-item-color-border-hover: pink;
      --sds-c-tabs-item-color-border-active: purple;
      --sds-c-tabs-item-text-color: red;
      --sds-c-tabs-item-text-color-active: purple;
    `,
    storybookStyles: true,
    element: (
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
      </Tabs>
    )
  }
];
