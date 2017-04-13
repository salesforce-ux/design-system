// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

const TableIcon = (
  <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-m-left--small slds-shrink-none" sprite="utility" symbol="table" />
);

const KanbanIcon = (
  <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-m-left--small slds-shrink-none" sprite="utility" symbol="kanban" />
);

const ListIcon = (
  <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-m-left--small slds-shrink-none" sprite="utility" symbol="side_list" />
);

export let Trigger = props =>
  <div className={classNames('slds-dropdown-trigger slds-dropdown-trigger--click', props.className)}>
    { props.triggerIcon ? props.triggerIcon : <ButtonIcon className={classNames(props.inverse ? 'slds-button--icon-border-inverse' : 'slds-button--icon-border-filled')} symbol="down" assistiveText="Show More" title="Show More" aria-haspopup="true" /> }
    {props.children}
  </div>;

export let Menu = props =>
  <div className={classNames('slds-dropdown', props.className)}>
    {props.children}
  </div>;

export let MenuList = props =>
  <ul className={classNames('slds-dropdown__list', props.className)} role="menu">
    {props.children}
  </ul>;

export let MenuItem = props => {
  const {
    className,
    isSelectable,
    isSelected,
    children,
    iconRight,
    tabIndex,
    ...rest
  } = props;
  let ariaChecked;

  if (isSelectable) {
    ariaChecked = isSelected ? 'true' : 'false';
  }

  return (
    <li {...rest} className={classNames('slds-dropdown__item', className)} role="presentation">
      <a
        href="javascript:void(0);"
        role={isSelectable ? 'menuitemcheckbox' : 'menuitem'}
        aria-checked={ariaChecked}
        tabIndex={tabIndex || '-1'}>
        <span className="slds-truncate" title={children}>
          { isSelectable ? <SvgIcon
            className="slds-icon slds-icon--selected slds-icon--x-small slds-icon-text-default slds-m-right--x-small"
            sprite="utility"
            symbol="check" /> : null }
          { children }
        </span>
        { iconRight || null }
      </a>
    </li>
  );
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Default = props =>
  <Demo style={{height: '220px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider--top-space" role="separator" />
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let Small = props =>
  <Demo style={{height: '220px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider--top-space" role="separator" />
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let Medium = props =>
  <Demo style={{height: '220px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--medium">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider--top-space" role="separator" />
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let Large = props =>
  <Demo style={{height: '220px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--large">
        <MenuList>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <li className="slds-has-divider--top-space" role="separator" />
          <MenuItem>Menu Item Four</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let SubHeader = props =>
  <Demo style={{height: '260px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <li className="slds-dropdown__header slds-truncate" title="Menu Sub Heading" role="separator">
            <span className="slds-text-title--caps">Menu Sub Heading</span>
          </li>
          <MenuItem tabIndex="0">Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
          <li className="slds-dropdown__header slds-truncate" title="Menu Sub Heading" role="separator">
            <span className="slds-text-title--caps">Menu Sub Heading</span>
          </li>
          <MenuItem>Menu Item One</MenuItem>
          <MenuItem>Menu Item Two</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let IconLeft = props =>
  <Demo style={{height: '170px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <MenuItem className="slds-is-selected" isSelected="true" isSelectable tabIndex="0">Menu Item One</MenuItem>
          <MenuItem isSelectable>Menu Item Two</MenuItem>
          <MenuItem isSelectable>Menu Item Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let DoubleIcon = props =>
  <Demo style={{height: '170px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <MenuItem className="slds-is-selected" isSelected="true" isSelectable iconRight={TableIcon} tabIndex="0">Table View</MenuItem>
          <MenuItem isSelectable iconRight={KanbanIcon}>Kanban Board</MenuItem>
          <MenuItem isSelectable iconRight={ListIcon}>List View</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

let IconRight = props =>
  <Demo style={{height: '170px'}}>
    <Trigger className="slds-is-open">
      <Menu className="slds-dropdown--left slds-dropdown--small">
        <MenuList>
          <MenuItem iconRight={TableIcon} tabIndex="0">Table View</MenuItem>
          <MenuItem iconRight={KanbanIcon}>Kanban Board</MenuItem>
          <MenuItem iconRight={ListIcon}>List View</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  </Demo>;

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export const Context = props =>
  <div style={{height: '260px'}}>
    {props.children}
  </div>;

export default (
  <Trigger className="slds-is-open">
    <Menu className="slds-dropdown--left">
      <MenuList>
        <MenuItem tabIndex="0">Menu Item One</MenuItem>
        <MenuItem>Menu Item Two</MenuItem>
        <MenuItem>Menu Item Three</MenuItem>
        <li className="slds-has-divider--top-space" role="separator" />
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
    element:
      <Trigger
        className="slds-is-open"
        triggerIcon={
          <ButtonIcon
            className="slds-button--icon-border-filled slds-button--icon-x-small"
            sprite="utility"
            symbol="down"
            assistiveText="Show More"
            aria-haspopup="true"
            title="Show More"
          />
        }
      >
        <Menu className="slds-dropdown--left slds-dropdown--actions">
          <MenuList>
            <MenuItem tabIndex="0">Action One</MenuItem>
            <MenuItem>Action Two</MenuItem>
            <MenuItem>Action Three</MenuItem>
          </MenuList>
        </Menu>
      </Trigger>
  }
];
