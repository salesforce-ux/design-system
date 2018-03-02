/* eslint-env jest */
import React from 'react';

import {
  ContextTab,
  ContextTabBar,
  ContextTabPanel,
  ContextTabBarOverflow
} from '../navigation-tab-bar/example';

import {
  Subtab,
  Subtabs,
  SubtabList,
  SubtabPanel
} from '../../tabs/sub-tabs/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a global-navigation with sub-tabs', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '8rem' }}>
      <ContextTabBar>
        <ContextTab
          title="Home"
          symbol="home"
          tabPanelId="context-tab-panel-1"
          id="context-tab-id-1"
          itemActive
          hasSubtabs
        />
        <ContextTab
          title="Tab Item 1"
          tabPanelId="context-tab-panel-2"
          id="context-tab-id-2"
        />
        <ContextTab
          title="Tab Item 2"
          tabPanelId="context-tab-panel-3"
          id="context-tab-id-3"
        />
      </ContextTabBar>
      <ContextTabPanel show id="context-tab-panel-1" tabId="context-tab-id-1">
        <Subtabs>
          <SubtabList>
            <Subtab
              active
              title="00071938"
              tabItemId="subtab-tabitem-01"
              tabPanelId="subtab-tabpanel-01"
            />
            <Subtab
              title="Chat - Customer"
              tabItemId="subtab-tabitem-02"
              tabPanelId="subtab-tabpanel-02"
              symbol="live_chat"
            />
          </SubtabList>
          <SubtabPanel
            tabId="subtab-tabitem-01"
            id="subtab-tabpanel-01"
            isVisible
          >
            Item One Content
          </SubtabPanel>
          <SubtabPanel tabId="subtab-tabitem-02" id="subtab-tabpanel-02">
            Item Two Content
          </SubtabPanel>
        </Subtabs>
      </ContextTabPanel>
      <ContextTabPanel id="context-tab-panel-2" tabId="context-tab-id-2">
        Tab One Content
      </ContextTabPanel>
      <ContextTabPanel id="context-tab-panel-3" tabId="context-tab-id-3">
        Tab Two Content
      </ContextTabPanel>
    </div>
  ));

it('renders an overflowed global-navigation with dropdown, unread, and unsaved', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '8rem' }}>
      <ContextTabBar>
        <ContextTab
          title="Home"
          symbol="home"
          tabPanelId="context-tab-panel-1"
          id="context-tab-id-1"
          itemActive
        />
        <ContextTab
          title="Tab Item 1"
          tabPanelId="context-tab-panel-2"
          id="context-tab-id-2"
        />
        <ContextTab
          title="Tab Item 2"
          tabPanelId="context-tab-panel-3"
          id="context-tab-id-3"
        />
        <ContextTabBarOverflow isOpen itemUnread itemUnsaved />
      </ContextTabBar>
      <ContextTabPanel show id="context-tab-panel-1" tabId="context-tab-id-1">
        Tab Home Content
      </ContextTabPanel>
      <ContextTabPanel id="context-tab-panel-2" tabId="context-tab-id-2">
        Tab One Content
      </ContextTabPanel>
      <ContextTabPanel id="context-tab-panel-3" tabId="context-tab-id-3">
        Tab Two Content
      </ContextTabPanel>
    </div>
  ));
