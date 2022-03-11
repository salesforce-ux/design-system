// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../base/example';
import { AvatarInitials } from '../';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Avatar>
        <AvatarInitials
          iconClassName="slds-icon-standard-account"
          title="company name"
          initials="Ac"
        />
      </Avatar>
    )
  }
];

export let examples = [
  {
    id: 'linked-avatar-initials',
    label: 'Wrapped in a link',
    element: (
      <a href="#" onClick={e => e.preventDefault()}>
        <Avatar>
          <AvatarInitials
            iconClassName="slds-icon-standard-account"
            title="company name"
            initials="Ac"
          />
        </Avatar>
      </a>
    )
  }
];
