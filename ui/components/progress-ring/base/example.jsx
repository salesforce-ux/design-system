// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ProgressRing from '../';
import { UtilityIcon } from '../../icons/base/example';

export default <ProgressRing percent={100} />;

export const examples = [
  {
    id: 'progress-ring-partially-drained',
    label: 'Partially Drained',
    element: <ProgressRing percent={88} />
  },
  {
    id: 'progress-ring-partially-filled',
    label: 'Partially Filled',
    element: <ProgressRing percent={40} isFilling />
  },
  {
    id: 'progress-ring-warning',
    label: 'Partially Drained With Warning Icon',
    element: (
      <ProgressRing percent={20} isWarning>
        <UtilityIcon symbol="warning" title="Warning" assistiveText="Warning" />
      </ProgressRing>
    )
  },
  {
    id: 'progress-ring-partially-filled-warning',
    label: 'Partially Filled with Warning Icon',
    element: (
      <ProgressRing percent={75} isFilling isWarning>
        <UtilityIcon symbol="warning" title="Warning" assistiveText="Warning" />
      </ProgressRing>
    )
  },
  {
    id: 'progress-ring-expired',
    label: 'With Expired Icon',
    element: (
      <ProgressRing percent={0} isExpired>
        <UtilityIcon symbol="error" title="Expired" assistiveText="Expired" />
      </ProgressRing>
    )
  },
  {
    id: 'progress-ring-complete',
    label: 'Complete',
    element: (
      <ProgressRing percent={100} isComplete>
        <UtilityIcon symbol="check" title="Complete" assistiveText="Complete" />
      </ProgressRing>
    )
  },
  {
    id: 'progress-ring-large',
    label: 'Large Size',
    element: <ProgressRing percent={100} className="slds-progress-ring_large" />
  },
  {
    id: 'progress-ring-active-step',
    label: 'Active Step',
    element: <ProgressRing percent={100} isActiveStep />
  },
  {
    id: 'progress-ring-theme-warning',
    label: 'Theme: Warning',
    element: <ProgressRing percent={100} isWarning />
  },
  {
    id: 'progress-ring-theme-expired',
    label: 'Theme: Expired',
    element: <ProgressRing percent={100} isExpired />
  },
  {
    id: 'progress-ring-theme-complete',
    label: 'Theme: Complete',
    element: <ProgressRing percent={100} isComplete />
  }
];
