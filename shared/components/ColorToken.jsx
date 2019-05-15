// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StyledColorToken } from '../styles/ColorToken';

class Token extends Component {
  render() {
    let tokenValue;
    let { token, tokenSet } = this.props;
    let tokenPath = require(`../../design-tokens/dist/${tokenSet}.json`);
    let set = JSON.stringify(tokenPath);
    JSON.parse(set, (key, value) => {
      if (key === token) {
        tokenValue = value;
      }
    });

    return (
      <StyledColorToken
        className={classNames(
          'slds-media slds-media_center',
          this.props.grid && 'slds-size_1-of-2 slds-large-size_1-of-3'
        )}
      >
        <div className="slds-media__figure">
          {tokenValue && (
            <div className="doc-token__image">
              <div style={{ backgroundColor: tokenValue }} />
            </div>
          )}
        </div>
        <div className="slds-media__body">
          <p>
            <strong>Name: </strong>
            <div title={token} className="slds-truncate">
              {token}
            </div>
          </p>
          <p>
            <strong>Value: </strong>
            <span title={tokenValue}>{tokenValue}</span>
          </p>
        </div>
      </StyledColorToken>
    );
  }
}

Token.propTypes = {
  token: PropTypes.string,
  tokenSet: PropTypes.string,
  grid: PropTypes.bool
};

Token.defaultProps = {
  tokenSet: 'ui-force'
};

export default Token;
