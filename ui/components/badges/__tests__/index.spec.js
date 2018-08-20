/* eslint-env jest */
import React from 'react';
import { Badge, InverseBadge, LightestBadge } from '../';
import { UtilityIcon } from '../../icons/base/example';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default badge', () =>
  matchesMarkupAndStyle(<Badge>Lovely badge</Badge>));

it('renders an inverse badge', () =>
  matchesMarkupAndStyle(<InverseBadge>Lovely badge</InverseBadge>));

describe('renders a light badge', () => {
  it('renders badge', () =>
    matchesMarkupAndStyle(<LightestBadge>Light</LightestBadge>));

  it('renders badge with left icon', () =>
    matchesMarkupAndStyle(
      <LightestBadge>
        <UtilityIcon
          containerClassName="slds-m-right_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="world"
        />
        Icon on the left
      </LightestBadge>
    ));

  it('renders badge with right icon', () =>
    matchesMarkupAndStyle(
      <LightestBadge>
        <UtilityIcon
          containerClassName="slds-m-right_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="world"
        />
        Icon on the right
      </LightestBadge>
    ));

  xit('renders badge with icon only', () =>
    matchesMarkupAndStyle(
      <LightestBadge>
        <UtilityIcon
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText="assistive text goes here, do it!"
          symbol="world"
        />
      </LightestBadge>
    ));
});
