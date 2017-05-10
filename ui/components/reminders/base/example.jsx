// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Reminder = props => {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <div className="slds-reminder_container">
      <a className="slds-reminder slds-media" role="dialog">
        { children }
      </a>
      <ButtonIcon
        className="slds-button--icon-container slds-reminder__close"
        symbol="close"
        assistiveText="Close"
        title="Close"
        />
    </div>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export const Context = props =>
  <div style={{ height: '4rem', position: 'relative' }}>
    {props.children}
  </div>;

export default (
  <Reminder>
    <StandardIcon
      containerClassName="slds-media__figure"
      className="slds-icon--small"
      assistiveText={false}
      symbol="event"
    />
    <div className="slds-media__body">
      <h2 className="slds-text-heading--small slds-m-bottom--xx-small">Tesla - Renewal meeting</h2>
      <p>Event at 11:00am on Jan 8</p>
    </div>
  </Reminder>
);

export let examples = [
  {
    id: 'task-reminder',
    label: 'Task Reminder',
    element:
      <Reminder>
        <StandardIcon
          containerClassName="slds-media__figure"
          className="slds-icon--small"
          assistiveText={false}
          symbol="task"
        />
        <div className="slds-media__body">
          <h2 className="slds-text-heading--small slds-m-bottom--xx-small">Call Two: Jane Johnson</h2>
          <p>Task due on Jan 8</p>
        </div>
      </Reminder>
  }
];
