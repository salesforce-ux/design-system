// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { UtilityIcon } from '../../icons/base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export const ScopedNotification = props => {
  const { children } = props;

  return (
    <div
      className={classNames(
        'slds-scoped-notification slds-media slds-media_center',
        props.type && 'slds-theme_' + props.type
      )}
      role="status"
    >
      <div className="slds-media__figure">
        <UtilityIcon
          title={props.type}
          className="slds-icon_small"
          assistiveText={props.type}
          symbol={props.type}
        />
      </div>
      <div className="slds-media__body">{children}</div>
    </div>
  );
};

ScopedNotification.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  children: PropTypes.node
};

export const ScopedNotificationThemed = props => {
  const { children, theme } = props;

  return (
    <div
      className={classNames(
        'slds-scoped-notification slds-media slds-media_center',
        props.theme && 'slds-scoped-notification_' + props.theme
      )}
      role="status"
    >
      <div className="slds-media__figure">
        <UtilityIcon
          title="information"
          className={classNames(
            'slds-icon_small',
            theme && theme === 'light' && 'slds-icon-text-default'
          )}
          assistiveText="information"
          symbol="info"
        />
      </div>
      <div className="slds-media__body">{children}</div>
    </div>
  );
};

ScopedNotificationThemed.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(['light', 'dark'])
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <ScopedNotificationThemed theme="light">
        <p>
          It looks as if duplicates exist for this lead.{' '}
          <a href="#" onClick={e => e.preventDefault()}>
            View Duplicates
          </a>
        </p>
      </ScopedNotificationThemed>
    )
  }
];

export let examples = [
  {
    id: 'light-theme',
    label: 'Informational with Light Theme',
    element: (
      <ScopedNotificationThemed theme="light">
        <p>
          It looks as if duplicates exist for this lead.{' '}
          <a href="#" onClick={e => e.preventDefault()}>
            View Duplicates
          </a>
        </p>
      </ScopedNotificationThemed>
    )
  },
  {
    id: 'dark-theme',
    label: 'Informational with Dark theme',
    element: (
      <ScopedNotificationThemed theme="dark">
        <p>
          It looks as if duplicates exist for this lead.{' '}
          <a href="#" onClick={e => e.preventDefault()}>
            View Duplicates
          </a>
        </p>
      </ScopedNotificationThemed>
    )
  }
];

export let states = [
  {
    id: 'info',
    label: 'Informational',
    element: (
      <ScopedNotification type="info">
        <p>
          It looks as if duplicates exist for this lead.{' '}
          <a href="#" onClick={e => e.preventDefault()}>
            View Duplicates
          </a>
        </p>
      </ScopedNotification>
    )
  },
  {
    id: 'success',
    label: 'Success',
    element: (
      <ScopedNotification type="success">
        <p>
          Success! Your entry has been duplicated.{' '}
          <a href="#" onClick={e => e.preventDefault()}>
            View Duplicates
          </a>
        </p>
      </ScopedNotification>
    )
  },
  {
    id: 'warning',
    label: 'Warning',
    element: (
      <ScopedNotification type="warning">
        <p>
          It looks as if duplicates exist for this lead.{' '}
          <a href="#" onClick={e => e.preventDefault()}>
            View Duplicates
          </a>
        </p>
      </ScopedNotification>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <ScopedNotification type="error">
        <p>
          It looks as if duplicates exist for this lead.{' '}
          <a href="#" onClick={e => e.preventDefault()}>
            View Duplicates
          </a>
        </p>
      </ScopedNotification>
    )
  }
];
