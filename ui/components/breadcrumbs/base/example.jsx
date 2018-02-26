// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import BreadCrumbs from '../index.react';
import ButtonIcon from '../../button-icons/';
import { Trigger } from '../../menus/dropdown/example';
import { Menu } from '../../menus/dropdown/example';
import { MenuList } from '../../menus/dropdown/example';
import { MenuItem } from '../../menus/dropdown/example';
const { Crumb } = BreadCrumbs;

const moreIcon = (
  <ButtonIcon
    className="slds-button_icon-border-filled slds-button_icon-x-small"
    symbol="threedots"
    assistiveText="Show More"
    aria-haspopup="true"
    title="Show More"
  />
);

let BreadcrumbMenu = props => (
  <Trigger className="slds-is-open" triggerIcon={moreIcon}>
    <Menu className="slds-dropdown_left slds-dropdown_actions">
      <MenuList>
        <MenuItem tabIndex="0">Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
        <MenuItem>Menu Item Three</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const Context = props => (
  <div className="demo-only" style={{ height: '150px' }}>
    {props.children}
  </div>
);

export const BreadcrumbsBase = props => (
  <BreadCrumbs>
    <Crumb className="slds-text-title_caps" href="javascript:void(0);">
      Parent Entity
    </Crumb>
    <Crumb className="slds-text-title_caps" href="javascript:void(0);">
      Parent Record Name
    </Crumb>
  </BreadCrumbs>
);

/* for snapshot tests */
export const BreadcrumbsWithOverflow = props => (
  <BreadCrumbs listClassNames="slds-grid_vertical-align-center">
    <Crumb hasMenu>
      <BreadcrumbMenu />
    </Crumb>
    <Crumb className="slds-text-title_caps" href="javascript:void(0);">
      Parent Entity
    </Crumb>
    <Crumb className="slds-text-title_caps" href="javascript:void(0);">
      Parent Record Name
    </Crumb>
  </BreadCrumbs>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

/* export for snapshot tests */
export default <BreadcrumbsBase />;

/* export for site examples */
export let examples = [
  {
    id: 'overflow-breadcrumbs',
    label: 'Breadcrumbs with Overflow Menu',
    element: <BreadcrumbsWithOverflow />
  }
];
