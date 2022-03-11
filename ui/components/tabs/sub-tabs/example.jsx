// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { Button } from '../../buttons/base/example';
import ButtonIcon from '../../button-icons/';
import {
  IndicatorUnread,
  IndicatorContainer,
  IndicatorUnsaved
} from '../../global-navigation/';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { TabItemIconContainer } from '../../global-navigation';

/* -----------------------------------------------------------------------------
    Elements
----------------------------------------------------------------------------- */

export const Subtab = props => (
  <li
    className={classNames(
      'slds-tabs_default__item slds-sub-tabs__item slds-grid slds-grid_vertical-align-center',
      {
        'slds-active': props.active,
        'slds-has-error': props.statusLevel === 'error',
        'slds-has-focus': props.hasFocus,
        'slds-has-notification': props.hasNotification,
        'slds-has-success': props.statusLevel === 'success',
        'slds-has-warning': props.statusLevel === 'warning',
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
      href="#"
      id={props.tabItemId}
      role="tab"
      tabIndex={props.active ? '0' : '-1'}
      title={props.title}
      onClick={e => e.preventDefault()}
    >
      <IndicatorContainer>
        {props.itemUnsaved && <IndicatorUnsaved />}
        {props.hasNotification && <IndicatorUnread />}
      </IndicatorContainer>
      {props.hasIcon && (
        <TabItemIconContainer
          statusLevel={props.statusLevel}
          symbol={props.symbol}
        />
      )}
      <span
        className={classNames(
          'slds-truncate',
          props.pinned ? 'slds-assistive-text' : null
        )}
        title={props.title}
      >
        {props.title}
      </span>
    </a>
    {props.menuIcon ? (
      <div
        className={classNames(
          'slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none',
          props.actionOverflow === 'true' ? 'slds-is-open' : null
        )}
      >
        <ButtonIcon
          aria-haspopup="true"
          assistiveText={'Actions for ' + props.title}
          className="slds-button_icon-container slds-button_icon-x-small"
          symbol="chevrondown"
          tabIndex={props.active ? '0' : '-1'}
          theme={
            props.statusLevel === 'error' || props.statusLevel === 'success'
              ? 'inverse'
              : null
          }
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
        assistiveText={'Close ' + props.title}
        className="slds-button_icon-container slds-button_icon-x-small"
        symbol="close"
        tabIndex={props.active ? '0' : '-1'}
        theme={
          props.statusLevel === 'error' || props.statusLevel === 'success'
            ? 'inverse'
            : null
        }
        title={'Close ' + props.title}
      />
    </div>
  </li>
);
Subtab.displayName = 'Subtab';
Subtab.propTypes = {
  actionOverflow: PropTypes.string,
  active: PropTypes.bool,
  statusLevel: PropTypes.oneOf(['error', 'success', 'warning']),
  className: PropTypes.string,
  hasFocus: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hasNotification: PropTypes.bool,
  itemUnsaved: PropTypes.bool,
  menuIcon: PropTypes.bool,
  pinned: PropTypes.bool,
  symbol: PropTypes.string,
  tabItemId: PropTypes.string.isRequired,
  tabPanelId: PropTypes.string.isRequired,
  title: PropTypes.string
};
Subtab.defaultProps = {
  hasIcon: true,
  title: 'Subtab Name'
};

export const SubtabsContainer = props => (
  <div className="slds-tabs_default slds-sub-tabs">{props.children}</div>
);
SubtabsContainer.displayName = 'Subtabs';
SubtabsContainer.propTypes = {
  children: PropTypes.node
};

export const SubtabList = props => (
  <ul className="slds-tabs_default__nav" role="tablist">
    {props.children}
  </ul>
);
SubtabList.displayName = 'SubtabList';
SubtabList.propTypes = {
  children: PropTypes.node
};

export const SubtabPanel = props => (
  <div
    aria-labelledby={props.tabId}
    className={classNames('slds-tabs_default__content', {
      'slds-show': props.isVisible,
      'slds-hide': !props.isVisible
    })}
    id={props.id}
    role="tabpanel"
  >
    {props.children}
  </div>
);
SubtabPanel.displayName = 'SubtabPanel';
SubtabPanel.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  tabId: PropTypes.string
};

export const SubtabOverflow = props => {
  const getComputedMenuTitle = () => {
    if (props.statusLevel === 'error') {
      return 'SLA Violation';
    } else if (props.statusLevel === 'warning') {
      return 'SLA 0.30';
    } else {
      return 'Chat - Customer';
    }
  };

  return (
    <li
      className={classNames(
        'slds-tabs_default__item',
        'slds-sub-tabs__item',
        'slds-tabs_default__overflow-button',
        {
          'slds-has-error': props.statusLevel === 'error',
          'slds-has-notification': props.itemUnread,
          'slds-has-success': props.statusLevel === 'success',
          'slds-has-warning': props.statusLevel === 'warning',
          'slds-is-unsaved': props.itemUnsaved
        }
      )}
    >
      <div
        className={classNames(
          'slds-dropdown-trigger slds-dropdown-trigger_click',
          props.isOpen && 'slds-is-open'
        )}
      >
        <Button aria-haspopup="true" title="More Tab Items">
          <IndicatorContainer>
            {props.itemUnsaved && (
              <IndicatorUnsaved title="Tab(s) within menu not saved" />
            )}
            {props.itemUnread && <IndicatorUnread />}
          </IndicatorContainer>
          <span className="slds-truncate" title="More Tabs">
            More <span className="slds-assistive-text">Tabs</span>
          </span>
          <SvgIcon
            className="slds-button__icon slds-button__icon_small slds-button__icon_right"
            sprite="utility"
            symbol="chevrondown"
          />
        </Button>
        <Menu className="slds-dropdown_right">
          <MenuList>
            <MenuItem
              className="slds-has-notification"
              statusLevel={props.statusLevel}
              title="Chat - Customer"
            >
              <IndicatorContainer>
                {props.itemUnsaved && <IndicatorUnsaved />}
                {props.itemUnread && <IndicatorUnread />}
              </IndicatorContainer>
              {props.itemHasIcon && (
                <TabItemIconContainer
                  statusLevel={props.statusLevel}
                  symbol="live_chat"
                />
              )}
              <span>{getComputedMenuTitle()}</span>
            </MenuItem>
            <MenuItem title="Overflow Tab Item">
              <IndicatorContainer />
              <TabItemIconContainer />
              <span>Overflow Tab Item</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </li>
  );
};
SubtabOverflow.displayName = 'SubtabOverflow';
SubtabOverflow.propTypes = {
  statusLevel: PropTypes.oneOf(['error', 'success', 'warning']),
  isOpen: PropTypes.bool,
  itemHasIcon: PropTypes.bool,
  itemUnread: PropTypes.bool,
  itemUnsaved: PropTypes.bool
};
SubtabOverflow.defaultProps = {
  itemHasIcon: true
};

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel id="subtab-tabpanel-01" isVisible tabId="subtab-tabitem-01">
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  }
];

export let states = [
  {
    id: 'subtabs-has-focus',
    label: 'Tab - Focus',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            active
            hasFocus
            id="subtab-01"
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    ),
    script: `
      document.getElementById('subtab-01').focus()
    `
  },
  {
    id: 'subtabs-borders',
    label: 'With Borders',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            active
            className="slds-border_right slds-border_left"
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            className="slds-border_right"
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'subtabs-menu',
    label: 'Tab - Action Overflow',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            active
            menuIcon
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            menuIcon
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'subtabs-unsaved',
    label: 'Unsaved Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text" />
        <SubtabList>
          <Subtab
            active
            itemUnsaved
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'unread',
    label: 'Unread Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            hasNotification
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'unsaved',
    label: 'Unread Unsaved Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            hasNotification
            itemUnsaved
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'success',
    label: 'Success Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="success"
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'success-unsaved',
    label: 'Unsaved Success Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="success"
            itemUnsaved
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'success-unread',
    label: 'Unread Success Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="success"
            hasNotification
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'success-unread-unsaved',
    label: 'Unread and Unsaved Success Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="success"
            hasNotification
            itemUnsaved
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="Chat - Customer"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'warning',
    label: 'Warning Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="warning"
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="SLA 0.30"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'warning-unsaved',
    label: 'Unsaved Warning Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="warning"
            itemUnsaved
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="SLA 0.30"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'warning-unread',
    label: 'Unread Warning Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="warning"
            hasNotification
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="SLA 0.30"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'warning-unread-unsaved',
    label: 'Unread and Unsaved Warning Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="warning"
            hasNotification
            itemUnsaved
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="SLA 0.30"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'error',
    label: 'Error Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="error"
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="SLA Violation"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'error-unsaved',
    label: 'Unsaved Error Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="error"
            itemUnsaved
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="SLA Violation"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'error-unread',
    label: 'Unread Error Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="error"
            hasNotification
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="SLA Violation"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'error-unread-unsaved',
    label: 'Unread and Unsaved Error Tab',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            active
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            statusLevel="error"
            hasNotification
            itemUnsaved
            symbol="live_chat"
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="SLA Violation"
          />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'overflow-tabs',
    label: 'Overflow Tabs',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'overflow-tabs-open',
    label: 'Overflow Tabs - Open',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow isOpen />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'unread-overflow-tabs-open',
    label: 'Unread Overflow Tabs - Open',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow isOpen itemUnread />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'unsaved-overflow-tabs-open',
    label: 'Unsaved Overflow Tabs - Open',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow isOpen itemUnsaved />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'unsaved-unread-overflow-tabs-open',
    label: 'Unsaved Unread Overflow Tabs - Open',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow isOpen itemUnread itemUnsaved />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'unsaved-unread-overflow-tabs-without-icons-open',
    label: 'Unsaved Unread Overflow Tabs without Icons - Open',
    element: (
      <SubtabsContainer>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            hasIcon={false}
            hasNotification
            itemUnsaved
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow isOpen itemHasIcon={false} itemUnread itemUnsaved />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'overflow-tabs-success',
    label: 'Overflow Tabs - Success',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow statusLevel="success" isOpen />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'overflow-tabs-success-unread-unsaved',
    label: 'Overflow Tabs - Success Unread and Unsaved',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow statusLevel="success" isOpen itemUnread itemUnsaved />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'overflow-tabs-warning',
    label: 'Overflow Tabs - Warning',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow statusLevel="warning" isOpen />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'overflow-tabs-warning-unread-unsaved',
    label: 'Overflow Tabs - Warning Unread and Unsaved',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow statusLevel="warning" isOpen itemUnread itemUnsaved />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'overflow-tabs-error',
    label: 'Overflow Tabs - Error',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow statusLevel="error" isOpen />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  },
  {
    id: 'overflow-tabs-error-unread-unsaved',
    label: 'Overflow Tabs - Error Unread and Unsaved',
    element: (
      <SubtabsContainer>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <SubtabList>
          <Subtab
            tabItemId="subtab-tabitem-01"
            tabPanelId="subtab-tabpanel-01"
            title="00071938"
          />
          <Subtab
            tabItemId="subtab-tabitem-02"
            tabPanelId="subtab-tabpanel-02"
            title="00071939"
          />
          <SubtabOverflow statusLevel="error" isOpen itemUnread itemUnsaved />
        </SubtabList>
        <SubtabPanel
          id="subtab-tabpanel-01"
          isVisible
          tabId="subtab-tabitem-01"
        >
          Item One Content
        </SubtabPanel>
        <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
          Item Two Content
        </SubtabPanel>
      </SubtabsContainer>
    )
  }
];
