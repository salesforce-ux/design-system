/* eslint-env jest */
import React from 'react';

import {
  Subtab,
  Subtabs,
  SubtabList,
  SubtabPanel
} from '../../tabs/sub-tabs/example';

import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';

import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders subtab with notification and dirty', () =>
  matchesMarkupAndStyle(
    <div className="slds-tabs_default slds-sub-tabs">
    <ul className="slds-tabs_default__nav" role="tablist">
      <Subtab
        title="00071938"
        active
        tabItemId="subtab-tabitem-01"
        tabPanelId="subtab-tabpanel-01"
      />
      <Subtab
        title="Chat - Customer"
        hasNotification
        itemUnsaved
        tabItemId="subtab-tabitem-02"
        tabPanelId="subtab-tabpanel-02"
        symbol="live_chat"
      />
    </ul>
    <div
      className="slds-tabs_default__content slds-show"
      id="subtab-tabpanel-01"
      role="tabpanel"
      aria-labelledby="subtab-tabitem-01"
    >
      Item One Content
    </div>
    <div
      className="slds-tabs_default__content slds-hide"
      id="subtab-tabpanel-02"
      role="tabpanel"
      aria-labelledby="subtab-tabitem-02"
    >
      Item Two Content
    </div>
  </div>
  ));

it('renders overflowed subtab', () =>
    matchesMarkupAndStyle(
      <div
      className="demo-only"
      style={{ height: '8rem', overflow: 'visible' }}
      >
      <Subtabs>
        <SubtabList>
          <Subtab
            title="00071938"
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
          />
          <Subtab
            title="00071939"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
          />
          <li className="slds-tabs_default__item slds-sub-tabs__item  slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
            <button
              className="slds-button slds-tabs_default__link slds-p-horizontal_xx-small"
              title="More Tab Items"
              aria-haspopup="true"
            >
              <span
                className="slds-p-left_xx-small slds-truncate"
                title="More Tabs"
              >
                More <span className="slds-assistive-text">Tabs</span>
              </span>
              <SvgIcon
                className="slds-button__icon slds-button__icon_small slds-button__icon_right"
                sprite="utility"
                symbol="chevrondown"
              />
            </button>
            <Menu className="slds-dropdown_right">
              <MenuList>
                <MenuItem title="Chat - Customer">
                  <SvgIcon
                    className="slds-icon slds-icon_small slds-icon-text-default"
                    sprite="standard"
                    symbol="live_chat"
                  />
                  <span>Chat - Customer</span>
                </MenuItem>
                <MenuItem title="Overflow Tab Item">
                  <SvgIcon
                    className="slds-icon slds-icon_small slds-icon-text-default"
                    sprite="standard"
                    symbol="case"
                  />
                  <span>Overflow Tab Item</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </SubtabList>
        <SubtabPanel tabId="subtab-tabitem-01" isVisible>
          Item One Content
        </SubtabPanel>
        <SubtabPanel tabId="subtab-tabitem-02">Item Two Content</SubtabPanel>
      </Subtabs>
      </div>
    ));

it('renders overflowed subtab with notification', () =>
  matchesMarkupAndStyle(
    <div
    className="demo-only"
    style={{ height: '8rem', overflow: 'visible' }}
    >
    <Subtabs>
      <SubtabList>
        <Subtab
          title="00071938"
          tabItemId="subtab-tabitem-01"
          tabPanelId="subtab-tabpanel-01"
        />
        <Subtab
          title="00071939"
          tabItemId="subtab-tabitem-02"
          tabPanelId="subtab-tabpanel-02"
        />
        <li className="slds-tabs_default__item slds-sub-tabs__item  slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open slds-has-notification">
          <button
            className="slds-button slds-tabs_default__link slds-p-horizontal_xx-small"
            title="More Tab Items"
            aria-haspopup="true"
          >
            <span
              aria-label="New Activity"
              className="slds-indicator_unread"
              role="alert"
              title="New Activity"
            >
              <span className="slds-assistive-text">
                New Tab activity with in More Tabs menu
              </span>
            </span>
            <span
              className="slds-p-left_xx-small slds-truncate"
              title="More Tabs"
            >
              More <span className="slds-assistive-text">Tabs</span>
            </span>
            <SvgIcon
              className="slds-button__icon slds-button__icon_small slds-button__icon_right"
              sprite="utility"
              symbol="chevrondown"
            />
          </button>
          <Menu className="slds-dropdown_right">
            <MenuList>
              <MenuItem
                className="slds-has-notification"
                title="Chat - Customer"
              >
                <span
                  className="slds-indicator_unread"
                  title="New Activity"
                >
                  <span className="slds-assistive-text">New Activity</span>
                </span>
                <SvgIcon
                  className="slds-icon slds-icon_small slds-icon-text-default"
                  sprite="standard"
                  symbol="live_chat"
                />
                <span>Chat - Customer</span>
              </MenuItem>
              <MenuItem title="Overflow Tab Item">
                <SvgIcon
                  className="slds-icon slds-icon_small slds-icon-text-default"
                  sprite="standard"
                  symbol="case"
                />
                <span>Overflow Tab Item</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
      </SubtabList>
      <SubtabPanel tabId="subtab-tabitem-01" isVisible>
        Item One Content
      </SubtabPanel>
      <SubtabPanel tabId="subtab-tabitem-02">Item Two Content</SubtabPanel>
    </Subtabs>
  </div>
  ));

it('renders dirty overflowed subtab', () =>
matchesMarkupAndStyle(
  <div
  className="demo-only"
  style={{ height: '8rem', overflow: 'visible' }}
  >
  <Subtabs>
    <SubtabList>
      <Subtab
        title="00071938"
        tabItemId="subtab-tabitem-01"
        tabPanelId="subtab-tabpanel-01"
      />
      <Subtab
        title="00071939"
        tabItemId="subtab-tabitem-02"
        tabPanelId="subtab-tabpanel-02"
      />
      <li className="slds-tabs_default__item slds-sub-tabs__item  slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open slds-is-unsaved">
        <button
          className="slds-button slds-tabs_default__link slds-p-horizontal_xx-small"
          title="More Tab Items"
          aria-haspopup="true"
        >
          <abbr
            className="slds-indicator_unsaved"
            title="Tab(s) within menu not saved"
          >
            *
          </abbr>
          <span
            className="slds-p-left_xx-small slds-truncate"
            title="More Tabs"
          >
            More <span className="slds-assistive-text">Tabs</span>
          </span>
          <SvgIcon
            className="slds-button__icon slds-button__icon_small slds-button__icon_right"
            sprite="utility"
            symbol="chevrondown"
          />
        </button>
        <Menu className="slds-dropdown_right">
          <MenuList>
            <MenuItem title="Chat - Customer">
              <abbr
                className="slds-indicator_unsaved"
                title="Tab(s) within menu not saved"
              >
                *
              </abbr>
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="standard"
                symbol="live_chat"
              />
              <span>Chat - Customer</span>
            </MenuItem>
            <MenuItem title="Overflow Tab Item">
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="standard"
                symbol="case"
              />
              <span>Overflow Tab Item</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </li>
    </SubtabList>
    <SubtabPanel tabId="subtab-tabitem-01" isVisible>
      Item One Content
    </SubtabPanel>
    <SubtabPanel tabId="subtab-tabitem-02">Item Two Content</SubtabPanel>
  </Subtabs>
</div>
));

it('renders dirty overflowed subtab with notification', () =>
  matchesMarkupAndStyle(
    <div
    className="demo-only"
    style={{ height: '8rem', overflow: 'visible' }}
  >
    <Subtabs>
      <SubtabList>
        <Subtab
          title="00071938"
          tabItemId="subtab-tabitem-01"
          tabPanelId="subtab-tabpanel-01"
        />
        <Subtab
          title="00071939"
          tabItemId="subtab-tabitem-02"
          tabPanelId="subtab-tabpanel-02"
        />
        <li className="slds-tabs_default__item slds-sub-tabs__item  slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open slds-has-notification slds-is-unsaved">
          <button
            className="slds-button slds-tabs_default__link slds-p-horizontal_xx-small"
            title="More Tab Items"
            aria-haspopup="true"
          >
            <abbr
              className="slds-indicator_unsaved"
              title="Tab(s) within menu not saved"
            >
              *
            </abbr>
            <span
              aria-label="New Activity"
              className="slds-indicator_unread"
              role="alert"
              title="New Activity"
            >
              <span className="slds-assistive-text">
                New Tab activity with in More Tabs menu
              </span>
            </span>
            <span
              className="slds-p-left_xx-small slds-truncate"
              title="More Tabs"
            >
              More <span className="slds-assistive-text">Tabs</span>
            </span>
            <SvgIcon
              className="slds-button__icon slds-button__icon_small slds-button__icon_right"
              sprite="utility"
              symbol="chevrondown"
            />
          </button>
          <Menu className="slds-dropdown_right">
            <MenuList>
              <MenuItem
                className="slds-has-notification"
                title="Chat - Customer"
              >
                <abbr
                  className="slds-indicator_unsaved"
                  title="Tab(s) within menu not saved"
                >
                  *
                </abbr>
                <span
                  className="slds-indicator_unread"
                  title="New Activity"
                >
                  <span className="slds-assistive-text">New Activity</span>
                </span>
                <SvgIcon
                  className="slds-icon slds-icon_small slds-icon-text-default"
                  sprite="standard"
                  symbol="live_chat"
                />
                <span>Chat - Customer</span>
              </MenuItem>
              <MenuItem title="Overflow Tab Item">
                <SvgIcon
                  className="slds-icon slds-icon_small slds-icon-text-default"
                  sprite="standard"
                  symbol="case"
                />
                <span>Overflow Tab Item</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
      </SubtabList>
      <SubtabPanel tabId="subtab-tabitem-01" isVisible>
        Item One Content
      </SubtabPanel>
      <SubtabPanel tabId="subtab-tabitem-02">Item Two Content</SubtabPanel>
    </Subtabs>
  </div>
  ));
