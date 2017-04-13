// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { UtilityBar, UtilityBarItem } from '../base/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '40px' }}>
    <UtilityBar>
      <UtilityBarItem symbol="call">Call</UtilityBarItem>
      <UtilityBarItem symbol="clock">History</UtilityBarItem>
      <UtilityBarItem symbol="note">Notes</UtilityBarItem>
      <UtilityBarItem symbol="omni_channel" notification>
        <span className="slds-m-bottom--xxx-small">Online</span>
        <span>Omni-Channel</span>
      </UtilityBarItem>
    </UtilityBar>
  </div>
);
