// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../shared/helpers';

import {
  SummaryDetail,
  SummaryDetailTitle,
  SummaryDetailContent,
  SummaryDetailAction
} from '../summary-detail/base/example';
import SetupAssistantStepSummary from './SetupAssistantStepSummary';
import SetupAssistantStepDetail from './SetupAssistantStepDetail';
import { Card, CardBody } from '../cards/base/example';
import { ProgressBarDescriptive } from '../progress-bar/base/example';

const sampleBaseSteps = [
  {
    title: 'Add Users to Your Org',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
    action: {
      type: 'button',
      title: 'Add Users'
    },
    duration: '4 mins',
    stepProgress: {
      isComplete: true,
      number: '1'
    }
  },
  {
    title: 'Create Profiles for Your Users',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
    action: {
      type: 'button',
      title: 'Add Profiles'
    },
    stepProgress: {
      isComplete: false,
      number: '2',
      percentage: 33
    },
    isActiveStep: true,
    isOpen: true
  },
  {
    title: 'Learn How to Use Profiles to control Visibility',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
    action: {
      type: 'link',
      title: 'View on Trailhead'
    },
    duration: '15 mins',
    stepProgress: {
      isComplete: true,
      number: '3',
      percentage: '0'
    }
  },
  {
    title: 'Turn on tracking for profiles',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
    action: {
      type: 'toggle',
      title: 'Turn on tracking for profiles'
    },
    stepProgress: {
      isComplete: false,
      number: '4',
      percentage: '0'
    }
  },
  {
    title: 'Setup Einstein Visibility for Admins',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
    action: {
      type: 'link',
      title: 'Watch Video'
    },
    stepProgress: {
      isComplete: false,
      number: '5',
      percentage: '0'
    }
  }
];

const renderBaseSteps = (steps, stepsHaveProgress) => {
  return steps.map((step, index) => (
    <SetupAssistantStep
      key={`base-step-${step.title}-${stepsHaveProgress}-${index}`}
    >
      <SetupAssistantStepSummary
        title={step.title}
        stepProgress={stepsHaveProgress && step.stepProgress}
        action={step.action}
        duration={step.duration}
      />
    </SetupAssistantStep>
  ));
};

const renderExpandableSteps = steps => {
  return steps.map((step, index) => (
    <SetupAssistantStep key={`expand-step-${step.title}-${index}`}>
      <SummaryDetail className={classNames({ 'slds-is-open': step.isOpen })}>
        <SummaryDetailAction
          className="slds-m-top_x-small"
          referenceId={`step-${index}-summary-action`}
          isOpen={step.isOpen}
          summaryTitle={step.title}
        />
        <div>
          <SummaryDetailTitle>
            <SetupAssistantStepSummary
              title={step.title}
              isActiveStep={step.isActiveStep}
              stepProgress={step.stepProgress}
              duration={step.duration || '10 mins'}
              referenceId={`step-${index}-summary-action`}
              isOpen={step.isOpen}
            />
          </SummaryDetailTitle>
          <SummaryDetailContent
            referenceId={`step-${index}-summary-action`}
            isOpen={step.isOpen}
          >
            <SetupAssistantStepDetail />
          </SummaryDetailContent>
        </div>
      </SummaryDetail>
    </SetupAssistantStep>
  ));
};

export const SetupAssistantStep = props => (
  <li className="slds-setup-assistant__item">
    <article className="slds-setup-assistant__step" key={props.key}>
      {props.children}
    </article>
  </li>
);

export const SetupAssistantList = props => (
  <ol className="slds-setup-assistant">{props.children}</ol>
);

export default props => {
  const { isBase, stepsHaveProgress, stepsAreExpandable } = props;

  return (
    <SetupAssistantList>
      {isBase && renderBaseSteps(sampleBaseSteps, stepsHaveProgress)}
      {stepsAreExpandable && renderExpandableSteps(sampleBaseSteps)}
    </SetupAssistantList>
  );
};

export const FullSetupAssistantCard = props => {
  return (
    <section className="slds-card">
      <header className="slds-theme_shade slds-p-around_medium slds-m-bottom_small">
        <ProgressBarDescriptive
          barClassName="slds-progress-bar_circular"
          label="Complete all the steps below to finish setting up Einstein Visibility"
          value="50"
          isSuccess
        />
      </header>
      <React.Fragment>{props.children}</React.Fragment>
    </section>
  );
};
