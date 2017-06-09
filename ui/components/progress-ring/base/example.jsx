// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ProgressRing from '../';
import SvgIcon from '../../../shared/svg-icon';
import { UtilityIcon } from '../../icons/base/example';

export default (
  <ProgressRing percent={88} />
);

export const examples = [
  {
    id: 'progress-ring-warning',
    label: 'With Warning Icon',
    element: (
      <ProgressRing percent={20}>
        <UtilityIcon
          symbol="warning"
          title="Warning"
        />
      </ProgressRing>
    )
  },
  {
    id: 'progress-ring-expired',
    label: 'With Expired Icon',
    element: (
      <ProgressRing percent={0}>
        <UtilityIcon
          symbol="error"
          title="Expired"
        />
      </ProgressRing>
    )
  },
  {
    id: 'progress-ring-complete',
    label: 'Complete',
    element: (
      <ProgressRing percent={100}>
        <UtilityIcon
          symbol="check"
          title="Complete"
        />
      </ProgressRing>
    )
  }
];
