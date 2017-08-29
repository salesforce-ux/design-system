// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { TileMedia } from '../base/example';
import classNames from 'classnames';

const avatar = (
  <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
    <img
      alt=""
      src="/assets/images/avatar2.jpg"
      title="Lexee L. Jackson avatar"
    />
  </span>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export let states = [
  {
    id: 'tile-avatar',
    label: 'Default',
    element: (
      <div className="demo-only" style={{ width: '30rem' }}>
        <TileMedia title="Lexee L. Jackson" media={avatar} />
      </div>
    )
  },
  {
    id: 'tile-avatar-with-action',
    label: 'With actions',
    element: (
      <div className="demo-only" style={{ width: '30rem' }}>
        <TileMedia title="Lexee L. Jackson" media={avatar} actions />
      </div>
    )
  }
];
