/* eslint-env jest */
import React from 'react';

import { BaseTree } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('tree', () => {
  it('renders a base Tree with metatext', () =>
    matchesMarkupAndStyle(<BaseTree hasMetatext />));
});
