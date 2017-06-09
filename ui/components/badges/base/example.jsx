// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { UtilityIcon } from '../../icons/base/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Badge = props =>
  <span className={classNames('slds-badge', props.className)}>Badge Label</span>;

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Badge />
);

export let examples = [
  {
    id: 'inverse',
    label: 'Inverse',
    element:
      <Badge className="slds-badge_inverse" />
  }
];
