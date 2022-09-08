// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import { ProgressBar } from '..';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export const ProgressBarDescriptive = props => {
  const labelUniqueId = _.uniqueId('progress-bar-label-id-');

  return (
    <div className={props.className}>
      <div
        className="slds-grid slds-grid_align-spread slds-p-bottom_x-small"
        id={labelUniqueId}
      >
        <span>{props.label}</span>
        <span aria-hidden="true">
          <strong>{`${props.value}% Complete`}</strong>
        </span>
      </div>
      <ProgressBar
        className={classNames(props.barClassName)}
        value={props.value}
        aria-labelledby={labelUniqueId}
        isSuccess={props.isSuccess}
      />
    </div>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <ProgressBar value="25" />;

export let states = [
  {
    id: 'zero',
    label: '0% complete',
    element: <ProgressBar value="0" />
  },
  {
    id: '25',
    label: '25% complete',
    element: <ProgressBar value="25" />
  },
  {
    id: '50',
    label: '50% complete',
    element: <ProgressBar value="50" />
  },
  {
    id: '75',
    label: '75% complete',
    element: <ProgressBar value="75" />
  },
  {
    id: '100',
    label: '100% complete',
    element: <ProgressBar value="100" />
  },
  {
    id: 'success',
    label: 'Success Color',
    element: <ProgressBar isSuccess value="100" />
  }
];

export let examples = [
  {
    id: 'progress-bar-descriptive',
    label: 'Descriptive Progress Bar',
    element: (
      <ProgressBarDescriptive label="Einstein Setup Assistant" value="25" />
    )
  },
  {
    id: 'circular',
    label: 'Circular',
    element: <ProgressBar className="slds-progress-bar_circular" value="75" />
  },
  {
    id: 'thickness-x-small',
    label: 'X-Small Thickness',
    element: <ProgressBar className="slds-progress-bar_x-small" value="75" />
  },
  {
    id: 'thickness-small',
    label: 'Small Thickness',
    element: <ProgressBar className="slds-progress-bar_small" value="75" />
  },
  {
    id: 'thickness-medium',
    label: 'Medium Thickness',
    element: <ProgressBar className="slds-progress-bar_medium" value="75" />
  },
  {
    id: 'thickness-large',
    label: 'Large Thickness',
    element: <ProgressBar className="slds-progress-bar_large" value="75" />
  }
];
