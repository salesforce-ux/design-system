// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ProgressRing from '../';

export default (<ProgressRing percent={88} />);

export const states = [
  {
    id: 'progress-ring-warning',
    label: 'Warning State',
    element: <ProgressRing percent={42} />
  },
  {
    id: 'progress-ring-expired',
    label: 'Expired State',
    element: <ProgressRing percent={0} />
  },
  {
    id: 'progress-ring-complete',
    label: 'Complete State',
    element: <ProgressRing percent={100} />
  }
]
