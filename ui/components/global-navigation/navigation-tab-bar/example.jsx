// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import WaffleIcon from '../../dynamic-icons/waffle';
import ButtonIcon from '../../button-icons/';
import {
  Subtab,
  SubtabsContainer,
  SubtabList,
  SubtabPanel
} from '../../tabs/sub-tabs/example';
import {
  IndicatorContainer,
  IndicatorUnread,
  IndicatorUnsaved,
  TabItemIconContainer
} from '../';
import classNames from 'classnames';

const tabPanelId01 = 'context-tab-panel-1';
const tabPanelId02 = 'context-tab-panel-2';
const tabPanelId03 = 'context-tab-panel-3';
const tabId01 = 'context-tab-id-1';
const tabId02 = 'context-tab-id-2';
const tabId03 = 'context-tab-id-3';

const demoName = 'Navigation Tab Bar - ';

/* -----------------------------------------------------------------------------
    Elements
----------------------------------------------------------------------------- */

const ShortCutKey = props => (
  <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
    <span className="slds-assistive-text">:</span>
    {props.children}
  </span>
);

export let ContextTab = props => (
  <li
    className={classNames(
      'slds-context-bar__item slds-context-bar__item_tab',
      props.className,
      {
        'slds-is-active': props.itemActive,
        'slds-is-unsaved': props.itemUnsaved,
        'slds-is-pinned': props.pinned,
        'slds-has-focus': props.hasFocus,
        'slds-has-notification': props.itemUnread,
        'slds-has-sub-tabs': props.hasSubtabs,
        'slds-has-success': props.statusLevel === 'success',
        'slds-has-warning': props.statusLevel === 'warning',
        'slds-has-error': props.statusLevel === 'error'
      }
    )}
    role="presentation"
  >
    <a
      href="#"
      className="slds-context-bar__label-action"
      role="tab"
      title={props.title}
      aria-selected={props.itemActive ? 'true' : 'false'}
      tabIndex={props.itemActive ? '0' : '-1'}
      aria-controls={props.tabPanelId}
      id={props.id}
      onClick={e => e.preventDefault()}
    >
      <IndicatorContainer>
        {props.itemUnsaved && <IndicatorUnsaved title="Tab Not Saved" />}
        {props.itemUnread && <IndicatorUnread />}
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
    <div
      className={classNames(
        'slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none',
        props.actionOverflow === 'true' ? 'slds-is-open' : null
      )}
    >
      <ButtonIcon
        className="slds-button_icon-container slds-button_icon-x-small"
        tabIndex={props.itemActive ? '0' : '-1'}
        symbol="chevrondown"
        aria-haspopup="true"
        assistiveText={'Actions for ' + props.title}
        title={'Actions for ' + props.title}
        theme={
          props.statusLevel === 'error' || props.statusLevel === 'success'
            ? 'inverse'
            : null
        }
        useCurrentColor={
          props.statusLevel !== 'error' && props.statusLevel !== 'success'
        }
      />
      <Menu className="slds-dropdown_right">
        <MenuList>
          <MenuItem iconRight={<ShortCutKey>r</ShortCutKey>}>
            Refresh Tab
          </MenuItem>
          <MenuItem iconRight={<ShortCutKey>⇧ + n</ShortCutKey>}>
            Open in a new window
          </MenuItem>
          <MenuItem iconRight={<ShortCutKey>p</ShortCutKey>}>Pin Tab</MenuItem>
          <MenuItem iconRight={<ShortCutKey>w</ShortCutKey>}>
            Close Tab
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
    {!props.pinned ? (
      <div className="slds-context-bar__icon-action slds-col_bump-left slds-p-left_none">
        <ButtonIcon
          className="slds-button_icon-container slds-button_icon-x-small"
          tabIndex={props.itemActive ? '0' : '-1'}
          symbol="close"
          assistiveText={'Close ' + props.title}
          title={'Close ' + props.title}
          theme={
            props.statusLevel === 'error' || props.statusLevel === 'success'
              ? 'inverse'
              : null
          }
          useCurrentColor={
            props.statusLevel !== 'error' && props.statusLevel !== 'success'
          }
        />
      </div>
    ) : null}
  </li>
);

ContextTab.propTypes = {
  className: PropTypes.string,
  hasFocus: PropTypes.bool,
  hasSubtabs: PropTypes.bool,
  id: PropTypes.string.isRequired,
  itemActive: PropTypes.bool,
  itemUnread: PropTypes.bool,
  itemUnsaved: PropTypes.bool,
  pinned: PropTypes.bool,
  statusLevel: PropTypes.oneOf(['error', 'success', 'warning']),
  tabPanelId: PropTypes.string.isRequired,
  title: PropTypes.string
};

ContextTab.defaultProps = {
  hasIcon: true,
  title: 'Tab Name'
};

export let ContextTabPanel = props => (
  <div
    id={props.id}
    className={classNames(props.show ? 'slds-show' : 'slds-hide')}
    role="tabpanel"
    aria-labelledby={props.tabId}
  >
    {props.children}
  </div>
);

export let ContextTabBar = props => (
  <div
    className={classNames(
      'slds-context-bar slds-context-bar_tabs',
      props.className
    )}
  >
    <div className="slds-context-bar__primary">
      <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
        <div className="slds-context-bar__icon-action">
          <WaffleIcon className="slds-context-bar__button" />
        </div>
        <span className="slds-context-bar__label-action slds-context-bar__app-name">
          <span className="slds-truncate" title={props.appName || 'App Name'}>
            {props.appName || 'App Name'}
          </span>
        </span>
      </div>

      <div
        className={classNames(
          'slds-context-bar__item slds-context-bar__object-switcher slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click',
          props.objectSwitchClassName
        )}
      >
        <a
          href="#"
          className="slds-context-bar__label-action"
          onClick={e => e.preventDefault()}
        >
          <span className="slds-truncate" title="Object">
            Object
          </span>
        </a>
        <div className="slds-context-bar__icon-action">
          <ButtonIcon
            className="slds-button_icon-container slds-button_icon-x-small"
            symbol="chevrondown"
            aria-haspopup="true"
            assistiveText="Open object switcher menu"
            title="Open object switcher menu"
          />
        </div>
        <Menu className="slds-dropdown_right">
          <MenuList>
            <MenuItem>
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small"
                sprite="standard"
                symbol="account"
              />
              Accounts
            </MenuItem>
            <MenuItem>
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-standard-case slds-m-right_small"
                sprite="standard"
                symbol="case"
              />
              Cases
            </MenuItem>
            <MenuItem>
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-standard-work-order slds-m-right_small"
                sprite="standard"
                symbol="work_order"
              />
              Insights
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div
        className={classNames(
          'slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger_click',
          props.addTabActive ? 'slds-is-open' : null,
          props.addTabClassName
        )}
      >
        <div className="slds-context-bar__icon-action">
          <ButtonIcon
            className="slds-button_icon-container slds-button_icon-small"
            symbol="add"
            assistiveText="Open a New Tab"
            title="Open a New Tab"
          />
        </div>
        {props.addTabActive ? (
          <section
            className="slds-popover slds-nubbin_top"
            role="dialog"
            aria-label="Add tab by URL or ID"
            style={{
              position: 'absolute',
              left: '1.125rem',
              top: '2.75rem',
              marginLeft: '-10rem'
            }}
          >
            <div className="slds-popover__body">
              <div className="slds-form-element">
                <label
                  className="slds-form-element__label"
                  htmlFor="text-input-01"
                >
                  Add Page by URL or ID
                </label>
                <div className="slds-form-element__control slds-grid">
                  <input
                    id="text-input-01"
                    className="slds-input"
                    type="text"
                    placeholder="Placeholder Text"
                  />
                  <button
                    className="slds-button slds-button_brand slds-shrink-none slds-m-left_small"
                    type="submit"
                  >
                    Add Tab
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>

    <div className="slds-context-bar__secondary">
      <div className="slds-context-bar__vertical-divider" />
      <ul className="slds-grid" role="tablist">
        {props.children}
      </ul>
    </div>
  </div>
);

export const ContextTabBarOverflow = props => (
  <li
    className={classNames(
      'slds-context-bar__item',
      'slds-context-bar__dropdown-trigger',
      'slds-dropdown-trigger',
      'slds-dropdown-trigger_click',
      {
        'slds-is-open': props.isOpen,
        'slds-has-notification': props.itemUnread,
        'slds-is-unsaved': props.itemUnsaved,
        'slds-has-success': props.statusLevel === 'success',
        'slds-has-warning': props.statusLevel === 'warning',
        'slds-has-error': props.statusLevel === 'error'
      }
    )}
  >
    <button
      className="slds-button slds-context-bar__label-action"
      title="More Tab Items"
      aria-haspopup="true"
    >
      <IndicatorContainer>
        {props.itemUnsaved && <IndicatorUnsaved />}
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
    </button>
    <Menu className="slds-dropdown_right">
      <MenuList>
        <MenuItem
          className={classNames({
            'slds-has-notification': props.itemUnread,
            'slds-is-unsaved': props.itemUnsaved
          })}
          statusLevel={props.statusLevel}
          title="Chat - Customer"
        >
          <IndicatorContainer>
            {props.itemUnsaved && (
              <IndicatorUnsaved title="Tab(s) within menu not saved" />
            )}
            {props.itemUnread && <IndicatorUnread />}
          </IndicatorContainer>
          {props.itemHasIcon && (
            <TabItemIconContainer
              statusLevel={props.statusLevel}
              symbol="live_chat"
            />
          )}
          <span>Chat - Customer</span>
        </MenuItem>
        <MenuItem title="Overflow Tab Item">
          <IndicatorContainer />
          {props.itemHasIcon && <TabItemIconContainer />}
          <span>Overflow Tab Item</span>
        </MenuItem>
      </MenuList>
    </Menu>
  </li>
);

ContextTabBarOverflow.propTypes = {
  statusLevel: PropTypes.oneOf(['error', 'success', 'warning'])
};

ContextTabBarOverflow.defaultProps = {
  itemHasIcon: true
};

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

const defaultComponent = (
  <React.Fragment>
    <ContextTabBar>
      <ContextTab
        title="Home"
        symbol="home"
        tabPanelId={tabPanelId01}
        id={tabId01}
      />
      <ContextTab title="Tab Item 1" tabPanelId={tabPanelId02} id={tabId02} />
      <ContextTab title="Tab Item 2" tabPanelId={tabPanelId03} id={tabId03} />
    </ContextTabBar>
    <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
      Tab Home Content
    </ContextTabPanel>
    <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
      Tab One Content
    </ContextTabPanel>
    <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
      Tab Two Content
    </ContextTabPanel>
  </React.Fragment>
);

export default [
  {
    id: 'default',
    label: demoName + 'Default',
    element: defaultComponent
  }
];

export let states = [
  {
    id: 'tab-active',
    label: demoName + 'Active',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
            itemActive
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel show id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-active-focus',
    label: demoName + 'Active Focus',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
            itemActive
            hasFocus
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel show id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-item-action-menu-open',
    label: demoName + 'Action Overflow',
    element: (
      <div className="demo-only" style={{ height: '12rem' }}>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
            itemActive
            actionOverflow="true"
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel show id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'unsaved-tab',
    label: demoName + 'Unsaved Tab',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
            itemUnsaved
          />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'unread-tab',
    label: demoName + 'Unread Tab',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Chat - Customer"
            tabPanelId={tabPanelId03}
            id={tabId03}
            symbol="live_chat"
            itemUnread
          />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'unread-unsaved-tab',
    label: demoName + 'Unread/Unsaved Tab',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Chat - Customer"
            tabPanelId={tabPanelId03}
            id={tabId03}
            symbol="live_chat"
            itemUnread
            itemUnsaved
          />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-success',
    label: demoName + 'Success',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="success"
            id={tabId03}
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="Chat - Customer"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-success-active',
    label: demoName + 'Success Active',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="success"
            id={tabId03}
            itemActive
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="Chat - Customer"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} show tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-success-focus',
    label: demoName + 'Success Focused',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="success"
            hasFocus
            id={tabId03}
            itemActive
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="Chat - Customer"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} show tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-success-unread',
    label: demoName + 'Success Unread',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="success"
            id={tabId03}
            itemUnread
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="Chat - Customer"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-success-unsaved',
    label: demoName + 'Success Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="success"
            id={tabId03}
            itemUnsaved
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="Chat - Customer"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-success-unread-unsaved',
    label: demoName + 'Success Unread and Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="success"
            id={tabId03}
            itemUnread
            itemUnsaved
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="Chat - Customer"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-warning',
    label: demoName + 'Warning',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="warning"
            id={tabId03}
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA in 0.30"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-warning-active',
    label: demoName + 'Warning Active',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="warning"
            id={tabId03}
            itemActive
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA in 0.30"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} show tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-warning-focus',
    label: demoName + 'Warning focused',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="warning"
            hasFocus
            id={tabId03}
            itemActive
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA in 0.30"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-warning-unread',
    label: demoName + 'Warning Unread',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="warning"
            id={tabId03}
            itemUnread
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA in 0.30"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-warning-unsaved',
    label: demoName + 'Warning Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="warning"
            id={tabId03}
            itemUnsaved
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA in 0.30"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-warning-unread-unsaved',
    label: demoName + 'Warning Unread and Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="warning"
            id={tabId03}
            itemUnread
            itemUnsaved
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA in 0.30"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-error',
    label: demoName + 'Error',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="error"
            id={tabId03}
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA Violation"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-error-active',
    label: demoName + 'Error Active',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="error"
            id={tabId03}
            itemActive
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA Violation"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} show tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-error-focused',
    label: demoName + 'Error focused',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="error"
            hasFocus
            id={tabId03}
            itemActive
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA Violation"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} show tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-error-unread',
    label: demoName + 'Error Unread',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="error"
            id={tabId03}
            itemUnread
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA Violation"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-error-unsaved',
    label: demoName + 'Error Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="error"
            id={tabId03}
            itemUnsaved
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA Violation"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'tab-error-unread-unsaved',
    label: demoName + 'Error Unread and Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            statusLevel="error"
            id={tabId03}
            itemUnread
            itemUnsaved
            symbol="live_chat"
            tabPanelId={tabPanelId03}
            title="SLA Violation"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Chat - Customer Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab',
    label: demoName + 'Pinned Tab',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            pinned
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
            itemActive
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel show id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-active',
    label: demoName + 'Pinned Tab - Active',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
            pinned
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-active-focus',
    label: demoName + 'Pinned Tab - Active Focus',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
            pinned
            hasFocus
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'unsaved-pinned-tab',
    label: demoName + 'Unsaved Pinned Tab',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            pinned
            itemUnsaved
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
            itemActive
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel show id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'unread-pinned-tab',
    label: demoName + 'Unread Pinned Tab',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            title="Chat - Customer"
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            id={tabId01}
            pinned
            itemUnread
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
            itemActive
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel show id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-success',
    label: demoName + 'Pinned Success Tab',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="success"
            id={tabId01}
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-success-active',
    label: demoName + 'Pinned Success Tab Active',
    element: (
      <div className="demo-only">
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="success"
            id={tabId01}
            itemActive
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'pinned-tab-success-focused',
    label: demoName + 'Pinned Success Tab Focused',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="success"
            hasFocus
            id={tabId01}
            itemActive
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-success-unread',
    label: demoName + 'Pinned Success Tab Unread',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="success"
            id={tabId01}
            itemUnread
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-success-unsaved',
    label: demoName + 'Pinned Success Tab Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="success"
            id={tabId01}
            itemUnsaved
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-warning',
    label: demoName + 'Pinned Warning Tab',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="warning"
            id={tabId01}
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-warning-active',
    label: demoName + 'Pinned Warning Tab Active',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="warning"
            id={tabId01}
            itemActive
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-warning-focused',
    label: demoName + 'Pinned Warning Tab Focused',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="warning"
            hasFocus
            id={tabId01}
            itemActive
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-warning-unread',
    label: demoName + 'Pinned Warning Tab Unread',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="warning"
            id={tabId01}
            itemUnread
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-warning-unsaved',
    label: demoName + 'Pinned Warning Tab Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="warning"
            id={tabId01}
            itemUnsaved
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-error',
    label: demoName + 'Pinned Error Tab',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="error"
            id={tabId01}
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-error-active',
    label: demoName + 'Pinned Error Tab Active',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="error"
            id={tabId01}
            itemActive
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-error-focused',
    label: demoName + 'Pinned Error Tab Focused',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="error"
            id={tabId01}
            itemActive
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-error-unread',
    label: demoName + 'Pinned Error Tab Unread',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="error"
            id={tabId01}
            itemUnread
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'pinned-tab-error-unsaved',
    label: demoName + 'Pinned Error Tab Unsaved',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            statusLevel="error"
            id={tabId01}
            itemUnsaved
            pinned
            symbol="live_chat"
            tabPanelId={tabPanelId01}
            title="Chat - Customer"
          />
          <ContextTab
            id={tabId02}
            itemActive
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Chat - Customer Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} show tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'overflow-tabs',
    label: demoName + 'Overflow Tabs',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
          <ContextTabBarOverflow />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'overflow-tabs-open',
    label: demoName + 'Overflow Tabs - Open',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
          <ContextTabBarOverflow isOpen />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'unsaved-overflow-tabs',
    label: demoName + 'Unsaved Overflow Tabs',
    element: (
      <React.Fragment>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
          <ContextTabBarOverflow itemUnsaved />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'unsaved-overflow-tabs-open',
    label: demoName + 'Unsaved Overflow Tabs - Open',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
          <ContextTabBarOverflow isOpen itemUnsaved />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'unread-overflow-tabs',
    label: demoName + 'Unread Overflow Tabs',
    element: (
      <React.Fragment>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
          <ContextTabBarOverflow itemUnread />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'unread-overflow-tabs-open',
    label: demoName + 'Unread Overflow Tabs - Open',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
          <ContextTabBarOverflow isOpen itemUnread />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'unread-unsaved-overflow-tabs-open',
    label: demoName + 'Unread Unsaved Overflow Tabs - Open',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
          <ContextTabBarOverflow isOpen itemUnread itemUnsaved />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'unread-unsaved-overflow-tabs-without-icon-open',
    label: demoName + 'Unread Unsaved Overflow Tabs without Icon - Open',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          New activity in Tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
            itemUnread
            itemUnsaved
            hasIcon={false}
          />
          <ContextTabBarOverflow
            isOpen
            itemUnread
            itemUnsaved
            itemHasIcon={false}
          />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'success-overflow',
    label: demoName + 'Success Overflow Tabs',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
          <ContextTabBarOverflow statusLevel="success" isOpen />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'success-overflow-unread-unsaved',
    label: demoName + 'Success Overflow Tabs Unread and Unsaved',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          Success: SLA agreement warning cleared in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
          <ContextTabBarOverflow
            statusLevel="success"
            isOpen
            itemUnread
            itemUnsaved
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'warning-overflow',
    label: demoName + 'Warning Overflow Tabs',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
          <ContextTabBarOverflow statusLevel="warning" isOpen />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'warning-overflow-unread-unsaved',
    label: demoName + 'Warning Overflow Tabs Unread and Unsaved',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          Warning: SLA agreement in 30 seconds in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
          <ContextTabBarOverflow
            statusLevel="warning"
            isOpen
            itemUnread
            itemUnsaved
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'error-overflow',
    label: demoName + 'Error Overflow Tabs',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
          <ContextTabBarOverflow statusLevel="error" isOpen />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'error-overflow-unread-unsaved',
    label: demoName + 'Error Overflow Tabs Unread and Unsaved',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <span aria-live="polite" className="slds-assistive-text">
          Violation: SLA agreement in tab: Chat - Customer
        </span>
        <ContextTabBar>
          <ContextTab
            id={tabId01}
            itemActive
            symbol="home"
            tabPanelId={tabPanelId01}
            title="Home"
          />
          <ContextTab
            id={tabId02}
            tabPanelId={tabPanelId02}
            title="Tab Item 1"
          />
          <ContextTab
            id={tabId03}
            tabPanelId={tabPanelId03}
            title="Tab Item 2"
          />
          <ContextTabBarOverflow
            statusLevel="error"
            isOpen
            itemUnread
            itemUnsaved
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} show tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'object-switcher-active',
    label: demoName + 'Object Switcher - Active',
    element: (
      <React.Fragment>
        <ContextTabBar objectSwitchClassName="slds-is-active">
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </React.Fragment>
    )
  },
  {
    id: 'object-switcher-menu-open',
    label: demoName + 'Object Switcher - Open',
    element: (
      <div className="demo-only" style={{ height: '11rem' }}>
        <ContextTabBar objectSwitchClassName="slds-is-open">
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'add-tab-dialog-open',
    label: demoName + 'Add Tab Dialog - Open',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <ContextTabBar addTabActive>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel id={tabPanelId01} tabId={tabId01}>
          Tab Home Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'sub-tabs-open',
    label: demoName + 'Subtabs - Open',
    element: (
      <div className="demo-only" style={{ height: '8rem' }}>
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
            hasSubtabs
          />
          <ContextTab
            title="Tab Item 1"
            tabPanelId={tabPanelId02}
            id={tabId02}
          />
          <ContextTab
            title="Tab Item 2"
            tabPanelId={tabPanelId03}
            id={tabId03}
          />
        </ContextTabBar>
        <ContextTabPanel show id={tabPanelId01} tabId={tabId01}>
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
              id="subtab-tabpanel-01"
              tabId="subtab-tabitem-01"
              isVisible
            >
              Item One Content
            </SubtabPanel>
            <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
              Item Two Content
            </SubtabPanel>
          </SubtabsContainer>
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId02} tabId={tabId02}>
          Tab One Content
        </ContextTabPanel>
        <ContextTabPanel id={tabPanelId03} tabId={tabId03}>
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  }
];
