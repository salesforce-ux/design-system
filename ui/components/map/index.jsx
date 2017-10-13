// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import { Avatar } from '../avatar/base/example';
import ButtonIcon from '../button-icons/';
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
const CoordinatesList = props => (
  <div className="slds-coordinates slds-size_small slds-medium-size_medium">
    <div className="slds-coordinates__header">
      <h2 className="slds-coordinates__title">{props.heading}</h2>
    </div>
    <ul className="slds-coordinates__list">
      {data.map((item, key) => (
        <li className="slds-coordinates__item" key={key}>
          <span className="slds-assistive-text" aria-live="polite">
            {props.selection == key
              ? item.title + ' is currently selected'
              : null}
          </span>
          <Coordinate
            title={item.title}
            address={item.address}
            selected={props.selection == key}
          />
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Coordinate Item Sub Component
 */
const Coordinate = props => (
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
const MapFooter = props => (
  <ModalFooter>
    <button className="slds-button slds-button_brand">
      Open in Google Maps
    </button>
  </ModalFooter>
);

class Map extends Component {
  render() {
    return (
      <Modal
        className="slds-modal_medium"
        aria-labelledby={modalHeadingId}
        aria-describedby={modalContentId}
      >
        <ModalHeader>
          <ButtonIcon
            className="slds-modal__close slds-button_icon-inverse"
            iconClassName="slds-button__icon_large"
            symbol="close"
            title="Close"
            assistiveText="Close"
          />
          <h2
            id={modalHeadingId}
            className="slds-text-heading_medium slds-hyphenate"
          >
            {this.props.heading}
          </h2>
        </ModalHeader>
        <ModalContent id={modalContentId}>
          <div
            className={classNames(
              'slds-grid',
              this.props.multipleCoordinates && 'slds-has-coordinates'
            )}
          >
            {this.props.multipleCoordinates && (
              <CoordinatesList
                heading={this.props.heading}
                selection={this.props.selection}
              />
            )}
            <div className="slds-col">
              <div className="slds-map">
                {!this.props.hideMap && (
                  <iframe
                    id="GoogleMapID"
                    title="Google Maps iframe"
                    style={{ border: '0' }}
                    src="https://www.google.com/maps/embed/v1/place?q=1%20market%2C%20san%20francisco&key=AIzaSyDliLquGXGts9S8YtkWVolSQEJdBL1ZuWc"
                  />
                )}
              </div>
            </div>
          </div>
        </ModalContent>
        {this.props.footer && <MapFooter />}
      </Modal>
    );
  }
}

export default Map;
