// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';

class CodeView extends React.Component {
  kids() {
    return (
      <div className="docs-codeblock-example" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
  render() {
    const { position } = this.props;
    return (
      <div className="docs-codeblock">
        {position === 'bottom' ? this.kids() : null}
        <CodeBlock language="html">{this.props.children}</CodeBlock>
        {position === 'top' ? this.kids() : null}
      </div>
    );
  }
}

CodeView.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom'])
};

CodeView.defaultProps = {
  position: 'bottom'
};

export default CodeView;
