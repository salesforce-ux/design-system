// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShadowDOM from 'react-shadow';
import { ShadowContext } from './config';

class Shadow extends Component {
  constructor() {
    super();
    this.renderComponent = this.renderComponent.bind(this);
    this.renderShadowDom = this.renderShadowDom.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.setStyles = this.setStyles.bind(this);
    this.state = {
      styles: ''
    };
  }

  componentDidMount() {
    this.setStyles();
  }

  // Get styles to inject into style tag
  getStyles() {
    const { includes } = this.props;
    if (!includes) return;
    if (Array.isArray(includes)) {
      includes.map(content => {
        if (typeof content !== 'string') {
          console.error('The CSS you passed into the Shadow is not a string');
          return false;
        }
      });
      // If multiples, reduce to single string to pass to style tag
      return includes.join('');
    } else {
      if (typeof includes !== 'string') {
        console.error('The CSS you passed into the Shadow is not a string');
        return false;
      }
      return includes;
    }
  }

  // Make ref for getStyles in state
  setStyles() {
    if (!this.props.includes) return;
    this.setState({
      styles: this.getStyles()
    });
  }

  // Need to test shadow on and off
  renderShadowDom() {
    const { name, children } = this.props;
    const { styles } = this.state;
    const Namespace = `lightning-${name}`;
    return (
      <ShadowDOM>
        {/* ShadowDOM requires an HTML element as a child, not a React component */}
        <Namespace>
          {children}
          {styles && <style type="text/css">{styles}</style>}
        </Namespace>
      </ShadowDOM>
    );
  }

  // Need to check if shadowMode is true, then render a shadow component or not
  renderComponent() {
    return (
      <ShadowContext.Consumer>
        {/* {(context) => console.log(context)} */}
        {context =>
          context.shadow === true
            ? this.renderShadowDom()
            : this.props.children}
      </ShadowContext.Consumer>
    );
  }

  render() {
    return this.props.shadow === false
      ? this.props.children
      : this.renderComponent();
  }
}

Shadow.contextType = ShadowContext;

Shadow.propTypes = {
  includes: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  shadow: PropTypes.bool
};

export default Shadow;
