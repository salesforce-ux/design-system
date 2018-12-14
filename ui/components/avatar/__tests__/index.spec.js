/* eslint-env jest */
import React from 'react';
import { Avatar } from '../base/example';
import { StandardIcon } from '../../icons/standard/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a default avatar launcher', () =>
  matchesMarkup(
    <Avatar>
      <img
        alt="Person name"
        src="/assets/images/avatar2.jpg"
        title="Person name"
      />
    </Avatar>
  ));

it('renders a avatar fallback with user initials', () =>
  matchesMarkup(
    <Avatar className="slds-avatar_circle">
      <abbr
        className="slds-avatar__initials slds-icon-standard-user"
        title="Person name"
      >
        AB
      </abbr>
    </Avatar>
  ));

it('renders an inversed avatar fallback with user initials', () =>
  matchesMarkup(
    <Avatar className="slds-avatar_circle">
      <abbr
        className="slds-avatar__initials slds-avatar__initials_inverse"
        title="Person name"
      >
        AB
      </abbr>
    </Avatar>
  ));

it('renders a avatar fallback with user icon', () =>
  matchesMarkup(
    <Avatar className="slds-avatar_circle">
      <StandardIcon symbol="user" />
    </Avatar>
  ));

it('renders a avatar fallback with entity initials', () =>
  matchesMarkup(
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
  matchesMarkup(
    <Avatar>
      <StandardIcon />
    </Avatar>
  ));
