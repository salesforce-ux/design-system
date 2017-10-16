// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let NewportProgressBar = props => (
  <div
    className={classNames(
      'slds-progress-bar vlocity-newport-progress-bar',
      props.className
    )}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={props.value}
    role="progressbar"
  >
    <span
      className="slds-progress-bar__value"
      style={{ width: `${props.value}%` }}
    >
      <span className="slds-assistive-text">Progress: {`${props.value}%`}</span>
    </span>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <NewportProgressBar value="25" />;

export let states = [
  {
    id: 'zero',
    label: '0% complete',
    element: <NewportProgressBar value="0" />
  },
  {
    id: '25',
    label: '25% complete',
    element: <NewportProgressBar value="25" />
  },
  {
    id: '50',
    label: '50% complete',
    element: <NewportProgressBar value="50" />
  },
  {
    id: '75',
    label: '75% complete',
    element: <NewportProgressBar value="75" />
  },
  {
    id: '100',
    label: '100% complete',
    element: <NewportProgressBar value="100" />
  }
];
