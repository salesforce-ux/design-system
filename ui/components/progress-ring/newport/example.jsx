// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import NewportProgressRing from './';
import { UtilityIcon } from '../../icons/base/example';

export default <NewportProgressRing percent={100} />;

export const examples = [
  {
    id: 'progress-ring-partially-drained',
    label: 'Progress Ring Partially Drained',
    element: <NewportProgressRing percent={88} />
  },
  {
    id: 'progress-ring-warning',
    label: 'With Warning Icon',
    element: (
      <NewportProgressRing percent={20} isWarning>
        <UtilityIcon symbol="warning" title="Warning" assistiveText="Warning" />
      </NewportProgressRing>
    )
  },
  {
    id: 'progress-ring-expired',
    label: 'With Expired Icon',
    element: (
      <NewportProgressRing percent={0} isExpired>
        <UtilityIcon symbol="error" title="Expired" assistiveText="Expired" />
      </NewportProgressRing>
    )
  },
  {
    id: 'progress-ring-complete',
    label: 'Complete',
    element: (
      <NewportProgressRing percent={100} isComplete>
        <UtilityIcon symbol="check" title="Complete" assistiveText="Complete" />
      </NewportProgressRing>
    )
  }
];
