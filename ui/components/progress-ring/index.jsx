// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _ from '../../shared/helpers';

class ProgressRing extends Component {
  getCoordinatesForPercent(percent) {
    const pct = percent / 100;
    const x = Math.cos(2 * Math.PI * pct).toFixed(2);
    const y = Math.sin(2 * Math.PI * pct).toFixed(2);

    return { x, y };
  }

  render() {
    const {
      percent,
      isWarning,
      isComplete,
      isExpired,
      isActiveStep,
      isFilling,
      className
    } = this.props;

    let adjustedPercent = percent;
    if (isFilling && !isComplete) {
      adjustedPercent = 100 - percent;
    }

    const { x, y } = this.getCoordinatesForPercent(adjustedPercent);
    const isLong = percent > 50 ? 1 : 0;
    const isSweep = isFilling && !isComplete ? 0 : 1;
    const uniqueId = _.uniqueId('slds-progress-ring-path-');
    const viewBoxParams = "-1 -1 2 2";
    const progressRingRadius = 1;
    // Since the viewBox units are set to 2, radii are doubled for shape sizes.
    // For a 6px progress head in a 30 px, we use 0.2 units, instead of 0.1
    const progressHeadRadius = (6 / 30);
    // The radius of the circular path the progress head is plotted on is 21 pixels,
    // 24 pixels from the ring, minus 3px for the radius of the progress head
    const progressHeadPlotRadius = (21 / 30);

    let stateClass;

    if (isWarning) stateClass = 'slds-progress-ring_warning';
    if (isExpired) stateClass = 'slds-progress-ring_expired';
    if (isComplete) stateClass = 'slds-progress-ring_complete';
    if (isActiveStep) stateClass = 'slds-progress-ring_active-step';

    return (
      <div className={classNames('slds-progress-ring', stateClass, className)}>
        <div
          className="slds-progress-ring__progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={percent}
        >
          <svg viewBox={viewBoxParams}>
            {percent === 100 ? (
              <circle
                className="slds-progress-ring__path"
                id={uniqueId}
                cx="0"
                cy="0"
                r={progressRingRadius}
              />
            ) : (
              <path
                className="slds-progress-ring__path"
                id={uniqueId}
                d={`M 1 0 A 1 1 0 ${isLong} ${isSweep} ${x} ${y} L 0 0`}
              />
            )}
          </svg>
        </div>

        <div className="slds-progress-ring__content">{this.props.children}</div>
        {![0,100].includes(percent) && (
          <div
            className="slds-progress-ring__progress-head"
          >
            <svg viewBox={viewBoxParams}>
              <circle
                className="slds-progress-ring__path"
                id={uniqueId}
                cx={Number(progressHeadPlotRadius * x)}
                cy={Number(progressHeadPlotRadius * y)}
                r={progressHeadRadius}
              />
            </svg>
          </div>
        )}
      </div>
    );
  }
}

ProgressRing.propTypes = {
  percent: PropTypes.number,
  isWarning: PropTypes.bool,
  isComplete: PropTypes.bool,
  isExpired: PropTypes.bool,
  isActiveStep: PropTypes.bool,
  isFilling: PropTypes.bool
};

ProgressRing.defaultProps = {
  percent: 55
};

export default ProgressRing;
