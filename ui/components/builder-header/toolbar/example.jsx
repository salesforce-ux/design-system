// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import BuilderHeader from '../';

export const Context = props => (
  <div style={{ position: 'relative', height: '100px' }}>{props.children}</div>
);

export default <BuilderHeader showToolbar />;

export let states = [
  {
    id: 'menu-open-with-toolbar',
    label: 'Menu open with toolbar',
    isOpen: true,
    element: <BuilderHeader openDropDown showToolbar />
  }
];
