/* eslint-env jest */
import React from 'react';

import {
  Subtab,
  Subtabs,
  SubtabList,
  SubtabPanel,
  SubtabOverflow
} from '../../tabs/sub-tabs/example';

import {
  MobileTab,
  MobileTabSet,
  MobileTabTitle,
  MobileTabTitleAction
} from '../../tabs/mobile-stack/example';

import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

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
  it('renders a tab', () => matchesMarkupAndStyle(<MobileTab />));

  it('renders a tab title', () => matchesMarkupAndStyle(<MobileTabTitle />));

  it('renders a tab title action', () =>
    matchesMarkupAndStyle(<MobileTabTitleAction summary="List 1 Item One" />));

  it('renders a tabset', () => matchesMarkupAndStyle(<MobileTabSet />));
});
