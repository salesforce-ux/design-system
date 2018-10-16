// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';

// component imports
import WelcomeMat from '../';
import WelcomeMatContent from '../WelcomeMatContent';
import WelcomeMatContentTrailhead from '../WelcomeMatContentTrailhead';
import WelcomeMatTile from '../WelcomeMatTile';
import WelcomeMatDeprecated from '../deprecated';
import {
  WelcomeMatSampleActions,
  WelcomeMatInfoTitle,
  WelcomeMatInfoDesc,
  WelcomeMatInfoActions,
  WelcomeMatMarketingContent
} from '../helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Composed Welcome Mat Snapshots', () => {
  it('renders a welcome mat', () => matchesMarkup(<WelcomeMat />));

  it('renders a trailhead welcome mat', () =>
    matchesMarkup(
      <WelcomeMat
        content={({ complete, total, labelId }) => (
          <WelcomeMatContentTrailhead
            complete={complete}
            total={total}
            labelId={labelId}
          />
        )}
      />
    ));

  it('renders a splash welcome mat', () =>
    matchesMarkup(
      <WelcomeMat
        content={({ labelId }) => (
          <WelcomeMatMarketingContent labelId={labelId} />
        )}
        tiles={null}
      />
    ));

  it('renders an info-only welcome mat', () =>
    matchesMarkup(
      <WelcomeMat
        content={({ labelId }) => (
          <WelcomeMatMarketingContent labelId={labelId} />
        )}
        isInfoOnly
      />
    ));

  it('renders a deprecated welcome mat', () =>
    matchesMarkup(<WelcomeMatDeprecated />));
});

describe('Welcome Mat Content Component', () => {
  it('renders a default welcome mat content', () =>
    matchesMarkup(<WelcomeMatContent />));

  it('renders a welcome mat content with 2 complete units', () =>
    matchesMarkup(<WelcomeMatContent complete={2} />));

  it('renders a welcome mat content with 3 total units', () =>
    matchesMarkup(<WelcomeMatContent total={3} />));

  it('renders a welcome mat content with a label and description', () =>
    matchesMarkup(
      <WelcomeMatContent
        labelId="welcome-mat-test-1"
        description={<p>This is a test welcome mat</p>}
      />
    ));
});

describe('Welcome Mat Trailhead Content Component', () => {
  it('renders a default trailhead content', () =>
    matchesMarkup(<WelcomeMatContentTrailhead />));

  it('renders a trailhead content with 2 complete units', () =>
    matchesMarkup(<WelcomeMatContentTrailhead complete={2} />));

  it('renders a trailhead content with 3 total units', () =>
    matchesMarkup(<WelcomeMatContentTrailhead total={3} />));

  it('renders a trailhead content with a label id', () =>
    matchesMarkup(<WelcomeMatContentTrailhead labelId="welcome-mat-test-1" />));
});

describe('Welcome Mat Tile Component', () => {
  it('renders a default tile', () => matchesMarkup(<WelcomeMatTile />));

  it('renders a complete tile', () =>
    matchesMarkup(
      <WelcomeMatTile
        tile={{
          symbol: 'animal_and_nature',
          title: 'Welcome to this Test!',
          description: 'This is a test description',
          completed: true
        }}
      />
    ));

  it('renders an info-only complete tile', () =>
    matchesMarkup(
      <WelcomeMatTile
        isInfoOnly
        tile={{
          symbol: 'animal_and_nature',
          title: 'Welcome to this Test!',
          description: 'This is a test description'
        }}
      />
    ));
});

// Helper Components
describe('Welcome Mat Helper Components', () => {
  it('renders WelcomeMatSampleActions', () =>
    matchesMarkup(<WelcomeMatSampleActions />));

  it('renders WelcomeMatInfoTitle', () =>
    matchesMarkup(
      <WelcomeMatInfoTitle labelId="welcome-mat_info-title">
        This is a test title
      </WelcomeMatInfoTitle>
    ));

  it('renders WelcomeMatInfoDesc', () =>
    matchesMarkup(
      <WelcomeMatInfoDesc>
        <p>This is some test description content</p>
      </WelcomeMatInfoDesc>
    ));

  it('renders WelcomeMatInfoActions', () =>
    matchesMarkup(<WelcomeMatInfoActions />));

  it('renders WelcomeMatMarketingContent', () =>
    matchesMarkup(
      <WelcomeMatMarketingContent
        labelId="welcome-mat-marketing-content"
        headline="The Lightning Experience is here!"
        description={<p>This is test content</p>}
        actions={<WelcomeMatInfoActions />}
      />
    ));
});
