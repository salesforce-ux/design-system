// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import { WaffleIcon } from '../../dynamic-icons/waffle/example';
import ButtonIcon from '../../button-icons/';
import {
  Subtab,
  Subtabs,
  SubtabList,
  SubtabPanel
} from '../../tabs/sub-tabs/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

const tabPanelId01 = 'context-tab-panel-1';
const tabPanelId02 = 'context-tab-panel-2';
const tabPanelId03 = 'context-tab-panel-3';
const tabId01 = 'context-tab-id-1';
const tabId02 = 'context-tab-id-2';
const tabId03 = 'context-tab-id-3';

/* -----------------------------------------------------------------------------
    Elements
----------------------------------------------------------------------------- */

const ShortCutKey = props => (
  <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
    <span className="slds-assistive-text">:</span>
    {props.children}
  </span>
);

const IndicatorUnsaved = props => (
  <abbr
    className="slds-indicator_unsaved"
    title={props.title || 'Tab Not Saved'}
  >
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

export let ContextTab = props => (
  <li
    className={classNames(
      'slds-context-bar__item slds-context-bar__item_tab',
      props.className,
      {
        'slds-is-active': props.itemActive,
        'slds-is-unsaved': props.itemUnsaved,
        'slds-is-pinned': props.pinned,
        'slds-has-notification': props.itemUnread,
        'slds-has-sub-tabs': props.hasSubtabs
      }
    )}
    role="presentation"
  >
    <a
      href="javascript:void(0);"
      className="slds-context-bar__label-action"
      role="tab"
      title={props.title || 'tab name'}
      aria-selected={props.itemActive ? 'true' : 'false'}
      tabIndex={props.itemActive ? '0' : '-1'}
      aria-controls={props.tabPanelId}
      id={props.id}
    >
      {props.itemUnsaved ? (
        <abbr className="slds-indicator_unsaved" title="Tab Not Saved">
          *
        </abbr>
      ) : null}
      {props.itemUnread && (
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
          {_.startCase(props.symbol) || 'Case'}
        </span>
      </div>
      <span
        className={classNames(
          'slds-truncate',
          props.pinned ? 'slds-assistive-text' : null
        )}
        title={props.title || 'tab name'}
      >
        {props.title || 'tab name'}
      </span>
    </a>
    <div
      className={classNames(
        'slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none',
        props.actionOverflow == 'true' ? 'slds-is-open' : null
      )}
    >
      <ButtonIcon
        className="slds-button_icon-container slds-button_icon-x-small"
        tabIndex={props.itemActive ? '0' : '-1'}
        symbol="chevrondown"
        aria-haspopup="true"
        assistiveText={'Actions for ' + props.title}
        title={'Actions for ' + props.title}
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
        />
      </div>
    ) : null}
  </li>
);

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
          href="javascript:void(0);"
          className="slds-context-bar__label-action"
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
        'slds-is-unsaved': props.itemUnsaved
      }
    )}
  >
    <button
      className="slds-button slds-context-bar__label-action"
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
        <MenuItem
          className={classNames({
            'slds-has-notification': props.itemUnread,
            'slds-is-unsaved': props.itemUnsaved
          })}
          title="Chat - Customer"
        >
          {props.itemUnsaved ? (
            <IndicatorUnsaved title="Tab(s) within menu not saved" />
          ) : null}
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

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export const Context = props => (
  <div style={{ height: '16rem' }}>{props.children}</div>
);

export default (
  <div className="demo-only">
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
  </div>
);

export let states = [
  {
    id: 'tab-active',
    label: 'Tab - Active',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'tab-active-focus',
    label: 'Tab - Active Focus',
    element: (
      <div className="demo-only">
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
            className="slds-has-focus"
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
    id: 'tab-item-action-menu-open',
    label: 'Tab - Action Overflow',
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
    label: 'Unsaved Tab',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'unread-tab',
    label: 'Unread Tab',
    element: (
      <div className="demo-only">
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
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'unread-unsaved-tab',
    label: 'Unread/Unsaved Tab',
    element: (
      <div className="demo-only">
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
          Tab Two Content
        </ContextTabPanel>
      </div>
    )
  },
  {
    id: 'pinned-tab',
    label: 'Pinned Tab',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'pinned-tab-active',
    label: 'Pinned Tab - Active',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'pinned-tab-active-focus',
    label: 'Pinned Tab - Active Focus',
    element: (
      <div className="demo-only">
        <ContextTabBar>
          <ContextTab
            title="Home"
            symbol="home"
            tabPanelId={tabPanelId01}
            id={tabId01}
            itemActive
            pinned
            className="slds-has-focus"
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
      </div>
    )
  },
  {
    id: 'unsaved-pinned-tab',
    label: 'Unsaved Pinned Tab',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'unread-pinned-tab',
    label: 'Unread Pinned Tab',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'overflow-tabs',
    label: 'Overflow Tabs',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'overflow-tabs-open',
    label: 'Overflow Tabs - Open',
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
    label: 'Unsaved Overflow Tabs',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'unsaved-overflow-tabs-open',
    label: 'Unsaved Overflow Tabs - Open',
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
    label: 'Unread Overflow Tabs',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'unread-overflow-tabs-open',
    label: 'Unread Overflow Tabs - Open',
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
    label: 'Unread Unsaved Overflow Tabs - Open',
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
    id: 'object-switcher-active',
    label: 'Object Switcher - Active',
    element: (
      <div className="demo-only">
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
      </div>
    )
  },
  {
    id: 'object-switcher-menu-open',
    label: 'Object Switcher - Open',
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
    label: 'Add Tab Dialog - Open',
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
    label: 'Sub Tabs - Open',
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
              id="subtab-tabpanel-01"
              tabId="subtab-tabitem-01"
              isVisible
            >
              Item One Content
            </SubtabPanel>
            <SubtabPanel id="subtab-tabpanel-02" tabId="subtab-tabitem-02">
              Item Two Content
            </SubtabPanel>
          </Subtabs>
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
