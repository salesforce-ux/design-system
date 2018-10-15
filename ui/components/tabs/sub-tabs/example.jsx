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
import { TabItemIconContainer } from '../../global-navigation/navigation-tab-bar/example';

/* -----------------------------------------------------------------------------
    Elements
----------------------------------------------------------------------------- */

export const Subtab = props => (
  <li
    className={classNames(
      'slds-tabs_default__item slds-sub-tabs__item slds-grid slds-grid_vertical-align-center',
      {
        'slds-active': props.active,
        'slds-has-error': props.hasError,
        'slds-has-focus': props.hasFocus,
        'slds-has-notification': props.hasNotification,
        'slds-has-success': props.hasSuccess,
        'slds-has-warning': props.hasWarning,
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
      <IndicatorContainer>
        {props.itemUnsaved && <IndicatorUnsaved />}
        {props.hasNotification && <IndicatorUnread />}
      </IndicatorContainer>
      <TabItemIconContainer
        hasError={props.hasError}
        hasIcon={props.hasIcon}
        hasSuccess={props.hasSuccess}
        hasWarning={props.hasWarning}
        symbol={props.symbol}
      />
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
          props.actionOverflow === 'true' ? 'slds-is-open' : null
        )}
      >
        <ButtonIcon
          className="slds-button_icon-container slds-button_icon-x-small"
          tabIndex={props.active ? '0' : '-1'}
          symbol="chevrondown"
          aria-haspopup="true"
          assistiveText={'Actions for ' + props.title}
          theme={props.hasError || props.hasSuccess ? 'inverse' : null}
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
        theme={props.hasError || props.hasSuccess ? 'inverse' : null}
        title={'Close ' + props.title}
      />
    </div>
  </li>
);
Subtab.displayName = 'Subtab';
Subtab.propTypes = {
  actionOverflow: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hasNotification: PropTypes.bool,
  hasSuccess: PropTypes.bool,
  hasWarning: PropTypes.bool,
  itemUnsaved: PropTypes.bool,
  menuIcon: PropTypes.bool,
  pinned: PropTypes.bool,
  symbol: PropTypes.string,
  tabItemId: PropTypes.string,
  tabPanelId: PropTypes.string,
  title: PropTypes.string
};
Subtab.defaultProps = {
  hasIcon: true
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
SubtabPanel.displayName = 'SubtabPanel';
SubtabPanel.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  tabId: PropTypes.string
};

export const SubtabOverflow = props => {
  const getComputedMenuTitle = () => {
    if (props.hasError) {
      return 'SLA Violation';
    } else if (props.hasWarning) {
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
          'slds-has-error': props.hasError,
          'slds-has-notification': props.itemUnread,
          'slds-has-success': props.hasSuccess,
          'slds-has-warning': props.hasWarning,
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
        <Button title="More Tab Items" aria-haspopup="true">
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
              hasError={props.hasError}
              hasSuccess={props.hasSuccess}
              hasWarning={props.hasWarning}
              title="Chat - Customer"
            >
              <IndicatorContainer>
                {props.itemUnsaved && <IndicatorUnsaved />}
                {props.itemUnread && <IndicatorUnread />}
              </IndicatorContainer>
              <TabItemIconContainer
                hasError={props.hasError}
                hasIcon={props.itemHasIcon}
                hasSuccess={props.hasSuccess}
                hasWarning={props.hasWarning}
                symbol="live_chat"
              />
              <span>{getComputedMenuTitle()}</span>
            </MenuItem>
            <MenuItem title="Overflow Tab Item">
              <IndicatorContainer />
              <TabItemIconContainer hasIcon />
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
  hasError: PropTypes.bool,
  hasSuccess: PropTypes.bool,
  hasWarning: PropTypes.bool,
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

export default (
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
);

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
            hasSuccess
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
            hasSuccess
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
            hasNotification
            hasSuccess
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
            hasNotification
            hasSuccess
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
            hasWarning
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
            hasWarning
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
            hasNotification
            hasWarning
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
            hasNotification
            hasWarning
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
            hasError
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
            hasError
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
            hasError
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
            hasError
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
          <SubtabOverflow hasSuccess isOpen />
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
          <SubtabOverflow hasSuccess isOpen itemUnread itemUnsaved />
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
          <SubtabOverflow hasWarning isOpen />
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
          <SubtabOverflow hasWarning isOpen itemUnread itemUnsaved />
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
          <SubtabOverflow hasError isOpen />
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
          <SubtabOverflow hasError isOpen itemUnread itemUnsaved />
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
