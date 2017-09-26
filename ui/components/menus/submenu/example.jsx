// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import { Trigger } from '../dropdown/example';
import { Menu } from '../dropdown/example';
import { MenuList } from '../dropdown/example';
import { MenuItem } from '../dropdown/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const RightIcon = (
  <SvgIcon
    className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none"
    sprite="utility"
    symbol="right"
  />
);

export let MenuItemHasSubmenu = props => {
  const { className, children, iconRight, tabIndex, title, ...rest } = props;

  return (
    <li
      {...rest}
      className={classNames('slds-dropdown__item slds-has-submenu', className)}
      role="presentation"
    >
      <a
        href="javascript:void(0);"
        role="menuitem"
        aria-haspopup="true"
        aria-expanded="true"
        tabIndex={tabIndex || '-1'}
      >
        <span className="slds-truncate" title={title || itemName}>
          {props.itemName}
        </span>
        {iconRight || null}
      </a>
      <Menu
        className={classNames('slds-dropdown_submenu', props.submenuClassnames)}
      >
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider_top-space" role="separator" />
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </li>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '165px' }}>
    <Trigger className="slds-is-open" triggerIcon={moreIcon}>
      <Menu className="slds-dropdown_left">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItemHasSubmenu
            iconRight={RightIcon}
            itemName="Menu Item Three"
            submenuClassnames="slds-dropdown_submenu-right"
          />
        </MenuList>
      </Menu>
    </Trigger>
  </div>
);
