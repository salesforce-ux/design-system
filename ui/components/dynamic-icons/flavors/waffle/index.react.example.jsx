// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

export let WaffleIcon = props =>
  <button
    {...props}
    className={classNames('slds-button slds-icon-waffle_container', props.className)}
    title="Description of the icon when needed">
    <div className="slds-icon-waffle">
      <div className="slds-r1"></div>
      <div className="slds-r2"></div>
      <div className="slds-r3"></div>
      <div className="slds-r4"></div>
      <div className="slds-r5"></div>
      <div className="slds-r6"></div>
      <div className="slds-r7"></div>
      <div className="slds-r8"></div>
      <div className="slds-r9"></div>
    </div>
    <span className="slds-assistive-text">Open App Launcher</span>
  </button>;

export default (
  <div className="demo-only" style={{ height: '2rem' }}>
    <WaffleIcon />
  </div>
);
