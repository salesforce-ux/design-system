import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import button from './base/index.scss';

const Button = props => {
  const {
    name,
    variant,
    size,
    use,
    children,
    disabled,
    position,
    shadow,
    showSource,
    hideSourceOf,
    customization,
    ariaControls,
    ariaExpanded,
    ariaPressed,
    ariaLabel,
    ariaHaspopup,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur
  } = props;

  const css = rollupAdoptedStylesheets([common, button, customization]);

  const variantClassName = {
    'lwc-button': variant !== 'reset',
    'lwc-button_brand': variant === 'brand',
    'lwc-button_brand-outline': variant === 'brand-outline',
    'lwc-button_destructive': variant === 'destructive',
    'lwc-button_destructive-text': variant === 'destructive-text',
    'lwc-button_inverse': variant === 'inverse',
    'lwc-button_neutral': variant === 'neutral',
    'lwc-button_success': variant === 'success',
    'lwc-button_stateful': variant === 'stateful'
  };

  const sizeClassName = {
    'lwc-button_full-width': size === 'full-width'
  };

  const positionClassName = {
    'lwc-button_start': position === 'start',
    'lwc-button_end': position === 'end'
  };

  const computedClassNames = classNames(
    variantClassName,
    sizeClassName,
    positionClassName
  );

  const renderLeftIcon = () => {
    if (!props.leftIcon) return;

    const leftIcon = React.cloneElement(props.leftIcon, {
      showSource: showSource,
      hideSourceOf: hideSourceOf
    });

    return <span className="lwc-button__icon-left">{leftIcon}</span>;
  };

  const renderRightIcon = () => {
    if (!props.rightIcon) return;

    const rightIcon = React.cloneElement(props.rightIcon, {
      showSource: showSource,
      hideSourceOf: hideSourceOf
    });

    return <span className="lwc-button__icon-right">{rightIcon}</span>;
  };

  return (
    <Shadow.on
      name={name}
      includes={css}
      shadow={shadow}
      showSource={showSource}
      hideSourceOf={hideSourceOf}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {use === 'a' ? (
        <a
          className={computedClassNames}
          href="#"
          onClick={e => e.preventDefault()}
        >
          {renderLeftIcon()}
          {children}
          {renderRightIcon()}
        </a>
      ) : (
        <button
          className={computedClassNames}
          disabled={disabled}
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          aria-pressed={ariaPressed}
          aria-label={ariaLabel}
          aria-haspopup={ariaHaspopup}
        >
          {renderLeftIcon()}
          {children}
          {renderRightIcon()}
        </button>
      )}
    </Shadow.on>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  // Slots
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  // Attributes
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['full-width']),
  position: PropTypes.oneOf(['start', 'end']),
  use: PropTypes.oneOf(['a', 'button']),
  variant: PropTypes.oneOf([
    'brand',
    'brand-outline',
    'destructive',
    'destructive-text',
    'inverse',
    'neutral',
    'reset',
    'success',
    'stateful'
  ]),
  // Events
  handleClick: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  // ARIA
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaPressed: PropTypes.bool,
  ariaLabel: PropTypes.string,
  // Shadow
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

Button.defaultProps = {
  name: 'button',
  use: 'button'
};

// createElement("button", css);
// customElements.define("lightning-button", constructor["button"]); // eslint-disable-line no-undef

export default Button;
