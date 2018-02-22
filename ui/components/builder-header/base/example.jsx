// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import BuilderHeader from '../';

export const Context = props => (
  <div style={{ position: 'relative', height: '100px' }}>{props.children}</div>
);

export default <BuilderHeader />;

export let examples = [
  {
    id: 'toolbar',
    label: 'With Toolbar',
    element: <BuilderHeader showToolbar />
  }
];
