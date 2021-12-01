// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Trend from './';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default [
  {
    id: 'default',
    label: 'Trend – default',
    element: (
      <Trend
        data-slds-trend="neutral"
        className="slds-is-animated"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  }
];

// States
export let states = [
  {
    id: 'down',
    label: 'Trend - Down',
    element: (
      <Trend
        data-slds-trend="down"
        className="slds-is-animated"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'up',
    label: 'Trend - Up',
    element: (
      <Trend
        data-slds-trend="up"
        className="slds-is-animated"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'static',
    label: 'Trend - Static (no animation)',
    element: (
      <Trend
        data-slds-trend="up"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'paused',
    label: 'Trend - Paused',
    element: (
      <Trend
        data-slds-trend="up"
        className="slds-is-animated slds-is-paused"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  }
];
