// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ShadowContext } from './config';

class ModeToggle extends Component {
  render() {
    return (
      <ShadowContext.Consumer>
        {({ shadow, setShadowMode }) => (
          <div>
            <input
              type="checkbox"
              id="shadow-toggle"
              onChange={() => setShadowMode()}
              checked={shadow}
            />
            <label htmlFor="shadow-toggle">
              Toggle shadowDom {shadow ? 'Off' : 'On'}
            </label>
          </div>
        )}
      </ShadowContext.Consumer>
    );
  }
}

class ShadowExample extends Component {
  constructor() {
    super();
    this.setShadowMode = this.setShadowMode.bind(this);
    this.state = {
      shadow: true,
      setShadowMode: this.setShadowMode
    };
  }

  setShadowMode() {
    this.setState({
      shadow: !this.state.shadow
    });
  }

  render() {
    return (
      <ShadowContext.Provider value={this.state}>
        {this.props.children}
        {this.props.hasShadowToggle && <ModeToggle />}
      </ShadowContext.Provider>
    );
  }
}

ShadowExample.propTypes = {
  children: PropTypes.node,
  hasShadowToggle: PropTypes.bool
};

ShadowExample.contextType = ShadowContext;

export default ShadowExample;
