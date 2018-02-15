// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.setup';
import { Progress as BaseProgress, Step as BaseStep } from '../base/example';
import {
  Progress as VerticalProgress,
  Step as VerticalStep
} from '../vertical/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Base Progress Indicator', () => {
  it('renders a base step', () =>
    matchesMarkupAndStyle(<BaseStep>Step 1</BaseStep>));

  it('renders an active base step', () =>
    matchesMarkupAndStyle(<BaseStep active>Step 1</BaseStep>));

  it('renders a done base step', () =>
    matchesMarkupAndStyle(<BaseStep done>Step 1</BaseStep>));

  it('renders an error base step', () =>
    matchesMarkupAndStyle(<BaseStep error>Step 1</BaseStep>));

  it('renders an active base step with aria-describedby', () =>
    matchesMarkupAndStyle(
      <BaseStep active aria-describedby="step-1-tooltip">
        Step 1
      </BaseStep>
    ));

  it('renders a base progress indicator', () =>
    matchesMarkupAndStyle(
      <BaseProgress>
        <BaseStep active>Step 1</BaseStep>
        <BaseStep>Step 2</BaseStep>
      </BaseProgress>
    ));
});

describe('Vertical Progress Indicator', () => {
  it('renders a vertical step', () =>
    matchesMarkupAndStyle(<VerticalStep>Step 1</VerticalStep>));

  it('renders an active vertical step', () =>
    matchesMarkupAndStyle(<VerticalStep active>Step 1</VerticalStep>));

  it('renders a done vertical step', () =>
    matchesMarkupAndStyle(<VerticalStep done>Step 1</VerticalStep>));

  it('renders an error vertical step', () =>
    matchesMarkupAndStyle(<VerticalStep error>Step 1</VerticalStep>));

  it('renders a vertical progress indicator', () =>
    matchesMarkupAndStyle(
      <VerticalProgress>
        <VerticalStep active>Step 1</VerticalStep>
        <VerticalStep>Step 2</VerticalStep>
      </VerticalProgress>
    ));

  it('renders a vertical step with green success check', () =>
    matchesMarkupAndStyle(
      <VerticalStep done is Success>
        Step 1
      </VerticalStep>
    ));
});
