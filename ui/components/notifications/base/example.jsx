// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import uniqueId from 'lodash.uniqueid';
import ButtonIcon from '../../button-icons/';
import { StandardIcon } from '../../icons/standard/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let NotificationContainer = props => (
  <div className="slds-notification-container">{props.children}</div>
);

let Notification = props => {
  const bodyUniqueId = uniqueId('dialog-body-id-');
  const headingId = uniqueId('noti-')

  return (
    <section
      className="slds-notification"
      role="dialog"
      aria-labelledby={headingId}
      aria-describedby={bodyUniqueId}
    >
      <div className="slds-notification__body" id={bodyUniqueId}>
        <a
          className="slds-notification__target slds-media"
          href="#"
          onClick={e => e.preventDefault()}
        >
          <StandardIcon
            containerClassName="slds-media__figure"
            className="slds-icon_small"
            symbol={props.type}
            title={props.type}
          />
          <div className="slds-media__body">
            <h2
              className="slds-text-heading_small slds-m-bottom_xx-small"
              id={headingId}
            >
              <span className="slds-assistive-text">
                {`${props.type} notification:`}
              </span>
              {props.title}
            </h2>
            <p>{props.description}</p>
          </div>
        </a>
        <ButtonIcon
          className="slds-button_icon-container slds-notification__close"
          symbol="close"
          assistiveText={`Dismiss ${props.title} notification`}
          title={`Dismiss ${props.title} notification`}
        />
      </div>
      {props.footer && (
        <footer
          className={classNames(
            'slds-notification__footer',
            props.footerClassName
          )}
        >
          {props.footer}
        </footer>
      )}
    </section>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '4.5rem' }}>
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            event notification: Tesla - Renewal meeting
          </div>
          <Notification
            type="event"
            title="Tesla - Renewal meeting"
            description="Event at 11:00am on Jan 8"
          />
        </NotificationContainer>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'task-notification',
    label: 'Task Notification',
    element: (
      <div
        className="demo-only demo-only_viewport"
        style={{ height: '4.5rem' }}
      >
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            task notification: Call: Jane Johnson
          </div>
          <Notification
            type="task"
            title="Call: Jane Johnson"
            description="Task due on Jan 8"
          />
        </NotificationContainer>
      </div>
    )
  },
  {
    id: 'stacked-2',
    label: 'Stacked Notifications',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '15rem' }}>
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            task notification: Call One: Jane Johnson
          </div>
          <Notification
            type="task"
            title="Call One: Jane Johnson"
            description="Task due on Jan 8"
          />
          <Notification
            type="event"
            title="Call Two: Tesla - Renewal meeting"
            description="Event at 11:00am on Jan 8"
          />
        </NotificationContainer>
      </div>
    )
  },
  {
    id: 'stacked-3',
    label: 'Three Stacked Notifications',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '15rem' }}>
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            task notification: Call Two: Jane Johnson
          </div>
          <Notification
            type="task"
            title="Call Two: Jane Johnson"
            description="Task due on Jan 8"
          />
          <Notification
            type="event"
            title="Call Three: Tesla - Renewal meeting"
            description="Event at 11:00am on Jan 8"
          />
          <Notification
            type="task"
            title="Call Four: Jim Jameson"
            description="Task due on Jan 8"
          />
        </NotificationContainer>
      </div>
    )
  },
  {
    id: 'overflow-six',
    label: 'Six Stacked Notifications',
    element: (
      <div className="demo-only demo-only_viewport" style={{ height: '17rem' }}>
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            task notification: Call Five: Jane Johnson
          </div>
          <Notification
            type="task"
            title="Call Five: Jane Johnson"
            description="Task due on Jan 8"
          />
          <Notification
            type="event"
            title="Call Six: Tesla - Renewal meeting"
            description="Event at 11:00am on Jan 8"
          />
          <Notification
            type="task"
            title="Call Seven: Jim Jameson"
            description="Task due on Jan 8"
          />
          <Notification
            type="task"
            title="Call Eight: Jane Johnson"
            description="Task due on Jan 8"
          />
          <Notification
            type="event"
            title="Call Nine: Tesla - Renewal meeting"
            description="Event at 11:00am on Jan 8"
          />
          <Notification
            type="task"
            title="Call Ten: Jim Jameson"
            description="Task due on Jan 8"
          />
        </NotificationContainer>
      </div>
    )
  }
];
