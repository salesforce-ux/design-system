// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { UtilityIcon } from '../icons/base/example';
import { ActionIcon } from '../icons/action/example';
import { Button } from '../buttons/base/example';
import { CheckboxToggle } from '../checkbox-toggle/base/example';
import ProgressRing from '../progress-ring';

class SetupAssistantStepSummary extends React.Component {
  render() {
    const {
      title,
      description,
      action,
      duration,
      stepProgress,
      isActiveStep,
      referenceId,
      isOpen
    } = this.props;
    const className = classNames(('slds-media': stepProgress));

    const stepAction =
      action &&
      (action.type == 'button' ? (
        <Button isOutlineBrand>{action.title}</Button>
      ) : action.type == 'toggle' ? (
        <CheckboxToggle title={action.title} isBare checked={action.checked} />
      ) : (
        <a href="javascript:void(0);">{action.title}</a>
      ));

    const stepProgressRing =
      stepProgress &&
      (stepProgress.isComplete ? (
        <ProgressRing
          className="slds-progress-ring_large"
          percent={100}
          isComplete
        >
          <UtilityIcon
            symbol="check"
            title="Complete"
            assistiveText="Complete"
          />
        </ProgressRing>
      ) : (
        <ProgressRing
          className="slds-progress-ring_large"
          percent={isActiveStep ? stepProgress.percentage : 0}
          isActiveStep={isActiveStep}
        >
          {stepProgress.number}
        </ProgressRing>
      ));

    const baseStepContent = (
      <div className="slds-media">
        <div className="slds-setup-assistant__step-summary-content slds-media__body">
          <h3 className="slds-setup-assistant__step-summary-title slds-text-heading_small">
            {referenceId ? (
              <Button
                className="slds-button_reset"
                aria-controls={referenceId}
                aria-expanded={isOpen ? 'true' : 'false'}
              >
                {title}
              </Button>
            ) : (
              title
            )}
          </h3>
          <p>{description}</p>
        </div>
        <div className="slds-media__figure slds-media__figure_reverse">
          {stepAction}
          {duration && (
            <p
              className={classNames(
                'slds-text-align_right',
                'slds-text-color_weak',
                {
                  'slds-p-top_medium': action
                }
              )}
            >
              {duration}
            </p>
          )}
        </div>
      </div>
    );

    return (
      <div className="slds-setup-assistant__step-summary">
        {stepProgress ? (
          <div className={className}>
            <div className="slds-media__figure">{stepProgressRing}</div>
            <div className="slds-media__body slds-m-top_x-small">
              {baseStepContent}
            </div>
          </div>
        ) : (
          baseStepContent
        )}
      </div>
    );
  }
}

SetupAssistantStepSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.object,
  duration: PropTypes.string,
  stepProgress: PropTypes.object,
  isActiveStep: PropTypes.bool
};

SetupAssistantStepSummary.defaultProps = {
  title: 'Configure user settings for this org',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

export default SetupAssistantStepSummary;
