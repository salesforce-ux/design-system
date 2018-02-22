// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import SvgIcon from '../../shared/svg-icon';
import ButtonIcon from '../button-icons/';
import { UtilityIcon } from '../icons/base/example';

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
 * Navigation list in header
 */
const Nav = props => (
  <nav className="slds-builder-header__item slds-builder-header__nav">
    <ul className="slds-builder-header__nav-list">
      <NavItem symbol="settings" />
      <NavItem symbol="page" dropdown />
    </ul>
  </nav>
);

/**
 * Navigation item in header
 */
const NavItem = props => (
  <li className="slds-builder-header__nav-item">
    {!props.dropdown ? (
      <a
        href="javascript:void(0);"
        className="slds-builder-header__item-action slds-media slds-media_center"
      >
        <span className="slds-media__figure">
          <UtilityIcon
            containerClassName="slds-current-color"
            className="slds-icon_x-small"
            symbol={props.symbol}
            assistiveText={false}
            title={false}
          />
        </span>
        <span className="slds-media__body">
          <span className="slds-truncate" title="Link">
            Link
          </span>
        </span>
      </a>
    ) : (
      <button
        className="slds-button slds-builder-header__item-action slds-media slds-media_center"
        aria-haspopup="true"
        title="Click to open menu"
      >
        <span className="slds-media__figure">
          <UtilityIcon
            containerClassName="slds-current-color"
            className="slds-icon_x-small"
            symbol={props.symbol}
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
    )}
  </li>
);

/**
 * Document Name
 */
const Name = props => (
  <div className="slds-builder-header__item">
    <h1 className="slds-builder-header__item-label">Page Type</h1>
  </div>
);

/**
 * Back Link
 */
const BackLink = props => (
  <div className="slds-builder-header__utilities-item">
    <a
      href="javascript:void(0);"
      className="slds-builder-header__item-action slds-media slds-media_center"
    >
      <div className="slds-media__figure">
        <UtilityIcon
          containerClassName="slds-current-color"
          className="slds-icon_x-small"
          symbol="back"
          assistiveText={false}
          title={false}
        />
      </div>
      <div className="slds-media__body">Back</div>
    </a>
  </div>
);

/**
 * Help Link
 */
const Help = props => (
  <div className="slds-builder-header__utilities-item">
    <a
      href="javascript:void(0);"
      className="slds-builder-header__item-action slds-media slds-media_center"
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
 * Toolbar Canvas Button Icons
 */
const CanvasActions = props => (
  <div className="slds-builder-toolbar__item-group" aria-label="Canvas Actions">
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
 * Toolbar Edit Button Icons
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
  </div>
);

/**
 * Toolbar document actions
 */
const DocumentActions = props => (
  <div className="slds-builder-toolbar__actions" aria-label="Document actions">
    <button className="slds-button slds-button_neutral">
      <SvgIcon
        className="slds-button__icon slds-button__icon_left"
        sprite="utility"
        symbol="right"
      />{' '}
      Run
    </button>
    <button className="slds-button slds-button_neutral">Save As</button>
    <button className="slds-button slds-button_brand">Save</button>
  </div>
);

/**
 * Builder Toolbar
 */
class BuilderToolbar extends Component {
  render() {
    return (
      <div className="slds-builder-toolbar" role="toolbar">
        <CanvasActions />
        <EditActions />
        <DocumentActions />
      </div>
    );
  }
}

/**
 * Builder Header
 */
class BuilderHeader extends Component {
  render() {
    const { showToolbar } = this.props;
    return (
      <div className="slds-builder-header_container">
        <header className="slds-builder-header">
          <Logo />
          <Nav />
          <Name />
          <div className="slds-builder-header__item slds-builder-header__utilities">
            <BackLink />
            <Help />
          </div>
        </header>
        {showToolbar && <BuilderToolbar />}
      </div>
    );
  }
}

export default BuilderHeader;
