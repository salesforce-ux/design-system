// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import WelcomeMat from '../';

const sampleTiles = WelcomeMat.defaultProps.tiles;

let completedTiles = [
  Object.assign({}, sampleTiles[0], { completed: true }),
  Object.assign({}, sampleTiles[1], { completed: true }),
  ...sampleTiles.slice(2)
];

const doubleTiles = [...completedTiles].concat(sampleTiles.slice(2));

export default <WelcomeMat />;

export const Context = props => (
  <div className="demo-only" style={{ height: '800px' }}>
    {props.children}
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

export let examples = [
  {
    id: 'with-completed-tiles',
    label: 'With Completed Tiles',
    element: <WelcomeMat tiles={completedTiles} />
  },
  {
    id: 'with-overflowing-tiles',
    label: 'With Overflowing Tiles',
    element: <WelcomeMat tiles={doubleTiles} />
  }
];
