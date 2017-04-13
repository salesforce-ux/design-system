// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { StandardIcon } from '../../icons/standard/example';
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

export let examples = [
  {
    id: 'fallback-user-initials',
    label: 'Fallbak - User initials',
    element:
      <Avatar className="slds-avatar--circle">
        <abbr className="slds-avatar__initials slds-icon-standard-user" title="person name">AB</abbr>
      </Avatar>
  },
  {
    id: 'fallback-user-icon',
    label: 'Fallbak - User icon',
    element:
      <Avatar className="slds-avatar--circle">
        <StandardIcon symbol="user" />
      </Avatar>
  },
  {
    id: 'fallback-entity-initials',
    label: 'Fallback - Entity Initials',
    element:
      <Avatar>
        <abbr className="slds-avatar__initials slds-icon-standard-account" title="company name">Ac</abbr>
      </Avatar>
  },
  {
    id: 'fallback-entity-icon',
    label: 'Fallback - Entity Icon',
    element:
      <Avatar>
        <StandardIcon />
      </Avatar>
  },
];
