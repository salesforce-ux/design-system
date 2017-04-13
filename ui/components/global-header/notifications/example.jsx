// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { ButtonIcon } from 'ui/components/button-icons/base/example';
import { Trigger } from 'ui/components/menus/dropdown/example';
import { GlobalHeader } from 'ui/components/global-header/base/example';
import { Avatar } from 'ui/components/avatar/base/example';
import classNames from 'classnames';

//////////////////////////////////////////////
// Partials
/////////////////////////////////////////////

const MoreIcon = (
  <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small" sprite="utility" symbol="down" assistiveText="Show More" title="Show More" aria-haspopup="true" />
);


let TriggerButton = props =>
  <Trigger className="slds-is-open" triggerIcon={MoreIcon}>
    {props.children}
  </Trigger>;

let UnreadIcon = props =>
  <div className="slds-align-middle">
    <abbr className="slds-required slds-text-link" title="unread">●</abbr>
  </div>;


let NotificationItem = props =>
  <li className={classNames('slds-global-header__notification slds-p-around--xx-small', props.className)}>
    <div className="slds-media slds-has-flexi-truncate slds-p-around--x-small">
      <div className="slds-media__figure">
        <Avatar className="slds-avatar--small slds-avatar--circle">
          <img
            alt={props.username}
            src="/assets/images/avatar3.jpg"
            title={`${props.username} avatar`}
          />
        </Avatar>
      </div>
      <div className="slds-media__body">
        <div className="slds-grid slds-grid--align-spread">
          <a href="javascript:void(0);" className="slds-text-link--reset slds-has-flexi-truncate">
            <h3 className="slds-truncate" title={`${props.username} ${props.messageTitle}`}><strong>{`${props.username} ${props.messageTitle}`}</strong></h3>
            <p className="slds-truncate" title={props.message}>{props.message}</p>
            <p className="slds-m-top--x-small slds-text-color--weak">{props.messageTime}</p>
          </a>
          <div className="slds-no-flex slds-grid slds-grid--vertical">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </li>;

let PopoverMenu = props =>
  <section className="slds-popover slds-popover--large slds-nubbin--top-right" role="dialog" aria-label="Notifications" aria-describedby="notifications-container" style={{ position: 'absolute', right: '3.125rem' }}>
    <div id="notifications-container" className="slds-popover__body slds-p-around--none">
      <ul>
        {props.children}
      </ul>
    </div>
  </section>;

//////////////////////////////////////////////
// Export
/////////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '28.571rem' }}>
    <GlobalHeader popoverMenu>
      <PopoverMenu>
        <NotificationItem
          className="slds-global-header__notification--unread"
          messageTitle="mentioned you in a comment:"
          message="I need you to review this for me @Paulina"
          messageTime="10m ago"
          username="Kelly Chan"
        >
          <TriggerButton />
          <UnreadIcon />
        </NotificationItem>
        <NotificationItem
          messageTitle="mentioned you in a comment:"
          message="I need you to review this for me @Paulina"
          messageTime="10m ago"
          username="Kelly Chan"
        >
          <TriggerButton />
        </NotificationItem>
        <NotificationItem
          messageTitle="mentioned you in a comment:"
          message="I need you to review this for me @Paulina"
          messageTime="10m ago"
          username="Kelly Chan"
        >
          <TriggerButton />
        </NotificationItem>
      </PopoverMenu>
    </GlobalHeader>
  </div>
);
