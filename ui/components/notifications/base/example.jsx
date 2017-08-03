// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';
import { ButtonIcon } from '../../button-icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let NotificationContainer = props =>
  <div className="slds-notification-container">
    { props.children }
  </div>;

let Notification = props => {
  const headingUniqueId = _.uniqueId('dialog-heading-id-');
  const bodyUniqueId = _.uniqueId('dialog-body-id-');

  return (
    <section
      className="slds-notification"
      role="dialog"
      aria-labelledby={props.headingID}
      aria-describedby={bodyUniqueId}>
      <div className="slds-notification__body" id={bodyUniqueId}>
        <a className="slds-notification__target slds-media" href="javascript:void(0);">
          { props.children }
        </a>
        <ButtonIcon
          className="slds-button--icon-container slds-notification__close"
          symbol="close"
          assistiveText="Dismiss notification"
          title="Dismiss notification"
        />
      </div>
        { props.footer
        ? <footer className={classNames('slds-notification__footer', props.footerClassName)}>
          { props.footer }
        </footer>
      : null }
    </section>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only slds-is-relative" style={{ height: '4.5rem' }}>
    <NotificationContainer>
      <Notification headingID="noti52">
        <StandardIcon
          containerClassName="slds-media__figure"
          className="slds-icon--small"
          assistiveText={false}
          symbol="event"
          title="event"
        />
        <div className="slds-media__body">
          <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti52"><span className="slds-assistive-text">Notification:</span>Tesla - Renewal meeting</h2>
          <p>Event at 11:00am on Jan 8</p>
        </div>
      </Notification>
    </NotificationContainer>
  </div>
);

export let examples = [
  {
    id: 'task-notification',
    label: 'Task Notification',
    element:
      <div className="demo-only slds-is-relative" style={{ height: '4.5rem' }}>
        <NotificationContainer>
          <Notification headingID="noti77">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="task"
              title="task"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti77"><span className="slds-assistive-text">Notification:</span>Call Two: Jane Johnson</h2>
              <p>Task due on Jan 8</p>
            </div>
          </Notification>
        </NotificationContainer>
      </div>
  },
  {
    id: 'stacked-2',
    label: 'Stacked Notifications',
    element:
      <div className="demo-only slds-is-relative" style={{ height: '15rem' }}>
        <NotificationContainer>
          <Notification headingID="noti77">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="task"
              title="task"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti77"><span className="slds-assistive-text">Notification:</span>Call Two: Jane Johnson</h2>
              <p>Task due on Jan 8</p>
            </div>
          </Notification>
          <Notification headingID="noti52">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="event"
              title="event"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti52"><span className="slds-assistive-text">Notification:</span>Tesla - Renewal meeting</h2>
              <p>Event at 11:00am on Jan 8</p>
            </div>
          </Notification>
        </NotificationContainer>
      </div>
  },
  {
    id: 'stacked-3',
    label: 'Three Stacked Notifications',
    element:
      <div className="demo-only slds-is-relative" style={{ height: '15rem' }}>
        <NotificationContainer>
          <Notification headingID="noti77">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="task"
              title="task"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti77"><span className="slds-assistive-text">Notification:</span>Call Two: Jane Johnson</h2>
              <p>Task due on Jan 8</p>
            </div>
          </Notification>
          <Notification headingID="noti52">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="event"
              title="event"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti52"><span className="slds-assistive-text">Notification:</span>Tesla - Renewal meeting</h2>
              <p>Event at 11:00am on Jan 8</p>
            </div>
          </Notification>
          <Notification headingID="noti66">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="task"
              title="task"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti66"><span className="slds-assistive-text">Notification:</span>Call Three: Jim Jameson</h2>
              <p>Task due on Jan 8</p>
            </div>
          </Notification>
        </NotificationContainer>
      </div>
  },
  {
    id: 'overflow-six',
    label: 'Six Stacked Notifications',
    element:
      <div className="demo-only slds-is-relative" style={{ height: '17rem' }}>
        <NotificationContainer>
          <Notification headingID="noti77">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="task"
              title="task"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti77"><span className="slds-assistive-text">Notification:</span>Call Two: Jane Johnson</h2>
              <p>Task due on Jan 8</p>
            </div>
          </Notification>
          <Notification headingID="noti52">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="event"
              title="event"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti52"><span className="slds-assistive-text">Notification:</span>Tesla - Renewal meeting</h2>
              <p>Event at 11:00am on Jan 8</p>
            </div>
          </Notification>
          <Notification headingID="noti66">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="task"
              title="task"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti66"><span className="slds-assistive-text">Notification:</span>Call Three: Jim Jameson</h2>
              <p>Task due on Jan 8</p>
            </div>
          </Notification>
          <Notification headingID="noti48">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="task"
              title="task"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti48"><span className="slds-assistive-text">Notification:</span>Call Two: Jane Johnson</h2>
              <p>Task due on Jan 8</p>
            </div>
          </Notification>
          <Notification headingID="noti59">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="event"
              title="event"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti59"><span className="slds-assistive-text">Notification:</span>Tesla - Renewal meeting</h2>
              <p>Event at 11:00am on Jan 8</p>
            </div>
          </Notification>
          <Notification headingID="noti86">
            <StandardIcon
              containerClassName="slds-media__figure"
              className="slds-icon--small"
              assistiveText={false}
              symbol="task"
              title="task"
            />
            <div className="slds-media__body">
              <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id="noti86"><span className="slds-assistive-text">Notification:</span>Call Three: Jim Jameson</h2>
              <p>Task due on Jan 8</p>
            </div>
          </Notification>
        </NotificationContainer>
      </div>
  }
];
