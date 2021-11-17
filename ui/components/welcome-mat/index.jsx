// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// local helpers and components
import _ from '../../shared/helpers';
import { Modal, ModalHeader, ModalContent } from '../modals/base/example';

// component helpers and compositional pieces
import { sampleTiles } from './helpers';
import WelcomeMatTile from './WelcomeMatTile';
import WelcomeMatContent from './WelcomeMatContent';

class WelcomeMat extends Component {
  renderTiles(isCompleted) {
    const { tiles, isInfoOnly } = this.props;

    return tiles
      .filter(tile => (tile.completed || false) === isCompleted)
      .map((tile, i) => (
        <WelcomeMatTile
          key={`${_.uniqueId('welcome-mat-')}-${i}`}
          tile={tile}
          isInfoOnly={isInfoOnly}
        />
      ));
  }

  completeTileCount() {
    const { tiles } = this.props;
    return tiles ? tiles.filter(tile => tile.completed === true).length : 0;
  }

  totalTileCount() {
    const { tiles } = this.props;
    return tiles ? tiles.length : 0;
  }

  render() {
    const { content, isInfoOnly, tiles } = this.props;
    const uniqueId = _.uniqueId('welcome-mat-');
    const welcomeMatLabelId = `${uniqueId}-label`;
    const welcomeMatDescripId = `${uniqueId}-content`;
    const welcomeMatClass = classNames('slds-welcome-mat', {
      'slds-welcome-mat_info-only': isInfoOnly,
      'slds-welcome-mat_splash': !tiles
    });
    const welcomeMatInfoClass = classNames('slds-welcome-mat__info', {
      'slds-size_1-of-2': !!tiles,
      'slds-size_1-of-1': !tiles
    });
    const tileContainerClasses = classNames(
      'slds-welcome-mat__tiles slds-size_1-of-2',
      {
        'slds-welcome-mat__tiles_info-only': isInfoOnly
      }
    );

    return (
      <Modal
        className="slds-modal_small"
        aria-labelledby={welcomeMatLabelId}
      >
        <ModalHeader className="slds-modal__header_empty" />
        <ModalContent id={welcomeMatDescripId}>
          <div className={welcomeMatClass}>
            <div className="slds-welcome-mat__content slds-grid">
              <div className={welcomeMatInfoClass}>
                <div className="slds-welcome-mat__info-content">
                  {content({
                    complete: this.completeTileCount(),
                    total: this.totalTileCount(),
                    labelId: welcomeMatLabelId
                  })}
                </div>
              </div>

              {tiles && tiles.length > 0 ? (
                <ul className={tileContainerClasses}>
                  {this.renderTiles(true)}
                  {this.renderTiles(false)}
                </ul>
              ) : null}
            </div>
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
  ),
  content: PropTypes.func.isRequired,
  isInfoOnly: PropTypes.bool
};

WelcomeMat.defaultProps = {
  tiles: sampleTiles(),
  content: ({ complete, total, labelId }) => (
    <WelcomeMatContent complete={complete} total={total} labelId={labelId} />
  )
};

export default WelcomeMat;
