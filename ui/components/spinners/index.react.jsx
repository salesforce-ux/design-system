// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

const Spinner = props => (
  <div className="slds-spinner_container">
    <div
      {...props}
      className={classNames('slds-spinner', props.className)}
      role="status"
    >
      <span className="slds-assistive-text">Loading</span>
      <div className="slds-spinner__dot-a" />
      <div className="slds-spinner__dot-b" />
    </div>
    {props.children}
  </div>
);

export default Spinner;
