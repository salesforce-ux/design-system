// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Score from './';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default [
  {
    id: 'default',
    label: 'Score – default',
    element: (
      <Score data-slds-state="positive" />
    )
  }
];

// States
export let states = [
  {
    id: 'positive',
    label: 'Score – Positive',
    element: <Score data-slds-state="positive" />
  },
  {
    id: 'negative',
    label: 'Score – Negative',
    element: <Score data-slds-state="negative" />
  }
];
