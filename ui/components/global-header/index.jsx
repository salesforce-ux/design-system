// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import GlobalActions from './global-actions/';

export const SkipLink = () => (
  <React.Fragment>
    <a
      href="#"
      className="slds-assistive-text slds-assistive-text_focus"
      onClick={e => e.preventDefault()}
    >
      Skip to Navigation
    </a>
    <a
      href="#"
      className="slds-assistive-text slds-assistive-text_focus"
      onClick={e => e.preventDefault()}
    >
      Skip to Main Content
    </a>
  </React.Fragment>
);

export const Logo = () => (
  <div className="slds-global-header__logo">
    <span className="slds-assistive-text">Salesforce</span>
  </div>
);

class GlobalHeader extends Component {
  constructor() {
    super();
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.showNotification = this.showNotification.bind(this);
    this.showIncomingNotification = this.showIncomingNotification.bind(this);

    this.state = {
      favoritesClicked: false,
      showNotification: false,
      notificationCount: 0
    };
  }

  toggleFavorite() {
    this.setState({
      favoritesClicked: !this.state.favoritesClicked
    });
  }

  showNotification() {
    this.setState({
      showNotification: !this.state.showNotification,
      notificationCount: 1
    });
  }

  showIncomingNotification() {
    this.setState({
      notificationCount: ++this.state.notificationCount
    });
  }

  render() {
    return (
      <header
        className={classNames(
          'slds-global-header_container',
          this.props.className
        )}
      >
        <SkipLink />
        <div className="slds-global-header slds-grid slds-grid_align-spread">
          <div className="slds-global-header__item">
            <Logo />
          </div>
          {!this.props.playground && (
            <div className="slds-global-header__item slds-global-header__item_search">
              {this.props.globalSearch}
            </div>
          )}
          <div className="slds-global-header__item">
            <GlobalActions
              toggleFavorite={this.toggleFavorite}
              favoritesClicked={this.state.favoritesClicked}
              favoritesDisabled={this.props.favoritesDisabled}
              showFavoritesPopup={this.props.showFavoritesPopup}
              showNotification={this.state.showNotification}
              notificationCount={this.state.notificationCount}
              showNotificationPopup={this.props.showNotificationPopup}
              showTaskMenu={this.props.showTaskMenu}
            />
          </div>
        </div>
        {this.props.playground && (
          <div className="slds-button-group slds-m-around_medium">
            <button
              className="slds-button slds-button_neutral"
              onClick={() => this.showNotification()}
            >
              Toggle Notification
            </button>
            <button
              className="slds-button slds-button_neutral"
              onClick={() => this.showIncomingNotification()}
            >
              Increase count
            </button>
          </div>
        )}
      </header>
    );
  }
}

export default GlobalHeader;
