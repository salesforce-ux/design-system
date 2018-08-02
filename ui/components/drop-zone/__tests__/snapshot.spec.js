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

const { matchesMarkup } = createHelpers(__dirname);

describe('Drop Zone Base', () => {
  it('renders the default drop zone', () => matchesMarkup(<DropZone />));
  it('renders drop zone when dragging', () =>
    matchesMarkup(<DropZone isDragging />));
  it('renders the insertion point', () =>
    matchesMarkup(<DropZoneInsertionPoint />));
  it('renders the container', () =>
    matchesMarkup(<DropZoneContainer hasActions />));
  it('renders container when hovered', () =>
    matchesMarkup(<DropZoneContainer isHovered />));
  it('renders container with no actions', () =>
    matchesMarkup(<DropZoneContainer />));
  it('renders the label', () =>
    matchesMarkup(<DropZoneLabel headerText="Content" />));
  it('renders the container label', () =>
    matchesMarkup(<DropZoneLabel isContainer headerText="Component Name" />));
});
