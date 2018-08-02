// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { ProgressBar } from '..';
import { ProgressBarDescriptive } from '../base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Base Progress Bar', () => {
  it('renders a base progress bar', () =>
    matchesMarkup(<ProgressBar value="25" />));

  it('renders a progress bar at 0 percent', () =>
    matchesMarkup(<ProgressBar value="0" />));

  it('renders a progress bar at 100 percent', () =>
    matchesMarkup(<ProgressBar value="100" />));

  it('renders a progress bar with rounded ends', () =>
    matchesMarkup(<ProgressBar value="100" hasCircularEnds />));

  it('renders a descriptive progress bar', () =>
    matchesMarkup(
      <ProgressBarDescriptive label="Descriptive Progress" value="75" />
    ));
});

describe('Vertical Progress Bar', () => {
  it('renders a vertical progress bar', () =>
    matchesMarkup(<ProgressBar value="25" isVertical />));

  it('renders a vertical progress bar at 0 percent', () =>
    matchesMarkup(<ProgressBar value="0" isVertical />));

  it('renders a vertical progress bar at 100 percent', () =>
    matchesMarkup(<ProgressBar value="100" isVertical />));

  it('renders a vertical progress bar with rounded ends', () =>
    matchesMarkup(<ProgressBar value="100" isVertical hasCircularEnds />));
});
