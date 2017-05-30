// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let ProgressBar = props =>
  <div className={classNames('slds-progress-bar', props.className)} aria-valuemin="0" aria-valuemax="100" aria-valuenow={props.value} role="progressbar">
    {props.children}
  </div>;

let ProgressValue = props =>
  <span className={classNames('slds-progress-bar__value', props.className)} style={{ width: props.value + '%' }}>
    <span className="slds-assistive-text">Progress: { props.value + '%' }</span>
  </span>;

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <ProgressBar>
    <ProgressValue value="25" />
  </ProgressBar>
);

export let states = [
  {
    id: 'zero',
    label: '0% complete',
    element:
      <ProgressBar className="slds-progress-bar_medium slds-progress-bar_circular">
        <ProgressValue value="0" />
      </ProgressBar>
  },
  {
    id: '25',
    label: '25% complete',
    element:
      <ProgressBar className="slds-progress-bar_medium slds-progress-bar_circular">
        <ProgressValue value="25" />
      </ProgressBar>
  },
  {
    id: '50',
    label: '50% complete',
    element:
      <ProgressBar className="slds-progress-bar_medium slds-progress-bar_circular">
        <ProgressValue value="50" />
      </ProgressBar>
  },
  {
    id: '75',
    label: '75% complete',
    element:
      <ProgressBar className="slds-progress-bar_medium slds-progress-bar_circular">
        <ProgressValue value="75" />
      </ProgressBar>
  },
  {
    id: '100',
    label: '100% complete',
    element:
      <ProgressBar className="slds-progress-bar_medium slds-progress-bar_circular">
        <ProgressValue value="100" />
      </ProgressBar>
  }
];
