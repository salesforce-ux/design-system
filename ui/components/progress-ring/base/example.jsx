// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ProgressRing from '../';
import SvgIcon from '../../../shared/svg-icon';

export default (<ProgressRing percent={88} />);

export const states = [
  {
    id: 'progress-ring-warning',
    label: 'Warning State',
    element: (
      <ProgressRing percent={22}>
        <SvgIcon
          className="slds-icon slds-icon_xx-small"
          sprite="utility"
          symbol="warning"
        />
      </ProgressRing>
    )
  },
  {
    id: 'progress-ring-expired',
    label: 'Expired State',
    element: (
      <ProgressRing percent={0}>
        <SvgIcon
          className="slds-icon slds-icon_xx-small"
          sprite="utility"
          symbol="error"
        />
      </ProgressRing>
    )
  },
  {
    id: 'progress-ring-complete',
    label: 'Complete State',
    element: (
      <ProgressRing percent={100}>
        <SvgIcon
          className="slds-icon slds-icon_xx-small"
          sprite="utility"
          symbol="check"
        />
      </ProgressRing>
    )
  }
];
