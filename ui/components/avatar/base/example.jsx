// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar, AvatarIcon, AvatarInitials } from '../';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export { Avatar };

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Avatar>
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="Person name"
        />
      </Avatar>
    )
  }
];

export let examples = [
  {
    id: 'circle',
    label: 'Circle',
    element: (
      <Avatar className="slds-avatar_circle">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="Person name"
        />
      </Avatar>
    )
  },
  {
    id: 'profile-icon',
    label: 'Profile Avatar Image',
    element: (
      <Avatar className="slds-avatar_profile-image-large">
        <span className="slds-assistive-text">Person name</span>
      </Avatar>
    )
  },
  {
    id: 'group-icon',
    label: 'Group Avatar Image',
    element: (
      <Avatar className="slds-avatar_group-image-large">
        <span className="slds-assistive-text">Group name</span>
      </Avatar>
    )
  },
  {
    id: 'fallback-user-initials',
    label: 'Fallback - User initials',
    element: (
      <Avatar className="slds-avatar_circle">
        <AvatarInitials
          iconClassName="slds-icon-standard-user"
          title="person name"
          initials="AB"
        />
      </Avatar>
    )
  },
  {
    id: 'fallback-user-icon',
    label: 'Fallback - User icon',
    element: (
      <Avatar className="slds-avatar_circle">
        <AvatarIcon symbol="user" />
      </Avatar>
    )
  },
  {
    id: 'fallback-entity-initials',
    label: 'Fallback - Entity Initials',
    element: (
      <Avatar>
        <AvatarInitials
          iconClassName="slds-icon-standard-account"
          title="Company name"
          initials="Ac"
        />
      </Avatar>
    )
  },
  {
    id: 'fallback-entity-icon',
    label: 'Fallback - Entity Icon',
    element: (
      <Avatar>
        <AvatarIcon />
      </Avatar>
    )
  },
  {
    id: 'fallback-user-initials-inverse',
    label: 'Fallback - User Initials Inversed',
    element: (
      <Avatar className="slds-avatar_circle">
        <AvatarInitials title="Person name" initials="AB" isInverse />
      </Avatar>
    )
  },
  {
    id: 'x-small-image',
    label: 'X-Small Image',
    element: (
      <Avatar className="slds-avatar_circle slds-avatar_x-small">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="Person name"
        />
      </Avatar>
    )
  },
  {
    id: 'small-image',
    label: 'Small Image',
    element: (
      <Avatar className="slds-avatar_circle slds-avatar_small">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="Person name"
        />
      </Avatar>
    )
  },
  {
    id: 'medium-image',
    label: 'Medium Image',
    element: (
      <Avatar className="slds-avatar_circle slds-avatar_medium">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="Person name"
        />
      </Avatar>
    )
  },
  {
    id: 'large-image',
    label: 'Large Image',
    element: (
      <Avatar className="slds-avatar_circle slds-avatar_large">
        <img
          alt="Person name"
          src="/assets/images/avatar2.jpg"
          title="Person name"
        />
      </Avatar>
    )
  },

  {
    id: 'linked-avatar',
    label: 'Wrapped in a link',
    element: (
      <a href="#" onClick={e => e.preventDefault()}>
        <Avatar>
          <img
            alt="Person name"
            src="/assets/images/avatar2.jpg"
            title="User avatar"
          />
        </Avatar>
      </a>
    )
  }
];
