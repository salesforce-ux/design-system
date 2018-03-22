// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from '../progress-bar/base/example';

class WelcomeMatContent extends React.Component {
  render() {
    const { complete, total, labelId, description } = this.props;
    const completePercent = complete / total * 100;

    return (
      <React.Fragment>
        <h2 id={labelId} className="slds-welcome-mat__info-title">
          The Lightning Experience is here!
        </h2>
        <div className="slds-welcome-mat__info-description slds-text-longform">
          {description}
        </div>

        <div className="slds-welcome-mat__info-progress">
          <p>
            <strong>
              {complete}/{total} units completed
            </strong>
          </p>
        </div>
        <ProgressBar
          value={completePercent}
          className="slds-progress-bar_circular"
        />
      </React.Fragment>
    );
  }
}

WelcomeMatContent.propTypes = {
  complete: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired,
  description: PropTypes.element.isRequired
};

WelcomeMatContent.defaultProps = {
  complete: 0,
  total: 5,
  labelId: 'welcome-mat-label-1',
  description: (
    <p>
      Welcome to Lightning Experience, the modern, beautiful user experience
      from Salesforce. With a sales-and service-centric mindset, we focused on
      reinventing the desktop environment to better support your business
      processes.
    </p>
  )
};

export default WelcomeMatContent;
