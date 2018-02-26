// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Demo = props => (
  <div className="demo-only" {...props}>
    {props.children}
  </div>
);

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

export let Trigger = props => (
  <div
    className={classNames(
      'slds-dropdown-trigger slds-dropdown-trigger_click',
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
    ...rest
  } = props;
  let ariaChecked;

  if (isSelectable) {
    ariaChecked = isSelected ? 'true' : 'false';
  }

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
        href="javascript:void(0);"
        role={isSelectable ? 'menuitemcheckbox' : 'menuitem'}
        aria-checked={ariaChecked}
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

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Default = props => (
  <Demo style={{ height: '220px' }}>
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
  </Demo>
);

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
          <span className="slds-text-title_caps">Menu Sub Heading</span>
        </li>
        <MenuItem tabIndex="0">Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
        <li
          className="slds-dropdown__header slds-truncate"
          title="Menu Sub Heading"
          role="separator"
        >
          <span className="slds-text-title_caps">Menu Sub Heading</span>
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
  }
];
