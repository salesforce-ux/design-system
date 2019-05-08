// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Header from '../';

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Header />;

export let states = [
  {
    id: 'menu-open',
    label: 'Tour Menu Open',
    element: (
      <div className="demo-only" style={{ height: '240px' }}>
        <Header tourMenuOpen />
      </div>
    )
  }
];
