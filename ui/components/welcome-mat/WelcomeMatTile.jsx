// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { UtilityIcon } from '../icons/base/example';
import { ActionIcon } from '../icons/action/example';

class WelcomeMatTile extends React.Component {
  render() {
    const { tile, isInfoOnly } = this.props;
    const completed = tile.completed;
    const className = classNames('slds-welcome-mat__tile', {
      'slds-welcome-mat__tile_complete': completed,
      'slds-welcome-mat__tile_info-only': isInfoOnly
    });

    const renderMediaObject = () => (
      <Fragment>
        <div
          className={classNames(
            'slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center'
          )}
        >
          <div className="slds-welcome-mat__tile-figure">
            <div className="slds-welcome-mat__tile-icon-container">
              <UtilityIcon
                className="slds-icon-text-default"
                symbol={tile.symbol}
                title={false}
                assistiveText={false}
              />
              {!isInfoOnly && (
                <ActionIcon
                  title="Completed"
                  assistiveText="Completed"
                  className="slds-welcome-mat__icon-check"
                  symbol="check"
                />
              )}
            </div>
          </div>
        </div>
        <div className="slds-media__body">
          <div className="slds-welcome-mat__tile-body">
            <h3 className="slds-welcome-mat__tile-title">{tile.title}</h3>
            <p className="slds-welcome-mat__tile-description">
              {tile.description}
            </p>
          </div>
        </div>
      </Fragment>
    );

    return (
      <li className={className}>
        {isInfoOnly ? (
          <div className="slds-media">{renderMediaObject()}</div>
        ) : (
          <a
            href="#"
            className="slds-box slds-box_link slds-media"
            onClick={e => e.preventDefault()}
          >
            {renderMediaObject()}
          </a>
        )}
      </li>
    );
  }
}

WelcomeMatTile.propTypes = {
  tile: PropTypes.object.isRequired
};

WelcomeMatTile.defaultProps = {
  tile: {
    symbol: 'animal_and_nature',
    title: 'Welcome to Salesforce!',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
    completed: false
  }
};

export default WelcomeMatTile;
