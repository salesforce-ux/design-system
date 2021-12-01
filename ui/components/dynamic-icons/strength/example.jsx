// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Strength from './';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default [
  {
    id: 'default',
    label: 'Strength – default',
    element: (
      <Strength data-slds-strength="0" />
    )
  }
];

// States
export let states = [
  {
    id: 'strength-1',
    label: 'Strength: 1',
    element: <Strength data-slds-strength="1" />
  },
  {
    id: 'strength-2',
    label: 'Strength: 2',
    element: <Strength data-slds-strength="2" />
  },
  {
    id: 'strength-3',
    label: 'Strength: 3',
    element: <Strength data-slds-strength="3" />
  },
  {
    id: 'strength-negative-1',
    label: 'Strength: Neg 1',
    element: <Strength data-slds-strength="-1" />
  },
  {
    id: 'strength-negative-2',
    label: 'Strength: Neg 2',
    element: <Strength data-slds-strength="-2" />
  },
  {
    id: 'strength-negative-3',
    label: 'Strength: Neg 3',
    element: <Strength data-slds-strength="-3" />
  },
  {
    id: 'animated',
    label: 'Strength – Animated on load',
    element: <Strength className="slds-is-animated" data-slds-strength="3" />
  },
  {
    id: 'animated-negative',
    label: 'Strength – Animated on load (negative)',
    element: <Strength className="slds-is-animated" data-slds-strength="-3" />
  },
  {
    id: 'paused',
    label: 'Strength – Paused',
    element: (
      <Strength
        className="slds-is-animated slds-is-paused"
        data-slds-strength="3"
      />
    )
  }
];
