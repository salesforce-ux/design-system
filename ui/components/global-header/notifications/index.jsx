// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { Avatar } from '../../avatar/base/example';
import { Popover } from '../../popovers/base/example';
import ButtonIcon from '../../button-icons/';
import NotificationData from './data';

/**
 * Notification Item
 */
const NotificationItem = props => (
  <li
    className={classNames(
      'slds-global-header__notification',
      props.unread && 'slds-global-header__notification_unread',
      props.className
    )}
    key={props.index}
  >
    <div className="slds-media slds-has-flexi-truncate slds-p-around_x-small">
      <div className="slds-media__figure">
        <Avatar className="slds-avatar_small">
          <img
            alt={props.username}
            src={props.avatar}
            title={`${props.username} avatar`}
          />
        </Avatar>
      </div>
      <div className="slds-media__body">
        <div className="slds-grid slds-grid_align-spread">
          <a
            href="javascript:void(0);"
            className="slds-text-link_reset slds-has-flexi-truncate"
          >
            <h3
              className="slds-truncate"
              title={`${props.username} ${props.title}`}
            >
              <strong>{`${props.username} ${props.title}`}</strong>
            </h3>
            <p className="slds-truncate" title={props.message}>
              {props.message}
            </p>
            <p className="slds-m-top_x-small slds-text-color_weak">
              {props.timestamp}
              {props.unread && (
                <abbr
                  className="slds-text-link slds-m-horizontal_xxx-small"
                  title="unread"
                >
                  ●
                </abbr>
              )}
            </p>
          </a>
        </div>
      </div>
    </div>
  </li>
);

class GlobalNotifications extends Component {
  constructor() {
    super();
    this.renderNotificationItems = this.renderNotificationItems.bind(this);
  }

  renderNotificationItems(key) {
    const notification = NotificationData[key];
    return (
      <NotificationItem
        key={key}
        index={key}
        avatar={notification.avatar}
        username={notification.username}
        title={notification.title}
        message={notification.message}
        timestamp={notification.timestamp}
        unread={notification.unread}
      />
    );
  }

  render() {
    return (
      <Popover
        className="slds-popover_large slds-nubbin_top-right"
        bodyClassName="slds-p-around_none"
        headerTitle="Notifications"
        closeButton
        style={{
          position: 'absolute',
          top: 'calc(100% + 12px)',
          right: '-12px'
        }}
      >
        <ul>
          {Object.keys(NotificationData).map(this.renderNotificationItems)}
        </ul>
      </Popover>
    );
  }
}

export default GlobalNotifications;
