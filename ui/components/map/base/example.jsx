// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Map from '../';

export const Context = props => (
  <div style={{ height: '900px' }}>
    {props.children}
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

export default <Map heading="Address: 1 Market St, San Francisco, CA 94105" />;

export let examples = [
  {
    id: 'single-coordinate',
    label: 'Single Coordinate - With Footer',
    element: <Map heading={"Geo Code: 37°48'08.3\"N 122°15'55.2W"} footer />
  },
  {
    id: 'multiple-coordinates',
    label: 'Multiple Coordinates',
    element: (
      <Map heading="Favorite Solar Companies (2)" multipleCoordinates footer />
    )
  }
];

export let states = [
  {
    id: 'multiple-coordinates-item-one-selection',
    label: 'First Coordinate Selected',
    element: (
      <Map
        heading="Favorite Solar Companies (2)"
        multipleCoordinates
        selection="0"
        footer
      />
    )
  },
  {
    id: 'multiple-coordinates-item-two-selection',
    label: 'Second Coordinate Selected',
    element: (
      <Map
        heading="Favorite Solar Companies (2)"
        multipleCoordinates
        selection="1"
        footer
      />
    )
  }
];
