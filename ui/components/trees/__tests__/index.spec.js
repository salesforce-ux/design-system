/* eslint-env jest */
import React from 'react';

import {
  TreeGrid,
  ExpandedRow,
  DefaultRows,
  DeepNestingRows
} from '../grid/example';
import { BaseTree } from '../base/example';

import createHelpers from '../../../../jest.helpers';

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

it('renders a base Tree with metatext', () =>
  matchesMarkupAndStyle(<BaseTree hasMetatext />));

it('renders a deeply nested Treegrid', () =>
  matchesMarkupAndStyle(
    <TreeGrid>
      <DeepNestingRows />
    </TreeGrid>
  ));
