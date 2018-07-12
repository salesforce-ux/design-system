/* eslint-env jest */
import React from 'react';

import {
  TreeGrid as DeprecatedTreeGrid,
  ExpandedRow as DeprecatedExpandedRow,
  DefaultRows as DeprecatedDefaultRows,
  DeepNestingRows as DeprecatedNestingRows
} from '../__deprecated__/grid_2_6_0';
import { BaseTree } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('tree', () => {
  it('renders a base Tree with metatext', () =>
    matchesMarkupAndStyle(<BaseTree hasMetatext />));
});

describe('treegrid', () => {});

describe('deprected treegrid', () => {
  it('renders a default DeprecatedTreeGrid', () =>
    matchesMarkupAndStyle(
      <DeprecatedTreeGrid>
        <DeprecatedDefaultRows />
      </DeprecatedTreeGrid>
    ));

  it('renders an expanded DeprecatedTreeGrid', () =>
    matchesMarkupAndStyle(
      <DeprecatedTreeGrid>
        <DeprecatedDefaultRows
          isExpanded
          additionalItem={<DeprecatedExpandedRow />}
        />
      </DeprecatedTreeGrid>
    ));

  it('renders a deeply nested DeprecatedTreeGrid', () =>
    matchesMarkupAndStyle(
      <DeprecatedTreeGrid>
        <DeprecatedNestingRows />
      </DeprecatedTreeGrid>
    ));
});
