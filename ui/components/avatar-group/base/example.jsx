// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  AvatarGroup,
  AvatarGroupContent,
  AvatarGrouped,
  AvatarImage,
  AvatarGroupedIcon,
  AvatarGroupedUserInitials
} from '../';

export const ContextInversed = props => (
  <div
    className="demo-only"
    style={{ padding: '0.5rem', background: '#16325c' }}
  >
    {props.children}
  </div>
);

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <AvatarGroup>
        <AvatarGroupContent type="image" />
      </AvatarGroup>
    )
  }
];

export const examples = [
  {
    id: 'with-icons',
    label: 'With icons',
    element: (
      <AvatarGroup>
        <AvatarGroupContent type="icon" />
      </AvatarGroup>
    )
  },
  {
    id: 'with-user-initials',
    label: 'With initials',
    element: (
      <AvatarGroup>
        <AvatarGroupContent type="user-initials" />
      </AvatarGroup>
    )
  },
  {
    id: 'with-user-initials-inversed',
    label: 'With initials inversed',
    demoStyles: 'padding: 0.5rem; background: #16325c',
    storybookStyles: true,
    element: (
      <AvatarGroup>
        <AvatarGroupContent type="user-initials" isInverse />
      </AvatarGroup>
    )
  },
  {
    id: 'with-image-and-icon',
    label: 'With image and icon',
    element: (
      <AvatarGroup>
        <AvatarGrouped isPrimary>
          <AvatarImage />
        </AvatarGrouped>
        <AvatarGrouped>
          <AvatarGroupedIcon />
        </AvatarGrouped>
      </AvatarGroup>
    )
  },
  {
    id: 'with-icon-and-user-initials',
    label: 'With icon and user initials',
    element: (
      <AvatarGroup>
        <AvatarGrouped isPrimary>
          <AvatarGroupedIcon />
        </AvatarGrouped>
        <AvatarGrouped>
          <AvatarGroupedUserInitials />
        </AvatarGrouped>
      </AvatarGroup>
    )
  },
  {
    id: 'with-user-initials-and-image',
    label: 'With user initials and image',
    element: (
      <AvatarGroup>
        <AvatarGrouped isPrimary>
          <AvatarGroupedUserInitials />
        </AvatarGrouped>
        <AvatarGrouped>
          <AvatarImage />
        </AvatarGrouped>
      </AvatarGroup>
    )
  },
  {
    id: 'x-small-image',
    label: 'X-Small',
    element: (
      <AvatarGroup size="x-small">
        <AvatarGroupContent type="image" />
      </AvatarGroup>
    )
  },
  {
    id: 'small-image',
    label: 'Small',
    element: (
      <AvatarGroup size="small">
        <AvatarGroupContent type="image" />
      </AvatarGroup>
    )
  },
  {
    id: 'medium-image',
    label: 'Medium',
    element: (
      <AvatarGroup size="medium">
        <AvatarGroupContent type="image" />
      </AvatarGroup>
    )
  },
  {
    id: 'large-image',
    label: 'Large',
    element: (
      <AvatarGroup size="large">
        <AvatarGroupContent type="image" />
      </AvatarGroup>
    )
  },
  {
    id: 'x-small-icon',
    label: 'X-Small With icon',
    element: (
      <AvatarGroup size="x-small">
        <AvatarGroupContent type="icon" />
      </AvatarGroup>
    )
  },
  {
    id: 'small-icon',
    label: 'Small With icon',
    element: (
      <AvatarGroup size="small">
        <AvatarGroupContent type="icon" />
      </AvatarGroup>
    )
  },
  {
    id: 'medium-icon',
    label: 'Medium With icon',
    element: (
      <AvatarGroup size="medium">
        <AvatarGroupContent type="icon" />
      </AvatarGroup>
    )
  },
  {
    id: 'large-icon',
    label: 'Large With icon',
    element: (
      <AvatarGroup size="large">
        <AvatarGroupContent type="icon" />
      </AvatarGroup>
    )
  },
  {
    id: 'x-small-user-initials',
    label: 'X-Small With initials',
    element: (
      <AvatarGroup size="x-small">
        <AvatarGroupContent type="user-initials" />
      </AvatarGroup>
    )
  },
  {
    id: 'small-user-initials',
    label: 'Small With initials',
    element: (
      <AvatarGroup size="small">
        <AvatarGroupContent type="user-initials" />
      </AvatarGroup>
    )
  },
  {
    id: 'medium-user-initials',
    label: 'Medium With initials',
    element: (
      <AvatarGroup size="medium">
        <AvatarGroupContent type="user-initials" />
      </AvatarGroup>
    )
  },
  {
    id: 'large-user-initials',
    label: 'Large With initials',
    element: (
      <AvatarGroup size="large">
        <AvatarGroupContent type="user-initials" />
      </AvatarGroup>
    )
  }
];
