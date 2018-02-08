import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { VisualPickerMediaObject } from '../visual-picker/link/example';
import { UtilityIcon } from '../icons/base/example';

class WelcomeMatTile extends Component {
  render() {
    const { tile, completed } = this.props;
    const className = classNames('slds-welcome-mat__tile', {
      'slds-welcome-mat__tile_complete': completed
    });

    return (
      <VisualPickerMediaObject
        symbol={tile.symbol}
        className={className}
        icon={
          <div className="slds-welcome-mat__tile-icon-container">
            <UtilityIcon
              className="slds-icon-text-default"
              symbol={tile.symbol}
            />
            <div className="slds-welcome-mat__icon-check">
              <UtilityIcon className="slds-icon-text-default" symbol="check" />
            </div>
          </div>
        }
      >
        <h4 className="slds-welcome-mat__tile-title">{tile.title}</h4>
        <p className="slds-welcome-mat__tile-description">{tile.description}</p>
      </VisualPickerMediaObject>
    );
  }
}

WelcomeMatTile.propTypes = {
  tile: PropTypes.object.isRequired,
  completed: PropTypes.bool.isRequired
};

WelcomeMatTile.defaultProps = {
  tile: {
    symbol: 'animal_and_nature',
    title: 'Welcome to Salesforce!',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.'
  }
};

export default WelcomeMatTile;
