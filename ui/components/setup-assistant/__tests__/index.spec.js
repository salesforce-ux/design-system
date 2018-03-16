// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import SetupAssistant from '../';
import SetupAssistantStepSummary from '../SetupAssistantStepSummary';
import SetupAssistantStepDetail from '../SetupAssistantStepDetail';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Setup Assistant ', () => {
  it('renders a base setup assistant step', () =>
    matchesMarkupAndStyle(<SetupAssistantStepSummary />));

  it('renders a setup assistant step with a duration', () =>
    matchesMarkupAndStyle(<SetupAssistantStepSummary duration="5 mins" />));

  it('renders a setup assistant step with a link action and duration', () =>
    matchesMarkupAndStyle(
      <SetupAssistantStepSummary
        action={{ type: 'link', title: 'Add Users' }}
        duration="5 mins"
      />
    ));

  it('renders an incomplete setup assistant step', () =>
    matchesMarkupAndStyle(
      <SetupAssistantStepSummary
        stepProgress={{ isComplete: false, number: '3' }}
      />
    ));

  it('renders an in-progess setup assistant step', () =>
    matchesMarkupAndStyle(
      <SetupAssistantStepSummary
        stepProgress={{ isComplete: false, number: '2' }}
        isActiveStep
      />
    ));

  it('renders an in-progess setup assistant step with progress ring percentage', () =>
    matchesMarkupAndStyle(
      <SetupAssistantStepSummary
        stepProgress={{ isComplete: false, number: '2', percentage: 33 }}
        isActiveStep
      />
    ));

  it('renders a complete setup assistant step', () =>
    matchesMarkupAndStyle(
      <SetupAssistantStepSummary
        stepProgress={{ isComplete: true, number: '1' }}
      />
    ));

  it('renders a setup assistant step with the title as a button', () =>
    matchesMarkupAndStyle(
      <SetupAssistantStepSummary
        stepProgress={{ isComplete: true, number: '1' }}
        referenceId="test-detail-action-1"
      />
    ));

  it('renders a setup assistant step with title button and aria expanded true', () =>
    matchesMarkupAndStyle(
      <SetupAssistantStepSummary
        stepProgress={{ isComplete: true, number: '1' }}
        referenceId="test-detail-action-1"
        isOpen
      />
    ));

  xit('renders a step detail', () =>
    matchesMarkupAndStyle(<SetupAssistantStepDetail />));
});
