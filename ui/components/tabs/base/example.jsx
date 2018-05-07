// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Tabs from '../index.react';
import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { Default as ScopedTabs } from '../../scoped-tabs/base/example';
import { MobileStacked, AdjacentMobileStacked } from '../mobile-stack/example';
import Card, { CardHeader, CardBody, CardFooter } from '../../cards/';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export const BaseTabs = props => (
  <Tabs className={props.className} selectedIndex={props.selectedIndex || 0}>
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
);

export const TabsWithNestedScopedTabs = props => (
  <BaseTabs itemOneContent={<ScopedTabs />} />
);

export const Overflowing = props => (
  <div className="demo-only" style={{ height: '10rem' }}>
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
      <Tabs.ItemOverflow
        title="More tabs"
        className="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open slds-tabs_default__item"
      >
        <a
          className="slds-button slds-tabs_default__link"
          href="javascript:void(0);"
          aria-haspopup="true"
        >
          <span className="slds-truncate" title="More tabs">
            More <span className="slds-assistive-text">tabs</span>
          </span>
          <SvgIcon
            className="slds-button__icon slds-button__icon_x-small"
            sprite="utility"
            symbol="down"
          />
        </a>
        <Menu className="slds-dropdown_right">
          <MenuList className="slds-dropdown_length-with-icon-10">
            <MenuItem title="Accounts">
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small"
                sprite="standard"
                symbol="account"
              />
              Accounts
            </MenuItem>
            <MenuItem title="Approvals">
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-standard-approval slds-m-right_small"
                sprite="standard"
                symbol="approval"
              />
              Approvals
            </MenuItem>
            <MenuItem title="Lead">
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-standard-lead slds-m-right_small"
                sprite="standard"
                symbol="lead"
              />
              Lead
            </MenuItem>
          </MenuList>
        </Menu>
      </Tabs.ItemOverflow>
    </Tabs>
  </div>
);

export const TabsWithCards = props => (
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

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <BaseTabs />;

export let states = [
  {
    id: 'selected',
    label: 'Item Two Selected',
    element: <BaseTabs selectedIndex={1} />
  }
];

export let examples = [
  {
    id: 'overflow',
    label: 'Overflowing items',
    element: <Overflowing />
  },
  {
    id: 'mobile',
    label: 'mobile',
    element: <MobileStacked />
  },
  {
    id: 'adjacent-mobile',
    label: 'adjacent-mobile',
    element: <AdjacentMobileStacked />
  },
  {
    id: 'nested',
    label: 'With Nested Scoped Tabs',
    element: <BaseTabs itemOneContent={<ScopedTabs />} />
  },
  {
    id: 'card-look',
    label: 'Tab Card-look',
    element: <TabsWithCards />
  }
];
