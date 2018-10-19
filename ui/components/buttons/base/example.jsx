// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

export let Button = props => {
  const {
    className,
    disabled,
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
    ...rest
  } = props;

  return (
    <button
      className={classNames(
        'slds-button',
        {
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
      )}
      disabled={disabled}
      {...rest}
    >
      {props.children}
    </button>
  );
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <Button>Button</Button>;

export let examples = [
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
