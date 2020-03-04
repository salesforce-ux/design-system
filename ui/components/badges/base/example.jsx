// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Badge, InverseBadge, LightestBadge, BadgeIcon } from '../';

export default <Badge>Badge Label</Badge>;

export let examples = [
  {
    id: 'inverse',
    label: 'Inverse',
    element: <InverseBadge>Inverse badge</InverseBadge>
  },
  {
    id: 'with-left-icon',
    label: 'With left icon',
    element: (
      <Badge>
        <BadgeIcon symbol="moneybag" />
        423 Credits Available
      </Badge>
    )
  },
  {
    id: 'with-right-icon',
    label: 'With right icon',
    element: (
      <Badge>
        423 Credits Available
        <BadgeIcon symbol="moneybag" align="right" />
      </Badge>
    )
  },
  {
    id: 'light-with-left-icon',
    label: 'Light with left icon',
    element: (
      <LightestBadge>
        <BadgeIcon symbol="moneybag" />
        423 Credits Available
      </LightestBadge>
    )
  },
  {
    id: 'light-with-right-icon',
    label: 'Light with right icon',
    element: (
      <LightestBadge>
        423 Credits Available
        <BadgeIcon symbol="moneybag" align="right" />
      </LightestBadge>
    )
  },
  {
    id: 'inverse-with-left-icon',
    label: 'Inverse with left icon',
    element: (
      <InverseBadge>
        <BadgeIcon symbol="moneybag" isInverse />
        423 Credits Available
      </InverseBadge>
    )
  },
  {
    id: 'inverse-with-right-icon',
    label: 'Inverse with right icon',
    element: (
      <InverseBadge>
        423 Credits Available
        <BadgeIcon symbol="moneybag" align="right" isInverse />
      </InverseBadge>
    )
  },
  {
    id: 'badge-with-child',
    label: 'With Child Element',
    element: (
      <Badge>
        Component In: <em>Lightning</em>
      </Badge>
    )
  }
];

export let states = [
  {
    id: 'success',
    label: 'Success',
    element: <Badge isSuccess>Success badge</Badge>
  },
  {
    id: 'warning',
    label: 'Warning',
    element: <Badge isWarning>Warning badge</Badge>
  },
  {
    id: 'error',
    label: 'Error',
    element: <Badge isError>Error badge</Badge>
  }
];
