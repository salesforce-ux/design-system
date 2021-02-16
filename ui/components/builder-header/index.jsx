// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import SvgIcon from '../../shared/svg-icon';
import ButtonIcon from '../button-icons/';
import PopoverExperience from '../popovers';
import { UtilityIcon } from '../icons/base/example';
import { Tooltip } from '../tooltips/base/example';
import { Menu, MenuList, MenuItem } from '../menus/dropdown/example';

/**
 * App name and logo
 */
const Logo = () => (
  <div className="slds-builder-header__item">
    <div className="slds-builder-header__item-label slds-media slds-media_center">
      <div className="slds-media__figure">
        <UtilityIcon
          containerClassName="slds-current-color"
          className="slds-icon_x-small"
          symbol="builder"
          assistiveText={false}
          title={false}
        />
      </div>
      <div className="slds-media__body">App Name</div>
    </div>
  </div>
);

/**
 * Dropdown menu in header
 */
const BuilderMenu = () => (
  <Menu className="slds-dropdown_right slds-dropdown_actions">
    <MenuList ariaLabel="Show More">
      <li
        className="slds-dropdown__header slds-truncate"
        role="presentation"
        tabIndex="0"
      >
        Menu Header
      </li>
      <MenuItem>Menu Item One</MenuItem>
      <MenuItem>Menu Item Two</MenuItem>
      <MenuItem>Menu Item Three</MenuItem>
    </MenuList>
  </Menu>
);

/**
 * Navigation list in header
 */
const Nav = props => (
  <nav className="slds-builder-header__item slds-builder-header__nav">
    <ul className="slds-builder-header__nav-list">
      {props.showDropDown && (
        <NavItem
          symbol="page"
          showDropDown={props.showDropDown}
          openDropDown={props.openDropDown}
        />
      )}
    </ul>
  </nav>
);

/**
 * Navigation item in header
 */
const NavItem = ({ openDropDown, symbol }) => (
  <li className="slds-builder-header__nav-item slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
    <button
      className="slds-button slds-builder-header__item-action slds-media slds-media_center"
      aria-haspopup="true"
      aria-expanded={openDropDown}
      title="Click to open menu"
    >
      <span className="slds-media__figure">
        <UtilityIcon
          containerClassName="slds-current-color"
          className="slds-icon_x-small"
          symbol={symbol}
          assistiveText={false}
          title={false}
        />
      </span>
      <span className="slds-media__body">
        <span className="slds-truncate" title="Dropdown">
          Dropdown
        </span>
        <UtilityIcon
          containerClassName="slds-current-color slds-m-left_small"
          className="slds-icon_x-small"
          symbol="chevrondown"
          assistiveText={false}
          title={false}
        />
      </span>
    </button>
    {openDropDown && <BuilderMenu />}
  </li>
);

NavItem.propTypes = {
  openDropDown: PropTypes.bool,
  symbol: PropTypes.string
};

NavItem.defaultProps = {
  openDropDown: false
};

/**
 * Document Name
 */
const Name = ({ label }) => {
  return (
    <div className="slds-builder-header__item slds-has-flexi-truncate">
      <h1 className="slds-builder-header__item-label">
        <span className="slds-truncate" title={label}>
          {label}
        </span>
      </h1>
    </div>
  );
};

Name.propTypes = {
  label: PropTypes.string
};

Name.defaultProps = {
  label: 'Page Type'
};

/**
 * Back Link
 */
const BackLink = ({ hasBackTooltip }) => {
  const [showTooltip, setTooltip] = useState(hasBackTooltip);
  const [hasFocus, setFocus] = useState(false);
  const [hasHover, setHover] = useState(false);

  const onFocus = () => {
    setFocus(true);
    setTooltip(true);
  };

  const onBlur = () => {
    setFocus(false);
    if (!hasHover) {
      setTooltip(null);
    }
  };

  const onMouseEnter = () => {
    setHover(true);
    setTooltip(true);
  };

  const onMouseLeave = () => {
    setHover(false);
    if (!hasFocus) {
      setTooltip(null);
    }
  };

  const exampleId = uniqueId('example-unique-id-');

  const computedTooltipStyles = {
    position: 'absolute',
    top: '100%',
    marginTop: '15px'
  };

  return (
    <div className="slds-builder-header__item">
      <a
        href="#"
        className="slds-builder-header__item-action"
        onClick={e => e.preventDefault()}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-describedby={showTooltip && exampleId}
        title="Back"
      >
        <UtilityIcon
          containerClassName="slds-current-color"
          className="slds-icon_x-small"
          symbol="back"
          assistiveText="Back"
          title={false}
        />
      </a>
      {showTooltip && (
        <Tooltip
          nubbinPosition="top left"
          id={exampleId}
          style={computedTooltipStyles}
        >
          Back
        </Tooltip>
      )}
    </div>
  );
};

BackLink.propTypes = {
  hasBackTooltip: PropTypes.bool
};

/**
 * Help Link
 */
const Help = props => (
  <div className="slds-builder-header__utilities-item">
    <a
      href="#"
      className="slds-builder-header__item-action slds-media slds-media_center"
      onClick={e => e.preventDefault()}
    >
      <div className="slds-media__figure">
        <UtilityIcon
          containerClassName="slds-current-color"
          className="slds-icon_x-small"
          symbol="help"
          assistiveText={false}
          title={false}
        />
      </div>
      <div className="slds-media__body">Help</div>
    </a>
  </div>
);

/**
 * Settings
 */
const Settings = ({ symbol }) => (
  <div className="slds-builder-header__utilities-item">
    <a
      href="#"
      className="slds-builder-header__item-action slds-media slds-media_center"
      onClick={e => e.preventDefault()}
    >
      <span className="slds-media__figure">
        <UtilityIcon
          containerClassName="slds-current-color"
          className="slds-icon_x-small"
          symbol={symbol}
          assistiveText={false}
          title={false}
        />
      </span>
      <span className="slds-media__body">
        <span className="slds-truncate" title="Link">
          Settings
        </span>
      </span>
    </a>
  </div>
);

Settings.propTypes = {
  symbol: PropTypes.string
};

/**
 * Toolbar - Canvas Actions
 */
const CanvasActions = props => (
  <div className="slds-builder-toolbar__item-group" aria-label="Canvas Actions">
    <ButtonIcon
      className="slds-button_icon-border"
      symbol="settings"
      assistiveText="Canvas Settings"
      title="Canvas Settings"
    />
    <div className="slds-button-group">
      <ButtonIcon
        className="slds-button_icon-border"
        symbol="undo"
        assistiveText="Undo"
        title="Undo"
        tabIndex="0"
      />
      <ButtonIcon
        className="slds-button_icon-border"
        symbol="redo"
        assistiveText="Redo"
        title="Redo"
        tabIndex="-1"
      />
    </div>
  </div>
);

/**
 * Toolbar - Edit Actions
 */
const EditActions = props => (
  <div className="slds-builder-toolbar__item-group" aria-label="Edit actions">
    <div className="slds-button-group">
      <ButtonIcon
        className="slds-button_icon-border"
        symbol="cut"
        assistiveText="Cut"
        title="Cut"
        tabIndex="-1"
      />
      <ButtonIcon
        className="slds-button_icon-border"
        symbol="copy"
        assistiveText="Copy"
        title="Copy"
        tabIndex="-1"
      />
      <ButtonIcon
        className="slds-button_icon-border"
        symbol="paste"
        assistiveText="Paste"
        title="Paste"
        tabIndex="-1"
      />
    </div>
    <ButtonIcon
      className="slds-button_icon-border"
      symbol="toggle_panel_left"
      assistiveText="Toggle Panel"
      title="Toggle Panel"
    />
  </div>
);

/**
 * Toolbar - Status Text
 */
const Status = ({ hasStatusTooltip }) => {
  const [showTooltip, setTooltip] = useState(hasStatusTooltip);
  const [hasFocus, setFocus] = useState(false);
  const [hasHover, setHover] = useState(false);

  const onFocus = () => {
    setFocus(true);
    setTooltip(true);
  };

  const onBlur = () => {
    setFocus(false);
    if (!hasHover) {
      setTooltip(null);
    }
  };

  const onMouseEnter = () => {
    setHover(true);
    setTooltip(true);
  };

  const onMouseLeave = () => {
    setHover(false);
    if (!hasFocus) {
      setTooltip(null);
    }
  };

  const computedTooltipStyles = {
    position: 'absolute',
    top: '100%',
    marginTop: '15px'
  };

  const computedButtonClassnames = 'slds-button slds-p-horizontal_small';
  const exampleId = uniqueId('example-unique-id-');

  return (
    <>
      {showTooltip && (
        <Tooltip
          nubbinPosition="top left"
          id={exampleId}
          style={computedTooltipStyles}
        >
          Version saved by Johnny Appleseed Today 9:00 AM
        </Tooltip>
      )}
      <button
        className={computedButtonClassnames}
        aria-describedby={showTooltip && exampleId}
        aria-live="polite"
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Inactive - Modified 1 day ago
      </button>
    </>
  );
};

Status.propTypes = {
  hasStatusTooltip: PropTypes.bool
};

/**
 * Toolbar - Document actions
 */
const DocumentActions = ({
  hasStatus,
  hasStatusTooltip,
  hasWarning,
  hasError
}) => {
  let alertType = [];
  hasWarning && alertType.push('warning');
  hasError && alertType.push('error');

  const [activeError, setActiveError] = useState(false);

  const onClick = () => {
    hasError && setActiveError(true);
  };

  const callbackFunction = childData => {
    setActiveError(childData);
  };

  return (
    <div
      className="slds-builder-toolbar__actions"
      aria-label="Document actions"
    >
      {hasStatus && <Status hasStatusTooltip={hasStatusTooltip} />}
      {Array.isArray(alertType) &&
        alertType.length > 0 &&
        alertType.map((type, idx) => {
          const isWarning = type === 'warning';
          const isError = type === 'error';
          return (
            <PopoverExperience
              size="medium"
              type={type}
              assistiveText={type}
              title={type}
              key={type + idx}
              isWarning={isWarning}
              isError={isError}
              activeError={activeError && isError}
              parentCallback={callbackFunction}
              parentCallbackData={false}
            >
              <ButtonIcon />
            </PopoverExperience>
          );
        })}
      <button
        className="slds-button slds-button_neutral"
        disabled={activeError}
        onClick={onClick}
      >
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="right"
        />{' '}
        Run
      </button>
      <button
        className="slds-button slds-button_neutral"
        disabled={activeError}
        onClick={onClick}
      >
        Save As
      </button>
      <button
        className="slds-button slds-button_brand"
        disabled={activeError}
        onClick={onClick}
      >
        Save
      </button>
    </div>
  );
};

DocumentActions.propTypes = {
  hasStatus: PropTypes.bool,
  hasStatusTooltip: PropTypes.bool,
  hasWarning: PropTypes.bool,
  hasError: PropTypes.bool
};

/**
 * Builder Toolbar
 */
class BuilderToolbar extends Component {
  render() {
    const { hasStatus, hasStatusTooltip, hasWarning, hasError } = this.props;
    return (
      <div className="slds-builder-toolbar" role="toolbar">
        <CanvasActions />
        <EditActions />
        <DocumentActions
          hasStatus={hasStatus}
          hasStatusTooltip={hasStatusTooltip}
          hasWarning={hasWarning}
          hasError={hasError}
        />
      </div>
    );
  }
}

BuilderToolbar.propTypes = {
  hasStatus: PropTypes.bool,
  hasStatusTooltip: PropTypes.bool,
  hasWarning: PropTypes.bool,
  hasError: PropTypes.bool
};

/**
 * Builder Header
 */
class BuilderHeader extends Component {
  render() {
    const {
      showToolbar,
      docName,
      showDropDown,
      openDropDown,
      hasBackTooltip,
      hasStatus,
      hasStatusTooltip,
      hasWarning,
      hasError
    } = this.props;

    return (
      <div className="slds-builder-header_container">
        <header className="slds-builder-header">
          <BackLink hasBackTooltip={hasBackTooltip} />
          <Logo />
          <Nav showDropDown={showDropDown} openDropDown={openDropDown} />
          <Name label={docName} />
          <div className="slds-builder-header__item slds-builder-header__utilities">
            <Settings symbol="settings" />
            <Help />
          </div>
        </header>
        {showToolbar && (
          <BuilderToolbar
            hasStatus={hasStatus}
            hasStatusTooltip={hasStatusTooltip}
            hasWarning={hasWarning}
            hasError={hasError}
          />
        )}
      </div>
    );
  }
}

BuilderHeader.propTypes = {
  showToolbar: PropTypes.bool,
  docName: PropTypes.string,
  showDropDown: PropTypes.bool,
  openDropDown: PropTypes.bool,
  hasBackTooltip: PropTypes.bool,
  hasStatus: PropTypes.bool,
  hasStatusTooltip: PropTypes.bool,
  hasWarning: PropTypes.bool,
  hasError: PropTypes.bool
};

BuilderHeader.defaultProps = {
  showDropDown: true
};

export default BuilderHeader;
