// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

import {
  SummaryDetail,
  SummaryDetailTitle,
  SummaryDetailContent,
  SummaryDetailAction
} from '../../summary-detail/base/example';
import SetupAssistantStepSummary from '../SetupAssistantStepSummary';
import SetupAssistantStepDetail from '../SetupAssistantStepDetail';
import { SetupAssistantList, SetupAssistantStep } from '../';
import SetupAssistant from '../';

const HubStep = props => {
  const { isOpen, title, isActiveStep, stepProgress, duration } = props;
  const uniqueId = _.uniqueId('setup-assistant-step-');
  const actionReferenceId = `${uniqueId}-action`;

  return (
    <SetupAssistantStep>
      <SummaryDetail className={classNames({ 'slds-is-open': isOpen })}>
        <SummaryDetailAction
          className="slds-m-top_x-small"
          referenceId={actionReferenceId}
          isOpen={isOpen}
          summaryTitle={title}
        />
        <div>
          <SummaryDetailTitle>
            <SetupAssistantStepSummary
              title={title}
              isActiveStep={isActiveStep}
              stepProgress={stepProgress}
              duration={duration || '10 mins'}
              referenceId={actionReferenceId}
              isOpen={isOpen}
            />
          </SummaryDetailTitle>
          <SummaryDetailContent referenceId={actionReferenceId} isOpen={isOpen}>
            <SetupAssistantStepDetail />
          </SummaryDetailContent>
        </div>
      </SummaryDetail>
    </SetupAssistantStep>
  );
};

export default (
  <SetupAssistantList>
    <SetupAssistantStep>
      <SetupAssistantStepSummary />
    </SetupAssistantStep>
  </SetupAssistantList>
);

export let states = [
  {
    id: 'with-button-action',
    label: 'With Button Action',
    element: (
      <SetupAssistantList>
        <SetupAssistantStep>
          <SetupAssistantStepSummary
            action={{ type: 'button', title: 'Add Users' }}
            duration="5 min"
          />
        </SetupAssistantStep>
      </SetupAssistantList>
    )
  },
  {
    id: 'with-link-action',
    label: 'With Link Action',
    element: (
      <SetupAssistantList>
        <SetupAssistantStep>
          <SetupAssistantStepSummary
            action={{ type: 'link', title: 'View on Trailhead' }}
          />
        </SetupAssistantStep>
      </SetupAssistantList>
    )
  },
  {
    id: 'with-toggle-action',
    label: 'With Toggle Action',
    element: (
      <SetupAssistantList>
        <SetupAssistantStep>
          <SetupAssistantStepSummary
            action={{
              type: 'toggle',
              title: 'Configure user settings for this org'
            }}
          />
        </SetupAssistantStep>
      </SetupAssistantList>
    )
  },
  {
    id: 'with-step-number',
    label: 'With Step Number',
    element: (
      <SetupAssistantList>
        <SetupAssistantStep>
          <SetupAssistantStepSummary
            stepProgress={{ isComplete: false, number: '3' }}
            action={{ type: 'button', title: 'Add Users' }}
            duration="5 min"
          />
        </SetupAssistantStep>
      </SetupAssistantList>
    )
  },
  {
    id: 'completed',
    label: 'Completed',
    element: (
      <SetupAssistantList>
        <SetupAssistantStep>
          <SetupAssistantStepSummary
            stepProgress={{ isComplete: true, number: '2' }}
            action={{ type: 'link', title: 'View on Trailhead' }}
            duration="10 min"
          />
        </SetupAssistantStep>
      </SetupAssistantList>
    )
  },
  {
    id: 'closed-expandable-step',
    label: 'Closed Expandable Step',
    element: (
      <SetupAssistantList>
        <HubStep
          title="Configure user settings for this org"
          stepProgress={{ isComplete: false, number: '1' }}
          duration="5 min"
        />
      </SetupAssistantList>
    )
  },
  {
    id: 'open-expandable-step',
    label: 'Open Expandable Step',
    element: (
      <SetupAssistantList>
        <HubStep
          title="Configure user settings for this org"
          stepProgress={{ isComplete: false, number: '1' }}
          duration="5 min"
          isOpen
        />
      </SetupAssistantList>
    )
  },
  {
    id: 'open-in-progress-expandable-step',
    label: 'Open, In Progress Expandable Step',
    element: (
      <SetupAssistantList>
        <HubStep
          title="Configure user settings for this org"
          stepProgress={{ isComplete: false, number: '1', percentage: 33 }}
          duration="5 min"
          isOpen
          isActiveStep
        />
      </SetupAssistantList>
    )
  },
  {
    id: 'open-expandable-step-completed',
    label: 'Completed Open Expandable Step',
    element: (
      <SetupAssistantList>
        <HubStep
          title="Configure user settings for this org"
          stepProgress={{ isComplete: true, number: '1' }}
          duration="5 min"
          isOpen
        />
      </SetupAssistantList>
    )
  }
];

export let examples = [
  {
    id: 'consecutive-base-steps',
    label: 'Consecutive Base Steps',
    element: <SetupAssistant isBase />
  },
  {
    id: 'consecutive-progress-steps',
    label: 'Consecutive Progress Steps',
    element: <SetupAssistant isBase stepsHaveProgress />
  },
  {
    id: 'consecutive-expandable-steps',
    label: 'Consecutive Expandable Steps',
    element: <SetupAssistant stepsAreExpandable />
  }
];
