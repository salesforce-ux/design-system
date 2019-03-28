// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../shared/svg-icon';
import Shadow from '../../shared/shadow';

import common from '../common/index.scss';
import iconPrimitive from './base/index.scss';

class IconPrimitive extends Component {
  constructor() {
    super();
    this.renderAssistiveText = this.renderAssistiveText.bind(this);
  }

  renderAssistiveText() {
    if (!this.props.assistiveText) return;
    return (
      <span className="lwc-assistive-text">{this.props.assistiveText}</span>
    );
  }

  render() {
    const { sprite, symbol, shadow } = this.props;

    return (
      <Shadow
        name="icon-primitive"
        includes={[common, iconPrimitive]}
        shadow={shadow}
      >
        <SvgIcon className="lwc-svg" sprite={sprite} symbol={symbol} />
        {this.renderAssistiveText()}
      </Shadow>
    );
  }
}

IconPrimitive.propTypes = {
  sprite: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  assistiveText: PropTypes.string,
  shadow: PropTypes.bool
};

export default IconPrimitive;
