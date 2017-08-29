// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div className="slds-box slds-theme_default">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    )
  },
  {
    id: 'shade',
    label: 'Shade',
    element: (
      <div className="slds-box slds-theme_shade">
        <p>
          This is a <strong>default</strong> theme and here is a{' '}
          <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    )
  },
  {
    id: 'texture',
    label: 'Shade with texture',
    element: (
      <div className="slds-box slds-theme_shade slds-theme_alert-texture">
        <p>
          This theme has the <strong>alert texture</strong> added to the default
          theme and has a <a href="javascript:void(0);">link</a>.
        </p>
      </div>
    )
  }
];
