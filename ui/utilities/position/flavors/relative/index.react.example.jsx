// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export default (
  <div className="demo-only slds-grid" style={{ height: '150px', width: '300px', padding: '2rem' }}>
    <div className="slds-is-relative">
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', border: '1px solid red', background: '#f4f6f9' }}>An absolutely positioned element is positioned relative to the nearest positioned parent. The <code>.slds-is-relative</code> class can be used to give the parent or ancestor positioning.</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
);
