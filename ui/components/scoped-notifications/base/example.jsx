// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { UtilityIcon } from '../../icons/base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export const ScopedNotiInfo = props => (
  <div
    className={classNames(
      'slds-scoped-notification slds-media slds-media_center',
      props.className
    )}
    role="status"
  >
    <div className="slds-media__figure">
      <UtilityIcon
        title="information"
        className={classNames('slds-icon_small', props.iconClassName)}
        assistiveText="information"
        symbol="info"
      />
    </div>
    <div className="slds-media__body">
      <p>
        It looks as if duplicates exist for this lead.{' '}
        <a href="javascript:void(0);">View Duplicates.</a>
      </p>
    </div>
  </div>
);

export const ScopedNotiSuccess = props => (
  <div
    className={classNames(
      'slds-scoped-notification slds-media slds-media_center slds-theme_success'
    )}
    role="status"
  >
    <div className="slds-media__figure">
      <UtilityIcon
        className="slds-icon_small"
        assistiveText="success"
        symbol="success"
      />
    </div>
    <div className="slds-media__body">
      <p>
        It looks as if duplicates exist for this lead.{' '}
        <a href="javascript:void(0);">View Duplicates.</a>
      </p>
    </div>
  </div>
);

export const ScopedNotiWarning = props => (
  <div
    className="slds-scoped-notification slds-media slds-media_center slds-theme_warning"
    role="status"
  >
    <div className="slds-media__figure">
      <UtilityIcon
        className="slds-icon_small"
        assistiveText="warning"
        symbol="warning"
      />
    </div>
    <div className="slds-media__body">
      <p>
        It looks as if duplicates exist for this lead.{' '}
        <a href="javascript:void(0);">View Duplicates.</a>
      </p>
    </div>
  </div>
);

export const ScopedNotiError = props => (
  <div
    className="slds-scoped-notification slds-media slds-media_center slds-theme_error"
    role="status"
  >
    <div className="slds-media__figure">
      <UtilityIcon
        className="slds-icon_small"
        assistiveText="error"
        symbol="error"
      />
    </div>
    <div className="slds-media__body">
      <p>
        It looks as if duplicates exist for this lead.{' '}
        <a href="javascript:void(0);">View Duplicates.</a>
      </p>
    </div>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <ScopedNotiInfo iconClassName="slds-icon-text-default" />;

export let examples = [
  {
    id: 'light-theme',
    label: 'Informational with Light Theme',
    element: (
      <ScopedNotiInfo
        className="slds-scoped-notification_light"
        iconClassName="slds-icon-text-default"
      />
    )
  },
  {
    id: 'dark-theme',
    label: 'Informational with Dark theme',
    element: <ScopedNotiInfo className="slds-scoped-notification_dark" />
  }
];

export let states = [
  {
    id: 'info',
    label: 'Informational',
    element: (
      <ScopedNotiInfo
        className="slds-scoped-notification_light"
        iconClassName="slds-icon-text-default"
      />
    )
  },
  {
    id: 'success',
    label: 'Success',
    element: <ScopedNotiSuccess />
  },
  {
    id: 'warning',
    label: 'Warning',
    element: <ScopedNotiWarning />
  },
  {
    id: 'error',
    label: 'Error',
    element: <ScopedNotiError />
  }
];
