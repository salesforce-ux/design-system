// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import _ from '../helpers';
import React from 'react';
import PropTypes from 'prop-types';

class Truncate extends React.Component {
  // TODO: Remove span
  render() {
    const { children, amount } = this.props;
    return (
      <span title={children}>
        {amount ? _.truncate(children, amount) : children}
      </span>
    );
  }
}

Truncate.propTypes = { truncate: PropTypes.number };

export default Truncate;
