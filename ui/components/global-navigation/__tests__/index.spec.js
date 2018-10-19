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
  SubtabsContainer,
  SubtabList,
  SubtabPanel
} from '../../tabs/sub-tabs/example';

import createHelpers from '../../../../jest.helpers';
import {
  IndicatorUnread,
  IndicatorUnsaved,
  IndicatorContainer,
  TabObjectIcon,
  TabStatusLevelIcon,
  TabItemIconContainer
} from '..';

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
        <SubtabsContainer>
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
        </SubtabsContainer>
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

  it('render an unsaved indicator', () =>
    matchesMarkup(<IndicatorUnsaved title="Tab Item 1" />));

  it('render an indicator container', () =>
    matchesMarkup(<IndicatorContainer />));

  it('render an indicator container with children', () =>
    matchesMarkup(
      <IndicatorContainer>
        <IndicatorUnread />
      </IndicatorContainer>
    ));
});

describe('TabObjectIcon', () => {
  it('should render the object icon with the default case icon', () => {
    matchesMarkup(<TabObjectIcon />);
  });
  it('should render the object icon with a passed in symbol', () => {
    matchesMarkup(<TabObjectIcon symbol="live_chat" />);
  });
});

describe('TabStatusLevelIcon', () => {
  it('should render a success tab icon', () => {
    matchesMarkup(<TabStatusLevelIcon level="success" />);
  });

  it('should render a warning tab icon', () => {
    matchesMarkup(<TabStatusLevelIcon level="warning" />);
  });

  it('should render a error tab icon', () => {
    matchesMarkup(<TabStatusLevelIcon level="error" />);
  });
});

describe('TabItemIconContainer', () => {
  it('should render an icon by default', () => {
    matchesMarkup(<TabItemIconContainer symbol="case" />);
  });
  it('should render a status level icon instead of a default icon when a status level is passed in', () => {
    matchesMarkup(<TabItemIconContainer statusLevel="success" />);
  });
});

describe('ContextTab', () => {
  it('should render a default ContextTab', () => {
    matchesMarkup(<ContextTab id="tab-id" tabPanelId="tabpanel-id" />);
  });

  it('should render an active ContextTab', () => {
    matchesMarkup(
      <ContextTab id="tab-id" itemActive tabPanelId="tabpanel-id" />
    );
  });

  it('should render a ContextTab with an unsaved indicator', () => {
    matchesMarkup(
      <ContextTab id="tab-id" itemUnsaved tabPanelId="tabpanel-id" />
    );
  });

  it('should render a ContextTab with an unread indicator', () => {
    matchesMarkup(
      <ContextTab id="tab-id" itemUnread tabPanelId="tabpanel-id" />
    );
  });

  it('should render a ContextTab without an icon', () => {
    matchesMarkup(
      <ContextTab hasIcon={false} id="tab-id" tabPanelId="tabpanel-id" />
    );
  });

  it('should render a ContextTab with a set icon icon', () => {
    matchesMarkup(
      <ContextTab id="tab-id" symbol="opportunity" tabPanelId="tabpanel-id" />
    );
  });

  it('should render a ContextTab with status level', () => {
    matchesMarkup(
      <ContextTab id="tab-id" statusLevel="error" tabPanelId="tabpanel-id" />
    );
  });
});

describe('ContextTabBarOverflow', () => {
  it('should render a ContextTabBarOverflow', () => {
    matchesMarkup(<ContextTabBarOverflow />);
  });

  it('should render a ContextTabBarOverflow with a status level of error', () => {
    matchesMarkup(<ContextTabBarOverflow statusLevel="error" />);
  });

  it('should render a ContextTabBarOverflow with a status level of warning', () => {
    matchesMarkup(<ContextTabBarOverflow statusLevel="warning" />);
  });
});
