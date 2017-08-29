// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { StandardIcon } from '../../icons/standard/example';
import { Avatar } from '../base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Avatar>
    <StandardIcon />
  </Avatar>
);

export let states = [
  {
    id: 'avatar-square-icon',
    label: 'Square Icon Fallback',
    element: (
      <Avatar className="slds-avatar_medium">
        <StandardIcon />
      </Avatar>
    )
  },
  {
    id: 'avatar-circle-icon',
    label: 'Circle Icon Fallback',
    element: (
      <Avatar className="slds-avatar_circle slds-avatar_medium">
        <StandardIcon symbol="user" />
      </Avatar>
    )
  },
  {
    id: 'size-x-small',
    label: 'Size - X Small',
    element: (
      <Avatar className="slds-avatar_x-small">
        <StandardIcon />
      </Avatar>
    )
  },
  {
    id: 'size-small',
    label: 'Size - Small',
    element: (
      <Avatar className="slds-avatar_small">
        <StandardIcon />
      </Avatar>
    )
  },
  {
    id: 'size-medium',
    label: 'Size - Medium',
    element: (
      <Avatar className="slds-avatar_medium">
        <StandardIcon />
      </Avatar>
    )
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element: (
      <Avatar className="slds-avatar_large">
        <StandardIcon />
      </Avatar>
    )
  }
];
