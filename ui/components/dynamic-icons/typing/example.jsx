// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import TypingIcon from './';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default (
  <TypingIcon
    title="User is typing"
    assistiveText="User is typing"
    isAnimated
  />
);

export let states = [
  {
    id: 'paused',
    label: 'Paused',
    element: (
      <TypingIcon
        title="User is typing"
        assistiveText="User is typing"
        isAnimated
        isPaused
      />
    )
  },
  {
    id: 'static',
    label: 'Static',
    element: (
      <TypingIcon title="User is typing" assistiveText="User is typing" />
    )
  }
];
