// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/base/example';
import { ActivityTimelineItem as Event } from 'ui/components/activity-timeline/event/example';
import { ActivityTimelineItem as Call } from 'ui/components/activity-timeline/call/example';
import { ActivityTimelineItem as Email } from 'ui/components/activity-timeline/email/example';
import { ActivityTimelineItem as Task } from 'ui/components/activity-timeline/task/example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

export let TimelineIcon = props =>
  <div
    className={classNames(
      'slds-icon_container',
      props.symbol == 'log_a_call' ?
        'slds-icon-standard-log-a-call'
      : 'slds-icon-standard-' + props.symbol
    )}
    title={props.symbol == 'log_a_call' ? 'call' : props.symbol }
  >
    <SvgIcon
      className="slds-icon slds-icon--small"
      sprite="standard"
      symbol={ props.symbol }
    />
  </div>;

export let TimelineActions = props =>
  <div className="slds-timeline__actions">
    <p className="slds-timeline__date">{ props.date || 'Feb 24' }</p>
    <ButtonIcon
      className="slds-button--icon-border-filled slds-button--icon-x-small"
      symbol="down"
      assistiveText={ props.assistiveText || 'More Options' }
      aria-haspopup="true"
      title={ props.title || 'More Options' }
    />
  </div>;

export default (
  <ul className="slds-timeline">
    <li>
      <Task />
    </li>
    <li>
      <Event />
    </li>
    <li>
      <Call />
    </li>
    <li>
      <Email />
    </li>
  </ul>
);
