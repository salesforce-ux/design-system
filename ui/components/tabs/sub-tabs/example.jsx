// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { ButtonIcon } from '../../button-icons/base/example';
import _ from '../../../shared/helpers';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Subtab = props => (
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

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
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

export let states = [
  {
    id: 'subtabs-has-focus',
    label: 'Tab - Focus',
    element: (
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
    ),
    script: `
      document.getElementById('subtab-01').focus()
    `
  },
  {
    id: 'subtabs-unsaved',
    label: 'Unsaved Tab',
    element: (
      <div className="slds-tabs_default slds-sub-tabs">
        <ul className="slds-tabs_default__nav" role="tablist">
          <Subtab
            title="00071938"
            active
            itemUnsaved
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
    )
  },
  {
    id: 'subtabs-borders',
    label: 'With Borders',
    element: (
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
    )
  },
  {
    id: 'subtabs-menu',
    label: 'Tab - Action Overflow',
    element: (
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
    )
  },
  {
    id: 'subtabs-notification',
    label: 'Tab Notification',
    element: (
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
    )
  },
  {
    id: 'subtabs-notification-dirty',
    label: 'Unsaved With Notification',
    element: (
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
    )
  }
];
