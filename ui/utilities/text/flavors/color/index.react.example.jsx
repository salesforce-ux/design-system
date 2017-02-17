// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Text = props =>
  <div className={props.className}>
    The quick brown fox jumps over the lazy dog.
  </div>;


///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'text-color-default',
    label: 'Default',
    element: <Text className="slds-text-color--default" />
  },
  {
    id: 'text-color-weak',
    label: 'Weak',
    element: <Text className="slds-text-color--weak" />
  },
  {
    id: 'text-color-error',
    label: 'Error',
    element: <Text className="slds-text-color--error" />
  },
  {
    id: 'text-color-inverse',
    label: 'Inverse',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <Text className="slds-text-color--inverse" />
      </div>
  },
  {
    id: 'text-color-inverse-weak',
    label: 'Inverse - Weak',
    element:
      <div className="demo-only" style={{ padding: '0.5rem', background: '#16325c' }}>
        <Text className="slds-text-color--inverse-weak" />
      </div>
  }
];
