// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

export let ProgressBar = props =>
  <div className={classNames('slds-progress-bar', props.className)} aria-valuemin="0" aria-valuemax="100" aria-valuenow={props.value} role="progressbar">
    <span className="slds-progress-bar__value" style={{ width: props.value + '%' }}>
      <span className="slds-assistive-text">Progress: { props.value + '%' }</span>
    </span>
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <ProgressBar className="slds-progress-bar--large slds-progress-bar--circular" value="25" />
  },
  {
    id: 'x-small',
    label: 'X-small',
    element:
      <ProgressBar className="slds-progress-bar--x-small slds-progress-bar--circular" value="25" />
  },
  {
    id: 'small',
    label: 'Small',
    element:
      <ProgressBar className="slds-progress-bar--small slds-progress-bar--circular" value="25" />
  },
  {
    id: 'medium',
    label: 'Medium',
    element:
      <ProgressBar className="slds-progress-bar--medium slds-progress-bar--circular" value="25" />
  },
];
