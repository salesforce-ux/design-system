/* eslint-env jest */
import React from 'react';

import { LightBadge, InverseBadge, Badge } from '../';

import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default badge', () =>
  matchesMarkupAndStyle(<Badge>Lovely badge</Badge>));

it('renders an inverse badge', () =>
  matchesMarkupAndStyle(<InverseBadge>Lovely badge</InverseBadge>));

it('renders an a light badge', () =>
  matchesMarkupAndStyle(<LightBadge>Light</LightBadge>));
