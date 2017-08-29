// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const Context = props => (
  <div style={{ width: '200px' }}>{props.children}</div>
);

export let examples = [
  {
    id: 'default',
    label: 'Hyphenate',
    element: (
      <p className="slds-hyphenate">
        A long heading might be supercalifragilisticexpiallidocious.
      </p>
    )
  }
];
