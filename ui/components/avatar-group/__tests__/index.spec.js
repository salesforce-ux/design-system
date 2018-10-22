/* eslint-env jest */
import React from 'react';
import {
  AvatarGroup,
  AvatarGroupContent,
  AvatarGrouped,
  AvatarImage,
  AvatarGroupedIcon,
  AvatarGroupedUserInitials
} from '../';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

it('renders a default avatar group', () =>
  matchesMarkup(
    <AvatarGroup>
      <AvatarGroupContent type="image" />
    </AvatarGroup>
  ));

it('renders a large avatar group with image and icon', () =>
  matchesMarkup(
    <AvatarGroup size="large">
      <AvatarGrouped isPrimary>
        <AvatarImage />
      </AvatarGrouped>
      <AvatarGrouped>
        <AvatarGroupedIcon />
      </AvatarGrouped>
    </AvatarGroup>
  ));

it('renders a small avatar group with icon and initials', () =>
  matchesMarkup(
    <AvatarGroup size="small">
      <AvatarGrouped isPrimary>
        <AvatarGroupedIcon />
      </AvatarGrouped>
      <AvatarGrouped>
        <AvatarGroupedUserInitials />
      </AvatarGrouped>
    </AvatarGroup>
  ));

it('renders an x-small avatar group with initials and icon', () =>
  matchesMarkup(
    <AvatarGroup size="x-small">
      <AvatarGrouped isPrimary>
        <AvatarGroupedUserInitials />
      </AvatarGrouped>
      <AvatarGrouped>
        <AvatarImage />
      </AvatarGrouped>
    </AvatarGroup>
  ));

it('renders an avatar group with inversed user initials', () =>
  matchesMarkup(
    <AvatarGroup>
      <AvatarGroupContent type="user-initials" isInverse />
    </AvatarGroup>
  ));
