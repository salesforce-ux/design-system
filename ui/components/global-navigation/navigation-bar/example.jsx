// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import GlobalNavigation, { ContextBar, NavBarItem } from './';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export const Context = props => (
  <div style={{ height: '16rem' }}>{props.children}</div>
);

export default <GlobalNavigation />;

export let states = [
  {
    id: 'item-active',
    label: 'Item Active',
    element: (
      <ContextBar>
        <NavBarItem label="Menu Item" hasNavMenu />
        <NavBarItem label="Menu Item" />
        <NavBarItem label="Menu Item" isActive />
        <NavBarItem label="Menu Item" />
      </ContextBar>
    )
  },
  {
    id: 'item-menu-open',
    label: 'Item Menu Open',
    element: <GlobalNavigation hasNavMenuOpen />
  }
];
