// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

export const ButtonIconStateful = props => (
  <ButtonIcon
    aria-pressed={props['aria-pressed']}
    assistiveText={props.assistiveText}
    selected={props.selected}
    symbol={props.symbol}
    theme={props.theme}
    title={props.title}
  />
);

/**
 * Default
 */
export default (
  <ButtonIconStateful
    aria-pressed="false"
    assistiveText="Like"
    symbol="like"
    theme="neutral"
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
      <ButtonIconStateful
        aria-pressed="true"
        assistiveText="Like"
        selected
        symbol="like"
        theme="neutral"
        title="Like"
      />
    )
  }
];
