// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import { UtilityIcon } from '../../icons/base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Alert = props => {
  const {
    className,
    type,
    children,
    ...rest
  } = props;

  return (
    <div
      className={classNames(
        'slds-notify slds-notify--alert slds-theme--alert-texture',
        className,
        type ? 'slds-theme--' + type : null
      )}
      role="alert"
    >
      <span className="slds-assistive-text">{ type || 'info' }</span>
      { children }
      <ButtonIcon
        className="slds-notify__close slds-button--icon-inverse"
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

export default (
  <Alert type="info">
    <UtilityIcon
      containerClassName="slds-m-right--x-small"
      className="slds-icon--x-small"
      assistiveText={false}
      symbol="user"
    />
    <h2>Logged in as John Smith (johnsmith@acme.com). <a href="javascript:void(0);">Log out</a></h2>
  </Alert>
);

export let states = [
  {
    id: 'warning',
    label: 'Warning',
    element:
      <Alert type="warning">
        <UtilityIcon
          containerClassName="slds-m-right--x-small"
          className="slds-icon--x-small"
          assistiveText={false}
          symbol="warning"
        />
        <h2>Your browser is outdated. Your Salesforce experience may be degraded. <a href="javascript:void(0);">More Information</a></h2>
      </Alert>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <Alert type="error">
        <UtilityIcon
          containerClassName="slds-m-right--x-small"
          className="slds-icon--x-small"
          assistiveText={false}
          symbol="ban"
        />
        <h2>Your browser is currently not supported. Your Salesforce may be degraded. <a href="javascript:void(0);">More Information</a></h2>
      </Alert>
  },
  {
    id: 'offline',
    label: 'Offline',
    element:
      <Alert type="offline">
        <UtilityIcon
          containerClassName="slds-m-right--x-small"
          className="slds-icon--x-small"
          assistiveText={false}
          symbol="offline"
        />
        <h2>You are in offline mode. <a href="javascript:void(0);">More Information</a></h2>
      </Alert>
  }
];
