// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CannotBeSetWith } from '../../../shared/helpers';

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
    kxScopeButton,
    kxTypeUnderline,
    use,
    innerRef,
    ...rest
  } = props;
  const pointerRef = { current: { offsetX: '50%', offsetY: '50%' } };
  const requestRef = { current: null };
  const previousTimeRef = { current: null };
  const buttonRef = innerRef || { current: null };

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

  const handleEnter = event => {
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

  return (
    <React.Fragment>
      {use === 'a' ? (
        <a
          ref={buttonRef}
          className={classNameList}
          href="#"
          {...rest}
          onClick={e => e.preventDefault()}
          {...kxScopeButton && {
            'kx-scope': 'button',
            onMouseEnter: handleEnter,
            onMouseLeave: handleLeave
          }}
          {...kxTypeUnderline && { 'kx-type': 'underline' }}
        >
          {props.children}
        </a>
      ) : (
        <button
          ref={buttonRef}
          className={classNameList}
          disabled={disabled}
          {...rest}
          onClick={e => e.preventDefault()}
          {...kxScopeButton && {
            'kx-scope': 'button',
            onMouseEnter: handleEnter,
            onMouseLeave: handleLeave
          }}
          {...kxTypeUnderline && { 'kx-type': 'underline' }}
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
      <Button kxScopeButton kxTypeUnderline>
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
    id: 'brand',
    label: 'Brand',
    element: <Button isBrand>Brand Button</Button>
  },
  {
    id: 'outline-brand',
    label: 'Outline Brand',
    element: <Button isOutlineBrand>Outline Brand Button</Button>
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
    id: 'destructive',
    label: 'Destructive',
    element: <Button isDestructive>Destructive Button</Button>
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
    id: 'stretch',
    label: 'Stretch',
    element: (
      <Button isStretch isNeutral>
        Stretched Neutral Button
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
    id: 'neutral-disabled',
    label: 'Neutral - Disabled',
    element: (
      <Button isNeutral disabled>
        Neutral Button
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
    id: 'outline-brand-disabled',
    label: 'Outline Brand - Disabled',
    element: (
      <Button isOutlineBrand disabled>
        Outline Brand Button
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
