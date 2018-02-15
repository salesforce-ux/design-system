// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { UtilityIcon } from '../../icons/base/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let VisualPickerMediaObject = props => {
  const symbol = props.symbol || 'knowledge_base';
  const iconContent = props.icon || (
    <UtilityIcon className="slds-icon-text-default" symbol={symbol} />
  );

  return (
    <a
      href="javascript:void(0);"
      className={classNames(
        'slds-box slds-box_link slds-box_x-small slds-media',
        props.className
      )}
    >
      <div className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small">
        {iconContent}
      </div>
      <div className="slds-media__body slds-border_left slds-p-around_small">
        {props.children}
      </div>
    </a>
  );
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <div className="demo-only" style={{ width: '24rem' }}>
    <VisualPickerMediaObject symbol="knowledge_base">
      <h2
        className="slds-truncate slds-text-heading_small"
        title="Share the knowledge"
      >
        Share the knowledge
      </h2>
      <p className="slds-m-top_small">
        Harness your team's collective know-how with our powerful knowledge base
      </p>
    </VisualPickerMediaObject>
  </div>
);
