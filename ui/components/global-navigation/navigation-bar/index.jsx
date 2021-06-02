// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import ButtonIcon from '../../button-icons/';
import WaffleIcon from '../../dynamic-icons/waffle';

// Context Item Dropdown
const contextDropdown = (
  <Menu className="slds-dropdown_right">
    <MenuList>
      <MenuItem title="Main action">
        <SvgIcon
          className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
          sprite="utility"
          symbol="add"
        />
        Main action
      </MenuItem>
      <li
        className="slds-dropdown__header slds-has-divider_top-space"
        role="separator"
      >
        <span>Menu header</span>
      </li>
      <MenuItem>Menu Item One</MenuItem>
      <MenuItem>Menu Item Two</MenuItem>
      <MenuItem>Menu Item Three</MenuItem>
    </MenuList>
  </Menu>
);

export const NavBarItem = props => {
  const {
    label,
    isActive,
    hasNavMenu,
    hasNavMenuOpen,
    hasMenuDropdown
  } = props;
  const computedClassNames = classNames('slds-context-bar__item', {
    'slds-is-active': isActive,
    'slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click': hasNavMenu,
    'slds-is-open': hasNavMenuOpen
  });
  return (
    <li className={computedClassNames}>
      <a
        href="#"
        className="slds-context-bar__label-action"
        title={label}
        onClick={e => e.preventDefault()}
      >
        {isActive && <span className="slds-assistive-text">Current Page:</span>}
        <span className="slds-truncate" title={label}>
          {label}
        </span>
      </a>
      {hasNavMenu && (
        <React.Fragment>
          <OverflowMenuButton onClick={props.onClick} />
          {hasMenuDropdown && contextDropdown}
        </React.Fragment>
      )}
    </li>
  );
};

NavBarItem.defaultProps = {
  label: 'Menu Item',
  hasMenuDropdown: true
};

NavBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  hasNavMenu: PropTypes.bool,
  hasNavMenuOpen: PropTypes.bool,
  hasMenuDropdown: PropTypes.bool
};

const OverflowMenuButton = props => {
  return (
    <div className="slds-context-bar__icon-action slds-p-left_none">
      <ButtonIcon
        className="slds-button_icon slds-context-bar__button"
        symbol="chevrondown"
        aria-haspopup="true"
        assistiveText="Open menu item submenu"
        title="Open menu item submenu"
        {...props}
      />
    </div>
  );
};

export let ContextBar = props => {
  const { appName, homeItemIsActive, hasNavMenuOpen, children } = props;
  return (
    <div className="slds-context-bar">
      <div className="slds-context-bar__primary">
        <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
          <div className="slds-context-bar__icon-action">
            <WaffleIcon className="slds-context-bar__button" />
          </div>
          <span className="slds-context-bar__label-action slds-context-bar__app-name">
            <span className="slds-truncate" title={appName || 'App Name'}>
              {appName || 'App Name'}
            </span>
          </span>
        </div>
      </div>
      <nav className="slds-context-bar__secondary" role="navigation">
        <ul className="slds-grid">
          <NavBarItem label="Home" isActive={homeItemIsActive} />
          {!children ? (
            <React.Fragment>
              <NavBarItem
                label="Menu Item"
                hasNavMenu
                hasNavMenuOpen={hasNavMenuOpen}
                onClick={() => props.toggleNavMenu()}
              />
              <NavBarItem label="Menu Item" />
              <NavBarItem label="Menu Item" />
              <NavBarItem label="Menu Item" />
            </React.Fragment>
          ) : (
            children
          )}
        </ul>
      </nav>
    </div>
  );
};

ContextBar.propTypes = {
  appName: PropTypes.string,
  homeItemIsActive: PropTypes.bool,
  hasNavMenuOpen: PropTypes.bool,
  children: PropTypes.node
};

class GlobalNavigation extends Component {
  constructor() {
    super();
    this.toggleNavMenu = this.toggleNavMenu.bind(this);

    this.state = {
      hasNavMenuOpen: false
    };
  }

  toggleNavMenu() {
    this.setState({
      hasNavMenuOpen: !this.state.hasNavMenuOpen
    });
  }

  render() {
    return (
      <ContextBar
        homeItemIsActive
        toggleNavMenu={this.toggleNavMenu}
        hasNavMenuOpen={this.props.hasNavMenuOpen || this.state.hasNavMenuOpen}
      />
    );
  }
}

export default GlobalNavigation;
