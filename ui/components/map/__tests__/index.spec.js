/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import Map from '../';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

/**
 * Variant Snapshots
 */
xit('renders a map component modal', () =>
  matchesMarkupAndStyle(
    <div style={{ height: '900px' }}>
      <Map heading="Address: 1 Market St, San Francisco, CA 94105" hideMap />
      <div className="slds-backdrop slds-backdrop_open" />
    </div>
  ));

xit('renders a map component modal with footer', () =>
  matchesMarkupAndStyle(
    <div style={{ height: '900px' }}>
      <Map heading={"Geo Code: 37°48'08.3\"N 122°15'55.2W"} footer hideMap />
      <div className="slds-backdrop slds-backdrop_open" />
    </div>
  ));

xit('renders a map component modal with coordinates panel', () =>
  matchesMarkupAndStyle(
    <div style={{ height: '900px' }}>
      <Map
        heading="Favorite Solar Companies (2)"
        multipleCoordinates
        footer
        hideMap
      />
      <div className="slds-backdrop slds-backdrop_open" />
    </div>
  ));

xit('renders a map component modal with first coordinate selected', () =>
  matchesMarkupAndStyle(
    <div style={{ height: '900px' }}>
      <Map
        heading="Favorite Solar Companies (2)"
        multipleCoordinates
        selection="0"
        footer
        hideMap
      />
      <div className="slds-backdrop slds-backdrop_open" />
    </div>
  ));

xit('renders a map component modal with second coordinate selected', () =>
  matchesMarkupAndStyle(
    <div style={{ height: '900px' }}>
      <Map
        heading="Favorite Solar Companies (2)"
        multipleCoordinates
        selection="1"
        footer
        hideMap
      />
      <div className="slds-backdrop slds-backdrop_open" />
    </div>
  ));
