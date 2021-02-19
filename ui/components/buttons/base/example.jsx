// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CannotBeSetWith } from '../../../shared/helpers';

const KX_SCOPE_BUTTON = 'button';
const KX_TYPE_RIPPLE = 'ripple';
const KX_TYPE_UNDERLINE = 'underline';

export const Button = props => {
  const {
    className,
    disabled,
    isReset,
    isBrand,
    isNeutral,
    isOutlineBrand,
    isInverse,
    isDestructive,
    isTextDestructive,
    isSuccess,
    isFullWidth,
    isStretch,
    isFirst,
    isMiddle,
    isLast,
    onClick,
    kxScope,
    kxType,
    use,
    innerRef,
    ...rest
  } = props;
  const pointerRef = { current: { offsetX: '50%', offsetY: '50%' } };
  const requestRef = { current: null };
  const previousTimeRef = { current: null };
  const buttonRef = innerRef || { current: null };
  const kxTypeUnderline = kxType && kxType === KX_TYPE_UNDERLINE;
  const kxTypeRipple = kxType && kxType === KX_TYPE_RIPPLE;

  let classNameList = classNames(
    'slds-button',
    {
      'slds-button_reset': isReset,
      'slds-button_brand': isBrand,
      'slds-button_neutral': isNeutral,
      'slds-button_outline-brand': isOutlineBrand,
      'slds-button_inverse': isInverse,
      'slds-button_destructive': isDestructive,
      'slds-button_text-destructive': isTextDestructive,
      'slds-button_success': isSuccess,
      'slds-button_full-width': isFullWidth,
      'slds-button_stretch': isStretch,
      'slds-button_first': isFirst,
      'slds-button_middle': isMiddle,
      'slds-button_last': isLast
    },
    className
  );

  const setCoordProps = element => {
    const { offsetX, offsetY } = pointerRef.current;
    element.style.setProperty(
      '--slds-kx-button-pointer-position-x',
      `${offsetX}px`
    );
    if (!kxTypeUnderline)
      element.style.setProperty(
        '--slds-kx-button-pointer-position-y',
        `${offsetY}px`
      );
  };

  const handleMove = ({ offsetX, offsetY }) => {
    pointerRef.current = { offsetX, offsetY };
  };

  const handleEnter = () => {
    requestRef.current = window.requestAnimationFrame(timestamp => {
      animate(timestamp, buttonRef.current);
    });
    buttonRef.current.addEventListener('mousemove', handleMove);
  };

  const handleLeave = () => {
    window.cancelAnimationFrame(requestRef.current);
    buttonRef.current.removeEventListener('mousemove', handleMove);
  };

  const animate = (timestamp, element) => {
    if (previousTimeRef.current !== undefined) setCoordProps(element);
    previousTimeRef.current = timestamp;
    requestRef.current = window.requestAnimationFrame(timestamp => {
      animate(timestamp, element);
    });
  };

  const setIsRippling = (element, doRipple) => {
    element.classList.toggle('slds-kx-is-animating-from-click', doRipple);
  };

  const handleClick = event => {
    const { target: buttonElement } = event;
    event.persist();
    if (onClick) onClick(event);
    if (buttonElement.tagName === 'A') event.preventDefault();
    if (!kxTypeRipple) return; // conditionally short circuit the handler since it is not kinetics type ripple
    const { offsetX, offsetY } = event.nativeEvent;
    pointerRef.current = { offsetX, offsetY };
    setCoordProps(buttonElement);
    setIsRippling(buttonElement, true);
  };

  const handleRippleEnd = event => {
    setIsRippling(event.target, false);
  };

  return (
    <React.Fragment>
      {use === 'a' ? (
        <a
          ref={buttonRef}
          className={classNameList}
          href="#"
          {...rest}
          onClick={handleClick}
          {...kxScope && { 'kx-scope': kxScope }}
          {...kxType && { 'kx-type': kxType }}
          {...kxScope &&
            kxScope.startsWith(KX_SCOPE_BUTTON) && {
              onMouseEnter: handleEnter,
              onMouseLeave: handleLeave
            }}
          {...kxType &&
            kxType === KX_TYPE_RIPPLE && { onAnimationEnd: handleRippleEnd }}
        >
          {props.children}
        </a>
      ) : (
        <button
          ref={buttonRef}
          className={classNameList}
          disabled={disabled}
          {...rest}
          onClick={handleClick}
          {...kxScope && { 'kx-scope': kxScope }}
          {...kxType && { 'kx-type': kxType }}
          {...kxScope &&
            kxScope.startsWith(KX_SCOPE_BUTTON) && {
              onMouseEnter: handleEnter,
              onMouseLeave: handleLeave
            }}
          {...kxType &&
            kxType === KX_TYPE_RIPPLE && { onAnimationEnd: handleRippleEnd }}
        >
          {props.children}
        </button>
      )}
    </React.Fragment>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isReset: PropTypes.bool,
  isBrand: PropTypes.bool,
  isNeutral: PropTypes.bool,
  isOutlineBrand: PropTypes.bool,
  isInverse: PropTypes.bool,
  isDestructive: PropTypes.bool,
  isTextDestructive: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isStretch: PropTypes.bool,
  isFirst: PropTypes.bool,
  isMiddle: PropTypes.bool,
  isLast: PropTypes.bool,
  kxScope: PropTypes.string,
  kxType: PropTypes.string,
  use: CannotBeSetWith('disabled', PropTypes.oneOf(['a'])),
  children: PropTypes.node
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <Button>Button</Button>;

export let examples = [
  {
    id: 'base-kinetics',
    label: 'Base (Kinetics)',
    element: (
      <Button kxScope="button" kxType="underline">
        Kinetics Button
      </Button>
    )
  },
  {
    id: 'neutral',
    label: 'Neutral',
    element: <Button isNeutral>Neutral Button</Button>
  },
  {
    id: 'neutral-kinetics',
    label: 'Neutral (Kinetics)',
    element: (
      <Button isNeutral kxScope="button-neutral" kxType="ripple">
        Kinetics Neutral Button
      </Button>
    )
  },
  {
    id: 'brand',
    label: 'Brand',
    element: <Button isBrand>Brand Button</Button>
  },
  {
    id: 'brand-kinetics',
    label: 'Brand (Kinetics)',
    element: (
      <Button isBrand kxScope="button-brand" kxType="ripple">
        Kinetics Brand Button
      </Button>
    )
  },
  {
    id: 'outline-brand',
    label: 'Outline Brand',
    element: <Button isOutlineBrand>Outline Brand Button</Button>
  },
  {
    id: 'outline-brand-kinetics',
    label: 'Outline Brand (Kinetics)',
    element: (
      <Button isOutlineBrand kxScope="button-outline" kxType="ripple">
        Kinetics Outline Brand Button
      </Button>
    )
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element: (
      <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
        <Button isInverse>Inverse Button</Button>
      </div>
    )
  },
  {
    id: 'inverse-kinetics',
    label: 'Inverse (Kinetics)',
    element: (
      <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
        <Button isInverse kxScope="button-neutral" kxType="ripple">
          Kinetics Inverse Button
        </Button>
      </div>
    )
  },
  {
    id: 'destructive',
    label: 'Destructive',
    element: <Button isDestructive>Destructive Button</Button>
  },
  {
    id: 'destructive-kinetics',
    label: 'Destructive (Kinetics)',
    element: (
      <Button isDestructive kxScope="button-filled" kxType="ripple">
        Kinetics Destructive Button
      </Button>
    )
  },
  {
    id: 'text-destructive',
    label: 'Text Destructive',
    element: <Button isTextDestructive>Text Destructive Button</Button>
  },
  {
    id: 'success',
    label: 'Success',
    element: <Button isSuccess>Success Button</Button>
  },
  {
    id: 'success-kinetics',
    label: 'Success (Kinetics)',
    element: (
      <Button isSuccess kxScope="button-filled" kxType="ripple">
        Kinetics Success Button
      </Button>
    )
  },
  {
    id: 'stretch',
    label: 'Stretch',
    element: (
      <Button isStretch isNeutral>
        Stretched Neutral Button
      </Button>
    )
  },
  {
    id: 'stretch-kinetics',
    label: 'Stretch (Kinetics)',
    element: (
      <Button isStretch isNeutral kxScope="button-neutral" kxType="ripple">
        Kinetics Stretched Neutral Button
      </Button>
    )
  },
  {
    id: 'full-width',
    label: 'Full Width',
    element: (
      <Button isFullWidth isNeutral>
        Full Width Neutral Button
      </Button>
    )
  },
  {
    id: 'base-link',
    label: 'Base as a Link',
    element: <Button use="a">Base Link</Button>
  },
  {
    id: 'neutral-link',
    label: 'Neutral as a Link',
    element: (
      <Button use="a" isNeutral>
        Neutral Link
      </Button>
    )
  },
  {
    id: 'brand-link',
    label: 'Brand as a Link',
    element: (
      <Button use="a" isBrand>
        Brand Link
      </Button>
    )
  },
  {
    id: 'outline-brand-link',
    label: 'Outline Brand as a Link',
    element: (
      <Button use="a" isOutlineBrand>
        Outline Brand Link
      </Button>
    )
  },
  {
    id: 'inverse-link',
    label: 'Inverse as a Link',
    element: (
      <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
        <Button use="a" isInverse>
          Inverse Link
        </Button>
      </div>
    )
  },
  {
    id: 'destructive-link',
    label: 'Destructive as a Link',
    element: (
      <Button use="a" isDestructive>
        Destructive Link
      </Button>
    )
  },
  {
    id: 'text-destructive-link',
    label: 'Text Destructive as a Link',
    element: (
      <Button use="a" isTextDestructive>
        Text Destructive Link
      </Button>
    )
  },
  {
    id: 'success-link',
    label: 'Success as a Link',
    element: (
      <Button use="a" isSuccess>
        Success Link
      </Button>
    )
  },
  {
    id: 'stretch-link',
    label: 'Stretch as a Link',
    element: (
      <Button use="a" isStretch isNeutral>
        Stretched Neutral Link
      </Button>
    )
  },
  /**
   * This is not best practice, use .slds-button_full-width or .slds-button_stretch
   * instead, this accounts for test coverage of legacy overrides by customers.
   */
  {
    id: 'base-centering',
    label: 'Base Centering',
    element: (
      <Button isNeutral style={{ width: '400px' }}>
        I should be centered
      </Button>
    )
  },
  {
    id: 'reset',
    label: 'Reset',
    element: <Button isReset>Reset Button</Button>
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: <Button disabled>Button</Button>
  },
  {
    id: 'base-kinetics-disabled',
    label: 'Base (Kinetics) - Disabled',
    element: (
      <Button kxScope="button" kxType="underline" disabled>
        Kinetics Button
      </Button>
    )
  },
  {
    id: 'neutral-disabled',
    label: 'Neutral - Disabled',
    element: (
      <Button isNeutral disabled>
        Neutral Button
      </Button>
    )
  },
  {
    id: 'neutral-kinetics-disabled',
    label: 'Neutral (Kinetics) - Disabled',
    element: (
      <Button isNeutral kxScope="button-neutral" kxType="ripple" disabled>
        Kinetics Neutral Button
      </Button>
    )
  },
  {
    id: 'brand-disabled',
    label: 'Brand - Disabled',
    element: (
      <Button isBrand disabled>
        Brand Button
      </Button>
    )
  },
  {
    id: 'brand-kinetics-disabled',
    label: 'Brand (Kinetics) - Disabled',
    element: (
      <Button isBrand kxScope="button-brand" kxType="ripple" disabled>
        Kinetics Brand Button
      </Button>
    )
  },
  {
    id: 'outline-brand-disabled',
    label: 'Outline Brand - Disabled',
    element: (
      <Button isOutlineBrand disabled>
        Outline Brand Button
      </Button>
    )
  },
  {
    id: 'outline-brand-kinetics-disabled',
    label: 'Outline Brand (Kinetics) - Disabled',
    element: (
      <Button isOutlineBrand kxScope="button-outline" kxType="ripple" disabled>
        Kinetics Outline Brand Button
      </Button>
    )
  },
  {
    id: 'inverse-disabled',
    label: 'Inverse - Disabled',
    element: (
      <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
        <Button isInverse disabled>
          Inverse Button
        </Button>
      </div>
    )
  },
  {
    id: 'destructive-disabled',
    label: 'Destructive - Disabled',
    element: (
      <Button isDestructive disabled>
        Destructive Button
      </Button>
    )
  },
  {
    id: 'text-destructive-disabled',
    label: 'Text Destructive - Disabled',
    element: (
      <Button isTextDestructive disabled>
        Text Destructive Button
      </Button>
    )
  },
  {
    id: 'success-disabled',
    label: 'Success - Disabled',
    element: (
      <Button isSuccess disabled>
        Success Button
      </Button>
    )
  }
];
