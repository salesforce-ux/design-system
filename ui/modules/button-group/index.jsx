// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shadow from '../../shared/shadow';

import common from '../common/index.scss';
import buttonGroup from './base/index.scss';

class ButtonGroup extends Component {
  render() {
    const { children, shadow } = this.props;
    return (
      <Shadow
        name="button-group"
        includes={[common, buttonGroup]}
        shadow={shadow}
      >
        <div className="lwc-button-group" role="group">
          <slot>{children}</slot>
        </div>
      </Shadow>
    );
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node
};

export default ButtonGroup;
