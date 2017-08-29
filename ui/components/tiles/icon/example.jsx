// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { TileMedia } from '../base/example';
import classNames from 'classnames';

const icon = (
  <span className="slds-icon_container" title="description of icon when needed">
    <SvgIcon
      className="slds-icon slds-icon-standard-groups"
      sprite="standard"
      symbol="groups"
    />
  </span>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export let states = [
  {
    id: 'tile-icon',
    label: 'Default',
    element: (
      <div className="demo-only" style={{ width: '30rem' }}>
        <TileMedia title="Salesforce UX" media={icon} />
      </div>
    )
  },
  {
    id: 'tile-icon-with-action',
    label: 'With actions',
    element: (
      <div className="demo-only" style={{ width: '30rem' }}>
        <TileMedia title="Salesforce UX" media={icon} actions />
      </div>
    )
  }
];
