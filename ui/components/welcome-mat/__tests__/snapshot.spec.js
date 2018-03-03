// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import WelcomeMat from '../';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Welcome Mat Snapshots', () => {
  it('renders a welcome mat', () => matchesMarkupAndStyle(<WelcomeMat />));

  it('renders a welcome mat with completed steps', () =>
    matchesMarkupAndStyle(<WelcomeMat complete={4} />));

  it('renders a trailhead welcome mat', () =>
    matchesMarkupAndStyle(<WelcomeMat trailhead />));

  it('renders a completed trailhead with correct UI', () =>
    matchesMarkupAndStyle(<WelcomeMat trailhead complete={5} />));
});
