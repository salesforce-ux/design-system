// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Shadow from '../../shared/shadow';

import '../common/index.scss';
import './base/index.scss';

import common from '!!css-loader!../common/index.css'; // eslint-disable-line import/no-webpack-loader-syntax
import buttonIcon from '!!css-loader!./base/index.css'; // eslint-disable-line import/no-webpack-loader-syntax

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
      variant,
      shadow,
      customization,
      assistiveText
    } = this.props;

    const buttonVariantClassName = {
      'lwc-button-icon_brand': variant === 'brand'
    };

    const buttonBorderClassName = {
      'lwc-button-icon_bordered': hasBorder
    };

    const buttonBackgroundClassName = {
      'lwc-button-icon_background': hasBackground
    };

    return (
      <Shadow
        name="button-icon"
        includes={[common, buttonIcon, customization]}
        shadow={shadow}
      >
        <button
          className={classNames(
            'lwc-button-icon',
            buttonVariantClassName,
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
      </Shadow>
    );
  }
}

ButtonIcon.defaultProps = {
  sprite: 'utility',
  symbol: 'add'
};

ButtonIcon.propTypes = {
  sprite: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  size: PropTypes.string,
  boundarySize: PropTypes.string,
  hasBorder: PropTypes.bool,
  hasBackground: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  shadow: PropTypes.bool,
  customization: PropTypes.node,
  assistiveText: PropTypes.string
};

export default ButtonIcon;
