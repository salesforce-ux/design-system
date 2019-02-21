import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../common/index.scss';
import './base/index.scss';

class Button extends Component {
  constructor() {
    super();
    this.renderLeftIcon = this.renderLeftIcon.bind(this);
    this.renderRightIcon = this.renderRightIcon.bind(this);
  }

  renderLeftIcon() {
    if (!this.props.leftIcon) return;
    return <span className="dsm-button__icon-left">{this.props.leftIcon}</span>;
  }

  renderRightIcon() {
    if (!this.props.RightIcon) return;
    return (
      <span className="dsm-button__icon-right">{this.props.RightIcon}</span>
    );
  }

  render() {
    const { variant, size, use, children, disabled } = this.props;

    const classNameList = classNames({
      'dsm-button': variant !== 'reset',
      'dsm-button_brand': variant === 'brand',
      'dsm-button_brand-outline': variant === 'brand-outline',
      'dsm-button_destructive': variant === 'destructive',
      'dsm-button_destructive-text': variant === 'destructive-text',
      'dsm-button_inverse': variant === 'inverse',
      'dsm-button_neutral': variant === 'neutral',
      'dsm-reset-button': variant === 'reset',
      'dsm-button_success': variant === 'success',
      'dsm-button_full-width': size === 'full-width'
    });

    return (
      <React.Fragment>
        {use === 'a' ? (
          <a className={classNameList} href="javascript:void(0);">
            {this.renderLeftIcon()}
            {children}
            {this.renderRightIcon()}
          </a>
        ) : (
          <button className={classNameList} disabled={disabled}>
            {this.renderLeftIcon()}
            {children}
            {this.renderRightIcon()}
          </button>
        )}
      </React.Fragment>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
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
  ])
};

Button.defaultProps = {
  use: 'button'
};

export default Button;
