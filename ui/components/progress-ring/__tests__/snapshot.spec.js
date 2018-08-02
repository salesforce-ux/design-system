// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import ProgressRing from '../';

const { matchesMarkup } = createHelpers(__dirname);

describe('Progress Ring', () => {
  it('renders a partially drained ring', () =>
    matchesMarkup(<ProgressRing percent={20} />));
  it('renders a partially filled ring', () =>
    matchesMarkup(<ProgressRing percent={20} isFilling />));
  it('renders a partially filled ring with warning', () =>
    matchesMarkup(<ProgressRing percent={20} isFilling isWarning />));
  it('renders a partially draiend ring with error', () =>
    matchesMarkup(<ProgressRing percent={20} isExpired />));
  it('renders a complete ring', () =>
    matchesMarkup(<ProgressRing percent={100} isComplete />));
  it('renders an empty ring', () =>
    matchesMarkup(<ProgressRing percent={0} isFilling />));
  it('renders a filling active step ring', () =>
    matchesMarkup(<ProgressRing percent={20} isActiveStep isFilling />));
});
