// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Avatar from '../';

const defaultComponent = <Avatar type="image" title="person name" />;

export default defaultComponent;

export let examples = [
  {
    id: 'default',
    label: 'Default',
    element: defaultComponent
  },
  {
    id: 'circle',
    label: 'Circle',
    element: (
      <Avatar shape="circle" type="image" imgType="2" title="person name" />
    )
  },
  {
    id: 'profile-icon',
    label: 'Profile Avatar as Background Image',
    element: (
      <Avatar
        type="background-image"
        style={{
          '--lwc-c-avatar-background-image':
            'url(/assets/images/profile_avatar_200.png)'
        }}
        title="person name"
      />
    )
  },
  {
    id: 'group-icon',
    label: 'Group Avatar as Background Image',
    element: (
      <Avatar
        type="background-image"
        style={{
          '--lwc-c-avatar-background-image':
            'url(/assets/images/group_avatar_200.png)'
        }}
        title="group name"
      />
    )
  },
  {
    id: 'fallback-user-initials',
    label: 'Fallback - User initials',
    element: (
      <Avatar
        shape="circle"
        type="initials"
        initials="WW"
        title="person name"
      />
    )
  },
  {
    id: 'fallback-user-icon',
    label: 'Fallback - User icon',
    element: (
      <Avatar
        shape="circle"
        type="icon"
        title="person name"
        iconSprite="standard"
        iconSymbol="user"
      />
    )
  },
  {
    id: 'fallback-entity-initials',
    label: 'Fallback - Entity Initials',
    element: (
      <Avatar
        type="initials"
        title="Company name"
        initials="Ac"
        style={{
          '--lwc-c-avatar-color-background': '#7f8de1'
        }}
      />
    )
  },
  {
    id: 'fallback-entity-icon',
    label: 'Fallback - Entity Icon',
    element: (
      <Avatar
        type="icon"
        title="company name"
        iconSprite="standard"
        iconSymbol="opportunity"
      />
    )
  },
  {
    id: 'fallback-user-initials-inverse',
    label: 'Fallback - User Initials Inversed',
    element: (
      <Avatar
        shape="circle"
        type="initials"
        initials="WW"
        title="person name"
        isInverse
      />
    )
  },
  {
    id: 'x-small-image',
    label: 'X-Small Image',
    element: (
      <Avatar
        shape="circle"
        type="image"
        imgType="2"
        title="person name"
        size="x-small"
      />
    )
  },
  {
    id: 'small-image',
    label: 'Small Image',
    element: (
      <Avatar
        shape="circle"
        type="image"
        imgType="2"
        title="person name"
        size="small"
      />
    )
  },
  {
    id: 'medium-image',
    label: 'Medium Image',
    element: (
      <Avatar
        shape="circle"
        type="image"
        imgType="2"
        title="person name"
        size="medium"
      />
    )
  },
  {
    id: 'large-image',
    label: 'Large Image',
    element: (
      <Avatar
        shape="circle"
        type="image"
        imgType="2"
        title="person name"
        size="large"
      />
    )
  },
  {
    id: 'x-small-icon',
    label: 'X-Small Icon',
    element: (
      <Avatar
        shape="circle"
        type="icon"
        imgType="2"
        size="x-small"
        iconSprite="standard"
        iconSymbol="user"
        title="person name"
      />
    )
  },
  {
    id: 'small-icon',
    label: 'Small Icon',
    element: (
      <Avatar
        shape="circle"
        type="icon"
        imgType="2"
        size="small"
        iconSprite="standard"
        iconSymbol="user"
        title="person name"
      />
    )
  },
  {
    id: 'medium-icon',
    label: 'Medium Icon',
    element: (
      <Avatar
        shape="circle"
        type="icon"
        imgType="2"
        size="medium"
        iconSprite="standard"
        iconSymbol="user"
        title="person name"
      />
    )
  },
  {
    id: 'large-icon',
    label: 'Large Icon',
    element: (
      <Avatar
        shape="circle"
        type="icon"
        imgType="2"
        size="large"
        iconSprite="standard"
        iconSymbol="user"
        title="person name"
      />
    )
  },
  {
    id: 'x-small-initials',
    label: 'X-Small Initials',
    element: (
      <Avatar
        shape="circle"
        type="initials"
        size="x-small"
        initials="WW"
        title="person name"
      />
    )
  },
  {
    id: 'small-initials',
    label: 'Small Initials',
    element: (
      <Avatar
        shape="circle"
        type="initials"
        size="small"
        initials="WW"
        title="person name"
      />
    )
  },
  {
    id: 'medium-initials',
    label: 'Medium Initials',
    element: (
      <Avatar
        shape="circle"
        type="initials"
        size="medium"
        initials="WW"
        title="person name"
      />
    )
  },
  {
    id: 'large-initials',
    label: 'Large Initials',
    element: (
      <Avatar
        shape="circle"
        type="initials"
        size="large"
        initials="WW"
        title="person name"
      />
    )
  },
  {
    id: 'linked-avatar',
    label: 'Wrapped in a link',
    element: (
      <a href="javascript:void(0);">
        <Avatar type="image" title="person name" />
      </a>
    )
  }
];
