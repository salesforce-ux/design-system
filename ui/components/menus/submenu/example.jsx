// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
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
  const {
    ariaExpanded,
    className,
    children,
    iconRight,
    itemName,
    tabIndex,
    title,
    submenuClassnames,
    ...rest
  } = props;

  return (
    <li
      {...rest}
      className={classNames('slds-dropdown__item slds-has-submenu', className)}
      role="presentation"
    >
      <a
        role="menuitem"
        href="javascript:void(0);"
        aria-haspopup="true"
        aria-expanded={ariaExpanded}
        tabIndex={tabIndex || '-1'}
      >
        <span className="slds-truncate" title={title || itemName}>
          {props.itemName}
        </span>
        {iconRight || null}
      </a>
      <Menu className={classNames('slds-dropdown_submenu', submenuClassnames)}>
        <MenuList ariaLabel={itemName}>
          <MenuItem tabIndex="0">Submenu Item One</MenuItem>
          <MenuItem>Submenu Item Two</MenuItem>
          <MenuItem>Submenu Item Three</MenuItem>
          <li className="slds-has-divider_top-space" role="separator" />
          <MenuItem>Submenu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </li>
  );
};

export const Context = props => (
  <div className="demo-only" style={{ height: '300px' }}>
    {props.children}
  </div>
);

export const Submenu = props => (
  <Trigger className="slds-is-open">
    <Menu className="slds-dropdown_left">
      <MenuList ariaLabel="Show More">
        <MenuItem tabIndex="0">Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
        <MenuItemHasSubmenu
          ariaExpanded={props.ariaExpanded}
          iconRight={RightIcon}
          itemName="Menu Item Three"
          submenuClassnames={
            props.submenuClassnames || 'slds-dropdown_submenu-right'
          }
        />
      </MenuList>
    </Menu>
  </Trigger>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Submenu ariaExpanded />;
