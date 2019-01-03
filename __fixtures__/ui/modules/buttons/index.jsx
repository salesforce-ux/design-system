import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import '../common/index.scss';
// import './base/index.scss';

const Button = props => {
  const classNameList = classNames({
    'dsm-button': props.variant !== 'reset',
    'dsm-button_brand': props.variant === 'brand',
    'dsm-button_brand-outline': props.variant === 'brand-outline',
    'dsm-button_destructive': props.variant === 'destructive',
    'dsm-button_destructive-text': props.variant === 'destructive-text',
    'dsm-button_inverse': props.variant === 'inverse',
    'dsm-button_neutral': props.variant === 'neutral',
    'dsm-reset-button': props.variant === 'reset',
    'dsm-button_success': props.variant === 'success',
    'dsm-button_full-width': props.size === 'full-width'
  });

  const renderLeftIcon = () =>
    props.leftIcon && (
      <span className="dsm-button__icon-left">{props.leftIcon}</span>
    );

  const renderRightIcon = () =>
    props.rightIcon && (
      <span className="dsm-button__icon-left">{props.leftIcon}</span>
    );

  return (
    <React.Fragment>
      {props.use === 'a' ? (
        <a className={classNameList} href="javascript:void(0);">
          {renderLeftIcon()}
          {props.children}
          {renderRightIcon()}
        </a>
      ) : (
        <button className={classNameList} disabled={props.disabled}>
          {renderLeftIcon()}
          {props.children}
          {renderRightIcon()}
        </button>
      )}
    </React.Fragment>
  );
};

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

export { Button };
