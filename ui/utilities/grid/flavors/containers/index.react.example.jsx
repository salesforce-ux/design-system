// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import CodeClass from 'app_modules/site/components/code-class';

export const preview = (
<div className="demo-only demo-container">
  <div className="slds-container--small">
    <div className="slds-box slds-box--small slds-theme--shade">Max Width: 480px</div>
  </div>
  <div className="slds-container--medium" style={{marginTop: '1rem'}}>
    <div className="slds-box slds-box--small slds-theme--shade">Max Width: 768px</div>
  </div>
  <div className="slds-container--large" style={{marginTop: '1rem'}}>
    <div className="slds-box slds-box--small slds-theme--shade">Max Width: 1024px</div>
  </div>
  <div className="slds-container--x-large" style={{marginTop: '1rem'}}>
    <div className="slds-box slds-box--small slds-theme--shade">Max Width: 1280px</div>
  </div>
  <div className="slds-container--fluid" style={{marginTop: '1rem'}}>
    <div className="slds-box slds-box--small slds-theme--shade">Width 100%</div>
  </div>
  <div className="slds-container--left slds-container--small" style={{marginTop: '1rem'}}>
    <div className="slds-box slds-box--small slds-theme--shade">Left Aligned</div>
  </div>
  <div className="slds-container--center slds-container--small" style={{marginTop: '1rem'}}>
    <div className="slds-box slds-box--small slds-theme--shade">Center Aligned</div>
  </div>
  <div className="slds-container--right slds-container--small" style={{marginTop: '1rem'}}>
    <div className="slds-box slds-box--small slds-theme--shade">Right Aligned</div>
  </div>
</div>
);

export const code = (
<div className="demo-only demo-container">
  <div className="slds-container--small">Contents go here.</div>
  <div className="slds-container--medium">Contents go here.</div>
  <div className="slds-container--large">Contents go here.</div>
  <div className="slds-container--x-large">Contents go here.</div>
  <div className="slds-container--fluid">Contents go here.</div>
  <div className="slds-container--left slds-container--small">Contents go here.</div>
  <div className="slds-container--center slds-container--small">Contents go here.</div>
  <div className="slds-container--right slds-container--small">Contents go here.</div>
</div>
);
