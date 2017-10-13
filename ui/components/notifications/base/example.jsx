// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';
import ButtonIcon from '../../button-icons/';
import { StandardIcon } from '../../icons/standard/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let NotificationContainer = props => (
  <div className="slds-notification-container">{props.children}</div>
);

let Notification = props => {
  const headingUniqueId = _.uniqueId('dialog-heading-id-');
  const bodyUniqueId = _.uniqueId('dialog-body-id-');

  return (
    <section
      className="slds-notification"
      role="dialog"
      aria-labelledby={props.headingID}
      aria-describedby={bodyUniqueId}
    >
      <div className="slds-notification__body" id={bodyUniqueId}>
        <a
          className="slds-notification__target slds-media"
          href="javascript:void(0);"
        >
          <StandardIcon
            containerClassName="slds-media__figure"
            className="slds-icon--small"
            assistiveText={false}
            symbol={props.type}
            title={props.type}
          />
          <div className="slds-media__body">
            <h2
              className="slds-text-heading--small slds-m-bottom--xx-small"
              id={props.headingID}
            >
              <span className="slds-assistive-text">
                {props.type + ' notification:'}
              </span>
              {props.title}
            </h2>
            <p>{props.description}</p>
          </div>
        </a>
        <ButtonIcon
          className="slds-button--icon-container slds-notification__close"
          symbol="close"
          assistiveText={'Dismiss ' + props.title + ' notification'}
          title={'Dismiss ' + props.title + ' notification'}
        />
      </div>
      {props.footer ? (
        <footer
          className={classNames(
            'slds-notification__footer',
            props.footerClassName
          )}
        >
          {props.footer}
        </footer>
      ) : null}
    </section>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only slds-is-relative" style={{ height: '4.5rem' }}>
    <NotificationContainer>
      <div
        aria-live="assertive"
        aria-atomic="true"
        className="slds-assistive-text"
      >
        event notification: Tesla - Renewal meeting
      </div>
      <Notification
        headingID="noti52"
        type="event"
        title="Tesla - Renewal meeting"
        description="Event at 11:00am on Jan 8"
      />
    </NotificationContainer>
  </div>
);

export let examples = [
  {
    id: 'task-notification',
    label: 'Task Notification',
    element: (
      <div className="demo-only slds-is-relative" style={{ height: '4.5rem' }}>
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            task notification: Call Two: Jane Johnson
          </div>
          <Notification
            headingID="noti77"
            type="task"
            title="Call Two: Jane Johnson"
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
      <div className="demo-only slds-is-relative" style={{ height: '15rem' }}>
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            task notification: Call Two: Jane Johnson
          </div>
          <Notification
            headingID="noti77"
            type="task"
            title="Call Two: Jane Johnson"
            description="Task due on Jan 8"
          />
          <Notification
            headingID="noti52"
            type="event"
            title="Tesla - Renewal meeting"
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
      <div className="demo-only slds-is-relative" style={{ height: '15rem' }}>
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            task notification: Call Two: Jane Johnson
          </div>
          <Notification
            headingID="noti77"
            type="task"
            title="Call Two: Jane Johnson"
            description="Task due on Jan 8"
          />
          <Notification
            headingID="noti52"
            type="event"
            title="Tesla - Renewal meeting"
            description="Event at 11:00am on Jan 8"
          />
          <Notification
            headingID="noti66"
            type="task"
            title="Call Three: Jim Jameson"
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
      <div className="demo-only slds-is-relative" style={{ height: '17rem' }}>
        <NotificationContainer>
          <div
            aria-live="assertive"
            aria-atomic="true"
            className="slds-assistive-text"
          >
            task notification: Call Two: Jane Johnson
          </div>
          <Notification
            headingID="noti77"
            type="task"
            title="Call Two: Jane Johnson"
            description="Task due on Jan 8"
          />
          <Notification
            headingID="noti52"
            type="event"
            title="Tesla - Renewal meeting"
            description="Event at 11:00am on Jan 8"
          />
          <Notification
            headingID="noti66"
            type="task"
            title="Call Three: Jim Jameson"
            description="Task due on Jan 8"
          />
          <Notification
            headingID="noti48"
            type="task"
            title="Call Two: Jane Johnson"
            description="Task due on Jan 8"
          />
          <Notification
            headingID="noti59"
            type="event"
            title="Tesla - Renewal meeting"
            description="Event at 11:00am on Jan 8"
          />
          <Notification
            headingID="noti86"
            type="task"
            title="Call Three: Jim Jameson"
            description="Task due on Jan 8"
          />
        </NotificationContainer>
      </div>
    )
  }
];
