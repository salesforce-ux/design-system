// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { StandardIcon } from 'ui/components/icons/flavors/standard/index.react.example';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let Avatar = props =>
  <span className={classNames('slds-avatar', props.className)}>
    { props.children }
  </span>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <Avatar>
    <img
      alt="Person name"
      src="/assets/images/avatar2.jpg"
      title="User avatar"
    />
  </Avatar>
);

export let states = [
  {
    id: 'avatar-square',
    label: 'Square',
    element:
      <Avatar className="slds-avatar--medium">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'avatar-circle',
    label: 'Circle',
    element:
      <Avatar className="slds-avatar--circle slds-avatar--medium">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'size-x-small',
    label: 'Size - X Small',
    element:
      <Avatar className="slds-avatar--x-small">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'size-small',
    label: 'Size - Small',
    element:
      <Avatar className="slds-avatar--small">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'size-medium',
    label: 'Size - Medium',
    element:
      <Avatar className="slds-avatar--medium">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element:
      <Avatar className="slds-avatar--large">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="User avatar"
        />
      </Avatar>
  }
];
