// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import { ActivityTimelineItem as Event } from '../event/example';
import { ActivityTimelineItem as Call } from '../call/example';
import { ActivityTimelineItem as Email } from '../email/example';
import { ActivityTimelineItem as Task } from '../task/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let TimelineIcon = props =>
  <div
    className={classNames(
      'slds-icon_container',
      props.symbol == 'log_a_call'
        ? 'slds-icon-standard-log-a-call'
      : 'slds-icon-standard-' + props.symbol
    )}
    title={props.symbol == 'log_a_call' ? 'call' : props.symbol}
  >
    <SvgIcon
      className="slds-icon slds-icon_small"
      sprite="standard"
      symbol={props.symbol}
    />
  </div>;

export let TimelineActions = props =>
  <div className="slds-timeline__actions">
    <p className="slds-timeline__date">{ props.date || 'Feb 24' }</p>
    <ButtonIcon
      className="slds-button_icon-border-filled slds-button_icon-x-small"
      symbol="down"
      assistiveText={props.assistiveText || 'More Options'}
      aria-haspopup="true"
      title={props.title || 'More Options'}
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
