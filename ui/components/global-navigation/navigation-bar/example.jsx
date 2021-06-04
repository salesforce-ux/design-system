// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import GlobalNavigation, { ContextBar, NavBarItem } from './';

const demoName = 'Navigation Bar - ';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

const defaultComponent = <GlobalNavigation />;

export default [
  {
    id: 'default',
    label: demoName + 'Default',
    demoStyles: 'height: 16rem;',
    storybookStyles: false,
    element: defaultComponent
  }
];

export let states = [
  {
    id: 'item-active',
    label: demoName + 'Item Active',
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
    label: demoName + 'Item Menu Open',
    demoStyles: 'height: 16rem;',
    storybookStyles: true,
    element: <GlobalNavigation hasNavMenuOpen />
  }
];
