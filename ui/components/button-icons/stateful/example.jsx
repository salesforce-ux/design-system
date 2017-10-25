// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

/**
 * Default
 */
export default (
  <ButtonIcon
    theme="neutral"
    aria-pressed="false"
    symbol="like"
    assistiveText="Like"
    title="Like"
  />
);

/**
 * States
 */
export let states = [
  {
    id: 'button-icon-stateful-selected',
    label: 'Selected',
    element: (
      <ButtonIcon
        theme="neutral"
        aria-pressed="true"
        selected
        symbol="like"
        assistiveText="Like"
        title="Like"
      />
    )
  }
];
