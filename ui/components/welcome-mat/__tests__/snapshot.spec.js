// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import WelcomeMat from '../';
import WelcomeMatContent from '../WelcomeMatContent';
import WelcomeMatContentTrailhead from '../WelcomeMatContentTrailhead';
import WelcomeMatTile from '../WelcomeMatTile';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Welcome Mat Snapshots', () => {
  it('renders a welcome mat', () => matchesMarkupAndStyle(<WelcomeMat />));
});

describe('Welcome Mat Content', () => {
  it('renders a default welcome mat content', () =>
    matchesMarkupAndStyle(<WelcomeMatContent />));

  it('renders a welcome mat content with 2 complete units', () =>
    matchesMarkupAndStyle(<WelcomeMatContent complete={2} />));

  it('renders a welcome mat content with 3 total units', () =>
    matchesMarkupAndStyle(<WelcomeMatContent total={3} />));

  it('renders a welcome mat content with a label and description', () =>
    matchesMarkupAndStyle(
      <WelcomeMatContent
        labelId="welcome-mat-test-1"
        description={<p>This is a test welcome mat</p>}
      />
    ));
});

describe('Welcome Mat Trailhead Content', () => {
  it('renders a default trailhead content', () =>
    matchesMarkupAndStyle(<WelcomeMatContentTrailhead />));

  it('renders a trailhead content with 2 complete units', () =>
    matchesMarkupAndStyle(<WelcomeMatContentTrailhead complete={2} />));

  it('renders a trailhead content with 3 total units', () =>
    matchesMarkupAndStyle(<WelcomeMatContentTrailhead total={3} />));

  it('renders a trailhead content with a label id', () =>
    matchesMarkupAndStyle(
      <WelcomeMatContentTrailhead labelId="welcome-mat-test-1" />
    ));
});

describe('Welcome Mat Tiles', () => {
  it('renders a default tile', () => matchesMarkupAndStyle(<WelcomeMatTile />));

  it('renders a complete tile', () =>
    matchesMarkupAndStyle(
      <WelcomeMatTile
        tile={{
          symbol: 'animal_and_nature',
          title: 'Welcome to this Test!',
          description: 'This is a test description',
          completed: true
        }}
      />
    ));
});
