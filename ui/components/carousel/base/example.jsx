// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Carousel from '../';

export const Context = props => (
  <div style={{ width: '480px', maxWidth: '100%', height: '400px' }}>
    {props.children}
  </div>
);

export default <Carousel panelActive="1" />;

export let states = [
  {
    id: 'tab-1-active',
    label: 'Tab 1 Active',
    element: <Carousel panelActive="1" />
  },
  {
    id: 'tab-2-active',
    label: 'Tab 2 Active',
    element: <Carousel panelActive="2" />
  },
  {
    id: 'tab-3-active',
    label: 'Tab 3 active',
    element: <Carousel panelActive="3" />
  },
  {
    id: 'auto-play-enabled',
    label: 'Auto-play enabled',
    element: <Carousel panelActive="1" autoPlay />
  },
  {
    id: 'auto-play-stopped',
    label: 'Auto-play stopped',
    element: <Carousel panelActive="1" autoPlay="stop" />
  }
];
