// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let UtilityIcon = props => {
  const symbol = props.symbol || 'announcement';
  return (
    <span
      className={classNames(
        'slds-icon_container slds-icon-utility-' + symbol,
        props.containerClassName
      )}
      title={
        props.title !== false
          ? props.title || 'Description of icon when needed'
          : null
      }
    >
      <SvgIcon
        className={classNames('slds-icon', props.className)}
        sprite="utility"
        symbol={symbol}
      />
      {props.assistiveText != false ? (
        <span className="slds-assistive-text">
          {props.assistiveText || 'Description of icon when needed'}
        </span>
      ) : null}
    </span>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <UtilityIcon className="slds-icon-text-default" />;

export let examples = [
  {
    id: 'currentColor',
    label: 'Current Color',
    element: <UtilityIcon containerClassName="slds-current-color" />
  }
];
