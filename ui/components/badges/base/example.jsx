// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { UtilityIcon } from '../../icons/base/example';
import { Badge, InverseBadge, LightestBadge } from '../';

export default <Badge>Badge Label</Badge>;

export let examples = [
  {
    id: 'inverse',
    label: 'Inverse',
    element: <InverseBadge>Badge Label</InverseBadge>
  },
  {
    id: 'light-with-icon',
    label: 'Light with Icon',
    element: (
      <LightestBadge>
        <UtilityIcon
          containerClassName="slds-m-right_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="moneybag"
        />
        423 Credits Available
      </LightestBadge>
    )
  },
  {
    id: 'badge-with-child',
    label: 'With Child Element',
    element: (
      <Badge>
        Component In: <strong>Lightning</strong>
      </Badge>
    )
  }
];
