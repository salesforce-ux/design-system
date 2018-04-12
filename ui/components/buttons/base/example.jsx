// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
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
    isSuccess,
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
          'slds-button_success': isSuccess
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

export let examples = [
  {
    id: 'with-icon-left',
    label: 'With left icon',
    element: (
      <Button isNeutral>
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="download"
        />
        Button Neutral
      </Button>
    )
  },
  {
    id: 'with-icon-right',
    label: 'With right icon',
    element: (
      <Button isNeutral>
        Button Neutral
        <SvgIcon
          className="slds-button__icon slds-button__icon_right"
          sprite="utility"
          symbol="download"
        />
      </Button>
    )
  }
];
