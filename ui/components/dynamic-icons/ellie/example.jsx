// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Ellie from './';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default (
  <Ellie
    className="slds-is-animated"
    title="Description of the icon"
    assistiveText="Text alternative"
  />
);

export let states = [
  {
    id: 'paused',
    label: 'Paused',
    element: (
      <Ellie
        className="slds-is-animated slds-is-paused"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'static',
    label: 'Static (no animation)',
    element: (
      <Ellie title="Description of the icon" assistiveText="Text alternative" />
    )
  }
];
