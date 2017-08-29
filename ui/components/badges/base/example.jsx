// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { UtilityIcon } from '../../icons/base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Badge = props => (
  <span className={classNames('slds-badge', props.className)}>
    {props.children}
  </span>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Badge>Badge Label</Badge>;

export let examples = [
  {
    id: 'inverse',
    label: 'Inverse',
    element: <Badge className="slds-badge_inverse">Badge Label</Badge>
  },
  {
    id: 'light-with-icon',
    label: 'Light with Icon',
    element: (
      <Badge className="slds-badge_lightest">
        <UtilityIcon
          containerClassName="slds-m-right_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="moneybag"
        />
        423 Credits Available
      </Badge>
    )
  }
];
