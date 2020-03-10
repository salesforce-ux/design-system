// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

class Blockquote extends React.Component {
  render() {
    const { type } = this.props;
    return (
      // types include: note (default), a11y, warning
      <blockquote className={`doc site-blockquote site-blockquote_${type}`}>
        {this.props.header ? (
          <h4 className="lead">{this.props.header}</h4>
        ) : null}
        <div className="doc">{this.props.children}</div>
      </blockquote>
    );
  }
}

Blockquote.propTypes = {
  type: PropTypes.oneOf(['note', 'a11y', 'warning']),
  header: PropTypes.string,
  children: PropTypes.node
};

Blockquote.defaultProps = {
  type: 'note'
};

export default Blockquote;
