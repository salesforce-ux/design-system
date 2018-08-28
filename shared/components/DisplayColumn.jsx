// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

class DisplayColumn extends React.Component {
  render() {
    const { children, columnCount } = this.props;
    return (
      <div
        className={`slds-col slds-size_1-of-1 slds-large-size_1-of-${columnCount}`}
      >
        {children}
      </div>
    );
  }
}

DisplayColumn.propTypes = {
  columnCount: PropTypes.number
};

DisplayColumn.defaultProps = {
  columnCount: 2
};

export default DisplayColumn;
