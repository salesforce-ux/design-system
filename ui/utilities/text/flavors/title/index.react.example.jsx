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
    id: 'heading-title',
    label: 'Normal',
    element: <Text className="slds-text-title" />
  },
  {
    id: 'heading-title--caps',
    label: 'Uppercase',
    element: <Text className="slds-text-title--caps" />
  }
];
