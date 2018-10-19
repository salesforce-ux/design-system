// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { UtilityIcon } from '../../icons/base/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const TableIcon = (
  <SvgIcon
    className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none"
    sprite="utility"
    symbol="table"
  />
);

const KanbanIcon = (
  <SvgIcon
    className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none"
    sprite="utility"
    symbol="kanban"
  />
);

const ListIcon = (
  <SvgIcon
    className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none"
    sprite="utility"
    symbol="side_list"
  />
);

/* ! deprecate for ButtonIcon/menu/<ButtonMenu /> */
export let Trigger = props => (
  <div
    className={classNames(
      'slds-dropdown-trigger slds-dropdown-trigger_click',
      {
        'slds-is-open': props.isOpen
      },
      props.className
    )}
  >
    {props.triggerIcon ? (
      props.triggerIcon
    ) : (
      <ButtonIcon
        className={classNames(
          props.inverse
            ? 'slds-button_icon-border-inverse'
            : 'slds-button_icon-border-filled'
        )}
        symbol="down"
        assistiveText="Show More"
        title="Show More"
        aria-haspopup="true"
      />
    )}
    {props.children}
  </div>
);

export let Menu = props => (
  <div
    className={classNames('slds-dropdown', props.className)}
    style={props.style}
  >
    {props.children}
  </div>
);

export let MenuList = props => (
  <ul
    className={classNames('slds-dropdown__list', props.className)}
    role="menu"
    aria-label={props.ariaLabel}
  >
    {props.children}
  </ul>
);

export let MenuItem = props => {
  const {
    className,
    isSelectable,
    isSelected,
    children,
    iconLeft,
    iconRight,
    tabIndex,
    title,
    statusLevel,
    ...rest
  } = props;
  let ariaChecked;

  if (isSelectable) {
    ariaChecked = isSelected ? 'true' : 'false';
  }

  const getComputedClassnames = () =>
    classNames({
      'slds-has-error': statusLevel === 'error',
      'slds-has-success': statusLevel === 'success',
      'slds-has-warning': statusLevel === 'warning'
    }) || undefined;

  return (
    <li
      {...rest}
      className={classNames(
        'slds-dropdown__item',
        { 'slds-is-selected': isSelectable && isSelected },
        className
      )}
      role="presentation"
    >
      <a
        aria-checked={ariaChecked}
        className={getComputedClassnames()}
        href="javascript:void(0);"
        role={isSelectable ? 'menuitemcheckbox' : 'menuitem'}
        tabIndex={tabIndex || '-1'}
      >
        <span className="slds-truncate" title={title || children}>
          {isSelectable ? (
            <SvgIcon
              className="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
              sprite="utility"
              symbol="check"
            />
          ) : (
            iconLeft
          )}
          {children}
        </span>
        {iconRight || null}
      </a>
    </li>
  );
};
MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  statusLevel: PropTypes.oneOf(['error', 'success', 'warning'])
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export const BaseMenu = props => (
  <Trigger className="slds-is-open">
    <Menu className={classNames(props.className)}>
      <MenuList ariaLabel="Show More">
        <MenuItem tabIndex="0">Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
        <MenuItem>Menu Item Three</MenuItem>
        <li className="slds-has-divider_top-space" role="separator" />
        <MenuItem>Menu Item Four</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const OverflowMenu = props => (
  <Trigger className="slds-is-open">
    <Menu className={classNames(props.className)}>
      <MenuList ariaLabel="Show More">
        <MenuItem
          tabIndex="0"
          isSelectable={props.isSelectable}
          isSelected={props.isSelected}
        >
          Menu Item One
        </MenuItem>
        <MenuItem isSelectable={props.isSelectable}>Menu Item Two</MenuItem>
        <MenuItem isSelectable={props.isSelectable}>Menu Item Three</MenuItem>
        <li className="slds-has-divider_top-space" role="separator" />
        <MenuItem isSelectable={props.isSelectable}>Menu Item Four</MenuItem>
        <MenuItem isSelectable={props.isSelectable}>Menu Item Five</MenuItem>
        <MenuItem isSelectable={props.isSelectable}>Menu Item Six</MenuItem>
        <MenuItem isSelectable={props.isSelectable}>Menu Item Seven</MenuItem>
        <MenuItem isSelectable={props.isSelectable}>Menu Item Eight</MenuItem>
        <MenuItem isSelectable={props.isSelectable}>Menu Item Nine</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const SubHeader = props => (
  <Trigger className="slds-is-open">
    <Menu className="slds-dropdown_left slds-dropdown_small">
      <MenuList ariaLabel="Show More">
        <li
          className="slds-dropdown__header slds-truncate"
          title="Menu Sub Heading"
          role="separator"
        >
          <span>Menu Sub Heading</span>
        </li>
        <MenuItem tabIndex="0">Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
        <li
          className="slds-dropdown__header slds-truncate"
          title="Menu Sub Heading"
          role="separator"
        >
          <span>Menu Sub Heading</span>
        </li>
        <MenuItem>Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const IconLeft = props => (
  <Trigger className="slds-is-open">
    <Menu className="slds-dropdown_left slds-dropdown_small">
      <MenuList ariaLabel="Show More">
        <MenuItem
          isSelected={props.isSelectable}
          isSelectable={props.isSelectable}
          iconLeft={
            <SvgIcon
              className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
              sprite="utility"
              symbol="user"
            />
          }
          tabIndex="0"
        >
          Menu Item One
        </MenuItem>
        <MenuItem
          isSelectable={props.isSelectable}
          iconLeft={
            <SvgIcon
              className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
              sprite="utility"
              symbol="user"
            />
          }
        >
          Menu Item Two
        </MenuItem>
        <MenuItem
          isSelectable={props.isSelectable}
          iconLeft={
            <SvgIcon
              className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
              sprite="utility"
              symbol="user"
            />
          }
        >
          Menu Item Three
        </MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const DoubleIcon = props => (
  <Trigger className="slds-is-open">
    <Menu className="slds-dropdown_left slds-dropdown_small">
      <MenuList ariaLabel="Show More">
        <MenuItem
          isSelected="true"
          isSelectable
          iconRight={TableIcon}
          tabIndex="0"
        >
          Table View
        </MenuItem>
        <MenuItem isSelectable iconRight={KanbanIcon}>
          Kanban Board
        </MenuItem>
        <MenuItem isSelectable iconRight={ListIcon}>
          List View
        </MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const IconRight = props => (
  <Trigger className="slds-is-open">
    <Menu className="slds-dropdown_left slds-dropdown_small">
      <MenuList ariaLabel="Show More">
        <MenuItem iconRight={TableIcon} tabIndex="0">
          Table View
        </MenuItem>
        <MenuItem iconRight={KanbanIcon}>Kanban Board</MenuItem>
        <MenuItem iconRight={ListIcon}>List View</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const ActionOverflow = props => (
  <Trigger
    className="slds-is-open"
    triggerIcon={
      <ButtonIcon
        className="slds-button_icon-border-filled slds-button_icon-x-small"
        symbol="down"
        assistiveText="Show More"
        aria-haspopup="true"
        title="Show More"
      />
    }
  >
    <Menu className="slds-dropdown_left slds-dropdown_actions">
      <MenuList ariaLabel="Show More">
        <MenuItem tabIndex="0">Action One</MenuItem>
        <MenuItem>Action Two</MenuItem>
        <MenuItem>Action Three</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export const NotificationsMenu = props => (
  <Trigger isOpen>
    <Menu className="slds-dropdown_left">
      <MenuList>
        <MenuItem statusLevel="success" title="Success Item">
          <span className="slds-m-horizontal_xx-small">
            <UtilityIcon
              assistiveText="success"
              size="x-small"
              symbol="success"
              title="success"
            />
          </span>
          <span>Success Item</span>
        </MenuItem>
        <MenuItem
          iconLeft={
            <SvgIcon
              className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
              sprite="utility"
              symbol="user"
            />
          }
          title="Overflow Tab Item"
        >
          <span>Overflow Tab Item</span>
        </MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem statusLevel="warning" title="Warning item">
          <span className="slds-m-horizontal_xx-small">
            <UtilityIcon
              assistiveText="warning"
              size="x-small"
              symbol="warning"
              title="warning"
              useCurrentColor
            />
          </span>
          <span>Warning Item</span>
        </MenuItem>
        <MenuItem
          iconLeft={
            <SvgIcon
              className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
              sprite="utility"
              symbol="user"
            />
          }
          title="Overflow Tab Item"
        >
          <span>Overflow Tab Item</span>
        </MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem statusLevel="error" title="Error Item">
          <span className="slds-m-horizontal_xx-small">
            <UtilityIcon
              assistiveText="error"
              size="x-small"
              symbol="error"
              title="error"
            />
          </span>
          <span>Error Item</span>
        </MenuItem>
        <MenuItem
          iconLeft={
            <SvgIcon
              className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
              sprite="utility"
              symbol="user"
            />
          }
          title="Overflow Tab Item"
        >
          <span>Overflow Tab Item</span>
        </MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export const Context = props => (
  <div className="demo-only" style={{ height: '300px' }}>
    {props.children}
  </div>
);

export default (
  <Trigger className="slds-is-open">
    <Menu className="slds-dropdown_left">
      <MenuList ariaLabel="Show More">
        <MenuItem tabIndex="0">Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
        <MenuItem>Menu Item Three</MenuItem>
        <li className="slds-has-divider_top-space" role="separator" />
        <MenuItem>Menu Item Four</MenuItem>
      </MenuList>
    </Menu>
  </Trigger>
);

export let examples = [
  {
    id: 'dropdown-menu-header',
    label: 'Sub Heading',
    element: <SubHeader />
  },
  {
    id: 'dropdown-menu-icon-left',
    label: 'Single Icon - Left',
    element: <IconLeft />
  },
  {
    id: 'dropdown-menu-icon-double',
    label: 'Double Icon - Left/Right',
    element: <DoubleIcon />
  },
  {
    id: 'dropdown-menu-icon-right',
    label: 'Single Icon - Right',
    element: <IconRight />
  },
  {
    id: 'action-overflow',
    label: 'Overflow menu with actions',
    element: <ActionOverflow />
  },
  {
    id: 'notifications-menu',
    label: 'Menu with alert notifications',
    element: <NotificationsMenu />
  }
];
