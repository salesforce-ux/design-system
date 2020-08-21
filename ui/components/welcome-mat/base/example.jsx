// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { sampleTiles, WelcomeMatContext, exampleDemoStyles } from '../helpers';
import WelcomeMat from '../';
import WelcomeMatContent from '../WelcomeMatContent';
import { Backdrop } from '../../modals/base/example';

const tiles = sampleTiles();
const completedTiles = [
  Object.assign({}, tiles[0], { completed: true }),
  Object.assign({}, tiles[1], { completed: true }),
  ...tiles.slice(2)
];
const doubleTiles = [...completedTiles].concat(tiles.slice(2));

export const Context = WelcomeMatContext;

const defaultComponent = (
  <Backdrop>
    <WelcomeMat />
  </Backdrop>
);

export default defaultComponent;

export let examples = [
  {
    id: 'default',
    label: 'Default (Base)',
    demoStyles: exampleDemoStyles,
    element: defaultComponent
  },
  {
    id: 'with-completed-tiles',
    label: 'With Completed Tiles',
    demoStyles: exampleDemoStyles,
    element: (
      <Backdrop>
        <WelcomeMat tiles={completedTiles} />
      </Backdrop>
    )
  },
  {
    id: 'with-overflowing-tiles',
    label: 'With Overflowing Tiles',
    demoStyles: exampleDemoStyles,
    element: (
      <Backdrop>
        <WelcomeMat tiles={doubleTiles} />
      </Backdrop>
    )
  },
  {
    id: 'with-overflowing-tiles-and-long-description',
    label: 'With Overflowing Tiles and Long Description',
    demoStyles: exampleDemoStyles,
    element: (
      <Backdrop>
        <WelcomeMat
          tiles={doubleTiles}
          content={({ complete, total, labelId }) => (
            <WelcomeMatContent
              complete={complete}
              total={total}
              labelId={labelId}
              description={
                <React.Fragment>
                  <p>
                    Integer nibh libero, pulvinar sed libero et, rhoncus
                    convallis purus. Sed faucibus nibh vel arcu vestibulum, nec
                    commodo sapien tincidunt. In dignissim faucibus ipsum, nec
                    placerat dui pulvinar a mi nec lectus feugiat vel arcu
                    rhoncus convallis, nibh libero.
                  </p>
                  <p>
                    Sed vestibulum dui ac diam suscipit vehicula. Nam vestibulum
                    mi nec lectus feugiat euismod. Phasellus in suscipit est.
                  </p>
                  <p>
                    Morbi facilisis aliquet dapibus. Morbi ac leo viverra,
                    cursus nibh eget, ultrices mauris. Integer pharetra, lorem
                    ac hendrerit vulputate, sem elit luctus metus, sit amet
                    vehicula justo ex at sem.
                  </p>
                </React.Fragment>
              }
            />
          )}
        />
      </Backdrop>
    )
  }
];
