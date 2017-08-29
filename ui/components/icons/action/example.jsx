// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let ActionIcon = props => {
  const symbol = props.symbol || 'description';
  return (
    <span
      className={classNames(
        'slds-icon_container slds-icon_container_circle slds-icon-action-' +
          symbol
      )}
      title={props.title || 'Description of icon when needed'}
    >
      <SvgIcon
        className={classNames('slds-icon', props.className)}
        sprite="action"
        symbol={symbol}
      />
      <span className="slds-assistive-text">
        {props.assistiveText || 'Description of icon when needed'}
      </span>
    </span>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <ActionIcon />;
