// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shadow from '../../shared/shadow';
import common from '../common/index.scss';
import buttonGroup from './base/index.scss';

class ButtonGroup extends Component {
  // Check position then clone with position prop
  getChildren() {
    const { children } = this.props;
    if (!children.length) return children;
    return children.map((child, index) => {
      if (index === 0) {
        return React.cloneElement(child, {
          key: `start-${index}`,
          position: `start`
        });
      } else if (index === children.length - 1) {
        return React.cloneElement(child, {
          key: `end-${index}`,
          position: `end`
        });
      }
      return child;
    });
  }
  render() {
    const { shadow } = this.props;
    return (
      <Shadow
        name="button-group"
        includes={[common, buttonGroup]}
        shadow={shadow}
      >
        <div className="lwc-button-group" role="group">
          <slot>{this.getChildren()}</slot>
        </div>
      </Shadow>
    );
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node
};

export default ButtonGroup;
