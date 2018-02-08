// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import _ from '../../../shared/helpers';

/* -----------------------------------------------------------------------------
    Elements
----------------------------------------------------------------------------- */

export const Subtab = props => (
  <li
    className={classNames(
      'slds-tabs_default__item slds-sub-tabs__item slds-grid slds-grid_vertical-align-center',
      {
        'slds-has-notification': props.hasNotification,
        'slds-has-focus': props.hasFocus,
        'slds-active': props.active,
        'slds-is-unsaved': props.itemUnsaved
      },
      props.className
    )}
    role="presentation"
  >
    <a
      aria-controls={props.tabPanelId}
      aria-selected={props.active ? 'true' : 'false'}
      className="slds-tabs_default__link slds-p-horizontal_xx-small"
      href="javascript:void(0);"
      id={props.tabItemId}
      role="tab"
      tabIndex={props.active ? '0' : '-1'}
      title={props.title || 'Subtab Name'}
    >
      {props.itemUnsaved ? (
        <abbr
          className="slds-indicator_unsaved"
          title="Tab Not Saved"
          aria-label="Tab Not Saved"
        >
          *
        </abbr>
      ) : null}
      {props.hasNotification && (
        <span
          aria-label="New Activity"
          className="slds-indicator_unread"
          role="alert"
          title="New Activity"
        >
          <span className="slds-assistive-text">
            New activity in Tab: {props.title || 'Subtab Name'}
          </span>
        </span>
      )}
      <div
        className="slds-icon_container"
        title={_.startCase(props.symbol) || 'Case'}
      >
        <SvgIcon
          className="slds-icon slds-icon_small slds-icon-text-default"
          sprite="standard"
          symbol={props.symbol || 'case'}
        />
        <span className="slds-assistive-text">
          {_.startCase(props.symbol) || 'Case'}:
        </span>
      </div>
      <span
        className={classNames(
          'slds-truncate',
          props.pinned ? 'slds-assistive-text' : null
        )}
        title={props.title || 'Subtab Name'}
      >
        {props.title || 'Subtab Name'}
      </span>
    </a>
    {props.menuIcon ? (
      <div
        className={classNames(
          'slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none',
          props.actionOverflow == 'true' ? 'slds-is-open' : null
        )}
      >
        <ButtonIcon
          className="slds-button_icon-container slds-button_icon-x-small"
          tabIndex={props.active ? '0' : '-1'}
          symbol="chevrondown"
          aria-haspopup="true"
          assistiveText={'Actions for ' + props.title}
          title={'Actions for ' + props.title}
        />
      </div>
    ) : null}
    <div
      className={classNames(
        'slds-col_bump-left slds-p-left_none slds-p-right_none',
        props.pinned ? 'slds-assistive-text' : null
      )}
    >
      <ButtonIcon
        className="slds-button_icon-container slds-button_icon-x-small"
        tabIndex={props.active ? '0' : '-1'}
        symbol="close"
        assistiveText={'Close ' + props.title}
        title={'Close ' + props.title}
      />
    </div>
  </li>
);

export const Subtabs = props => (
  <div className="slds-tabs_default slds-sub-tabs">{props.children}</div>
);

export const SubtabList = props => (
  <ul className="slds-tabs_default__nav" role="tablist">
    {props.children}
  </ul>
);

export const SubtabPanel = props => (
  <div
    className={classNames('slds-tabs_default__content', {
      'slds-show': props.isVisible,
      'slds-hide': !props.isVisible
    })}
    id={props.id}
    role="tabpanel"
    aria-labelledby={props.tabId}
  >
    {props.children}
  </div>
);

const IndicatorUnsaved = props => (
  <abbr className="slds-indicator_unsaved" title="Tab(s) within menu not saved">
    *
  </abbr>
);

const IndicatorUnread = props => (
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
);

export const SubtabOverflow = props => (
  <li
    className={classNames(
      'slds-tabs_default__item',
      'slds-sub-tabs__item',
      'slds-dropdown-trigger',
      'slds-dropdown-trigger_click',
      {
        'slds-is-open': props.isOpen,
        'slds-has-notification': props.itemUnread,
        'slds-is-unsaved': props.itemUnsaved
      }
    )}
  >
    <button
      className="slds-button slds-tabs_default__link slds-p-horizontal_xx-small"
      title="More Tab Items"
      aria-haspopup="true"
    >
      {props.itemUnsaved ? <IndicatorUnsaved /> : null}
      {props.itemUnread ? <IndicatorUnread /> : null}
      <span className="slds-p-left_xx-small slds-truncate" title="More Tabs">
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
        <MenuItem className="slds-has-notification" title="Chat - Customer">
          {props.itemUnsaved ? <IndicatorUnsaved /> : null}
          {props.itemUnread ? (
            <span className="slds-indicator_unread" title="New Activity">
              <span className="slds-assistive-text">New Activity</span>
            </span>
          ) : null}
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
);

export const SubTabSet = props => (
  <div className="slds-tabs_default slds-sub-tabs">
    <ul className="slds-tabs_default__nav" role="tablist">
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
);

export const TabWithFocus = props => (
  <div className="slds-tabs_default slds-sub-tabs">
    <ul className="slds-tabs_default__nav" role="tablist">
      <Subtab
        title="00071938"
        id="subtab-01"
        active
        hasFocus
        tabItemId="subtab-tabitem-01"
        tabPanelId="subtab-tabpanel-01"
      />
      <Subtab
        title="Chat - Customer"
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
);

export const TabsWithBorders = props => (
  <div className="slds-tabs_default slds-sub-tabs">
    <ul className="slds-tabs_default__nav" role="tablist">
      <Subtab
        title="00071938"
        active
        className="slds-border_right slds-border_left"
        tabItemId="subtab-tabitem-01"
        tabPanelId="subtab-tabpanel-01"
      />
      <Subtab
        title="Chat - Customer"
        tabItemId="subtab-tabitem-02"
        tabPanelId="subtab-tabpanel-02"
        symbol="live_chat"
        className="slds-border_right"
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
);

export const TabActionOverflow = props => (
  <div className="slds-tabs_default slds-sub-tabs">
    <ul className="slds-tabs_default__nav" role="tablist">
      <Subtab
        title="00071938"
        active
        menuIcon
        tabItemId="subtab-tabitem-01"
        tabPanelId="subtab-tabpanel-01"
      />
      <Subtab
        title="Chat - Customer"
        tabItemId="subtab-tabitem-02"
        tabPanelId="subtab-tabpanel-02"
        symbol="live_chat"
        menuIcon
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
);

export const StatusTab = props => (
  <div className="slds-tabs_default slds-sub-tabs">
    <ul className="slds-tabs_default__nav" role="tablist">
      <Subtab
        title="00071938"
        active
        itemUnsaved={props.itemUnsaved && !props.hasNotification}
        tabItemId="subtab-tabitem-01"
        tabPanelId="subtab-tabpanel-01"
      />
      <Subtab
        title="Chat - Customer"
        tabItemId="subtab-tabitem-02"
        tabPanelId="subtab-tabpanel-02"
        symbol="live_chat"
        hasNotification={props.hasNotification}
        itemUnsaved={props.itemUnsaved && props.hasNotification}
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
);

export const OverflowSubtabs = props => (
  <div>
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
        <SubtabOverflow
          isOpen={props.isOpen}
          itemUnread={props.itemUnread}
          itemUnsaved={props.itemUnsaved}
        />
      </SubtabList>
      <SubtabPanel id="subtab-tabpanel-01" tabId="subtab-tabitem-01" isVisible>
        Item One Content
      </SubtabPanel>
      <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
        Item Two Content
      </SubtabPanel>
    </Subtabs>
  </div>
);
/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default <SubTabSet />;

export let states = [
  {
    id: 'subtabs-has-focus',
    label: 'Tab - Focus',
    element: <TabWithFocus />,
    script: `
      document.getElementById('subtab-01').focus()
    `
  },
  {
    id: 'subtabs-borders',
    label: 'With Borders',
    element: <TabsWithBorders />
  },
  {
    id: 'subtabs-menu',
    label: 'Tab - Action Overflow',
    element: <TabActionOverflow />
  },
  {
    id: 'subtabs-unsaved',
    label: 'Unsaved Tab',
    element: <StatusTab itemUnsaved />
  },
  {
    id: 'unread',
    label: 'Unread Tab',
    element: <StatusTab hasNotification />
  },
  {
    id: 'unsaved',
    label: 'Unread Unsaved Tab',
    element: <StatusTab itemUnsaved hasNotification />
  },
  {
    id: 'overflow-tabs',
    label: 'Overflow Tabs',
    element: <OverflowSubtabs />
  },
  {
    id: 'overflow-tabs-open',
    label: 'Overflow Tabs - Open',
    element: <OverflowSubtabs isOpen />
  },
  {
    id: 'unread-overflow-tabs-open',
    label: 'Unread Overflow Tabs - Open',
    element: <OverflowSubtabs isOpen itemUnread />
  },
  {
    id: 'unsaved-overflow-tabs-open',
    label: 'Unsaved Overflow Tabs - Open',
    element: <OverflowSubtabs isOpen itemUnsaved />
  },
  {
    id: 'unsaved-unread-overflow-tabs-open',
    label: 'Unsaved Unread Overflow Tabs - Open',
    element: <OverflowSubtabs isOpen itemUnread itemUnsaved />
  }
];
