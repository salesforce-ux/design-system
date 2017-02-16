// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';


export default (
  <div className="demo-only slds-grid" style={{ height: '150px', width: '300px', padding: '2rem' }}>
    <div className="slds-is-fixed">
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', border: '1px solid red', background: '#f4f6f9' }}>An element with fixed positioning is positioned relative to the viewport. If no other positioning values are given (<code>top, right, bottom, left</code>) it will start its positioning relative to where it is in the flow of the page.</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
);
