// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

export let StandardIcon = props => {
  const symbol = props.symbol || 'account';
  return (
    <span
      className={ classNames('slds-icon_container slds-icon-standard-' + symbol, props.containerClassName) }
      title={ props.title || 'Description of icon when needed' }
    >
      <SvgIcon
        className={ classNames('slds-icon', props.className) }
        sprite="standard"
        symbol={ symbol }
      />
      <span className="slds-assistive-text">{ props.assistiveText || 'Description of icon' }</span>
    </span>
  );
};

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <StandardIcon />
);
