// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../base/example';

export default (
  <Avatar>
    <abbr
      className="slds-avatar__initials slds-icon-standard-account"
      title="company name"
    >
      Ac
    </abbr>
  </Avatar>
);

export let examples = [
  {
    id: 'linked-avatar-initials',
    label: 'Wrapped in a link',
    element: (
      <a href="javascript:void(0);">
        <Avatar>
          <abbr
            className="slds-avatar__initials slds-icon-standard-account"
            title="company name"
          >
            Ac
          </abbr>
        </Avatar>
      </a>
    )
  }
];
