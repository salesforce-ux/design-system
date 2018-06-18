// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import { ContextBar } from './navigation-bar/example';

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
        itemActive
        toggleNavMenu={this.toggleNavMenu}
        hasNavMenuOpen={this.props.hasNavMenuOpen || this.state.hasNavMenuOpen}
        isInteractive
      />
    );
  }
}

export default GlobalNavigation;
