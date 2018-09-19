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

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: <Button disabled>Button</Button>
  }
];
