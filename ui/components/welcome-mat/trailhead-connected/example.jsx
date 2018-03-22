// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import WelcomeMat from '../';
import WelcomeMatContentTrailhead from '../WelcomeMatContentTrailhead';
import WelcomeMatContent from '../WelcomeMatContent';

const completeTiles = [];
WelcomeMat.defaultProps.tiles.forEach(tile => {
  completeTiles.push(Object.assign({}, tile, { completed: true }));
});

export const Context = props => (
  <div className="demo-only" style={{ height: '800px' }}>
    {props.children}
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

export default (
  <WelcomeMat
    content={({ complete, total, labelId }) => (
      <WelcomeMatContentTrailhead
        complete={complete}
        total={total}
        labelId={labelId}
      />
    )}
  />
);

export let examples = [
  {
    id: 'trailhead-complete',
    label: 'Trailhead Complete',
    element: (
      <WelcomeMat
        tiles={completeTiles}
        content={({ complete, total, labelId }) => (
          <WelcomeMatContentTrailhead
            complete={complete}
            total={total}
            labelId={labelId}
          />
        )}
      />
    )
  }
];
