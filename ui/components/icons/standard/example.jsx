// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let StandardIcon = props => {
  const {
    assistiveText,
    className,
    containerClassName,
    isDisabled,
    isGrouped,
    title
  } = props;
  const symbol = props.symbol || 'account';
  return (
    <span
      className={classNames(
        `slds-icon_container slds-icon-standard-${symbol}`,
        containerClassName,
        {
          'slds-avatar-grouped__icon': isGrouped,
          'slds-icon_disabled': isDisabled
        }
      )}
      title={
        title !== false ? title || 'Description of icon when needed' : null
      }
    >
      <SvgIcon
        className={classNames('slds-icon', className)}
        sprite="standard"
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

StandardIcon.propTypes = {
  isGrouped: PropTypes.bool
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'standard-default',
    label: 'Standard - Default',
    element: <StandardIcon />
  }
]

export let examples = [
  {
    id: 'disabled',
    label: 'Standard - Disabled',
    element: <StandardIcon isDisabled />
  }
]
