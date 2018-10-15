/* eslint-env jest */
import React from 'react';

import {
  TabsDefault,
  TabsWithNestedScopedTabs,
  TabsOverflow,
  TabsMedium,
  TabsLarge
} from '../base/example';

import {
  Subtab,
  SubtabsContainer,
  SubtabList,
  SubtabPanel,
  SubtabOverflow
} from '../../tabs/sub-tabs/example';

import MobileTabs, {
  MobileTabItem,
  MobileTabList,
  MobileTabPanel,
  MobileTabButton,
  MobileTabContainer,
  MobileTabGroup,
  NestedMobileStacked,
  DeprecatedMobileTabItem,
  DeprecatedMobileTabList,
  DeprecatedMobileTabTitle,
  DeprecatedMobileTabAction,
  DeprecatedMobileStacked,
  DeprecatedAdjacentMobileStacked
} from '../mobile-stack/';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Default Tabs', () => {
  it('renders default tabs', () => matchesMarkup(<TabsDefault />));
  it('renders default tabs with nested scoped tabs', () =>
    matchesMarkup(<TabsWithNestedScopedTabs />));
  it('renders default tabs with overflowing tab items', () =>
    matchesMarkup(<TabsOverflow />));
  it('renders medium sized default tabs', () => matchesMarkup(<TabsMedium />));
  it('renders large sized default tabs', () => matchesMarkup(<TabsLarge />));
});

describe('Subtabs', () => {
  it('renders subtab with notification and dirty', () =>
    matchesMarkup(
      <SubtabsContainer>
        <SubtabList>
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
      </SubtabsContainer>
    ));

  it('renders overflowed subtab', () =>
    matchesMarkup(
      <div
        className="demo-only"
        style={{ height: '8rem', overflow: 'visible' }}
      >
        <SubtabsContainer>
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
            <SubtabOverflow isOpen />
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
        </SubtabsContainer>
      </div>
    ));

  it('renders overflowed subtab with notification', () =>
    matchesMarkup(
      <div
        className="demo-only"
        style={{ height: '8rem', overflow: 'visible' }}
      >
        <SubtabsContainer>
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
            <SubtabOverflow isOpen itemUnread />
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
        </SubtabsContainer>
      </div>
    ));

  it('renders dirty overflowed subtab', () =>
    matchesMarkup(
      <div
        className="demo-only"
        style={{ height: '8rem', overflow: 'visible' }}
      >
        <SubtabsContainer>
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
            <SubtabOverflow isOpen itemUnsaved />
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
        </SubtabsContainer>
      </div>
    ));

  it('renders dirty overflowed subtab with notification', () =>
    matchesMarkup(
      <div
        className="demo-only"
        style={{ height: '8rem', overflow: 'visible' }}
      >
        <SubtabsContainer>
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
            <SubtabOverflow isOpen itemUnsaved itemUnread />
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
        </SubtabsContainer>
      </div>
    ));
});
describe('Mobile stacked tabs', () => {
  it('renders a tab group', () => matchesMarkup(<MobileTabGroup />));

  it('renders a tab container', () => matchesMarkup(<MobileTabContainer />));

  it('renders a tab', () => matchesMarkup(<MobileTabItem />));

  it('renders a tab button', () =>
    matchesMarkup(<MobileTabButton summary="List 1 Item One" />));

  it('renders a hidden tab panel', () =>
    matchesMarkup(<MobileTabPanel title="Item One Panel" />));

  it('renders a visible tab panel', () =>
    matchesMarkup(<MobileTabPanel title="Item One Panel" isVisible />));

  it('renders a tabset', () => matchesMarkup(<MobileTabList />));

  it('renders a hidden tabset', () =>
    matchesMarkup(<MobileTabList isHidden />));

  it('renders a mobile tabs demo', () => matchesMarkup(<MobileTabs />));

  it('renders a static mobile tabs demo', () =>
    matchesMarkup(<MobileTabs isStatic />));

  it('renders a static mobile tabs demo with a visible panel showing', () =>
    matchesMarkup(<MobileTabs visiblePanelIdx={0} isStatic />));

  it('renders a mobile tabs demo with a visible panel showing', () =>
    matchesMarkup(<MobileTabs visiblePanelIdx={0} />));

  it('renders nested mobile tabs', () =>
    matchesMarkup(<NestedMobileStacked />));

  it('renders a deprecated tab item', () =>
    matchesMarkup(<DeprecatedMobileTabItem />));

  it('renders a deprecated tab list', () =>
    matchesMarkup(<DeprecatedMobileTabList />));

  it('renders a deprecated tab title', () =>
    matchesMarkup(<DeprecatedMobileTabTitle />));

  it('renders a deprecated tab title action', () =>
    matchesMarkup(<DeprecatedMobileTabAction summary="List 1 Item One" />));

  it('renders a deprecated tab stack', () =>
    matchesMarkup(<DeprecatedMobileStacked />));

  it('renders a deprecated adjacent tab stack', () =>
    matchesMarkup(<DeprecatedAdjacentMobileStacked />));
});
