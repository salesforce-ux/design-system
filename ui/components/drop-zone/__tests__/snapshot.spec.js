// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  DropZone,
  DropZoneInsertionPoint,
  DropZoneContainer,
  DropZoneLabel
} from '../base/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Drop Zone Base', () => {
  it('renders the default drop zone', () =>
    matchesMarkupAndStyle(<DropZone />));
  it('renders drop zone when dragging', () =>
    matchesMarkupAndStyle(<DropZone isDragging />));
  it('renders the insertion point', () =>
    matchesMarkupAndStyle(<DropZoneInsertionPoint />));
  it('renders the container', () =>
    matchesMarkupAndStyle(<DropZoneContainer hasActions />));
  it('renders container when hovered', () =>
    matchesMarkupAndStyle(<DropZoneContainer isHovered />));
  it('renders container with no actions', () =>
    matchesMarkupAndStyle(<DropZoneContainer />));
  it('renders the label', () =>
    matchesMarkupAndStyle(<DropZoneLabel headerText="Content" />));
  it('renders the container label', () =>
    matchesMarkupAndStyle(
      <DropZoneLabel isContainer headerText="Component Name" />
    ));
});
