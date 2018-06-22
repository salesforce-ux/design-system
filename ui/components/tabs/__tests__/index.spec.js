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
  Subtabs,
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

import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Default Tabs', () => {
  it('renders default tabs', () => matchesMarkupAndStyle(<TabsDefault />));
  it('renders default tabs with nested scoped tabs', () =>
    matchesMarkupAndStyle(<TabsWithNestedScopedTabs />));
  it('renders default tabs with overflowing tab items', () =>
    matchesMarkupAndStyle(<TabsOverflow />));
  it('renders medium sized default tabs', () =>
    matchesMarkupAndStyle(<TabsMedium />));
  it('renders large sized default tabs', () =>
    matchesMarkupAndStyle(<TabsLarge />));
});

describe('Subtabs', () => {
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
        </Subtabs>
      </div>
    ));
});
describe('Mobile stacked tabs', () => {
  it('renders a tab group', () => matchesMarkupAndStyle(<MobileTabGroup />));

  it('renders a tab container', () =>
    matchesMarkupAndStyle(<MobileTabContainer />));

  it('renders a tab', () => matchesMarkupAndStyle(<MobileTabItem />));

  it('renders a tab button', () =>
    matchesMarkupAndStyle(<MobileTabButton summary="List 1 Item One" />));

  it('renders a hidden tab panel', () =>
    matchesMarkupAndStyle(<MobileTabPanel title="Item One Panel" />));

  it('renders a visible tab panel', () =>
    matchesMarkupAndStyle(<MobileTabPanel title="Item One Panel" isVisible />));

  it('renders a tabset', () => matchesMarkupAndStyle(<MobileTabList />));

  it('renders a hidden tabset', () =>
    matchesMarkupAndStyle(<MobileTabList isHidden />));

  it('renders a mobile tabs demo', () => matchesMarkupAndStyle(<MobileTabs />));

  it('renders a static mobile tabs demo', () =>
    matchesMarkupAndStyle(<MobileTabs isStatic />));

  it('renders a static mobile tabs demo with a visible panel showing', () =>
    matchesMarkupAndStyle(<MobileTabs visiblePanelIdx={0} isStatic />));

  it('renders a mobile tabs demo with a visible panel showing', () =>
    matchesMarkupAndStyle(<MobileTabs visiblePanelIdx={0} />));

  it('renders nested mobile tabs', () =>
    matchesMarkupAndStyle(<NestedMobileStacked />));

  it('renders a deprecated tab item', () =>
    matchesMarkupAndStyle(<DeprecatedMobileTabItem />));

  it('renders a deprecated tab list', () =>
    matchesMarkupAndStyle(<DeprecatedMobileTabList />));

  it('renders a deprecated tab title', () =>
    matchesMarkupAndStyle(<DeprecatedMobileTabTitle />));

  it('renders a deprecated tab title action', () =>
    matchesMarkupAndStyle(
      <DeprecatedMobileTabAction summary="List 1 Item One" />
    ));

  it('renders a deprecated tab stack', () =>
    matchesMarkupAndStyle(<DeprecatedMobileStacked />));

  it('renders a deprecated adjacent tab stack', () =>
    matchesMarkupAndStyle(<DeprecatedAdjacentMobileStacked />));
});
