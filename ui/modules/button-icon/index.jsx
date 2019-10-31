// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

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
      hasPopup,
      isPressed,
      title,
      isExpanded,
      type,
      variant,
      position,
      shadow,
      showSource,
      hideSourceOf,
      customization,
      assistiveText,
      onClick
    } = this.props;

    const css = rollupAdoptedStylesheets([common, buttonIcon, customization]);

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

    const buttonPositionClassName = {
      'lwc-button-icon_start': position === 'start',
      'lwc-button-icon_end': position === 'end'
    };

    return (
      <Shadow.on
        name="button-icon"
        includes={css}
        shadow={shadow}
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      >
        <button
          className={classNames(
            'lwc-button-icon',
            buttonVariantClassName,
            buttonStateClassName,
            buttonPositionClassName
          )}
          disabled={disabled}
          aria-pressed={
            type === 'stateful' ? isPressed || this.state.isPressed : null
          }
          aria-haspopup={hasPopup}
          aria-expanded={isExpanded}
          title={title}
          onClick={type === 'stateful' ? this.handlePressed : onClick}
        >
          <Icon
            size={size}
            boundarySize={boundarySize}
            sprite={sprite}
            symbol={symbol}
            assistiveText={assistiveText}
            showSource={showSource}
            hideSourceOf={hideSourceOf}
          />
        </button>
      </Shadow.on>
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
  hasPopup: PropTypes.bool,
  variant: PropTypes.string,
  position: PropTypes.oneOf(['start', 'end']),
  title: PropTypes.string,
  isExpanded: PropTypes.bool,
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array,
  customization: PropTypes.node,
  assistiveText: PropTypes.string
};

export default ButtonIcon;
