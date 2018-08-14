// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Map, { MapContainer } from '../';

export const Context = props => (
  <div style={{ height: '900px' }}>{props.children}</div>
);

export default (
  <React.Fragment>
    <Map heading="Address: 1 Market St, San Francisco, CA 94105" />
    <div className="slds-backdrop slds-backdrop_open" />
  </React.Fragment>
);

export let examples = [
  {
    id: 'single-coordinate',
    label: 'Single Coordinate - With Footer',
    element: (
      <React.Fragment>
        <Map heading={"Geo Code: 37°48'08.3\"N 122°15'55.2W"} footer />
        <div className="slds-backdrop slds-backdrop_open" />
      </React.Fragment>
    )
  },
  {
    id: 'multiple-coordinates',
    label: 'Multiple Coordinates',
    element: (
      <React.Fragment>
        <Map
          heading="Favorite Solar Companies (2)"
          multipleCoordinates
          footer
        />
        <div className="slds-backdrop slds-backdrop_open" />
      </React.Fragment>
    )
  },
  {
    id: 'standalone',
    label: 'Standalone',
    element: (
      <MapContainer
        heading="Favorite Solar Companies (2)"
        multipleCoordinates
      />
    )
  }
];

export let states = [
  {
    id: 'multiple-coordinates-item-one-selection',
    label: 'First Coordinate Selected',
    element: (
      <React.Fragment>
        <Map
          heading="Favorite Solar Companies (2)"
          multipleCoordinates
          selection="0"
          footer
        />
        <div className="slds-backdrop slds-backdrop_open" />
      </React.Fragment>
    )
  },
  {
    id: 'multiple-coordinates-item-two-selection',
    label: 'Second Coordinate Selected',
    element: (
      <React.Fragment>
        <Map
          heading="Favorite Solar Companies (2)"
          multipleCoordinates
          selection="1"
          footer
        />
        <div className="slds-backdrop slds-backdrop_open" />
      </React.Fragment>
    )
  }
];
