// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Shadow from '../../shared/shadow';

import common from '../common/index.scss';
import buttonIcon from './base/index.scss';

class ButtonIcon extends Component {
  constructor() {
    super();
    this.handlePressed = this.handlePressed.bind(this);
    this.state = {
      isPressed: false
    };
  }
  handlePressed() {
    this.setState({
      isPressed: !this.state.isPressed
    });
  }
  render() {
    const {
      sprite,
      symbol,
      size,
      boundarySize,
      disabled,
      isPressed,
      title,
      type,
      variant,
      shadow,
      customization,
      assistiveText,
      onClick
    } = this.props;

    const buttonVariantClassName = {
      'lwc-button-icon_neutral': variant === 'neutral',
      'lwc-button-icon_neutral-outline': variant === 'neutral-outline',
      'lwc-button-icon_menu': variant === 'menu',
      'lwc-button-icon_brand': variant === 'brand',
      'lwc-button-icon_inverse': variant === 'inverse'
    };

    const buttonStateClassName = {
      'lwc-is-pressed': isPressed || this.state.isPressed
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
            buttonStateClassName
          )}
          disabled={disabled}
          aria-pressed={
            type === 'stateful' ? isPressed || this.state.isPressed : null
          }
          title={title}
          onClick={type === 'stateful' ? this.handlePressed : onClick}
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
  isPressed: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  title: PropTypes.string,
  shadow: PropTypes.bool,
  customization: PropTypes.node,
  assistiveText: PropTypes.string
};

export default ButtonIcon;
