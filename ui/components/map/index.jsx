// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import { StandardIcon } from '../icons/standard/example';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from '../modals/base/example';
import classNames from 'classnames';
import { data } from './data';

/**
 * Vars
 */
const modalHeadingId = 'modal-heading-id-01';
const modalContentId = 'modal-content-id-01';

/**
 * Coordinates List Sub Component
 */
export const CoordinatesList = props => (
  <div className="slds-coordinates">
    <div className="slds-coordinates__header">
      <h2 className="slds-coordinates__title">{props.heading}</h2>
    </div>
    <ul className="slds-coordinates__list">
      {data.map((item, key) => (
        <li className="slds-coordinates__item" key={key}>
          <span className="slds-assistive-text" aria-live="polite">
            {parseInt(props.selection, 0) === key
              ? item.title + ' is currently selected'
              : null}
          </span>
          <Coordinate
            title={item.title}
            address={item.address}
            selected={parseInt(props.selection, 0) === key}
          />
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Coordinate Item Sub Component
 */
export const Coordinate = props => (
  <button
    className="slds-coordinates__item-action slds-button_reset slds-media"
    aria-pressed={props.selected}
  >
    <span className="slds-media__figure">
      <StandardIcon symbol="account" />
    </span>
    <span className="slds-media__body">
      <span className="slds-text-link">{props.title}</span>
      <span>{props.address}</span>
    </span>
  </button>
);

/**
 * Map Footer Sub Component
 */
const MapFooter = () => (
  <ModalFooter>
    <button className="slds-button slds-button_brand">
      Open in Google Maps
    </button>
  </ModalFooter>
);

/**
 * Map
 */
export const GoogleMap = props => {
  return (
    <div className="slds-map">
      {/*
        For background, this component blueprint and the actual Lightning component differ in markup. The Lightning component consists of nested iframes that load different HTML files. For our purposes, the markup below works but may require some extra partnering if/when CSS changes are requested.

        For any external customers, they can replace this iframe with the map of their choice and are not required to have nested iframes.
      */}
      {!props.hideMap && (
        <iframe
          id="GoogleMapID"
          title="Google Maps iframe"
          src="https://www.google.com/maps/embed/v1/place?q=1%20market%2C%20san%20francisco&key=AIzaSyDliLquGXGts9S8YtkWVolSQEJdBL1ZuWc"
        />
      )}
    </div>
  );
};

export const MapContainer = props => {
  return (
    <div
      className={classNames(
        'slds-grid',
        props.multipleCoordinates && 'slds-has-coordinates'
      )}
    >
      <div className="slds-map_container">
        <GoogleMap hideMap={props.hideMap} />
      </div>
      {props.multipleCoordinates && (
        <CoordinatesList heading={props.heading} selection={props.selection} />
      )}
    </div>
  );
};

class Map extends Component {
  render() {
    const {
      heading,
      multipleCoordinates,
      selection,
      hideMap,
      footer
    } = this.props;
    return (
      <Modal
        className="slds-modal_medium"
        aria-labelledby={modalHeadingId}
      >
        <ModalHeader>
          <h1
            id={modalHeadingId}
            className="slds-text-heading_medium slds-hyphenate"
          >
            {heading}
          </h1>
        </ModalHeader>
        <ModalContent id={modalContentId}>
          <MapContainer
            multipleCoordinates={multipleCoordinates}
            heading={heading}
            selection={selection}
            hideMap={hideMap}
          />
        </ModalContent>
        {footer && <MapFooter />}
      </Modal>
    );
  }
}

export default Map;
