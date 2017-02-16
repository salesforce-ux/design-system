// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
    <div className="slds-box slds-theme--default">
      <p>This is a <strong>default</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
    </div>
  },
  {
    id: 'shade',
    label: 'Shade',
    element:
    <div className="slds-box slds-theme--shade">
      <p>This is a <strong>default</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
    </div>
  },
  {
    id: 'texture',
    label: 'Texture',
    element:
    <div className="slds-box slds-theme--shade slds-theme--alert-texture">
      <p>This theme has the <strong>alert texture</strong> added to the default theme and has a <a href="javascript:void(0);">link</a>.</p>
    </div>
  }
];
