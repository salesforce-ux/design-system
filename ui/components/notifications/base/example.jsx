// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from 'lodash';
import { ButtonIcon } from '../../button-icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Notification = props => {
  const headingUniqueId = _.uniqueId('dialog-heading-id-');
  const bodyUniqueId = _.uniqueId('dialog-body-id-');

  return (
    <section
      className="slds-notification"
      role="dialog"
      aria-labelledby={!props.header && props.headerTitle ? headingUniqueId : props.headingId}
      aria-label={!props.header && !props.headerTitle ? props.title : null}
      aria-describedby={bodyUniqueId}>
      <div className="slds-notification__body" id={bodyUniqueId}>
        <a className="slds-notification__target slds-media" href="javascript:void(0);">
          { props.children }
        </a>
        <ButtonIcon
          className="slds-button--icon-container slds-notification__close"
          symbol="close"
          assistiveText="Close"
          title="Close"
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

export const Context = props =>
  <div style={{ height: '4rem', position: 'relative' }}>
    {props.children}
  </div>;

export default (
  <Notification>
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
  </Notification>
);

export let examples = [
  {
    id: 'task-notification',
    label: 'Task Notification',
    element:
      <Notification>
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
      </Notification>
  }
];
