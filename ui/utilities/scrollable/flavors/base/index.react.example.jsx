// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

const Lorem = props =>
  <p>
    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.
    Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
    quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.
  </p>;

export const preview = (
<div className="demo-only">
  <div className="slds-scrollable" style={{height: '240px', padding: '1rem'}}>
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
<div className="slds-scrollable">
  Scrollable Content Here
</div>
);
