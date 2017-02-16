// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';


///////////////////////////////////////////
// Partial(s)
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
    id: 'heading-large',
    label: 'Large',
    element: <Text className="slds-text-heading--large" />
  },
  {
    id: 'heading-medium',
    label: 'Medium',
    element: <Text className="slds-text-heading--medium" />
  },
  {
    id: 'heading-small',
    label: 'Small',
    element: <Text className="slds-text-heading--small" />
  }
];
