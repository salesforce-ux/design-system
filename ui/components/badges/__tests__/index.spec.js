/* eslint-env jest */
import React from 'react';
import { LightBadge, InverseBadge, Badge } from '../';
import { UtilityIcon } from '../../icons/base/example';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

it('renders a default badge', () => matchesMarkup(<Badge>Lovely badge</Badge>));

it('renders an inverse badge', () =>
  matchesMarkup(<InverseBadge>Lovely badge</InverseBadge>));

describe('renders a light badge', () => {
  it('renders badge', () => matchesMarkup(<LightBadge>Light</LightBadge>));

  it('renders badge with left icon', () =>
    matchesMarkup(
      <LightBadge>
        <UtilityIcon
          containerClassName="slds-m-right_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="world"
        />
        Icon on the left
      </LightBadge>
    ));

  it('renders badge with right icon', () =>
    matchesMarkup(
      <LightBadge>
        <UtilityIcon
          containerClassName="slds-m-right_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="world"
        />
        Icon on the right
      </LightBadge>
    ));

  it('renders badge with icon only', () =>
    matchesMarkup(
      <LightBadge>
        <UtilityIcon
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText="assistive text goes here, do it!"
          symbol="world"
        />
      </LightBadge>
    ));
});
