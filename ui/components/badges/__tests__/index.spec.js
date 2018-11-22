/* eslint-env jest */
import React from 'react';
import { LightestBadge, InverseBadge, Badge, BadgeIcon } from '../';
import { UtilityIcon } from '../../icons/base/example';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('Badge colors', () => {
  it('renders a default badge', () =>
    matchesMarkup(<Badge>Lovely badge</Badge>));

  it('renders an inverse badge', () =>
    matchesMarkup(<InverseBadge>Lovely badge</InverseBadge>));

  it('renders badge', () =>
    matchesMarkup(<LightestBadge>Light</LightestBadge>));
});

describe('Badge with icons', () => {
  it('renders badge with left icon', () =>
    matchesMarkup(
      <LightestBadge>
        <BadgeIcon symbol="world" />
        Icon on the left
      </LightestBadge>
    ));

  it('renders badge with right icon', () =>
    matchesMarkup(
      <LightestBadge>
        Icon on the right
        <BadgeIcon symbol="world" />
      </LightestBadge>
    ));

  it('renders badge with icon only', () =>
    matchesMarkup(
      <LightestBadge>
        <BadgeIcon
          symbol="world"
          assistiveText="assistive text goes here, do it!"
        />
      </LightestBadge>
    ));

  it('renders deprecated badge with right icon', () =>
    matchesMarkup(
      <LightestBadge>
        Icon on the right
        <UtilityIcon
          containerClassName="slds-m-left_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="world"
        />
      </LightestBadge>
    ));

  it('renders deprecated badge with icon only', () =>
    matchesMarkup(
      <LightestBadge>
        <UtilityIcon
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText="assistive text goes here, do it!"
          symbol="world"
        />
      </LightestBadge>
    ));
});
