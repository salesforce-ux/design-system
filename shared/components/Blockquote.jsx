// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

class Blockquote extends React.Component {
  render() {
    const { type = 'note' } = this.props;
    return (
      // types include: note (default), ally, warning
      <blockquote className={`doc site-blockquote_${type}`}>
        {this.props.header ? (
          <p className="doc lead">{this.props.header}</p>
        ) : null}
        <p className="doc">{this.props.children}</p>
      </blockquote>
    );
  }
}

export default Blockquote;
