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
import { IndicatorUnread, IndicatorUnsaved, IndicatorContainer } from '..';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a global-navigation with sub-tabs', () =>
  matchesMarkup(
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
  matchesMarkup(
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

describe('Navigation Tab Bar', () => {
  it('renders a context tab', () =>
    matchesMarkup(
      <ContextTab
        title="Tab Item 1"
        tabPanelId="context-tab-panel-2"
        id="context-tab-id-2"
      />
    ));
  it('renders an unsaved context tab', () =>
    matchesMarkup(
      <ContextTab
        title="Tab Item 1"
        tabPanelId="context-tab-panel-2"
        id="context-tab-id-2"
        itemUnsaved
      />
    ));
  it('renders an unread context tab', () =>
    matchesMarkup(
      <ContextTab
        title="Tab Item 1"
        tabPanelId="context-tab-panel-2"
        id="context-tab-id-2"
        itemUnread
      />
    ));
  it('renders an overflow tab', () =>
    matchesMarkup(<ContextTabBarOverflow itemUnread itemUnsaved />));
});

describe('Global Navigation indicators', () => {
  it('render an unread indicator', () => matchesMarkup(<IndicatorUnread />));

  it('render an unread indicator for more tabs', () =>
    matchesMarkup(<IndicatorUnread tabType="overflow" />));

  it('render an unread indicator for menu tabs', () =>
    matchesMarkup(<IndicatorUnread tabType="menuItem" />));

  it('render an unread indicator for main tabs', () =>
    matchesMarkup(<IndicatorUnread tabType="main" tabName="Tab Item 1" />));

  it('render an unsaved indicator', () =>
    matchesMarkup(<IndicatorUnsaved title="Tab Item 1" />));

  it('render an indicator container', () =>
    matchesMarkup(<IndicatorContainer />));

  it('render an indicator container with children', () =>
    matchesMarkup(
      <IndicatorContainer>
        <IndicatorUnread tabType="overflow" />
      </IndicatorContainer>
    ));
});
