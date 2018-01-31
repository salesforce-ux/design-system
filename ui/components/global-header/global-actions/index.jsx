// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import ButtonIcon from '../../button-icons/';
import GlobalNotifications from '../notifications/';
import GlobalFavorites from '../favorites/';
import GlobalTaskMenu from '../task';

/**
 * Favorites
 */
export const Favorites = props => (
  <div className="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
    <div className="slds-button-group">
      <ButtonIcon
        className={classNames(
          'slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small',
          {
            'slds-is-disabled': props.favoritesDisabled,
            'slds-is-selected': props.favoritesClicked
          }
        )}
        disabled={props.favoritesDisabled}
        aria-pressed={props.favoritesClicked ? 'true' : 'false'}
        symbol="favorite"
        title="Toggle Favorites"
        assistiveText="Toggle Favorite"
        onClick={() => props.toggleFavorite()}
      />
      <ButtonIcon
        className={classNames(
          'slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small'
        )}
        iconClassName="slds-button__icon_small"
        symbol="down"
        title="View Favorites"
        assistiveText="View Favorites"
      />
    </div>
    {props.showFavoritesPopup && <GlobalFavorites numberOfFavorites="2" />}
  </div>
);

/**
 * Task Action
 */
export const Task = props => (
  <div
    className={classNames(
      'slds-dropdown-trigger slds-dropdown-trigger_click',
      props.showTaskMenu && 'slds-is-open'
    )}
  >
    <ButtonIcon
      className="slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action"
      aria-haspopup="true"
      symbol="add"
      title="Global Actions"
      assistiveText="Global Actions"
    />
    {props.showTaskMenu && <GlobalTaskMenu />}
  </div>
);

/**
 * Help & Training
 */
export const Help = props => (
  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
    <ButtonIcon
      className="slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action"
      iconClassName="slds-global-header__icon"
      aria-haspopup="true"
      symbol="question"
      title="Help and Training"
      assistiveText="Help and Training"
    />
  </div>
);

/**
 * Setup
 */
export const Setup = props => (
  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
    <ButtonIcon
      className="slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action"
      iconClassName="slds-global-header__icon"
      aria-haspopup="true"
      symbol="setup"
      title="Setup"
      assistiveText="Setup"
    />
  </div>
);

/**
 * Notifications
 */
export const Notifications = props => {
  const feedback = props.notificationCount
    ? `${props.notificationCount} new notifications`
    : 'no new notifications';
  return (
    <div
      className={classNames(
        'slds-dropdown-trigger slds-dropdown-trigger_click',
        props.showNotificationPopup && 'slds-is-open'
      )}
    >
      <ButtonIcon
        className={classNames(
          'slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action',
          {
            'slds-incoming-notification':
              props.showNotification && props.notificationCount
          }
        )}
        iconClassName="slds-global-header__icon"
        symbol="notification"
        title={feedback}
        assistiveText={feedback}
        aria-live="assertive"
        aria-atomic="true"
      />
      <span
        aria-hidden="true"
        className={classNames(
          'slds-notification-badge',
          props.notificationCount && 'slds-incoming-notification',
          props.showNotification && 'slds-show-notification'
        )}
      >
        {props.notificationCount}
      </span>
      {props.showNotificationPopup && <GlobalNotifications />}
    </div>
  );
};

/**
 * Avatar
 */
export const Avatar = props => (
  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
    <button
      className="slds-button slds-global-actions__avatar slds-global-actions__item-action"
      title="person name"
      aria-haspopup="true"
    >
      <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </span>
    </button>
  </div>
);

class GlobalActions extends React.Component {
  render() {
    const {
      toggleFavorite,
      favoritesClicked,
      favoritesDisabled,
      showFavoritesPopup,
      showNotification,
      notificationCount,
      showNotificationPopup,
      showTaskMenu
    } = this.props;
    return (
      <ul className="slds-global-actions">
        <li className="slds-global-actions__item">
          <Favorites
            toggleFavorite={toggleFavorite}
            favoritesClicked={favoritesClicked}
            favoritesDisabled={favoritesDisabled}
            showFavoritesPopup={showFavoritesPopup}
          />
        </li>
        <li className="slds-global-actions__item">
          <Task showTaskMenu={showTaskMenu} />
        </li>
        <li className="slds-global-actions__item">
          <Help />
        </li>
        <li className="slds-global-actions__item">
          <Setup />
        </li>
        <li className="slds-global-actions__item">
          <Notifications
            showNotification={showNotification}
            notificationCount={notificationCount}
            showNotificationPopup={showNotificationPopup}
          />
        </li>
        <li className="slds-global-actions__item">
          <Avatar />
        </li>
      </ul>
    );
  }
}

export default GlobalActions;
