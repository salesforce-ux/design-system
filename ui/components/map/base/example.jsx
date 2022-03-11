// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Map, { MapContainer } from '../';

export const Context = props => (
  <div className="demo-only demo-only_viewport" style={{ height: '660px' }}>
    {props.children}
  </div>
);

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <MapContainer
        heading="Salesforce locations in United States (9)"
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
      <MapContainer
        heading="Salesforce locations in United States (9)"
        multipleCoordinates
        selection="0"
      />
    )
  },
  {
    id: 'multiple-coordinates-item-two-selection',
    label: 'Second Coordinate Selected',
    element: (
      <MapContainer
        heading="Salesforce locations in United States (9)"
        multipleCoordinates
        selection="1"
      />
    )
  }
];

export let examples = [
  {
    id: 'single-coordinate',
    label: 'In Modal - Single Coordinate - With Footer',
    element: (
      <React.Fragment>
        <Map heading={"Geo Code: 37°48'08.3\"N 122°15'55.2W"} footer />
        <div className="slds-backdrop slds-backdrop_open" role="presentation" />
      </React.Fragment>
    )
  },
  {
    id: 'multiple-coordinates',
    label: 'In Modal - Multiple Coordinates',
    element: (
      <React.Fragment>
        <Map
          heading="Salesforce locations in United States (9)"
          multipleCoordinates
          footer
        />
        <div className="slds-backdrop slds-backdrop_open" role="presentation" />
      </React.Fragment>
    )
  }
];
