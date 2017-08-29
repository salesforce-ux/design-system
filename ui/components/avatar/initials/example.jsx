// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Avatar } from '../base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

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

export let states = [
  {
    id: 'avatar-square-initials',
    label: 'Square Initials',
    element: (
      <Avatar className="slds-avatar_medium">
        <abbr
          className="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </Avatar>
    )
  },
  {
    id: 'avatar-circle-initials',
    label: 'Circle Initials',
    element: (
      <Avatar className="slds-avatar_circle slds-avatar_medium">
        <abbr
          className="slds-avatar__initials slds-icon-standard-user"
          title="person name"
        >
          AB
        </abbr>
      </Avatar>
    )
  },
  {
    id: 'size-x-small',
    label: 'Size - X Small',
    element: (
      <Avatar className="slds-avatar_x-small">
        <abbr
          className="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </Avatar>
    )
  },
  {
    id: 'size-small',
    label: 'Size - Small',
    element: (
      <Avatar className="slds-avatar_small">
        <abbr
          className="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </Avatar>
    )
  },
  {
    id: 'size-medium',
    label: 'Size - Medium',
    element: (
      <Avatar className="slds-avatar_medium">
        <abbr
          className="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </Avatar>
    )
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element: (
      <Avatar className="slds-avatar_large">
        <abbr
          className="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </Avatar>
    )
  }
];
