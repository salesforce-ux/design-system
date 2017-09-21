/* eslint-env jest */
import React from 'react';

import {
  TreeGrid,
  ExpandedRow,
  DefaultRows,
  DeepNestingRows
} from '../grid/example';

import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default Treegrid', () =>
  matchesMarkupAndStyle(
    <TreeGrid>
      <DefaultRows />
    </TreeGrid>
  ));

it('renders an expanded Treegrid', () =>
  matchesMarkupAndStyle(
    <TreeGrid>
      <DefaultRows isExpanded additionalItem={<ExpandedRow />} />
    </TreeGrid>
  ));

it('renders a deeply nested Treegrid', () =>
  matchesMarkupAndStyle(
    <TreeGrid>
      <DeepNestingRows />
    </TreeGrid>
  ));
