// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { VisualPickerMediaObject } from '../visual-picker/link/example';
import { UtilityIcon } from '../icons/base/example';
import { ActionIcon } from '../icons/action/example';

class WelcomeMatTile extends React.Component {
  render() {
    const { tile } = this.props;
    const completed = tile.completed;
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
              title={false}
              assistiveText={false}
            />
            <ActionIcon
              title="Completed"
              assistiveText="Completed"
              className="slds-welcome-mat__icon-check"
              symbol="check"
            />
          </div>
        }
      >
        <h3 className="slds-welcome-mat__tile-title">{tile.title}</h3>
        <p className="slds-welcome-mat__tile-description">{tile.description}</p>
      </VisualPickerMediaObject>
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
