// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let StatefulButton = props => (
  <button
    className={classNames('slds-button slds-button_stateful', props.className)}
    disabled={props.disabled}
    aria-live="assertive"
  >
    <span className="slds-text-not-selected">
      <SvgIcon
        className="slds-button__icon_stateful slds-button__icon_left"
        sprite="utility"
        symbol="add"
      />
      Follow
    </span>
    <span className="slds-text-selected">
      <SvgIcon
        className="slds-button__icon_stateful slds-button__icon_left"
        sprite="utility"
        symbol="check"
      />
      Following
    </span>
    <span className="slds-text-selected-focus">
      <SvgIcon
        className="slds-button__icon_stateful slds-button__icon_left"
        sprite="utility"
        symbol="close"
      />
      Unfollow
    </span>
  </button>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <StatefulButton className="slds-button_neutral slds-not-selected" />
);
