// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { UtilityIcon } from '../icons/base/example';
import { ActionIcon } from '../icons/action/example';
import { Button } from '../buttons/base/example';
import { CheckboxToggle } from '../checkbox-toggle/base/example';
import {
  Step as VerticalStep,
  Progress as VerticalProgress
} from '../progress-indicator/vertical/example';
import { ScopedNoti } from '../scoped-notifications/base/example';

const sampleSubSteps = [
  {
    complete: true,
    title: 'Turn on Lightning for all users.',
    action: {
      type: 'toggle',
      title: 'Turn on Lightning for all users',
      checked: true
    }
  },
  {
    active: true,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    action: {
      type: 'link',
      title: 'View in Trailhead'
    }
  },
  {
    title: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
    action: {
      type: 'button',
      title: 'Add Users'
    }
  }
];

const renderStepAction = action => {
  if (action && action.type === 'button')
    return <Button isOutlineBrand>{action.title}</Button>;
  else if (action.type === 'toggle')
    return (
      <CheckboxToggle title={action.title} isBare checked={action.checked} />
    );
  else return <a href="javascript:void(0);">{action.title}</a>;
};

const renderProgressIndicatorSteps = steps => {
  return steps.map((step, index) => (
    <VerticalStep
      key={`progress-step-${index}`}
      done={step.complete}
      hasSuccessMarker={step.complete}
      active={step.active}
      assistiveText={step.title}
    >
      <div className="slds-size_3-of-4">{step.title}</div>
      <div className="slds-grid slds-grid_align-end slds-size_1-of-4">
        {renderStepAction(step.action)}
      </div>
    </VerticalStep>
  ));
};

class SetupAssistantStepDetail extends React.Component {
  render() {
    const className = classNames(
      'slds-setup-assistant__step-detail',
      this.props.className
    );

    return (
      <div className={className}>
        <VerticalProgress value="50" hasBorders hasSuccessBar>
          {renderProgressIndicatorSteps(sampleSubSteps)}
        </VerticalProgress>
        <ScopedNoti
          className="slds-scoped-notification_light"
          iconClassName="slds-icon-text-default"
        />
      </div>
    );
  }
}

SetupAssistantStepDetail.propTypes = {
  className: PropTypes.string
};

export default SetupAssistantStepDetail;
