// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { StandardIcon } from 'ui/components/icons/standard/example';
import { Avatar } from 'ui/components/avatar/base/example';
import classNames from 'classnames';


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <Avatar>
    <StandardIcon />
  </Avatar>
);

export let states = [
  {
    id: 'avatar-square-icon',
    label: 'Square Icon Fallback',
    element:
      <Avatar className="slds-avatar--medium">
        <StandardIcon />
      </Avatar>
  },
  {
    id: 'avatar-circle-icon',
    label: 'Circle Icon Fallback',
    element:
      <Avatar className="slds-avatar--circle slds-avatar--medium">
        <StandardIcon symbol="user" />
      </Avatar>
  },
  {
    id: 'size-x-small',
    label: 'Size - X Small',
    element:
      <Avatar className="slds-avatar--x-small">
        <StandardIcon />
      </Avatar>
  },
  {
    id: 'size-small',
    label: 'Size - Small',
    element:
      <Avatar className="slds-avatar--small">
        <StandardIcon />
      </Avatar>
  },
  {
    id: 'size-medium',
    label: 'Size - Medium',
    element:
      <Avatar className="slds-avatar--medium">
        <StandardIcon />
      </Avatar>
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element:
      <Avatar className="slds-avatar--large">
        <StandardIcon />
      </Avatar>
  }
];
