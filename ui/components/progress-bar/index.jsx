// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

export const ProgressBar = props => {
  let progressBarStyle = props.isVertical
    ? { height: `${props.value}%` }
    : { width: `${props.value}%` };
  return (
    <div
      className={classNames(
        'slds-progress-bar',
        { 'slds-progress-bar_vertical': props.isVertical },
        { 'slds-progress-bar_circular': props.hasCircularEnds },
        props.className
      )}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={props.value}
      aria-labelledby={props['aria-labelledby']}
      aria-label={
        props['aria-label'] || '{{Placeholder for description of progress bar}}'
      }
      role="progressbar"
    >
      <span
        className={classNames('slds-progress-bar__value', {
          'slds-progress-bar__value_success': props.isSuccess
        })}
        style={progressBarStyle}
      >
        <span className="slds-assistive-text">
          Progress: {`${props.value}%`}
        </span>
      </span>
    </div>
  );
};
