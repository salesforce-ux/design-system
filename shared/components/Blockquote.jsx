// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { StyledBlockquote } from '../styles/Blockquote';

class Blockquote extends React.Component {
  render() {
    const { type } = this.props;
    return (
      // types include: note (default), a11y, warning
      <StyledBlockquote className={`doc blockquote_${type}`}>
        {this.props.header ? (
          <p className="doc blockquote__header">{this.props.header}</p>
        ) : null}
        <p className="doc">{this.props.children}</p>
      </StyledBlockquote>
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
