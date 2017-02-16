// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

const Lorem = props =>
  <p>
    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt
    aute id consequat veniam incididunt duis in sint irure nisi.
    Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
  </p>;

export const preview = (
<div className="demo-only" style={{height: '240px'}}>
  <div className="slds-scrollable--x">
    <div className="slds-grid slds-grid--overflow">
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
      <div className="slds-col"><Lorem /></div>
    </div>
  </div>
</div>
);

export const code = (
<div className="slds-scrollable--x">
  Scrollable Content Here
</div>
);
