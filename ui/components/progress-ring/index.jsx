// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';

class ProgressRing extends Component {

  getCoordinatesForPercent(percent) {
    const pct = percent / 100;
    const x = Math.cos(2 * Math.PI * pct);
    const y = Math.sin(2 * Math.PI * pct);

    return { x, y };
  }

  render() {
    const { percent } = this.props;
    const { x, y } = this.getCoordinatesForPercent(percent);
    const isLong = (percent > 50) ? 1 : 0;

    let stateClass = percent < 50 ? 'slds-progress-ring_warning' : null;
    if (percent === 0) stateClass = 'slds-progress-ring_expired';
    if (percent === 100) stateClass = 'slds-progress-ring_complete';

    return (
      <div className={classNames('slds-progress-ring', stateClass)}>
        <div className="slds-progress-ring__content">
          {this.props.children}
        </div>

        <svg className="slds-progress-ring__progress" viewBox="-1 -1 2 2">
          <path
            className="slds-progress-ring__path"
            id="slds-progress-ring-path"
            d={`M 1 0 A 1 1 0 ${isLong} 1 ${x} ${y} L 0 0`}
          />
        </svg>
      </div>
    );
  }
};

ProgressRing.propTypes = {
  percent: React.PropTypes.number
};

ProgressRing.defaultProps = {
  percent: 55
};

export default ProgressRing;
