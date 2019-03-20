// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconPrimitive from '../icon-primitive';
import Icon from '../icon';
import Shadow from '../../shared/shadow';

import '../common/index.scss';
import './base/index.scss';

class ButtonIcon extends Component {
  render() {
    const {
      sprite,
      symbol,
      size,
      boundarySize,
      hasBorder,
      hasBackground,
      disabled,
      assistiveText
    } = this.props;

    const buttonBorderClassName = {
      'sldswc-button-icon_bordered': hasBorder
    };

    const buttonBackgroundClassName = {
      'sldswc-button-icon_background': hasBackground
    };

    return (
      <React.Fragment>
        <button
          className={classNames(
            'sldswc-button-icon',
            buttonBorderClassName,
            buttonBackgroundClassName
          )}
          disabled={disabled}
        >
          <Icon
            size={size}
            boundarySize={boundarySize}
            sprite={sprite}
            symbol={symbol}
            assistiveText={assistiveText}
          />
        </button>
      </React.Fragment>
    );
  }
}

ButtonIcon.defaultProps = {
  sprite: 'utility',
  symbol: 'add'
};

export default ButtonIcon;
