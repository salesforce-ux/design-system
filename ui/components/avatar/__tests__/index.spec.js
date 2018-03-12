/* eslint-env jest */
import React from 'react';
import { Avatar } from '../base/example';
import { StandardIcon } from '../../icons/standard/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default avatar launcher', () =>
  matchesMarkupAndStyle(
    <Avatar>
      <img
        alt="Person name"
        src="/assets/images/avatar2.jpg"
        title="User avatar"
      />
    </Avatar>
  ));

it('renders a avatar fallback with user initials', () =>
  matchesMarkupAndStyle(
    <Avatar className="slds-avatar_circle">
      <abbr
        className="slds-avatar__initials slds-icon-standard-user"
        title="person name"
      >
        AB
      </abbr>
    </Avatar>
  ));

it('renders an inversed avatar fallback with user initials', () =>
  matchesMarkupAndStyle(
    <Avatar className="slds-avatar_circle">
      <abbr
        className="slds-avatar__initials slds-avatar__initials_inverse"
        title="person name"
      >
        AB
      </abbr>
    </Avatar>
  ));

it('renders a avatar fallback with user icon', () =>
  matchesMarkupAndStyle(
    <Avatar className="slds-avatar_circle">
      <StandardIcon symbol="user" />
    </Avatar>
  ));

it('renders a avatar fallback with entity initials', () =>
  matchesMarkupAndStyle(
    <Avatar>
      <abbr
        className="slds-avatar__initials slds-icon-standard-account"
        title="company name"
      >
        Ac
      </abbr>
    </Avatar>
  ));

it('renders a avatar fallback with entity icon', () =>
  matchesMarkupAndStyle(
    <Avatar>
      <StandardIcon />
    </Avatar>
  ));
