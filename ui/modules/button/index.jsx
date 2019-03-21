import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow';

import common from '../common/index.scss';
import button from './base/index.scss';

// import common from '!!css-loader!../common/index.css'; // eslint-disable-line import/no-webpack-loader-syntax
// import button from '!!css-loader!./base/index.css'; // eslint-disable-line import/no-webpack-loader-syntax

class Button extends Component {
  constructor() {
    super();
    this.renderLeftIcon = this.renderLeftIcon.bind(this);
    this.renderRightIcon = this.renderRightIcon.bind(this);
  }

  renderLeftIcon() {
    if (!this.props.leftIcon) return;
    return (
      <span className="sldswc-button__icon-left">{this.props.leftIcon}</span>
    );
  }

  renderRightIcon() {
    if (!this.props.RightIcon) return;
    return (
      <span className="sldswc-button__icon-right">{this.props.RightIcon}</span>
    );
  }

  render() {
    const { variant, size, use, children, disabled } = this.props;

    const classNameList = classNames({
      'sldswc-button': variant !== 'reset',
      'sldswc-button_brand': variant === 'brand',
      'sldswc-button_brand-outline': variant === 'brand-outline',
      'sldswc-button_destructive': variant === 'destructive',
      'sldswc-button_destructive-text': variant === 'destructive-text',
      'sldswc-button_inverse': variant === 'inverse',
      'sldswc-button_neutral': variant === 'neutral',
      'sldswc-button_success': variant === 'success',
      'sldswc-button_full-width': size === 'full-width'
    });

    return (
      <Shadow
        name="button"
        includes={[common, button]}
        shadow={this.props.shadow}
      >
        <React.Fragment>
          {use === 'a' ? (
            <a className={classNameList} href="javascript:void(0);">
              {this.renderLeftIcon()}
              {children}
              {this.renderRightIcon()}
            </a>
          ) : (
            <button
              className={classNameList}
              disabled={disabled}
              ref={el => (this.sadButton = el)}
            >
              {this.renderLeftIcon()}
              {children}
              {this.renderRightIcon()}
            </button>
          )}
        </React.Fragment>
      </Shadow>
    );
  }
}

Button.propTypes = {
  // Slots
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  // Attributes
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['full-width']),
  use: PropTypes.oneOf(['a', 'button']),
  variant: PropTypes.oneOf([
    'brand',
    'brand-outline',
    'destructive',
    'destructive-text',
    'inverse',
    'neutral',
    'reset',
    'success'
  ]),
  shadow: PropTypes.bool
};

Button.defaultProps = {
  use: 'button'
};

export default Button;
