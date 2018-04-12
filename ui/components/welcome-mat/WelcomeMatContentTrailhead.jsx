// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ProgressBar } from '../progress-bar/base/example';
import { Button } from '../buttons/base/example';
import { ActionIcon } from '../icons/action/example';

class WelcomeMatContentTrailhead extends React.Component {
  render() {
    const { complete, total, labelId } = this.props;
    const completePercent = complete / total * 100;
    const isComplete = completePercent === 100;

    const badgeProgressMessage = isComplete ? (
      <p>Cha-ching! You earned the badge.</p>
    ) : (
      <p>
        {complete}/{total} units completed
      </p>
    );

    return (
      <React.Fragment>
        <h2 id={labelId} className="slds-welcome-mat__info-title">
          The Lightning Experience is here!
        </h2>
        <p className="slds-welcome-mat__info-description slds-text-longform">
          Welcome to Lightning Experience, the modern, beautiful user experience
          from Salesforce. With a sales-and service-centric mindset, we focused
          on reinventing the desktop environment to better support your business
          processes.
        </p>

        <div
          className={classNames('slds-welcome-mat__info-progress', {
            'slds-welcome-mat__info-progress_complete': isComplete
          })}
        >
          <div className="slds-welcome-mat__info-badge-container">
            <img
              className="slds-welcome-mat__info-badge"
              src="/assets/images/welcome-mat/trailhead_badge@2x.png"
              width="50"
              height="50"
              alt=""
            />
            <ActionIcon
              title="Completed"
              assistiveText="Completed"
              className="slds-welcome-mat__icon-check slds-icon_xx-small"
              symbol="check"
            />
          </div>
          <p>
            <strong>Lightning Explorer</strong>
          </p>
          {badgeProgressMessage}
        </div>

        {isComplete ? (
          <Button isBrand>View on your Trailblazer Profile</Button>
        ) : (
          <ProgressBar
            value={completePercent}
            className="slds-progress-bar_circular"
          />
        )}
      </React.Fragment>
    );
  }
}

WelcomeMatContentTrailhead.propTypes = {
  complete: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired
};

WelcomeMatContentTrailhead.defaultProps = {
  complete: 0,
  total: 5,
  labelId: 'welcome-mat-label-1'
};

export default WelcomeMatContentTrailhead;
