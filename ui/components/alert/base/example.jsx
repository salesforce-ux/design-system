// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Alert from '../';
import { UtilityIcon } from '../../icons/base/example';
import EmptyLink from '../../../shared/empty-link/';
import Heading from '../../../shared/heading/';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Alert>
        <UtilityIcon
          containerClassName="slds-m-right_x-small"
          className="slds-icon_x-small"
          assistiveText={false}
          symbol="user"
        />
        <Heading level="2">
          Logged in as John Smith (johnsmith@acme.com).{' '}
          <EmptyLink>Log out</EmptyLink>
        </Heading>
      </Alert>
    )
  }
];

export let states = [
  {
    id: 'theme-info',
    label: 'Default (Theme Class  - Deprecated)',
    element: (
      <Alert isLegacy>
        <UtilityIcon
          containerClassName="slds-m-right_x-small"
          className="slds-icon_x-small"
          assistiveText={false}
          symbol="user"
        />
        <Heading level="2">
          Logged in as John Smith (johnsmith@acme.com).{' '}
          <EmptyLink>Log out</EmptyLink>
        </Heading>
      </Alert>
    )
  },
  {
    id: 'warning',
    label: 'Warning',
    element: (
      <Alert type="warning">
        <UtilityIcon
          containerClassName="slds-m-right_x-small"
          className="slds-icon_x-small"
          assistiveText={false}
          symbol="warning"
        />
        <Heading level="2">
          Your browser is outdated. Your Salesforce experience may be degraded.{' '}
          <EmptyLink>More Information</EmptyLink>
        </Heading>
      </Alert>
    )
  },
  {
    id: 'theme-warning',
    label: 'Warning (Theme Class  - Deprecated)',
    element: (
      <Alert type="warning" isLegacy>
        <UtilityIcon
          containerClassName="slds-m-right_x-small"
          className="slds-icon_x-small"
          assistiveText={false}
          symbol="warning"
        />
        <Heading level="2">
          Your browser is outdated. Your Salesforce experience may be degraded.{' '}
          <EmptyLink>More Information</EmptyLink>
        </Heading>
      </Alert>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <Alert type="error">
        <UtilityIcon
          containerClassName="slds-m-right_x-small"
          className="slds-icon_x-small"
          assistiveText={false}
          symbol="error"
        />
        <Heading level="2">
          Your browser is currently not supported. Your Salesforce may be
          degraded. <EmptyLink>More Information</EmptyLink>
        </Heading>
      </Alert>
    )
  },
  {
    id: 'theme-error',
    label: 'Error (Theme Class  - Deprecated)',
    element: (
      <Alert type="error" isLegacy>
        <UtilityIcon
          containerClassName="slds-m-right_x-small"
          className="slds-icon_x-small"
          assistiveText={false}
          symbol="error"
        />
        <Heading level="2">
          Your browser is currently not supported. Your Salesforce may be
          degraded. <EmptyLink>More Information</EmptyLink>
        </Heading>
      </Alert>
    )
  },
  {
    id: 'offline',
    label: 'Offline',
    element: (
      <Alert type="offline">
        <UtilityIcon
          containerClassName="slds-m-right_x-small"
          className="slds-icon_x-small"
          assistiveText={false}
          symbol="offline"
        />
        <Heading level="2">
          You are in offline mode. <EmptyLink>More Information</EmptyLink>
        </Heading>
      </Alert>
    )
  },
  {
    id: 'theme-offline',
    label: 'Offline (Theme Class  - Deprecated)',
    element: (
      <Alert type="offline" isLegacy>
        <UtilityIcon
          containerClassName="slds-m-right_x-small"
          className="slds-icon_x-small"
          assistiveText={false}
          symbol="offline"
        />
        <Heading level="2">
          You are in offline mode. <EmptyLink>More Information</EmptyLink>
        </Heading>
      </Alert>
    )
  }
];
