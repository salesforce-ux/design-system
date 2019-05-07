// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Score from './';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default <Score data-slds-state="positive" />;

// States
export let states = [
  {
    id: 'positive',
    label: 'Positive',
    element: <Score data-slds-state="positive" />
  },
  {
    id: 'negative',
    label: 'Negative',
    element: <Score data-slds-state="negative" />
  }
];
