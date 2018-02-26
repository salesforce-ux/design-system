// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';

class CodeView extends React.Component {
  renderChildren() {
    return (
      <div className="docs-codeblock-example">
        <div style={this.props.style}>{this.props.children}</div>
      </div>
    );
  }
  render() {
    const { position, toggleCode } = this.props;
    return (
      <div className="docs-codeblock">
        {position === 'bottom' ? this.renderChildren() : null}
        <CodeBlock language="html" toggleCode={toggleCode}>
          {this.props.children}
        </CodeBlock>
        {position === 'top' ? this.renderChildren() : null}
      </div>
    );
  }
}

CodeView.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
  toggleCode: PropTypes.bool
};

CodeView.defaultProps = {
  position: 'bottom'
};

export default CodeView;
