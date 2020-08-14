// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import WelcomeMat from '../';
import WelcomeMatContentTrailhead from '../WelcomeMatContentTrailhead';
import { WelcomeMatContext, exampleDemoStyles } from '../helpers';
import { Backdrop } from '../../modals/base/example';

const completeTiles = [];
WelcomeMat.defaultProps.tiles.forEach(tile => {
  completeTiles.push(Object.assign({}, tile, { completed: true }));
});

export const Context = WelcomeMatContext;

const defaultComponent = (
  <Backdrop>
    <WelcomeMat
      content={({ complete, total, labelId }) => (
        <WelcomeMatContentTrailhead
          complete={complete}
          total={total}
          labelId={labelId}
        />
      )}
    />
  </Backdrop>
);

export default defaultComponent;

export let examples = [
  {
    id: 'default',
    label: 'Default (Trailhead)',
    demoStyles: exampleDemoStyles,
    element: defaultComponent
  },
  {
    id: 'trailhead-complete',
    label: 'Trailhead Complete',
    demoStyles: exampleDemoStyles,
    element: (
      <Backdrop>
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
      </Backdrop>
    )
  }
];
