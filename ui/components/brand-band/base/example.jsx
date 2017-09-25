// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const Context = props =>
  <div style={{ minHeight: '20rem', backgroundColor: '#AFC5DE' }}>
    {props.children}
  </div>;

export default (
  <div className="slds-brand-band" />
);

export let examples = [
  {
    id: 'standalone-small',
    label: 'Standalone - Size small',
    element: <div className="slds-brand-band slds-brand-band_small" />
  },
  {
    id: 'standalone-medium',
    label: 'Standalone - Size medium',
    element: <div className="slds-brand-band slds-brand-band_medium" />
  },
  {
    id: 'standalone-large',
    label: 'Standalone - Size large',
    element: <div className="slds-brand-band slds-brand-band_large" />
  },
  {
    id: 'standalone-full',
    label: 'Standalone - Size Full',
    element: <div className="slds-brand-band slds-brand-band_full" />
  }
];
