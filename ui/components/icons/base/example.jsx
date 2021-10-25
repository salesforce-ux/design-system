// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let UtilityIcon = props => {
  const {
    assistiveText,
    className,
    containerClassName,
    isDisabled,
    size,
    title,
    useCurrentColor
  } = props;
  const symbol = props.symbol || 'announcement';
  return (
    <span
      className={classNames(
        'slds-icon_container slds-icon-utility-' + symbol,
        {
          'slds-current-color': useCurrentColor,
          'slds-icon_disabled': isDisabled
        },
        containerClassName
      )}
      title={
        title !== false
          ? title || 'Description of icon when needed'
          : null
      }
    >
      <SvgIcon
        className={classNames(
          'slds-icon',
          {
            'slds-icon_xx-small': size === 'xx-small',
            'slds-icon_x-small': size === 'x-small',
            'slds-icon_small': size === 'small',
            'slds-icon_large': size === 'large'
          },
          className
        )}
        sprite="utility"
        symbol={symbol}
      />
      {assistiveText !== false ? (
        <span className="slds-assistive-text">
          {assistiveText || 'Description of icon when needed'}
        </span>
      ) : null}
    </span>
  );
};
UtilityIcon.displayName = 'UtilityIcon';
UtilityIcon.propTypes = {
  assistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Controls the size of the icon */
  size: PropTypes.oneOf(['large', 'small', 'x-small', 'xx-small']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Sets the slds-current-color class on the container */
  useCurrentColor: PropTypes.bool
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Base - Default',
    element: <UtilityIcon className="slds-icon-text-default" />
  }
]

export let examples = [
  {
    id: 'currentColor',
    label: 'Base - Current Color',
    element: (
      <span style={{ color: 'purple' }}>
        <UtilityIcon useCurrentColor />
      </span >
    )
  },
  {
    id: 'rtl-flipped',
    label: 'Base - Horizontally flipped icon (RTL)',
    element: (
      <span dir="rtl">
        <UtilityIcon
          containerClassName="slds-icon_flip"
          className="slds-icon-text-default"
          symbol="picklist_type"
          title="List icon"
          assistiveText="List icon"
        />
      </span>
    )
  },
  {
    id: 'size-xxsmall',
    label: 'Base - size xxsmall',
    element: <UtilityIcon useCurrentColor className="slds-icon_xx-small" />
  },
  {
    id: 'size-xsmall',
    label: 'Base - size xsmall',
    element: <UtilityIcon useCurrentColor className="slds-icon_x-small" />
  },
  {
    id: 'size-small',
    label: 'Base - size small',
    element: <UtilityIcon useCurrentColor className="slds-icon_small" />
  },
  {
    id: 'size-large',
    label: 'Base - size large',
    element: <UtilityIcon useCurrentColor className="slds-icon_large" />
  },
  {
    id: 'disabled',
    label: 'Base - disabled',
    element: <UtilityIcon isDisabled />
  },
  {
    id: 'light',
    label: 'Base - light',
    element: <UtilityIcon className="slds-icon-text-light" />
  },
  {
    id: 'text-success',
    label: 'Base - text success',
    element: <UtilityIcon className="slds-icon-text-success" />
  },
  {
    id: 'text-warning',
    label: 'Base - text warning',
    element: <UtilityIcon className="slds-icon-text-warning" />
  },
  {
    id: 'text-error',
    label: 'Base - text error',
    element: <UtilityIcon className="slds-icon-text-error" />
  }
];
