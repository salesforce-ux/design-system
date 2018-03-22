// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from '../../shared/helpers';

// component imports
import { Modal, ModalHeader, ModalContent } from '../modals/base/example';
import WelcomeMatTile from './WelcomeMatTile';
import WelcomeMatContent from './WelcomeMatContent';

export const sampleTiles = () => [
  {
    symbol: 'animal_and_nature',
    title: 'Welcome to Salesforce!',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.'
  },
  {
    symbol: 'call',
    title: 'Learn About OpenCTI',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.'
  },
  {
    symbol: 'upload',
    title: 'Power Up the Utility Bar',
    description:
      'Tap into case history or share notes with fellow agents—it all happens on the utility bar.'
  },
  {
    symbol: 'magicwand',
    title: 'Customize your view',
    description:
      "Tailor your cases to your team's workflow with custom list views."
  },
  {
    symbol: 'knowledge_base',
    title: 'Share the Knowledge',
    description:
      "Harness your team's collective know-how with our powerful knowledge base."
  }
];

class WelcomeMat extends Component {
  renderTiles(isCompleted) {
    const { tiles } = this.props;

    return tiles
      .filter(tile => (tile.completed || false) === isCompleted)
      .map((tile, i) => <WelcomeMatTile key={i} tile={tile} />);
  }

  completeTileCount() {
    return this.props.tiles.filter(tile => tile.completed === true).length;
  }

  totalTileCount() {
    return this.props.tiles.length;
  }

  render() {
    const { content } = this.props;
    const uniqueId = _.uniqueId('welcome-mat-');
    const welcomeMatLabelId = `${uniqueId}-label`;
    const welcomeMatDescipId = `${uniqueId}-content`;

    return (
      <Modal
        className="slds-welcome-mat"
        aria-labelledby={welcomeMatLabelId}
        aria-describedby={welcomeMatDescipId}
      >
        <ModalHeader className="slds-modal__header_empty" />
        <ModalContent
          className="slds-welcome-mat__content slds-grid"
          aria-describedby={welcomeMatDescipId}
        >
          <div className="slds-welcome-mat__info slds-size_1-of-2">
            <div className="slds-welcome-mat__info-content">
              {content({
                complete: this.completeTileCount(),
                total: this.totalTileCount(),
                labelId: welcomeMatLabelId
              })}
            </div>
          </div>

          <div className="slds-welcome-mat__tiles slds-size_1-of-2 slds-p-around_medium">
            {this.renderTiles(true)}
            {this.renderTiles(false)}
          </div>
        </ModalContent>
      </Modal>
    );
  }
}

WelcomeMat.propTypes = {
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool
    })
  ).isRequired,
  content: PropTypes.func.isRequired
};

WelcomeMat.defaultProps = {
  tiles: sampleTiles(),
  content: ({ complete, total, labelId }) => (
    <WelcomeMatContent complete={complete} total={total} labelId={labelId} />
  )
};

export default WelcomeMat;
